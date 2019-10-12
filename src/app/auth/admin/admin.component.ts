import { Component, OnInit } from '@angular/core';
import { PuppetDataServiceService } from '../../puppet-data-service.service';
import { Puppet } from '../../puppet';
import { Router, Params, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  puppet: Puppet = {
    name: '',
    type: '',
    price: 0,
    imageUrl: '',
    id: ''
  }

  constructor(private PDService: 
    PuppetDataServiceService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
  }

  onSubmit(){
    if(
      this.puppet.name != ''
      && this.puppet.type != ''
      && this.puppet.price != 0
      && this.puppet.imageUrl != ''
      ) {
      this.PDService.addPuppet(this.puppet);
      this.puppet.name = '';
      this.puppet.type = '';
      this.puppet.price = 0;
      this.puppet.imageUrl = '';

    }
  }

}