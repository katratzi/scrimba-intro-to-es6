// Promises

// here the function return a promise
// promises have three kind of state....waiting, success and failure.
const buyFlightTicket = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = true; // test flag

      if (error) {
        reject("Sorry your payment was not successful");
      } else {
        //resolve("Thank you, your payment was successful");
        // could also return an object like this
        resolve({
          firstName: "Bob",
          balance: 123,
        });
      }
    }, 3000); //simulate some network time
  });
};

// we call the function.
buyFlightTicket()
  .then((success) => console.log(success)) // if everything has gone ok we call - THEN
  .catch((error) => console.log(error)); // otherwide we CATCHß the error

// fetch
// speeds up dealing with api calls

fetch("https://jsonplaceholder.typicode.com/comments/1")
  .then((response) => response.json()) // initial response...we just want the json so we call another .then
  .then((data) => console.log(data)); // now we hav the data we just log it out

// here we POST data instead
fetch("https://jsonplaceholder.typicode.com/comments", {
  method: "POST",
  body: JSON.stringify({
    postId: 1,
    name: "Bob",
    email: "bob@bobson.com",
    body: "Hello World",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));

// solution to challenge
const apiUrl = "https://api.chucknorris.io/jokes/random";

async function getJoke() {
  const response = await fetch(apiUrl);
  const data = await response.json();

  console.log(data.value);
}

getJoke();
