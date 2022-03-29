(()=> {
  // Arrow Functions
  const log = x => {
    console.log(x);
  };

  log('I am here');


  const add = (x, y) => ({result: x + y});

  console.log(add(1,2));


  // Autimatically (self / immediately) functions
  var x = 10
  const addResult = (bbb = () => {
    return 1 + 3
  })();

  console.log(addResult);

  const addResult1 = (function aaa (){
    return 2 + 3;
  })();

  console.log(addResult1);

  const handleH2Click = () => {
    log("Header 2 clicked");

    // DOM manipulation functions
    const newH2 = document.createElement('h2');
    newH2.innerText = "Header 2";
    document.body.append(newH2);
  }

  window.addEventListener('load', () => {
    const x = 'Aris';
    // Template literals
    console.log(`my Name = ${x}`);

    document.getElementById("header1").addEventListener('click', (event) => {
      // event bubbling
      event.stopPropagation();
      log("Header 1 clicked")
    });

    // Event deligation
    document.body.addEventListener('click', (e) => {
      console.log(e.target.tagName);

      if (e.target.tagName === "H2") {
        handleH2Click();
        return;
      }

      console.log('body Clicked');
    });
  });
})();


// Promise

const myPromise = new Promise(function(resolve, reject){
  const x = Math.random();

  if(x > 0.5) {
    reject('X cannot be > 0.5')
  } else {
    resolve({
      status: 'OK'
    });
  }
});

myPromise
.then((data) => console.log(data))
.catch(error => console.log(error))
.finally(() => console.log('finished'));

(async () => {
  try {
    const data = await myPromise;
    console.log(data);
  } catch (error) {
    console.log(error);
  }

  console.log('finished')
})();

console.log(111);

// Array functions
[1,2,3,4].forEach((el) => console.log(el));

// Se ka8e stoixeio tou array na pros8eseis to 5, na pros8eseis to index kai to teleutaio stoixeio tou pinaka.
console.log(
  [1, 2 ,3 ,4].map((el, index, arr) => el + 5 + index + arr[arr.length - 1])
);


// apo enan pinaka na krathseis mono ta stoixeia pou to a8roisma tou eautou tous me to index tous einai megalutero apo to teleutaio stoixeio tou pinaka.
console.log(
  [5, 1, 6 ,4, 5].filter((el, index, arr) => el + index > arr[arr.length - 1])
);

// reduce
const myArray = [1, 2, 3, 4];
const sum = myArray.reduce((acc, el, index, arr) => {
  return acc + el;
}, 0);

console.log(sum);

const suits = ['diamonds', 'clubs', 'hearts', 'spathi'];
const values = [2,3,4,5,6,7,8,9,10,11,12,13,14];

const cards = values.reduce((acc, value) => {
  acc = acc.concat(suits.map((suit) => ({ suit, value })));
  return acc;
}, []);

const grouped = cards.reduce((acc, card) => {
  if(acc[card.suit]) {
    acc[card.suit].push(card);
  } else {
    acc[card.suit] = [];
    acc[card.suit].push(card);
  }

  return acc;
}, {});

console.log(grouped);

const diamonds = cards.reduce((acc, card) => {
  if(card.suit === 'diamonds') {
    acc.push(card);
  }

  return acc;
}, []);

console.log(diamonds);

const diamonds1 = cards.filter((card) => card.suit === 'diamonds');

console.log(diamonds1);





