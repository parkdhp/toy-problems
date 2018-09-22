/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;
  result.insert = function(key, value) {
    //get index based on hash limit and str
    var index = getIndexBelowMaxForKey(key, storageLimit);
    //grab bucket or set bucket at each index of storage to a new array
    storage[index] = storage[index] || [];
    var bucket = storage[index];
    //traverse bucket
    for(var i = 0; i < bucket.length; i++) {
      //if tuple within bucket contains key,
      if (bucket[i][0] === key) {
        //set new value for obtained key
        bucket[i][1] = value;
        //break out of function
        return;
      }
    }
    //if bucket doesnt contain key push tuple into bucket
    bucket.push([key, value]);
    //increment size for tuple inserted
    size++;
    //if size > 3/4 limit
    if (size/storageLimit >= 0.75){
      //resize by doubling current limit
      this.resize(2 * storageLimit);
    }
  };

  result.resize = function(newSize) {
    //save storage into new var
    var oldStorage = storage;
    //set newLimit
    storageLimit = newSize;
    //reset size
    size = 0;
    //reset current storage
    storage = [];
    //iterate through the hashTable
    oldStorage.forEach(bucket => {
      //if there are items in the bucket
      if(bucket) {
        //iterate through the bucket
        bucket.forEach(tuple => {
          //insert items into the storage
          this.insert(tuple[0], tuple[1]);
        });
      }
    });
  };

  result.retrieve = function(key) {
    //get index of key in storage
    var index = getIndexBelowMaxForKey(key, storageLimit)
    //get bucket
    if (storage[index]) {
      var bucket = storage[index];
      //check each tuple in bucket
      for (let i = 0; i < bucket.length; i++) {
        //if first item in tuple is equal to key
        if (bucket[i][0] === key){
          return bucket[i][1];
        }
      }
    }
    // return "Key is not here";
  };

  result.remove = function(key) {
    //get index
    var index = getIndexBelowMaxForKey(key, storageLimit);
    //get bucket
    var bucket = storage[index];
    //if bucket not empty
    if (bucket) {
      //loop through bucket to check if item exists
      for (let i = 0; i < bucket.length; i++) {
        //if bucket contains key
        if (bucket[i][0] === key) {
          //remove the tuple from the bucket
          bucket.splice(i, 1);
          //decrement size
          size--;
          if (size/storageLimit > 0.25) {
            this.resize(storageLimit/2);
          }
          return;
        }
      }
    }
  };

  return result;
};