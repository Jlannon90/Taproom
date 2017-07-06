import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
  <h1>New Keg</h1>
   <div>
     <label>Enter Keg Name:</label>
     <input #newName>
   </div>
   <div>
     <label>Enter Keg Brand:</label>
     <input #newBrand>
   </div>
   <div>
     <label>Enter Keg Flavor:</label>
     <input #newFlavor>
   </div>
   <div>
     <label>Enter Beer ABV:</label>
     <input #newABV>
   </div>
   <div>
     <label>Enter Beer Price per Pint:</label>
     <input #newPrice>
   </div>
    <button (click)="submitForm(newName.value, newPriority.value); newName.value='';">Add</button>
   </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, flavor: string, abv: number, price: number, pints: number) {
    var newKegToAdd: Keg = new Keg(name, brand, flavor, abv, price, pints);
    this.newKegSender.emit(newKegToAdd);
  }
}
