/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global/Window Binding allows functions to be called from objects on a global or outside scope

* 2. Implicit Binding restricts functions to the context of an object it is chained to

* 3.  New Binding uses constructor functions to create new objects to be used 

* 4. Explicit Binding uses "this" to pass arguments to a function within an object
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function coffeeBrew (type) {
console.log('I like ${type} coffee. ');
return;
}

 coffeeBrew("french pressed");

// Principle 2

// code example for Implicit Binding

const coffeeBrew = {
    strength: "strong",
    roast: "medium",
    brewPref: function () {
        console.log(`I like my coffee ${this.strength} and ${this.roast}.`)
    }
    
}

coffeeBrew.brewPref();


// Principle 3

// code example for New Binding

function AnotherPerson(info) {
    this.name = info.name;
    this.beverage = info.beverage;
    this.preference = function () {
        console.log(`${this.name} only drinks ${this.beverage}`)
        return
    }
}

const john = new AnotherPerson({
    name: "John",
    beverage: "water",
})

john.preference();

// Principle 4

// code example for Explicit Binding

const person = {
    name: "Zoey"
}
function morningDrink (){
    console.log(`${this.name} prefers tea over coffee.`)
}

morningDrink.call(person)