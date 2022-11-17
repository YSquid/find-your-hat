const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
  constructor(field) {
    this.field = field
  }

  print() {
    const displayString = this.field.map((row) => {
      return row.join('')
    }).join('\n')
    console.log(displayString)
  }

  askQuestion() {
    const move = prompt('Which Way?').toUpperCase()
    switch(move) {
      case 'U':
        this.locationY -= 1;
        break;
      case 'D':
        this.locationY += 1;
        break;
      case 'L':
        this.locationX -= 1;
        break;
      case 'R':
        this.locationX += 1;
        break;
      default:
        console.log('Enter valid direction: U, D, L, R')
    }
  }


}

const myField = new Field([
  ["*", "░", "O"],
  ["░", "O", "░"],
  ["░", "^", "░"],
])

myField.print()
