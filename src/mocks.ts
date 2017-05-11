export class ConfigMock {

  public get(): any {
    return '';
  }

  public getBoolean(): boolean {
    return true;
  }

  public getNumber(): number {
    return 1;
  }
}

export class FormMock {
  public register(): any {
    return true;
  }
}

export class NavControllerStub {

  public pop(): any {
    return new Promise((resolve: Function): void => {
      resolve();
    });
  }

  public push(): any {
    return new Promise((resolve: Function): void => {
      resolve();
    });
  }

  public getActive(): any {
    return {
      'instance': {
        'model': 'something',
      },
    };
  }

  public setRoot(): any {
    return true;
  }
}

export class PlatformMock {
  public ready(): any {
    return new Promise((resolve: Function) => {
      resolve();
    });
  }

  public is(): boolean {
    return true;
  }
}

export class MenuMock {
  public close(): any {
    return new Promise((resolve: Function) => {
      resolve();
    });
  }
}

export class LoadingControllerMock {
  public create(): any {
    return {
      present: () => { return; },
      dismiss: () => { return; },
    };
  }
}

export class AlertControllerMock {
  public create(): any {
    return {
      present: () => { return; },
      dismiss: () => { return; },
    };
  }
}

export class NavParamsMock {
  public get(): any {
    return {};
  }
}

export class StorageMock {

  public get(key: string): Promise<{}> {
    let returnValue: any;

    switch (key) {
      case 'MEMBERSHIP_NUMBER':
        returnValue = '5';
        break;
      case 'OTHER_SERVICE_PROVIDERS':
        returnValue = [
          { 'OtherServiceTypeId': 1, 'Description': 'Ambulance', 'ServiceType': 'AMBULANCE ', 'ItemGroup': 'AM        ', 'DefaultProviderNumberId': 'AMB-EC    ' },
          { 'OtherServiceTypeId': 2, 'Description': 'Artificial Aids', 'ServiceType': 'ARTIFAIDS ', 'ItemGroup': 'PT        ', 'DefaultProviderNumberId': 'AA0001    ' },
          { 'OtherServiceTypeId': 6, 'Description': 'Audiology', 'ServiceType': 'ANCILLARY ', 'ItemGroup': 'HA        ', 'DefaultProviderNumberId': 'AUDIO-EC  ' },
          { 'OtherServiceTypeId': 7, 'Description': 'Blood Glucose Extras', 'ServiceType': 'ANCILLARY ', 'ItemGroup': 'O1        ', 'DefaultProviderNumberId': 'BG0001    ' },
          { 'OtherServiceTypeId': 8, 'Description': 'Health Care Appliances', 'ServiceType': 'HEALTHAPPL', 'ItemGroup': 'PT        ', 'DefaultProviderNumberId': 'HC0001    ' },
          { 'OtherServiceTypeId': 9, 'Description': 'Health Management/Gym/Pilates/etc', 'ServiceType': 'LIFESTYLE ', 'ItemGroup': 'FC        ', 'DefaultProviderNumberId': 'KF0001    ' },
          { 'OtherServiceTypeId': 10, 'Description': 'Home Nursing', 'ServiceType': 'ANCILLARY ', 'ItemGroup': 'CN        ', 'DefaultProviderNumberId': 'HOMEN-EC  ' },
          { 'OtherServiceTypeId': 11, 'Description': 'Hypnotherapy', 'ServiceType': 'ANCILLARY ', 'ItemGroup': 'HY        ', 'DefaultProviderNumberId': 'HYPNO-EC  ' },
          { 'OtherServiceTypeId': 12, 'Description': 'Maternity Services', 'ServiceType': 'ANCILLARY ', 'ItemGroup': 'MS        ', 'DefaultProviderNumberId': 'RN0002    ' },
          { 'OtherServiceTypeId': 13, 'Description': 'Orthoptics (Eye Therapy)', 'ServiceType': 'ANCILLARY ', 'ItemGroup': 'OR        ', 'DefaultProviderNumberId': 'ORTHOP-EC ' },
          { 'OtherServiceTypeId': 14, 'Description': 'Pharmaceutical', 'ServiceType': 'PHARMA    ', 'ItemGroup': 'PA        ', 'DefaultProviderNumberId': 'CHEMIST   ' },
          { 'OtherServiceTypeId': 15, 'Description': 'Travel & Accommodation', 'ServiceType': 'ANCILLARY ', 'ItemGroup': 'O3        ', 'DefaultProviderNumberId': '1T        ' }];
        break;
      case 'SERVICE_PROVIDER_TYPES':
        returnValue = [{}, {}];
        break;
      case 'CLAIM_RECEIPTS':
        returnValue = [{}, {}];
        break;
      case 'HAS_LOGGED_IN':
        returnValue = true;
        break;
      case '1.1.1':
        returnValue = true;
        break;
      default:
        returnValue = 'SHOULD NOT BE HERE!';
    }

    return new Promise((resolve: Function) => {
      resolve(returnValue);
    });
  }

