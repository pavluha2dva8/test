
// 
// initialization guest list
// 

let guestList = new WeakSet(); 


// initialization guests
let taras = { name: "Taras" };
let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };
let lui = { name: "Lui" };
// add guests to guest list
guestList.add(taras);
guestList.add(john);
guestList.add(pete);
guestList.add(mary);
guestList.add(lui);
// if you give it your name, it will tell you if you're on the list
console.log(guestList.has(taras)); //true

// if you ask who, or how many people are invited, it will not tell you
// Thats because WeakSet don't support method's size, keys().

// you can ask to remove someone by name off the list, but not everyone at once
console.log(guestList.delete(pete)); //true

// 
// initialization menu
// 

let menu = new WeakMap();
// you can ask to name every available dish and its price, one after the other
let borsh = {desc:'Ukrainian Borch'};
let varenuku = {desc:'Varenuku with chery'};
let golubzi = {desc:'Golubzi dniprovski'};
let surnuki = {desc:'Surnuk Lvivsky'};
let kyivanCake = {desc:'Testy Kyivan cake'};
// add dishes to menu
menu.set(borsh, {price: 200, name:'borsh'});
menu.set(varenuku, {price: 100, name:'varenuku'});
menu.set(golubzi, {price: 250, name:'golubzi'});
menu.set(surnuki, {price: 110, name:'surnuki'});
menu.set(kyivanCake, {price: 280, name:'Kyivan Cake'});
// you can ask to name every available dish and its price, one after the other

// first
//if available we show info
if(menu.has(borsh)) { 
  console.log(`${menu.get(borsh).name} | ${menu.get(borsh).price}uah`); //borsh | 200uah
};
if(menu.has(varenuku)) { 
    console.log(`${menu.get(varenuku).name} | ${menu.get(varenuku).price}uah`); //varenuku | 100uah
  };
  if(menu.has(golubzi)) { 
    console.log(`${menu.get(golubzi).name} | ${menu.get(golubzi).price}uah`); //golubzi | 250uah
  };
  if(menu.has(surnuki)) { 
    console.log(`${menu.get(surnuki).name} | ${menu.get(surnuki).price}uah`); //surnuki | 110uah
  };

// 
// initialization bankVault
//

let bankVault = new Map(); 
// create boxes, each with unique credentials and some contents
let box1 = {content: 'secret1'};
let box2 = {content: 'secret2'};
let box3 = {content: 'secret3'};
let box4 = {content: 'secret4'};
let box5 = {content: 'secret5'};

// the only way to see the contents of a box, is to provide its correct credentials
bankVault.set('credential01',box1);
bankVault.set('credential02',box2);
bankVault.set('credential03',box3);
bankVault.set('credential04',box4);
bankVault.set('credential05',box5);

box1 = null;
box2 = null;
box3 = null;
box4 = null;
box5 = null;
// check it
console.log(bankVault.get('credential01')); //content: "secret1"
console.log(bankVault.get('credential03')); //content: "secret3"
console.log(bankVault.get('credential05')); //content: "secret5"

// 
// initialization bankVault
//

let coinCollection = new Set();

//coinCollection contains various coins, all unique
let coin1 = 'coin view 1';
let coin2 = 'coin view 2';
let coin3 = 'coin view 3';
let coin4 = 'coin view 4';
let coin5 = 'coin view 5';

coinCollection.add(coin1);
coinCollection.add(coin1);
coinCollection.add(coin1);

coinCollection.add(coin2);

coinCollection.add(coin3);
coinCollection.add(coin3);

coinCollection.add(coin4);
coinCollection.add(coin5);
// if you want, you can see the entire collection
let coinIterator = coinCollection.keys();
for (let coin of coinIterator) {
    console.log(coin);
  }
  // Output:
  //coin view 1
  //coin view 2
  //coin view 3
  //coin view 4
  //coin view 5