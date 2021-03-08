# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @abdul589/lotide`

**Require it:**

`const _ = require('@abdul589/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns the first element of the array
* `tail(array)`: Returns all the elements of the array except first
* `middle(array)`: Gives middle elements of an array, if even gives both
* `without(array1, array2)`: Returns Array with that excludes the second array elements
* `findKey(object, callback)`: Returns key for the object value according to callback condition we provide
* `map(array, callback)`: Maps new array according to the callback condition
* `takeUntil(array, callback)`: takes all the values of array and store it in a new array until callback condition is met
* `letterPositions(sentence)`: Returns an object with position of each letter in the sentence
* `findKeyByValue(object, value)`: Finds first key of object by value
* `eqObjects(object1, object2)`: Compares two objects 
* `eqArrays(array1, array2)`: Checks if 2 Arrays are equal
* `countOnly(allItems, itemsToCount)`: Compares and returns an object with the number of times an element occurs in an object from a given list
* `countLetters(string)`: Count the occurance of letter in a string and returns an object
* `assertEqual(actual, expected)`: Checks and returns a boolean depending on if the two arguments match
* `assertObjectsEqual(object1, object2)`: Compares two object
* `assertArraysEqual(array1, array2)`: Compares two arrays
