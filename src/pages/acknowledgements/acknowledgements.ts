import { Component } from '@angular/core';
import { License } from '../../app/license';
import { LicenseProvider } from '../../providers/license';

@Component({
  selector: 'page-acknowledgements',
  templateUrl: 'acknowledgements.html',
})
export class AcknowledgementsPage {
  licenses: License[];

  constructor(private licenseProvider: LicenseProvider) { }

  async ionViewDidLoad() {
    this.licenses = await this.licenseProvider.getLicenses();
  }
}
