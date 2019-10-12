import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { Puppet } from './puppet';

@Injectable({
  providedIn: 'root'
})
export class PuppetDataServiceService {
  puppetsCollection: AngularFirestoreCollection<Puppet>;
  puppets: Observable<Puppet[]>;
  puppetDoc: AngularFirestoreDocument<Puppet>;

  constructor(public afs: AngularFirestore) {

    this.puppetsCollection = this.afs.collection('puppets', ref => ref.orderBy ('name', 'asc'));

  }

  getPuppets(): Observable<Puppet[]>
  {
    return this.afs.collection('puppets').snapshotChanges();
  }

  addPuppet(puppet: Puppet){
    this.puppetsCollection.add(puppet); 
  }

  getPuppet(userKey: string){
    return this.afs.collection('puppets').doc(userKey).snapshotChanges();
  }



  updatePuppet(userKey, value){
    return this.afs.collection('puppets').doc(userKey).set(value);
  }
  
  deletePuppet(userKey){
    return this.afs.collection('puppets').doc(userKey).delete();
  }

}