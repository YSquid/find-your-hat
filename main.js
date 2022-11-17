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
    const output = []
    this.field.forEach((row) => {
        for (const i in row) {
            output.push(row[i])
        }
        output.push('\n')
    })
    console.log(output.join(''))
  }
}

const myField = new Field([
  ["*", "░", "O"],
  ["░", "O", "░"],
  ["░", "^", "░"],
])

myField.print()
