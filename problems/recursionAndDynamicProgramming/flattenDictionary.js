/** Flatten a Dictionary
 * A dictionary is a type of data structure that is supported natively in all major interpreted languages such as JavaScript,
 * Python, Ruby and PHP, where it’s known as an Object, Dictionary, Hash and Array, respectively. In simple terms, a
 * dictionary is a collection of unique keys and their values. The values can typically be of any primitive type (i.e an
 * integer, boolean, double, string etc) or other dictionaries (dictionaries can be nested). However, for this exercise
 * assume that values are either an integer, a string or another dictionary.
 *
 * Given a dictionary dict, write a function flattenDictionary that returns a flattened version of it .
 *
 * EXAMPLE
 * input:  dict = {
 *          "Key1" : "1",
 *          "Key2" : {
 *              "a" : "2",
 *              "b" : "3",
 *              "c" : {
 *                  "d" : "3",
 *                  "e" : {
 *                      "" : "1"
 *                  }
 *              }
 *          }
 *      }
 * output: {
 *             "Key1" : "1",
 *             "Key2.a" : "2",
 *             "Key2.b" : "3",
 *             "Key2.c.d" : "3",
 *             "Key2.c.e" : "1"
 *         }
 */

const flattenDictionary = dict => {
  const output = {};
  for (const key in dict) {
    if (typeof dict[key] === 'object') {
      const innerObj = flattenDictionary(dict[key]);
      for (const key2 in innerObj) {
        if (key === '') {
          output[key2] = innerObj[key2];
        } else if (key2 === '') {
          output[key] = innerObj[key2];
        } else {
          output[`${key}.${key2}`] = innerObj[key2];
        }
      }
    } else {
      output[key] = dict[key];
    }
  }
  return output;
};

console.log(
  flattenDictionary({
    Key1: '1',
    Key2: {
      a: '2',
      b: '3',
      c: {
        d: '3',
        e: '1',
      },
    },
  }),
  `{
    "Key1": "1",
    "Key2.a": "2",
    "Key2.b": "3",
    "Key2.c.d": "3",
    "Key2.c.e": "1"
  }`
);
console.log(
  flattenDictionary({
    Key: {
      a: '2',
      b: '3',
    },
  }),
  `{
    'Key.a': '2',
    'Key.b': '3'
  }`
);
console.log(
  {
    '': {
      a: '1',
    },
    b: '3',
  },
  `{
    "a": "1",
    "b": "3"
  }`
);
