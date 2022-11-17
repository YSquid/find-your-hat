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

  startGame() {

  }


}

const myField = new Field([
  ["*", "░", "O"],
  ["░", "O", "░"],
  ["░", "^", "░"],
])

myField.print()