  public set(key: string, value: string): Promise<{}> {
    return new Promise((resolve: Function) => {
      resolve({ key: key, value: value });
    });
  }

  public remove(key: string): Promise<{}> {
    return new Promise((resolve: Function) => {
      resolve({ key: key });
    });
  }

}

export const touchIDMock = {
  // tslint:disable:no-empty
  isAvailable: () => { },
  verifyFingerprint: () => { },
  // tslint:enable:no-empty
};

export function spyOnConsole() {
  spyOn(console, 'log').and.stub();
  spyOn(console, 'error').and.stub();
  spyOn(console, 'info').and.stub();
  spyOn(console, 'warn').and.stub();
  spyOn(console, 'debug').and.stub();
}

export class NetworkServiceMock {
  public noConnection(): boolean {
    return true;
  }

  public showNetworkAlert(): void { ; }
}

export class AppVersionMock {
  public getVersionNumber(): Promise<{}> {
    return Promise.resolve('100');
  }
  public getVersionCode(): Promise<{}> {
    return Promise.resolve('1.0');
  }
}

export const mockMembershipDetails = {
  'Members': [
    {
      '_OtherNames': '',
      'PersonId': 200007341,
      'YesNoList': null,
      'Relationship': 1,
      'RelationShipList': null,
      'FirstName': 'Chai',
      'LastName': 'Walker',
      'DateOfBirth': '1963-07-08T00:00:00',
      'Title': 0,
      'TitleList': null,
      'TerminationDate': null,
      'Gender': 3,
      'JoinDate': null,
      'AgeAtEntry': null,
      'Fullname': 'Chai Walker',
      'MiddleName': '',
      'TerminationCode': null,
    }, {
      '_OtherNames': '',
      'PersonId': 200007803,
      'YesNoList': null,
      'Relationship': 2,
      'RelationShipList': null,
      'FirstName': 'Gregory John',
      'LastName': 'Anderson',
      'DateOfBirth': '1960-05-13T00:00:00',
      'Title': 0,
      'TitleList': null,
      'TerminationDate': null,
      'Gender': 2,
      'JoinDate': null,
      'AgeAtEntry': null,
      'Fullname': 'Gregory John Anderson',
      'MiddleName': '',
      'TerminationCode': null,
    }, {
      '_OtherNames': '',
      'PersonId': 200007805,
      'YesNoList': null,
      'Relationship': 3,
      'RelationShipList': null,
      'FirstName': 'Ethan Curly-John',
      'LastName': 'Anderson',
      'DateOfBirth': '1994-08-05T00:00:00',
      'Title': 0,
      'TitleList': null,
      'TerminationDate': null,
      'Gender': 2,
      'JoinDate': null,
      'AgeAtEntry': null,
      'Fullname': 'Ethan Curly-John Anderson',
      'MiddleName': '',
      'TerminationCode': null,
    }, {
      '_OtherNames': '',
      'PersonId': 200007806,
      'YesNoList': null,
      'Relationship': 3,
      'RelationShipList': null,
      'FirstName': 'Kyle Aden',
      'LastName': 'Anderson',
      'DateOfBirth': '1998-12-16T00:00:00',
      'Title': 0,
      'TitleList': null,
      'TerminationDate': null,
      'Gender': 2,
      'JoinDate': null,
      'AgeAtEntry': null,
      'Fullname': 'Kyle Aden Anderson',
      'MiddleName': '',
      'TerminationCode': null,
    },
  ],
  'Membership': 4,
  'MembershipDescription': 'Family',
  'IsPackageCover': true,
  'CoverIncludesNonStudentDependants': true,
  'PackageCover': 'Prestige (with non-student dependant/s)',
  'HospitalCover': 'CBHS Prestige Hospital (with non-student dependant/s)',
  'ExtrasCover': 'CBHS Prestige Extras (with non-student dependant/s)',
  'Contribution': '$276.27 ',
  'ContributionWithoutRebate': '$373.02 Fortnightly',
  'JoinDate': '2000-04-24T00:00:00',
  'PaidToDate': '2017-03-30T00:00:00',
  'ExtrasId': 34,
  'HospitalProductId': 33,
  'BillingFrequency': 'Fortnightly',
  'CoverState': 2,
  'CoverType': 'F',
  'BillingGroupId': 9,
  'IsActive': 'Active',
  'BillingGroupDesc': '9. Former CBA Staff - Direct Debit',
};
