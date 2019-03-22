export interface Adapter<T> {
  adapt(input: any): T;
}
