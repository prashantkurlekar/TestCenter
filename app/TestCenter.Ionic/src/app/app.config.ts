export class AppConfig {
  public static useProductionEnvironment: boolean = false;
  public static apiEndpoint: string = AppConfig.useProductionEnvironment ? 'http://localhost:5000/api' : '/serverapi';
  public static apiAssessment: string = `${AppConfig.apiEndpoint}/assessment`;
}
