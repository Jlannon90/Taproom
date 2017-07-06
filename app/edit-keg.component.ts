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
          <label>Enter Keg Pints (between 0 and 124):</label><br>
          <input type="radio" [(ngModel)]="childSelectedKeg.pints" [value]="full">Full Keg<br>
          <input type="radio" [(ngModel)]="childSelectedKeg.pints" [value]="changeMe">Dwindling Keg<br>
          <input type="radio" [(ngModel)]="childSelectedKeg.pints" [value]="empty">Empty Keg
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
