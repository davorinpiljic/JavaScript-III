/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. implicit, where 'this' references whatever is to the left of the dot when the function is called

* 2. explicit, where what you want 'this' to be is explicitly passed to the function that is processing your parameters

* 3. window, 'this' references whatever is current in the window

* 4. new binding, creates a new constructor function where this references whatever the new object being created is
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this)

// Principle 2

// code example for Implicit Binding

const someObject = {
  itemType: 'box',
  itemColor: 'green',
  someMethod: function() {
    return `${this.itemType} is object, color is ${this.itemColor}`
  }
}

console.log(someObject.someMethod())

// Principle 3

// code example for New Binding

const House = function(color, style) {
  this.color = color,
  this.style = style
  this.description = function() {
    console.log(`description of this house is ${this.color} and the style is ${this.style}`)
   }
}

const someHouse = new House('blue', 'nice')

someHouse.description()

// Principle 4

// code example for Explicit Binding

const myObj = {
  color: 'red',
  name: 'object'
}

function func(num1) {
  console.log(`${this.color} is the color and the object name is ${this.name}`)
}

func.call(myObj)
