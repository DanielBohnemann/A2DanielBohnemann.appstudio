//gets the users first name, state, and outside temperature and stores them in an array for easy reference later
let firstName1 = prompt("What is your first name: ")
let state1 = prompt("What are the initials of your state: ")
let temp1 = prompt("What is the current temperature (f): ")
let messages1 = [
  `Hello ${firstName1}, since the temperature is ${temp1} and you live in ${state1}
  you should wear a warm coat, hat, scarf, and gloves.`,
  `Hello ${firstName1}, since the temperature is ${temp1} and you live in ${state1}
  you should wear a warm coat but you won't need a hat, scarf or gloves.`,
  `Hello ${firstName1}, since the temperature is ${temp1} and you live in ${state1}
  you should wear your warmest coat, a warm hat, a scarf, and warm gloves.`,
  `Hello ${firstName1}, since the temperature is ${temp1} and you live in ${state1}
  you should wear a warm coat, hat and gloves. Maybe a scarf too.`,
  `Please enter a valid state or temperature`
]

switch(true) {
case state1 == 'NE' && temp1 < 32:
  console.log(messages1[0])
  break;
case state1 == 'NE' && temp1 >= 32 && temp1 < 50:
  console.log(messages1[1])
  break;
case state1 == 'FL' && temp1 >= 32 && temp1 < 50:
  console.log(messages1[2])
  break;
case state1 == 'FL' && temp1 >= 50 && temp1 < 70:
  console.log(messages1[3]) 
  break;
default:
  console.log(messages1[4])
}

