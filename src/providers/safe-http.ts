import { Injectable } from '@angular/core';
import { Http, Request, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Logger } from './logger/logger';
import { NetworkService } from './network.service';

@Injectable()
export class SafeHttp {

  constructor(public http: Http, public networkService: NetworkService, public logger: Logger) { ; }

  private onCatch(error: any): Observable<any> {
    this.logger.handleError(error);
    return Observable.throw(error);
  }

  public request(url: string | Request, options?: RequestOptionsArgs): any {
    if (this.networkService.noConnection()) {
      this.networkService.showNetworkAlert();
    } else {
      return this.http.request(url, options)
        .catch(this.onCatch);
    }
  }

  public get(url: string, options?: RequestOptionsArgs): any {
    if (this.networkService.noConnection()) {
      this.networkService.showNetworkAlert();
    } else {
      return this.http.get(url, options)
        .catch(this.onCatch);
    }
  }

  public post(url: string, body: any, options?: RequestOptionsArgs): any {
    if (this.networkService.noConnection()) {
      this.networkService.showNetworkAlert();
    } else {
      return this.http.post(url, body, options)
        .catch(this.onCatch);
    }
  }

  public put(url: string, body: any, options?: RequestOptionsArgs): any {
    if (this.networkService.noConnection()) {
      this.networkService.showNetworkAlert();
    } else {
      return this.http.put(url, body, options)
        .catch(this.onCatch);
    }
  }

  public delete(url: string, options?: RequestOptionsArgs): any {
    if (this.networkService.noConnection()) {
      this.networkService.showNetworkAlert();
    } else {
      return this.http.delete(url, options)
        .catch(this.onCatch);
    }
  }

  public patch(url: string, body: string, options?: RequestOptionsArgs): any {
    if (this.networkService.noConnection()) {
      this.networkService.showNetworkAlert();
    } else {
      return this.http.patch(url, body, options)
        .catch(this.onCatch);
    }
  }

  public head(url: string, options?: RequestOptionsArgs): any {
    if (this.networkService.noConnection()) {
      this.networkService.showNetworkAlert();
    } else {
      return this.http.head(url, options)
        .catch(this.onCatch);
    }
  }
}
