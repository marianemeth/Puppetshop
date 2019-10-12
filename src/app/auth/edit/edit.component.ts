import { Component, OnInit } from '@angular/core';
import { PuppetDataServiceService } from '../../puppet-data-service.service';
import { Puppet } from '../../puppet';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  exampleForm: FormGroup;
  puppet: any;
  

  // puppet: Observable<Puppet>;

  validation_messages = {
    'name': [
      { type: 'required', message: 'Terméknév megadása kötelező!' }
    ],
    'type': [
      { type: 'required', message: 'Terméknév megadása kötelező!' }
    ],
    'price': [
      { type: 'required', message: 'A termékár megadása kötelező!' },
    ],
    'imageUrl': [
      { type: 'required', message: 'Termékkép csatolása kötelező!' },
    ]

  };

  // puppet: Puppet = {
  //   name: '',
  //   type: '',
  //   price: 0,
  //   imageUrl: '',
  //   id: ''

  constructor(
    private PDService: PuppetDataServiceService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    public fb: FormBuilder
  ) { }

 
 ngOnInit() {
 this.route.data.subscribe(routeData => {
   let data = routeData['data'];
   if (data) {
     this.puppet = data.payload.data();
     this.puppet.id = data.payload.id;
     this.createForm();

   }
 })
}

 createForm() {
   this.exampleForm = this.fb.group({
     name: [this.puppet.name, Validators.required],
     type: [this.puppet.type, Validators.required],
     price: [this.puppet.price, Validators.required],
     imageUrl: [this.puppet.imageUrl, Validators.required]
   });
 }

      
  onSubmit(value){
    this.PDService.updatePuppet(this.puppet.id, value)
    .then(
      res => {
        this.router.navigate(['/list']);
      }
    )
  }

  delete() {
    this.PDService.deletePuppet(this.puppet.id)
    .then(
      res => {
        this.router.navigate(['/list']);
      }
    )
  }

}
  