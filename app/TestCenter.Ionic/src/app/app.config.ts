export class AppConfig {
  public static production: boolean = true;
  public static server: string = AppConfig.production ? 'http://localhost:5000/api/' : '';
}
