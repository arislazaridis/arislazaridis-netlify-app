// include fs-extra package
const fs = require("fs-extra");

const copy = (source, destination) => {
  console.log(`Start copy from ${source} to ${destination} started!`);
  fs.copy(source, destination, function (err) {
    if (err) {
      console.log(
        `An error occured while copying from ${source} to ${destination}.`
      );
      return console.error(err);
    }
    console.log(`Copy from ${source} to ${destination} completed!`);
  });
};

copy("html-css-practice", "dist");

copy("./tic-tac-toe", "./dist/tic-tac-toe");

copy("./twitter-card/build", "./dist/twitter-card");

copy("./ums/build", "./dist/ums");

copy("./expenses-app/build", "./dist/expenses-app");

copy("./food-order-app/build", "./dist/food-order-app");
