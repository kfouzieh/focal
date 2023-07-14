/*
 * MIf you have less than 20 minutes, you want your program to tell you to pick up a snack or grab something you have ready at home.
If you have at least 20 minutes but no more than 30 (because you've been working hard and are ahead of schedule), you want your program to tell you that you deserve a break and should take time to cook a tasty meal.
If you have more than 30 minutes, you want your program to remind you that this is an intense program after all and you should probably reconsider.
 */

const whatToDoForLunch = (hungry, availableTime) => {
  if (hungry) {
    if (availableTime < 20) {
      console.log("pick up a snack or grab something you have ready at home");
    } else if(availableTime >= 20 && availableTime <= 30) {
      console.log("you deserve a break and should take time to cook a tasty meal");
    } else {
      console.log("this is an intense program after all and you should probably reconsider.");
    }
    } else {
      console.log("I don't know what to do!");
    }

  };

/*
 * This is some test runner code that's simply calling our whatToDoForLunch function
 * defined above to verify we're making the right decisions. Do not modify it!
 */

console.log("I'm hungry and I have 20 minutes for lunch.");
whatToDoForLunch(true, 20);
console.log("---");

console.log("I'm hungry and I have 50 minutes for lunch.");
whatToDoForLunch(true, 50);
console.log("---");

console.log("I'm not hungry and I have 30 minutes for lunch.");
whatToDoForLunch(false, 30);
console.log("---");

console.log("I'm hungry and I have 15 minutes for lunch.");
whatToDoForLunch(true, 15);