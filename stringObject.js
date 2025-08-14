// string is immutable. value change kora jay nah.
// trim--> white space remove kore.
// replace(/\s+/g, '');
/* 
    1️⃣ text.replace(...)

এটি JavaScript-এর replace method।

এর মানে: string-এর মধ্যে যেকোনো matching part খুঁজে অন্য string দিয়ে replace করা।

2️⃣ /\s+/g

/.../ → Regular expression (pattern) লিখার way।

\s → space, tab, new line, সব ধরনের white space।

+ → এক বা একাধিক white space এর জন্য।

g → global মানে string-এর সব জায়গায় match খুঁজবে, শুধু প্রথমটার জন্য নয়।

3️⃣ ' ' (single space)

যে part match হবে, সেটা এই একটা space দিয়ে replace হবে।
*/
const country = 'Bangladesh';
console.log(country);
const district =`Tangail`;
console.log(district)
console.log(country.length);
console.log(country[5]);
console.log(typeof(country))
// console.log(country.indexOf(7));
console.log(country.toLowerCase());
console.log(country.toUpperCase());
console.log(country.startsWith('B'));
// console.log(country.startsWith(B));
console.log(country.includes("g"));
