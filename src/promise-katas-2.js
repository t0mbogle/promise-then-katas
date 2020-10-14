const { fetch } = require("./fakeApi");
/* 

DO NOT change the import or names of the functions in this file. 

However, you will have to amend the body of the functions themselves in order to make the tests pass. 

You can look at the fakeApi.js file to see the shape of the data that is returned from our fakeApi

We have imitated the fetch module for these katas. The fetch function takes two parameters, url and requestBody. 

For the first 3 exercises you will only need to provide the first parameter, url. For the last exercise you will
need to use the second parameter, requestBody.

An example of using the fetch function:

fetch("food")
fetch("joke", "question")

*/

// 1 Create a function that uses the fetch function to make a request to the "food" URL and returns
// the data - expected return value "Cheese" of type String

const food = async () => {
    const { data } = await fetch("food");
    return data;
};

// 2 Create a function that uses the fetch function to make a request to the "cats" URL and returns
// a list of cats in alphabetical order - expected return value ["Bandit", "Berry", "Puss in boots", "Smokey"] of type Array

const cat = async () => {
    const { data } = await fetch("cats");
    return data.cats.sort();
};

// 3 Create a function that uses the fetch function to make a request to the "dogs" URL and returns
// the naughtiest dog - expected return value {name: "Mutley", naughty: 10} of type Object

const dog = async () => {
    const { data } = await fetch("dogs");
    return data.dogs.reduce((acc, val) => {
        if (acc.naughty > val.naughty) return acc;
        return val;
    });
};

// 4 Create a function that uses the fetch function to make requests to the "jokes" URL and returns
// the joke object

const joke = async () => {
    const { joke } = await fetch("jokes", "question");
    const { answer } = await fetch("jokes", "answer");
    return { question: joke, answer };
};

module.exports = {
    food,
    cat,
    dog,
    joke
}