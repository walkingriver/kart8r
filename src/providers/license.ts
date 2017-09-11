import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import * as _ from 'lodash';
import { License } from "../app/license";


@Injectable()
export class LicenseProvider {
  licenseUrls = {
    'Apache': 'https://opensource.org/licenses/Apache-1.1',
    'Apache-2.0': 'https://opensource.org/licenses/Apache-2.0',
    'BSD': 'https://opensource.org/licenses/BSD-2-Clause',
    'BSD-2-Clause': 'https://opensource.org/licenses/BSD-2-Clause',
    'BSD-3-Clause': 'https://opensource.org/licenses/BSD-3-Clause',
    'ISC': 'https://opensource.org/licenses/ISC',
    'LGPL': 'https://opensource.org/licenses/LGPL-2.1',
    'MIT': 'https://opensource.org/licenses/MIT'
  };

  constructor(private http: Http) { }

  async getLicenses(): Promise<License[]> {
    const res = await this.http.get('assets/licenses.json').toPromise();
    const licenses: License[] = res.json();
    return _(licenses)
      .filter(license => this.licenseUrls[license.licenses])
      .groupBy('repository')
      .map((group, repository) => this.licenseFromGroup(group, repository))
      .value();
  }

  private licenseFromGroup(group: any, repository: string): License {
    const license: License = {
      name: _(group).map('name').uniqBy(x => x).value(),
      description: _(group).map('description').value(),
      licenses: _(group).map('licenses').uniqBy(x => x).join(','),
      licenseUrl: '', // Filled in later
      repository: repository
    };
    license.licenseUrl = this.licenseUrls[license.licenses];
    return license;
  }
}
