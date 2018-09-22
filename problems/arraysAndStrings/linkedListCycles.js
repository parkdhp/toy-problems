let Node = function (value) {
  return {
    value: value,
    next: null
  };
};
//input linkedList
//output true/false
//constraints: O(n) time, O(1) space, No mutation
let hasCycle = (linkedList) => {
  let first = linkedList;
  let second = linkedList;
  
  while(first && second && second.next) {
    first = first.next;
    second = second.next.next;
    if(first === second) {
      return true;
    }
  }
  return false;

  // let checkRepeats = () => {    
  //   if(first === null || second === null || second.next === null){
  //     return false;
  //   }
  //   if(first.value === second.value) {
  //     return true;
  //   }
  //   first = first.next;
  //   second = second.next.next;
  //   return checkRepeats();
  // }
  // return checkRepeats();

  // while (first !== second) {
  //   if (second.next !== null || second === null || first.next === null || second.next.next === null) {
  //     return false;
  //   }
  //   if (first === second) {
  //     return true;
  //   }
  //   first = first.next;
  //   second = second.next.next;
  // }
};