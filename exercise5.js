// 1. Let's Form a Sentence

var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

console.log(word.concat(second, third, fourth, fifth, sixth, seventh));

// 2. Index Accessing - 1 by 1

var word = 'wow JavaScript is so cool';
var exampleFirstWord = word[0] + word[1] + word[2];
var secondWord = word[3] + word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13] + word[14];
var thirdWord = word[15] + word[16];
var fourthWord = word[17] + word[18] + word[19];
var fifthWord = word[20] + word[21] + word[22] + word[23] + word[24];

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

// 3. Breaking Sentence (Again) using Substring

var word3 = 'wow JavaScript is so cool';
var exampleFirstWord = word3.substring(0, 3);
var secondWord = word3.substring(3, 14);
var thirdWord = word3.substring(15, 17);
var fourthWord = word3.substring(18, 20);
var fifthWord = word3.substring(20, 25);

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

// 4. Breaking Sentence (yet Again) and Count Each Length

var word = 'wow JavaScript is so cool';
var exampleFirstWord = word.substring(0, 3);
var secondWord = word.substring(4, 15);
var thirdWord = word.substring(15, 17);
var fourthWord = word.substring(18, 21);
var fifthWord = word.substring(21, 26);

var firstWordLength = exampleFirstWord.length;
var isecondWord = secondWord.length;
var ithirdWord = thirdWord.length;
var ifourthWord = fourthWord.length;
var ififthWord = fifthWord.length;

console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord + ', with length: ' + isecondWord);
console.log('Third Word: ' + thirdWord + ', with length: ' + ithirdWord);
console.log('Fourth Word: ' + fourthWord + ', with length: ' + ifourthWord);
console.log('Fifth Word: ' + fifthWord +', with length: ' + ififthWord);

