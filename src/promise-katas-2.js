const { getData } = require("./fakeApi");
/* 

DO NOT change the import or names of the functions in this file. 

However, you will have to amend the body of the functions themselves in order to make the tests pass. 

You can look at the fakeApi to see how the data is returned

*/

// 1 Create a function that uses the getData function to make a request to the "food" URL and returns
// the data

const food = () => {
    return getData("food").then(({ data }) => data);
};

// 2 Create a function that uses the getData function to make a request to the "cats" URL and returns
// a list of cats in alphabetical order

const cat = () => {
    return getData("cats").then(({ data }) => data.cats.sort());
};

// 3 Create a function that uses the getData function to make a request to the "dogs" URL and returns
// the naughtiest dog

const dog = () => {
    return getData("dogs").then(({ data }) => data.dogs.reduce((acc, val) => {
        if (acc.naughty > val.naughty) return acc;
        return val;
    }));
};


// 4 Create a function that uses the getData function to make requests to the "jokes" URL and returns
// the joke object

const joke = () => Promise.all([
    getData("jokes", "question"),
    getData("jokes", "answer")
]).then(([one, two]) => {
    return { question: one.joke, answer: two.answer };
});


module.exports = {
    food,
    cat,
    dog,
    joke
}