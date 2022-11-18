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
    try {
      const displayString = this.field
        .map((row) => {
          return row.join("");
        })
        .join("\n");
      console.log(displayString);
    } catch {
      throw new Error('Error creating field')
    }
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

  isHat() {
    return this.field[this.locationY][this.locationX] === hat;
  }

  runGame() {
    let playing = true;
    while (playing) {
      this.print();
      this.askQuestion();
      if (!this.isInbounds()) {
        playing = false;
        console.log("You went out of bounds!");
        break;
      } else if (this.isHole()) {
        playing = false;
        console.log("You fell in a hole!");
        break;
      } else if (this.isHat()) {
        playing = false;
        console.log("You found it!");
        break;
      } else {
        this.field[this.locationY][this.locationX] = pathCharacter;
      }
    }
  }

  static generateField(height, width, percentHoles) {
    //check for % holes within range
    if (percentHoles > 0.4) {
      console.log("Set percentHoles to <= 0.4");
      return;
    }
    //check for height and width within range
    if (height < 3 || width < 3) {
      console.log("Set height to >= 3 and width to >= 3");
      return;
    }

    const hatIndex = Math.floor(Math.random() * (height * width) + 1);

    const field = [];
    //create the rows for the field
    for (let i = 0; i < height; i++) {
      field.push([]);
    }

    //fill in each row
    let tracker = 0;
    field.forEach((row) => {
      for (let j = 0; j < width; j++) {
        if (tracker === 0) {
          row.push(pathCharacter);
        } else if (tracker === hatIndex) {
          row.push(hat);
        } else if (Math.random() < percentHoles) {
          row.push(hole);
        } else {
          row.push(fieldCharacter);
        }
        tracker += 1;
      }
    });
    return field;
  }
}
const myField = new Field(Field.generateField(10, 10, 0.3));

myField.runGame();
