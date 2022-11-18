const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

function validateField(field) {

  const height = field.length
  const width = field[0].length
  const start = field[0][0]
  
  


  
  console.log(field)
  console.log(height)
  console.log(width)
}

console.log(validateField([[pathCharacter, hole], [fieldCharacter, hat]]));



