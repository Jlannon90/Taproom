import { Component } from '@angular/core';
import { Keg } from './Keg.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Highway to the Kegzone for {{month}}/{{day}}/{{year}}</h1>
      <h3>{{currentFocus}}</h3>
      <Keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></Keg-list>
      <hr>
      <edit-Keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-Keg>
      <new-Keg (newKegSender)="addKeg($event)"></new-Keg>
    </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Tap Room Two-Day Assignment';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedKeg = null;

  masterKegList: Keg[] = [
    new Keg('Total Rekolsch', 'Stormbreaker Brewing', 'Kolsch', 4.0, 5, 124)
  ];

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }

}
