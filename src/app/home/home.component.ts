import { Component, OnInit, Input } from '@angular/core';
import { PuppetDataServiceService } from '../puppet-data-service.service';
import { Puppet } from '../puppet';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input('puppet') puppet: Puppet;
  puppets: Array<any>;


  constructor(
    private PDService: PuppetDataServiceService,
    private router: Router
  ) { }


 ngOnInit() {
  this.getData();
     }

  getData(){
  this.PDService.getPuppets()
    .subscribe(result => {
      this.puppets = result;
    })
}


}
