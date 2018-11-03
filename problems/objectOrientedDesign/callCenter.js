/**Call Center
 * Imagine you have a call center with three levesl of employees: respondent, manager, and director.
 * An imcoming telephone call must be first allocated to a respondent who is free. If the respondent
 * can't handle the call, he or she must escalate the call to a manager. If  the manager is not free
 * or able to handle it, then the call should be escalated to a director. Design the classes and data
 * structures for this problem. Implement a method dispatchCall() which assigns a call to the first 
 * available employee.
 */

const Queue = require('../stacksAndQueues/queue');

class Employee {
  constructor(name) {
    this.name = name;
  }
  dispatch(call, queue) {
    let context = this;
    setTimeout(() => {
      queue.enqueue(context);
      console.log(`Adding ${context.name} back to queue`);
    }, call.time);
  }
}

class Call {
  constructor(time) {
    this.time = time;
  }
}