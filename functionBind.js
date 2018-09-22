/*
 * function bind():
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

const bind = function (func, obj) {
  let args = [].slice.call(arguments).slice(2);
  return function() {
    let args2 = [].slice.call(arguments)
    return func.apply(obj, args.concat(args2))
  }
};
//ES6 version
// const bind = (func, obj, ...more) => (...stuff) => func.call(obj, ...more, ... stuff)

/*
 * Function.prototype.bind:
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = alice.shout.bind(alice);
 * boundShout(); // alerts 'alice'
 * boundShout = alice.shout.bind({name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = func.bind(null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

Function.prototype.bind = function(obj) {
  let args = [].slice.call(arguments).slice(2)
  let that = this
  return function() {
    let args2 = [].slice.call(arguments)
    return that.apply(obj, args.concat(args2))
  }
};

//ES6 version
// Function.prototype.bind = function(context, ...more) {
//   return (...stuff) => this.call(context, ...more, ...stuff)
// }
