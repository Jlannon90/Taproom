import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "emptiness",
  pure: false
})

export class EmptinessPipe implements PipeTransform {


  transform(input: Keg[], desiredEmptiness) {
    var output: Keg[] = [];
    if(desiredEmptiness == "emptyKegs") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].pints == 0) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredEmptiness == "changeMeKegs") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].pints <= 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredEmptiness == "fullKegs") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].pints >= 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }


}
