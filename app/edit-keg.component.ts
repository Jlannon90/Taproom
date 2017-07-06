import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
    <div>
        <div *ngIf="childSelectedKeg">
          <h3>{{childSelectedKeg.name}}</h3>
          <p>Keg Empty? {{childSelectedKeg.pints}}</p>
          <hr>
          <h3>Edit Keg</h3>
          <label>Enter Keg Name:</label>
          <input [(ngModel)]="childSelectedKeg.name">
          <label>Enter Keg Brand:</label>
          <input [(ngModel)]="childSelectedKeg.brand">
          <label>Enter Keg Flavor:</label>
          <input [(ngModel)]="childSelectedKeg.flavor">
          <label>Enter Keg ABV:</label>
          <input [(ngModel)]="childSelectedKeg.abv">
          <label>Enter Keg Price:</label>
          <input [(ngModel)]="childSelectedKeg.price">
          <button (click)="doneButtonClicked()">Done</button>
        </div>
      </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
