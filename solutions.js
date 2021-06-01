"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

function isTrue(input) {
    return input === true;
}

function isFalse(input){
    return input === false;
}

function not(input){
    return !(input);
}

function addOne(number){
    return Number(number) + 1;
}

function isEven(input){
    return input % 2 === 0;
}

function isIdentical(x,y){
    return x === y;
}

function isEqual(x,y){
    return x == y;
}

function or(x,y){
    return x || y;
}

function and(x,y){
    return x && y;
}



function concat(x, y){
    let string = ''
    return string.concat(x,y);
}
