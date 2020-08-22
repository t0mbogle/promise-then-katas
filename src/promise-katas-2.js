const { getData } = require("./fakeApi");
/* 

DO NOT change the import or names of the functions in this file. 

However, you will have to amend the body of the functions themselves in order to make the tests pass. 

You can look at the fakeApi to see how the data is returned

*/

// 1 Create a function that uses the getData function to make a request to the "food" URL and returns
// the data

const food = async () => {
    const { data } = await getData("food");
    return data;
};

// 2 Create a function that uses the getData function to make a request to the "cats" URL and returns
// a list of cats in alphabetical order

const cat = async () => {
    const { data } = await getData("cats");
    return data.cats.sort();
};

// 3 Create a function that uses the getData function to make a request to the "dogs" URL and returns
// the naughtiest dog

const dog = async () => {
    const { data } = await getData("dogs")
    return data.dogs.reduce((acc, val) => {
        if (acc.naughty > val.naughty) return acc;
        return val;
    });
};

// 4 Create a function that uses the getData function to make requests to the "jokes" URL and returns
// the joke object

const joke = async () => {
    const { joke } = await getData("jokes", "question");
    const { answer } = await getData("jokes", "answer");
    return { question: joke, answer: answer };
};

module.exports = {
    food,
    cat,
    dog,
    joke
}