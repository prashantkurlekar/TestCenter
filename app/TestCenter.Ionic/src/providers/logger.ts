import { Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class Logger {
  constructor() { }

  public log(message: any): void {
    console.log(message);
  }

  public debug(message: any): void {
    console.debug(message);
  }

  public error(message: any): void {
    console.error(message);
  }

  public info(message: any): void {
    console.info(message);
  }

  public handleError(error: Response | any): Promise<any> {
    // In a real world app, we might use a remote logging infrastructure
    // copied from https://angular.io/docs/ts/latest/guide/server-communication.html
    console.log(`handleError`);
    let errorMessage: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      errorMessage = `${error.status} - ${error.statusText || ''} ${body.error || JSON.stringify(body)}`;
    } else {
      errorMessage = error.message ? error.message : error.toString();
    }
    console.error(errorMessage);
    return Promise.reject(error.message || error);
  }
}
