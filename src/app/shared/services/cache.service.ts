import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {tap} from "rxjs/operators";
import {RequestCacheService} from "./request-cache.service";


function sendRequest(
  req: HttpRequest<any>,
  next: HttpHandler,
  cache: RequestCacheService): Observable<HttpEvent<any>> {

  // No headers allowed in npm search request
  const noHeaderReq = req.clone({headers: new HttpHeaders()});

  return next.handle(noHeaderReq).pipe(
    tap(event => {
      // There may be other events besides the response.
      if (event instanceof HttpResponse) {
        cache.set(req, event); // Update the cache.
      }
    })
  );
}


@Injectable()
export class CachingInterceptor implements HttpInterceptor {
  constructor(private cache: RequestCacheService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // continue if not cachable.
    if (req.method.toLowerCase() !== 'GET') {
      return next.handle(req);
    }

    const cachedResponse = this.cache.get(req);
    return cachedResponse ?
      of(cachedResponse) : sendRequest(req, next, this.cache);
  }
}
