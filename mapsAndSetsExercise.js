//Question # 1 - What does the following code return?//

new Set([1,1,2,2,3,4])

// This code will return the values, 1,2,3 and 4.//

//Question #2 - What does the following code return?//

[...new Set("referee")].join("")

// This code will only return the value "ref"//

//Question #3 - What does the Map 'm' llok like after running the following code?//

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

// In this code, m will look like:
//   0: {Array(3) => true}
//   1: {Array(3) => false}

//Question #4 - Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate.//

hasDuplicate([1,3,2,1])
hasDuplicate([1,5,-1,4])

const hasDuplicate = arr => new Set(arr).size !== arr.lenght;

//Question #5 - Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string//

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

function isVowel(char){
    return "aeiou".includes(char);
}

function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
        let lowerCaseChar = char.toLowerCase()
        if(isVowel(lowerCaseChar)){
            if(vowelMap.has(lowerCaseChar)){
                vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);

            
        
        } else{
            vowelMap.set(lowerCaseChar, 1);
        }
      }
    }
    return vowelMap;

}