import { Headers, RequestOptions } from '@angular/http';

export class Utils {
  public static requestOptions(): RequestOptions {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return new RequestOptions({ headers: headers, withCredentials: true });
  }

  public static onFormValueChanged(form: any, formErrors: any, validationMessages: any): void {
    console.debug(`Utils.onFormValueChanged`);
    if (!form) return;
    for (const field in formErrors) {
      formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = validationMessages[field];
        for (const key in control.errors) {
          formErrors[field] += messages[key] + ' ';
        }
      }
    }
    console.debug(formErrors);
  }

  public static newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      // tslint:disable-next-line
      let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
