const houseMixin = {
    wordReplace(initial,replacement) {
        let arr = this.description.split(' ');

        arr.forEach((item,i,arr) => { 
            if (item == initial) arr[i] = replacement; 
        });
        this.description = arr.join(' ');
    },

    wordDelete(remove) {
        this.description = this.description.replace(new RegExp(`${remove}`,'g'), ``);
    },

    wordInsertAfter(word, wordAfter) {
        let arr = this.description.split(' ');

        arr.forEach((item,i,arr) => { 
            if (item == word) arr.splice(i+1,0,wordAfter); 
        });
        this.description = arr.join(' ');
    },

    wordEncrypt() {
        let basic = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let rot13 = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
        let literalArr = this.description.split('');
        literalArr.forEach((item,i,arr)=>{
            if(arr[i] == ' ')  return;
            arr[i] = rot13[basic.indexOf(item)];
        });
        this.description = literalArr.join('');
    },

    wordDecrypt() {
        let basic = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let rot13 = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
        let literalArr = this.description.split('');
        literalArr.forEach((item,i,arr)=>{
            if(arr[i] == ' ')  return;
            arr[i] = basic[rot13.indexOf(item)];
        });
        this.description = literalArr.join('');
    },
}
const house = new HouseBuilder(
    '88 Crescent Avenue',
    'Spacious town house with wood flooring, 2-car garage, and a back patio.',
    'J. Smith',
     110,
      5
);

Object.assign(house, houseMixin);

console.log(house.getDaysToBuild());
// 220
console.log(house.description);
// Spacious town house with wood flooring, 2-car garage, and a back patio.

house.wordReplace("wood", "tile");
console.log(house.description);
// Spacious town house with tile flooring, 2-car garage, and a back patio.

house.wordDelete("town ");
console.log(house.description);
// Spacious house with tile flooring, 2-car garage, and a back patio.

house.wordInsertAfter("with", "marble");
console.log(house.description);
// Spacious house with marble tile flooring, 2-car garage, and a back patio.

house.wordEncrypt();
console.log(house.description);
// // Fcnpvbhf ubhfr jvgu zneoyr gvyr sybbevat, 2-pne tnentr, naq n onpx cngvb.

house.wordDecrypt();
console.log(house.description);
// Spacious house with marble tile flooring, 2-car garage, and a back patio
