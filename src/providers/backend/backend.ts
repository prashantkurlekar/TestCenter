export abstract class BackendProvider {
  public abstract testPost(value: any): Promise<any>;
}
