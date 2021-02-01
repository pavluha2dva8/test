function HouseBlueprint(address,description,owner,size)  {
    this.address = address;
    this.date = new Date();
    this.description = description;
    this.owner = owner;
    this.size = size;
    this._averageBuildSpeed = 0.5;
    this.getDaysToBuild = () => {
        return this.size / this._averageBuildSpeed;
    };
};
let houseBlueprint = new HouseBlueprint();

function HouseBuilder(address,description,owner,size,roomCount) {
    Object.getPrototypeOf(houseBlueprint).constructor.call(this,address,description,owner,size);
    this.roomCount = roomCount;
}


const house = new HouseBuilder(
    "88 Crescent Avenue",
    "Spacious town house with wood flooring, 2-car garage, and a back patio.",
    "J. Smith",
    110,
    5
);
console.log(house.address); // '88 Crescent Avenue'
console.log(house.description);// 'Spacious town house with wood flooring, 2-car garage, and a back patio.'
console.log(house.size);// 110
console.log(house.date.toDateString());// [the current date], for example:'Tue Aug 11 2020'
console.log(house.owner);// J. Smith
console.log(house._averageBuildSpeed);// 0.5
console.log(house.getDaysToBuild());// 220
console.log(house.roomCount);// 5
console.log('\n\nNext house \n\n');


const house1 = new HouseBuilder(
    "11 Tarasa Shevchenka Avenue",
    "Large apartment 3 floor",
    "T.Petrukhno",
    150,
    10
);
console.log(house1.address); // '11 Tarasa Shevchenka Avenue'
console.log(house1.description);// 'Large apartment 3 floor'
console.log(house1.size);// 150
console.log(house1.date.toDateString());// [the current date], for example:'Tue Aug 11 2020'
console.log(house1.owner);// T.Petrukhno
console.log(house1._averageBuildSpeed);// 0.5
console.log(house1.getDaysToBuild());// 300
console.log(house1.roomCount);// 10
