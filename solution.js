// Exercise one

const parkWalkStr = "I can walk in the park all day!";

console.log(parkWalkStr.substring(18, 22));

// Exercise Two

const hellostr = "Hello World";

console.log(hellostr.toUpperCase(""));

// Exercise Three

const earthlingsStr = "Hello Earthling";

console.log(earthlingsStr.toLowerCase(""));

// Exercise Four

const jsStr = "JavaScript";

console.log(jsStr.substring(3, 6));

// Exercise Five

const niceShoesStr = "nice shoes";

console.log(niceShoesStr.includes("l"));
console.log(niceShoesStr.includes("n"));

// Exercise Six

const oldStr = "Iphone";
const newStr = oldStr.charAt(0) + oldStr + oldStr.charAt(0);

console.log(newStr);

// Exercise Seven

const scritcherStr = "mobile";
const lastThreeChars =
  scritcherStr.slice(-3) + scritcherStr + scritcherStr.slice(-3);

console.log(lastThreeChars);

// Exercise Eight

const boogieNightsStr = "BoogieWoogie";
const firstLetter = boogieNightsStr[0];
const lastLatter = boogieNightsStr[boogieNightsStr.length - 1];
const remainderString = boogieNightsStr.substring(
  1,
  boogieNightsStr.length - 1
);
console.log(lastLatter + remainderString + firstLetter);

//  Exercise Nine

const firstName = "Thili";
const city = "Dortmund";
const job = "Software Engineering";

console.log(`My Name is ${firstName}. I live in ${city} and I am a ${job}.`);

// // Exercise Ten

const foxstr = "the quick brown fox";
const firstFoxLetter = foxstr[0].toUpperCase();
const restLetters = foxstr.substring(1).toLowerCase();

console.log(`${firstFoxLetter}${restLetters}`);
