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
