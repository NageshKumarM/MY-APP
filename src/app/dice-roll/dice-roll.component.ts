import { Component } from '@angular/core';

@Component({
  selector: 'app-dice-roll',
  templateUrl: './dice-roll.component.html',
  styleUrls: ['./dice-roll.component.css'],
})
export class DiceRollComponent {
  public imageUrl: string = '/assets/dice.jpg';

  roll() {
    const digit = Math.floor(Math.random() * 6) + 1;
    // this.imageUrl = `/assets/Dice${digit}.jpg`;

    if(digit===1){
      this.imageUrl='/assets/Dice1.jpg'
    }
    else if(digit===2){
      this.imageUrl='/assets/Dice2.jpg'
    }
    else if(digit===3){
      this.imageUrl='/assets/Dice3.jpg'
    }
    else if(digit===4){
      this.imageUrl='/assets/Dice4.jpg'
    }
    else if(digit===5){
      this.imageUrl='/assets/Dice5.jpg'
    }
    else{
      this.imageUrl='/assets/Dice6.jpg'
    }
  }
}
