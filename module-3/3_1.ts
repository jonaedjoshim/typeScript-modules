{
    //oop-class
    /**
 * 1. Define the 'Animal' Class (Blueprint)
 * This class serves as a template for creating different animal objects.
 */
class Animal {
  /**
   * 2. Parameter Properties Constructor
   * By using 'public' inside the constructor, TypeScript does three things at once:
   * - Declares the property on the class.
   * - Receives the value from when 'new Animal()' is called.
   * - Automatically assigns the value (e.g., this.name = name).
   */
  constructor(
    public name: string,    // Name of the specific animal
    public species: string, // Species (e.g., Dog, Cat, Lion)
    public sound: string    // The specific sound it makes
  ) {
    // No need to write 'this.name = name' thanks to the 'public' shorthand.
  }

  /**
   * 3. Method: makeSound
   * A function inside a class is called a method. 
   * It defines a behavior that every animal created from this class can perform.
   */
  makeSound() {
    // 'this' refers to the specific object calling the method
    console.log(`The ${this.name} says ${this.sound}`);
  }
}

/**
 * 4. Object Instantiation
 * Creating real-world instances (objects) using the 'Animal' blueprint.
 */

// Creating a 'dog' object
const dog = new Animal("German Shepard Bhai", "dog", "Ghew Ghew");

// Creating a 'cat' object
const cat = new Animal("Persian bhai", "cat", "meaw meaw");

/**
 * 5. Executing Behaviors
 * Accessing the properties and calling the methods of the objects.
 */
cat.makeSound(); // Output: The Persian bhai says meaw meaw
dog.makeSound(); // Output: The German Shepard Bhai says Ghew Ghew

/**
 * Pro Tip:
 * Since the properties are 'public', you can access them directly:
 * console.log(dog.species); // Output: dog
 */

    //
}