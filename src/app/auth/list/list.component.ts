import { Component, OnInit } from '@angular/core';
import { PuppetDataServiceService } from '../../puppet-data-service.service';
import { Puppet } from '../../puppet';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  puppets: Puppet[];
  puppet: any;

    

  constructor( 
    public PDService: PuppetDataServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getData();
       }
  
    getData(){
       this.PDService.getPuppets()
      .subscribe(result => {
        this.puppets = result;
        console.log(result);
      })
    }

}
