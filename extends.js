
//Goals 

//inheriting class functionality using extends
//is used  in class declaration  to create  a class  which is
// a child of another class


class Pet{


constructor(name, sound){


    this.name = name;
    //iniatilizing name with an  instance of name created

    this.sound = sound;
    //iniatilizing sound with an  instance of sound created

}



Speak(){


    return ` ${this.name} says ${this.sound}!`

    //this code defines  a method called speak  on an object that
    // has  name and sound property . When called  the method 
    // returns  a string  that includes the   name  and sound 
    // of an object 
    


}

}

class Dog extends Pet{

//inherits  constructor from pet 

}

class Cat extends Pet{


    //inherits constructor from pet 


}

class  Bird extends Pet{

//inherits  constructor from pet 

fly(){


    return `${this.name} flies away!`
    //defines a method called fly()  on an object that has  name property
    //when the method is called returns a string of  name of an object
}
}


let dog =  new Dog ("shadow", "woof");
//object called dog created and initilised with 
// a new instance of Dog class then passed inside with arguments missy
// and meow
let cat = new Cat("Missy","meow");

let bird = new Bird("Tiki","squawk");

console.log(dog.Speak());  // shadow says woof;
console.log(cat.Speak()); //  missy says meow!
console.log(bird.Speak());  // 
console.log(bird.fly());

 // callling various  methods to give output
