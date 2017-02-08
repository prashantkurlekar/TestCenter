export class AppConfig {
  public static prod: boolean = false;
  public static serverAddress: string = AppConfig.prod ? 'http://localhost:5000/api' : '/serverapi';

  public static apiAssessment: string = `${AppConfig.serverAddress}/assessment`;
}
