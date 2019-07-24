// check what window is
window

// check what this is
this

// verify that window and this are the same in global execution context
window === this

// add a variable to GEC and check if it's available on the window object
var name = 'foo'

// add a funcion to GEC and check if it's available on the window object
function getName() {
  console.log(this.name);
}