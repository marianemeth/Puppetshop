import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Puppet } from './puppet';
import 'rxjs/add/operator/take'; 
import 'rxjs/add/operator/map'; 


@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor(private db: AngularFireDatabase) { }

  create() {
    this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }
}
