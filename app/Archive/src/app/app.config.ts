export class AppConfig {
  public static production: boolean = false;
  public static server: string = AppConfig.production ? 'http://localhost:5000/api/' : '';
}
