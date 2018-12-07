/* 
45 minutes should be enough time to complete this task, but feel free to 
take up to 90 minutes

Your task is to implement the prettyPrint function such that it takes an 
object and returns a pretty string representation.

The input parameter "data" will always be a non-null object. The values in 
the object are limited to either strings or objects. Object values follow 
the same rules.

The output should be a string with keys indented 2 spaces and new lines 
separating the key-value pairs. An example and expected result is provided 
below.

Implementation rules: We want you to implement this yourself-- you can use 
the full breadth of the language supported in this repl, but please don't 
import any libraries or use a built-in pretty-print function. You're free 
to modify the function or add additional functions if you deem necessary.

Note again that values in the data will always be either strings or objects 
all the way down, you don't have to consider other types.

Your code will be evaluated for correctness and readability. 
*/

const isEmpty = obj => {
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }
  return true;
};

function prettyPrint(data) {
  let output = '{\n';

  const recurse = (obj, indent) => {
    let result = '';
    indent = indent || '';
    for (const key in obj) {
      let value = obj[key];
      if (typeof value === 'string') {
        value = `"${value}"\n`;
      } else if (typeof value === 'object') {
        if (isEmpty(value)) {
          value = `{}`;
        } else {
          const innerObj = recurse(value, `${indent}  `);
          value = `\n${indent}{${innerObj}\n${indent}}`;
        }
      }
      result += `${indent}"${key}": ${value}`;
    }
    return result.replace(/,\n$/, '');
  };

  output += `${recurse(data, '  ')}\n}`;
  return output;
}

const exampleJson = {
  name: 'Jon',
  facts: {
    car: 'Ford',
    address: {
      city: 'New York',
    },
    watch: 'Casio',
    other: {},
  },
};

const expectedResult = `{
  "name": "Jon",
  "facts": {
    "car": "Ford",
    "address": {
      "city": "New York"
    },
    "watch": "Casio",
    "other": {}
  }
}`;

console.log(prettyPrint(exampleJson));
console.log(expectedResult === prettyPrint(exampleJson));
