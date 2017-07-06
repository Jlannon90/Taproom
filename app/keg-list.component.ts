import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'Keg-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="allKegs">All Kegs</option>
      <option value="emptyKegs">Empty Kegs</option>
      <option value="changeMeKegs">Kegs that need changing</option>
      <option value="fullKegs" selected="selected">Full Kegs</option>
    </select>
    <ul>
      <li (click)="isEmpty(currentKeg)" *ngFor="let currentKeg of childKegList | pints:filterByPints">{{currentKeg.name}} {{currentKeg.pints}}
        <input *ngIf="currentKeg.pints === 0" type="checkbox" checked (click)=""/>
        <input *ngIf="currentKeg.pints <== 10" type="checkbox" (click)=""/>
        <input *ngIf="currentKeg.pints > 10" type="checkbox" (click)=""/>
        <button (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button>
      </li>
    </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(KegToEdit: Keg) {
    this.clickSender.emit(KegToEdit);
  }

  isEmpty(clickedKeg: Keg) {
    if(clickedKeg.pints === 0) {
      alert("This Keg is empty! Please change it now!");
    } else if(clickedKeg.pints <= 10) {
      alert("This Keg is almost empty! Please change it now!");
    } else {
    alert("This Keg is still full.");
    }
  }

  emptinessColor(currentKeg){
    if (currentKeg.pints === 0){
      return "bg-danger";
    } else if (currentKeg.pints <= 10) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }

  onChange(optionFromMenu) {
    this.filterByPints = optionFromMenu;
  }

  pourPints(clickedKeg: Keg, setPints: number) {
     clickedKeg.pints = setPints -5;
   }

  filterByPints: string = "pintsKegs";
}
