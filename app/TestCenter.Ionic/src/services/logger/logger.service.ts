import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  
  public static log(message: any): void {
    console.log(message);
  }

  public static error(error: any): void {
    console.error(error);
  }

}
