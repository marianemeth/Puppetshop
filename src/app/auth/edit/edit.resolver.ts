import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { PuppetDataServiceService } from '../../puppet-data-service.service';
import { Puppet } from '../../puppet';

@Injectable()
export class EditResolver implements Resolve<any> {

  constructor(public PDService: PuppetDataServiceService ) { }

  resolve(route: ActivatedRouteSnapshot,) {

    return new Promise((resolve, reject) => {
      let userKey = route.paramMap.get('id');
      this.PDService.getPuppet(userKey)
      .subscribe(
        data => {
          resolve(data);
        }
      );
    })
  }
}