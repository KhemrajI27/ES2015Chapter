// ES5 Map Callback //

function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }

// Write an ES2015 Version //

const double = arr => arr.map(val => val * 2);

// Replace ALL functions with arrow functions for the following://

function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }

// Ans : //

const squareAndFindEvens = numbers => numbers.map(val => val ** 2).filter(squares => squares % 2 === 0)