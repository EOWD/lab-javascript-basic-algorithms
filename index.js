// Iteration 1: Names and Input
let hacker1 = "abcv";
let hacker2 = "abcfa";

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
let driverName = "";
for (let i = 0; i < hacker1.length; i++) {
  driverName += hacker1[i].toUpperCase() + " ";
}
console.log(`Drivers name is ${driverName}`);

// Iteration 3.2

let navigatorName = "";
for (let j = hacker2.length - 1; j >= 0; j--) {
  navigatorName += hacker2[j];
}
console.log(`Navigators name in revers is ${navigatorName}`);

/// 3.3: Lexicographic order in loop

let driverCompare = "";
for (let i = 0; i < hacker1.length; i++) {
  driverCompare += hacker1[i];
}

let navigatorCompare = "";
for (let j = 0; j < hacker1.length; j++) {
  navigatorCompare += hacker2[j];
}
let result = driverCompare.localeCompare(navigatorCompare);
//console.log(result);
if (result === 1) {
  console.log("Yo, the navigator goes first, definitely.");
} else if (result === -1) {
  console.log("The driver's name goes first.");
} else {
  console.log("What?! You both have the same name?");
}

//  Iteration 3.3: without loop lexicographic order " Checks only first 'index' "

let theName = "";
let compare = hacker1[0].localeCompare(hacker2[0]);
//console.log(compare);
//if (compare === 1) {
// console.log("Yo, the navigator goes first, definitely.");
//} else if (compare === -1) {
// console.log("The driver's name goes first.");
// } else {
// console.log("What?! You both have the same name?");
//}

// bonus1:

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse finibus, lacus cursus rutrum fringilla, justo dui feugiat ante, nec venenatis enim mauris at purus. Duis pharetra maximus purus vel placerat. Nullam rutrum diam in lorem mollis eleifend. Mauris pellentesque risus neque, vitae condimentum lectus bibendum et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae nulla ullamcorper, suscipit nibh eget, fringilla elit. Vivamus suscipit augue nec dignissim luctus. Suspendisse egestas magna eget pellentesque ornare.

Fusce vehicula ac eros non commodo. Aenean interdum semper elit, ac vestibulum ligula vulputate mattis. Nullam gravida dolor ut luctus mattis. Fusce odio arcu, accumsan sed ipsum ac, euismod rhoncus turpis. Pellentesque lectus eros, aliquet nec quam in, maximus aliquet diam. Nunc auctor nibh ligula, at vehicula nisi blandit quis. Maecenas sollicitudin tellus suscipit mauris rhoncus ornare. Duis scelerisque magna a ullamcorper congue. Vestibulum viverra ornare turpis, at vestibulum erat maximus non. Curabitur pharetra massa ac purus varius vestibulum dapibus nec sem. Vestibulum interdum lectus in ipsum feugiat porta. Morbi a consequat justo. Nulla in tempus lacus.

Sed id lorem vehicula ante accumsan sagittis. Curabitur vitae lobortis libero, sit amet sagittis sapien. Curabitur eget tincidunt massa. Etiam vitae urna ut ex aliquam gravida. Suspendisse consectetur ut leo eu posuere. Curabitur quis felis a tellus convallis mollis a vel libero. Nam tempor tortor vel dui finibus volutpat. Nam aliquet sodales erat at posuere. Praesent tincidunt eleifend massa, non luctus justo aliquet in. Donec ac dolor quis ligula sodales lobortis sit amet et velit. Donec aliquet tellus eu dolor bibendum, at mollis tortor molestie. In iaculis sed diam vel lobortis. Quisque efficitur mi eget nunc sagittis, sit amet sagittis orci pellentesque. Proin pretium posuere lectus vel volutpat. Aenean eget ante ut erat consequat suscipit.`;

let wordCount = 0;
let etCount = 0;
let noSpace = longText.split(" ");
for (let n = 0; n <= noSpace.length + 1; n++) {
  wordCount++;

  if (noSpace[n] === "et" || noSpace[n] === "et." || noSpace[n] === "et,") {
    etCount++;
  }
}
console.log(`Paragraph has ${wordCount} words`);
console.log(`The word "et" appeared ${etCount} times`);

// bonus 2: Was tough but Ok i'm actually proud of this one

let phraseToCheck = "No 'x' in Nixon";
let newPhrase = phraseToCheck.toLowerCase();
let phrase = phraseToCheck.toLowerCase();
let newReverse = "";

for (let x = newPhrase.length - 1; x >= 0; x--) {
  if (newPhrase[x] === " ") {
    continue;
  }
  newReverse += newPhrase[x];
}
//console.log(newPhrase)

for (let n = 0; n < newPhrase.length; n++) {
  if (newPhrase[n] === ", ") {
    continue;
    phrase += newPhrase[n];
  }
}
//console.log(phrase)

if (newPhrase === phrase) {
  console.log("Hooray! We have a Palindrome.");
} else {
  console.log(" Nope. ");
}
