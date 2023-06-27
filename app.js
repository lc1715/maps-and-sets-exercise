// ## **Quick Question #1**

// What does the following code return?

new Set([1, 1, 2, 2, 3, 4])
// Set(4) {1, 2, 3, 4}


// [...new Set("referee")].join("")
// [...new Set('referee')]
// ['r', 'e', 'f']
// [...new Set("referee")].join("")
// 'ref'


// What does the Map m look like after running the following code?
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);

// m.set([1, 2, 3], true);
// Map(1) {Array(3) => true}
// m.set([1, 2, 3], false);
// Map(2) {Array(3) => true, Array(3) => false}



// Write a function called hasDuplicate which accepts an array 
// and returns true or false if that array contains a 
// duplicate
// hasDuplicate([1, 3, 2, 1]) // true
// hasDuplicate([1, 5, -1, 4]) // false


function hasDuplicate(arr) {

    const noDuplicates = new Set(arr);   //{ 1, 3, 2 }  //{1, 5, -1, 4}
    if (arr.length !== noDuplicates.size) {
        return true;
    } else {
        return false;
    }
}
// hasDuplicate([1, 3, 2, 1])
// true
// hasDuplicate([1, 5, -1, 4])
// false


// ## **vowelCount**

// Write a function called vowelCount which accepts a string and returns a map where the keys are 
// numbers and the values are the count of the vowels in the string.
// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }

function isVowel(char) {
    return ('aeiou'.includes(char))
}


function vowelCount(str) {

    let vowelMap = new Map();

    for (let char of str) {
        const lowerCaseLetter = char.toLowerCase();
        if (isVowel(lowerCaseLetter)) {
            if (vowelMap.has(char)) {
                vowelMap.set(lowerCaseLetter, vowelMap.get(lowerCaseLetter) + 1);
            } else {
                vowelMap.set(lowerCaseLetter, 1)
            }
        }
    }
    return vowelMap;
}

// vowelCount('awesome')
// Map(3) {'a' => 1, 'e' => 2, 'o' => 1}
// vowelCount('Colt')
// Map(1) {'o' => 1}



