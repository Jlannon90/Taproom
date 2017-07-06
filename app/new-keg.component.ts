import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
  <h1>New Keg</h1>
  <div class="container">
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
    <button (click)="submitForm(newName.value, newBrand.value, newFlavor.value, newABV.value, newPrice.value); newName.value=''; newBrand.value=''; newFlavor.value=''; newABV.value=''; newPrice.value='';">Add</button>
   </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, flavor: string, abv: number, price: number) {
    var newKegToAdd: Keg = new Keg(name, brand, flavor, abv, price);
    this.newKegSender.emit(newKegToAdd);
  }
}
