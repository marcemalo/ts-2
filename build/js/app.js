"use strict";
// 1-misol
// function calculatePetAges(humanYears: number): [number, number, number] {
//     let catYears: number;
//     let dogYears: number;
//     if (humanYears === 1) {
//         catYears = 15;
//         dogYears = 15;
//     } else if (humanYears === 2) {
//         catYears = 15 + 9;
//         dogYears = 15 + 9;
//     } else {
//         catYears = 15 + 9 + (humanYears - 2) * 4;
//         dogYears = 15 + 9 + (humanYears - 2) * 5;
//     }
//     return [humanYears, catYears, dogYears];
// }
// console.log(calculatePetAges(1)); 
// console.log(calculatePetAges(2)); 
// console.log(calculatePetAges(10)); 
// 2-misol
// function dayOfWeek(day: number): string {
//     if (day < 1 || day > 7) {
//         return "Wrong, please enter a number between 1 and 7";
//     }
//     return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][day - 1];
// }
// console.log(dayOfWeek(1));
// 3-misol
// function expressionsMatter(a: number, b: number, c: number): number {
//     return Math.max(a + b + c, a * b * c, (a + b) * c, a * (b + c));
// }
// console.log(expressionsMatter(2, 1, 2));
// console.log(expressionsMatter(2, 1, 3));
// console.log(expressionsMatter(1, 1, 1));
// console.log(expressionsMatter(2, 1, 1));
// 4-misol
// function shortLongShort(a: string, b: string): string {
//     if (a.length < b.length) {
//         return a + b + a;
//     } else {
//         return b + a + b;
//     }
// }
// console.log(shortLongShort("1", "22"));  
// console.log(shortLongShort("22", "1"));  
// console.log(shortLongShort("", "abc"));  
// console.log(shortLongShort("abc", ""));  
// 5-misol
// function doubleChar(str: string): string {
//     return str.split('').map(char => char + char).join('');
// }
// console.log(doubleChar("String"));        
// console.log(doubleChar("Hello World"));   
// console.log(doubleChar("1234!_ "));      
// 6-misol
// function DNAtoRNA(dna: string): string {
//     return dna.replace(/T/g, 'U');
// }
// console.log(DNAtoRNA("TTTT")); 
// console.log(DNAtoRNA("GCAT")); 
// console.log(DNAtoRNA("GACCGCCGCC"));
// 7-misol
// function updateLight(current: string): string {
//     if (current === "green") {
//         return "yellow";
//     } else if (current === "yellow") {
//         return "red";
//     } else {
//         return "green";
//     }
// }
// console.log(updateLight("green")); 
// console.log(updateLight("yellow")); 
// console.log(updateLight("red"));
// 8-misol
// function shortLongShort(a: string, b: string): string {
//     return a.length < b.length ? a + b + a : b + a + b;
// }
// console.log(shortLongShort("1", "22"));  
// console.log(shortLongShort("22", "1"));  
// console.log(shortLongShort("hello", "hi"));  
// console.log(shortLongShort("", "abc"));  
