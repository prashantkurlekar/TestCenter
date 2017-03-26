import { IonicErrorHandler } from 'ionic-angular';

export class TestCenterErrorHandler extends IonicErrorHandler {
  constructor() {
    super();
  }

  public handleError(error: any): void {
    console.info(`TestCenterErrorHandler`);
    console.info(error);
  }
}
