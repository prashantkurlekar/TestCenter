import { Injectable } from '@angular/core';
import { Http, Request, Response, RequestOptionsArgs } from '@angular/http';
import { NavController } from 'ionic-angular';
import { Network, Diagnostic } from 'ionic-native';

@Injectable()
export class NetworkService {

  public networkAlert: any;

  constructor(private nav: NavController, ) { }

  public noConnection(): any {
    return (Network.connection === 'none');
  }

  public showNetworkAlert(): void {
    // let networkAlert: any = Alert.create({
    //   title: 'No Internet Connection',
    //   message: 'Please check your internet connection.',
    //   buttons: [
    //     {
    //       text: 'Cancel',
    //       handler: () => { }
    //     }, {
    //       text: 'Open Settings',
    //       handler: () => {
    //         networkAlert.dismiss().then(() => {
    //           this.showSettings();
    //         })
    //       },
    //     },
    //   ],
    // });
    // this.nav.present(networkAlert);
  }

  private showSettings(): void {
    Diagnostic.switchToWifiSettings();
  }

}

@Injectable()
export class SafeHttp {

  constructor(private http: Http, private networkService: NetworkService) { }

  public request(url: string | Request, options?: RequestOptionsArgs): any {
    if (this.networkService.noConnection()) {
      this.networkService.showNetworkAlert();
    } else {
      return this.http.request(url, options);
    }
  }

  public get(url: string, options?: RequestOptionsArgs): any {
    if (this.networkService.noConnection()) {
      this.networkService.showNetworkAlert();
    } else {
      return this.http.get(url, options);
    }
  }

  public post(url: string, body: string, options?: RequestOptionsArgs): any {
    if (this.networkService.noConnection()) {
      this.networkService.showNetworkAlert();
    } else {
      return this.http.post(url, body, options);
    }
  }

  public put(url: string, body: string, options?: RequestOptionsArgs): any {
    if (this.networkService.noConnection()) {
      this.networkService.showNetworkAlert();
    } else {
      return this.http.put(url, body, options);
    }
  }

  public delete(url: string, options?: RequestOptionsArgs): any {
    if (this.networkService.noConnection()) {
      this.networkService.showNetworkAlert();
    } else {
      return this.http.delete(url, options);
    }
  }

  public patch(url: string, body: string, options?: RequestOptionsArgs): any {
    if (this.networkService.noConnection()) {
      this.networkService.showNetworkAlert();
    } else {
      return this.http.patch(url, body, options);
    }
  }

  public head(url: string, options?: RequestOptionsArgs): any {
    if (this.networkService.noConnection()) {
      this.networkService.showNetworkAlert();
    } else {
      return this.http.head(url, options);
    }
  }
}