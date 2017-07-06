import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="allKegs">All Kegs</option>
      <option value="emptyKegs">Empty Kegs</option>
      <option value="changeMeKegs">Kegs that need changing</option>
      <option value="fullKegs" selected="selected">Full Kegs</option>
    </select>
    <ul>
      <li (click)="isEmpty(currentKeg)" *ngFor="let currentKeg of childKegList | emptiness:filterByPints">{{currentKeg.name}} {{currentKeg.pints}}
      <label>Pour Pints:</label><br>
      <button (click)="pourPints(currentKeg)">Pour Me One, Scotty!</button>
        <button (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button>
      </li>
    </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() pourButtonClickedSender = new EventEmitter();

  editButtonHasBeenClicked(KegToEdit: Keg) {
    this.clickSender.emit(KegToEdit);
  }

  isEmpty(clickedKeg: Keg) {
    if(clickedKeg.pints == 0) {
      console.log("This Keg is empty! Please change it now!");
    } else if(clickedKeg.pints <= 10) {
      console.log("This Keg is almost empty! Please change it now!");
    } else {
    console.log("This Keg is still full.");
    }
  }

  emptinessColor(currentKeg){
    if (currentKeg.pints == 0){
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

  // pourButtonClicked() {
  //   this.pourButtonClickedSender.emit();
  // }

  pourPints(currentKeg) {
    currentKeg.pints = currentKeg.pints -1;
  }

  filterByPints: string = "pintsKegs";
}
