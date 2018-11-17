function prettyPrint(data) {
  let result = JSON.stringify(data, null, 2)
  return result;
}

const exampleJson = {
  name: 'Jon',
  facts: {
    car: 'Ford',
    address: {
      city: 'New York'
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

console.log(expectedResult === prettyPrint(exampleJson));
