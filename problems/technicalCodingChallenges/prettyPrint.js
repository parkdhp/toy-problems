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
          value = `{}`
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
