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

class CallCenter {
  constructor() {
    this.respondentQ = new Queue;
    this.managerQ = new Queue;
    this.directorQ = new Queue;
    this.open = false;
    this.init = false;
  }
  start() {
    if (this.init) {
      console.log(`already initialized`);
      return;
    }
    for (let i = 0; i < 3; i++) {
      this.respondentQ.enqueue(new Employee(`respondent${i}`));
      this.respondentQ.enqueue(new Employee(`manager${i}`));
      this.respondentQ.enqueue(new Employee(`director${i}`));
    }
    this.init = true;
  }
  dispatchCall(call) {
    let employee;
    if(!this.respondentQ.isEmpty()) {
      employee = this.respondentQ.dequeue();
      console.log(employee, 'will be deployed');
      employee.dispatch(call, this.respondentQ);
      console.log('A respondent will be taking your call!');
    } else if (!this.managerQ.isEmpty()) {
      employee = this.managerQ.dequeue();
      console.log(employee, 'will be deployed');
      employee.dispatch(call, this.respondentQ);
      console.log('A manager will be taking your call!');
    } else if (!this.directorQ.isEmpty()) {
      employee = this.directorQ.dequeue();
      console.log(employee, 'will be deployed');
      employee.dispatch(call, this.respondentQ);
      console.log('A director will be taking your call!');
    } else {
      console.error('sorry, there are currently no available staff to take your call')
    }
  }
}

