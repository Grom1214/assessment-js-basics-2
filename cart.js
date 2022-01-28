///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
const summedPrice = cart.reduce((prevVal,currVal) => {
    return prevVal + currVal.price
}, 0)
;  
console.log(summedPrice);

// const summedPrice = cart.reduce(/* CALLBACK HERE */)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) => {

    let finalPrice = (cartTotal * (1 + tax))
    finalPrice -= couponValue;
    return finalPrice;
}


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
   rewards member, to add discounts, boolean because easy to see if someone wants it or doesnt.
   phone number, to confirm orders/contact customer, number to store, uniform format for everyone with a telephone.
   email , to promote restaurant , string because it will have more than just numbers. it should make an array?
   address, to deliver orders , string, same as before. Guaranteed mix of numbers and letters.
   card number , to charge orders , numbers only, uniform format for cardholders
   zip code , to confirm card , numbers only , format standard.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customerJoe = {
    rewards: true, //milo loves milo's pizza. eats here every day.
    phoneNum: 3373151334,
    emailAddress: 'milomilo@gmail.com',
    address: '454 e 170 meow street',
    zipCode: 84715,
    cardNum: 135135513515
}