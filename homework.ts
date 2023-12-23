// - Create a function that takes an array, an index, 
// and a value as parameters. Inside the function, use the splice method 
// to insert the value at the specified index in the array. Return the modified array.
let fruits=[
    'pineapple','banana',"apple","orange","gava" 
]
     fruits.splice(1,0,"watermelon")
     console.log(fruits)

//  Implement a simple shopping cart program using an array. 
// Create functions to add items, remove items, and update quantities 
// using the splice method. Print the cart's contents after each operation

class ShoppingCart {
    private cart: { item: string; quantity: number }[] = [];
  
    // Function to add items to the cart
    addItem(item: string, quantity: number): void {
      const index = this.findIndex(item);
  
      if (index !== -1) {
        // Item already exists in the cart, update quantity
        this.cart[index].quantity += quantity;
      } else {
        // Item doesn't exist, add it to the cart
        this.cart.push({ item, quantity });
      }
  
      this.printCart();
    }
  
    // Function to remove items from the cart
    removeItem(item: string): void {
      const index = this.findIndex(item);
  
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
  
      this.printCart();
    }
  
    // Function to update quantities in the cart
    updateQuantity(item: string, quantity: number): void {
      const index = this.findIndex(item);
  
      if (index !== -1) {
        this.cart[index].quantity = quantity;
      }
  
      this.printCart();
    }
  
    // Function to find the index of an item in the cart
    private findIndex(item: string): number {
      return this.cart.findIndex(cartItem => cartItem.item === item);
    }
  
    // Function to print the cart's contents
    private printCart(): void {
      console.log('Cart Contents:');
      this.cart.forEach(cartItem => {
        console.log(`${cartItem.item} - Quantity: ${cartItem.quantity}`);
      });
      console.log('------------------');
    }
  }
  
  // Example usage
  const shoppingCart = new ShoppingCart();
  
  shoppingCart.addItem('Product A', 2);
  shoppingCart.addItem('Product B', 1);
  shoppingCart.updateQuantity('Product A', 3);
  shoppingCart.removeItem('Product B');

// - Write a program that uses a for loop to print the first 25 integers.

for(let i=1;i<=25;i++){console.log(i)}

// - Write a program that uses a for loop to print the first 10 even numbers.
// for(let e=1;e<=10;e++){
// (console.log((e%2===0),[e]))}

    for (let f=2;f<=20;f+=2){
        (console.log(f,"\n"))
    }

// - Create a function that takes a positive integer as parameter and uses 
// a for loop to calculate and return the factorial of that number.

 function sum(x:number,y:number){for(let y=1;y<=0;y++){console.log(x/y)}
}

sum(0,0)

//  - Write a program having an array of numbers if the number is negative it 
// should remove the negative number from the array.


let num:number[]=[1,-2,-6,-8,10,9,8]
let positivenum:number[]= num.filter(((number)=>number>=0))

console.log(positivenum)


// Create a function that takes an array of numbers as parameter. Use a for loop 
// to calculate and return the sum of all the numbers in the array.



function calculateSum(numbers: number[]): number {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

const numbersArray = [1, 2, 3, 4, 5];
const result = calculateSum(numbersArray);
console.log(result);
    

//  - Implement a program that takes a list of temperatures in Celsius as input 
// from the user. Convert each temperature to Fahrenheit using the formula 
// F = (C * 9/5) + 32 and store the converted temperatures in an array. 
// Use a for loop to perform the conversion for each temperature.
