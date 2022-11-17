const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
  constructor(field) {
    this.field = field;
    this.locationY = 0;
    this.locationX = 0;
  }

  print() {
    const displayString = this.field
      .map((row) => {
        return row.join("");
      })
      .join("\n");
    console.log(displayString);
  }

  askQuestion() {
    const move = prompt("Which Way?").toUpperCase();
    switch (move) {
      case "U":
        this.locationY -= 1;
        break;
      case "D":
        this.locationY += 1;
        break;
      case "L":
        this.locationX -= 1;
        break;
      case "R":
        this.locationX += 1;
        break;
      default:
        console.log("Enter valid direction: U, D, L, R");
    }
  }

  isInbounds() {
    if (this.locationY < 0 || this.locationX < 0) {
      return false;
    } else if (
      this.locationY > this.field.length - 1 ||
      this.locationX > this.field[0].length - 1
    ) {
      return false;
    } else {
      return true;
    }
  }

  isHole() {
    return this.field[this.locationY][this.locationX] === hole;
  }
}
const myField = new Field([
  ["*", "O", "O"],
  ["░", "O", "░"],
  ["░", "^", "░"],
]);

myField.print();
myField.askQuestion();
console.log(myField.locationY);
console.log(myField.locationX);
console.log(myField.isHole());

