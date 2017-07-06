import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "emptiness",
  pure: false
})

export class EmptinessPipe implements PipeTransform {

  transform(input: Keg[], pints) {
    var output: Keg[] = [];
    if(pints === "fullKegs") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].pints >= 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else if(pints === "changeMeKegs") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].pints <= 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (pints === "emptyKegs") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].pints === 0) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
