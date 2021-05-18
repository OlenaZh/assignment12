// STEP 1
/*function Cat() {}*/
/*var Dog = function() {}*/
// STEP 2
/*var cat1 = new Cat();
var dog1 = new Dog();*/
// STEP 3
/*function Animal() {
    this.create = function() {
     window.console.log('The Animal has been created');   
    }
}
var Animal1 = new Animal();
Animal1.create();*/
// STEP 4

// STEP 5
/*function Animal(type, breed, color, height, length) {
    this._type = type;
    this._breed = breed;
    this._color = color;
    this._height = height;
    this._length = length;
    window.console.log(`${this._type} is a ${this._breed} ${this._color} ${this._height} ${this._length}.`);
}
var Animal1 = new Animal('Cat', 'Bengal', 'White', '10inches height', '18 inches length');*/
// STEP 6
/*var Animal = function(type, breed, color, height, length) {
    this._type = type;
    this._breed = breed;
    this._color = color;
    this._height = height;
    this._length = length;
}
var Animal1 = new Animal();
    for (var property in Animal1) {
        window.console.log(property);
    }*/

// STEP 7 /Inheritance 
/*function Animal(type, breed, color, height, length) {
    this._type = type;
    this._breed = breed;
    this._color = color;
    this._height = height;
    this._length = length;
    this.create = function() {
        window.console.log('The Animal has been created');   
       }
}

function Cat() {
    this.meow = function() {
        window.console.log('The cat has meowed.');
    }
}

function Dog() {
    this.bark = function() {
        window.console.log('The dog has barked.'); 
    }
}
Cat.prototype = new Animal ();
Dog.prototype = new Animal ();
var cat1 = new Cat();
cat1.create();
cat1.meow();
var dog1 = new Dog();
dog1.create();
dog1.bark();*/

// STEP 7.1
class animal {
    constructor(type, breed, color, height, length) {
        this._type = type;
        this._breed = breed;
        this._color = color;
        this._height = height;
        this._length = length;
    }
    create = function() {
            window.console.log('The Animal has been created');   
    }
    speak = function(animal) {
        /*window.console.log(`${animal ? 'The cat has meowed' : 'The dog has barked'}`);*/
        if (animal = cat1) {
            window.console.log(`The ${this._color} cat has meowed.`); 
        } else {
            window.console.log(`The ${this._color} dog has barked.`);
        }
    }
}
    
class Cat extends animal {
    constructor(_type, _breed, _color, _height, _length) {
        super(_type, _breed, _color, _height, _length);   
    }
}

class Dog extends animal {
    constructor(_type, _breed, _color, _height, _length) {
        super(_type, _breed, _color, _height, _length);  
    }
}
const cat1 = new Cat('Cat', 'Bengal', 'White', '10inches height', '18 inches length');
cat1.create();
cat1.speak(true);
const dog1 = new Dog('Dog', 'Labrador', 'Black', '10inches height', '18 inches length');
dog1.create();
dog1.speak(false);
// STEP 8

// STEP 9