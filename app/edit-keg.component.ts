import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './Keg.model';

@Component({
  selector: 'edit-Keg',
  template: `
    <div>
        <div *ngIf="childSelectedKeg">
          <h3>{{childSelectedKeg.name}}</h3>
          <p>Keg Complete? {{childSelectedKeg.done}}</p>
          <hr>
          <h3>Edit Keg</h3>
          <label>Enter Keg Name:</label>
          <input [(ngModel)]="childSelectedKeg.name">
          <label>Enter Keg Priority (1-3):</label><br>
          <input type="radio" [(ngModel)]="childSelectedKeg.priority" [value]="1">1 (Low Priority)<br>
          <input type="radio" [(ngModel)]="childSelectedKeg.priority" [value]="2">2 (Medium Priority)<br>
          <input type="radio" [(ngModel)]="childSelectedKeg.priority" [value]="3">3 (High Priority)
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
