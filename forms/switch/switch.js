//gets the users first name, state, and outside temperature and stores them in an array for easy reference later
let firstName = prompt("What is your first name: ")
let state = prompt("What are the initials of your state: ")
let temp = prompt("What is the current temperature (f): ")
let messages = [
  `Hello ${firstName}, since the temperature is ${temp} and you live in ${state}
  you should wear a warm coat, hat, scarf, and gloves.`,
  `Hello ${firstName}, since the temperature is ${temp} and you live in ${state}
  you should wear a warm coat but you won't need a hat, scarf or gloves.`,
  `Hello ${firstName}, since the temperature is ${temp} and you live in ${state}
  you should wear your warmest coat, a warm hat, a scarf, and warm gloves.`,
  `Hello ${firstName}, since the temperature is ${temp} and you live in ${state}
  you should wear a warm coat, hat and gloves. Maybe a scarf too.`,
  `Please enter a valid state or temperature`
]

switch(true) {
case state == 'NE' && temp < 32:
  console.log(messages[0])
  break;
case state == 'NE' && temp >= 32 && temp < 50:
  console.log(messages[1])
  break;
case state == 'FL' && temp >= 32 && temp < 50:
  console.log(messages[2])
  break;
case state == 'FL' && temp >= 50 && temp < 70:
  console.log(messages[3]) 
  break;
default:
  console.log(messages[4])
}

