let validator = {
    get(target, prop) {
        if(prop in target) {
            console.log(`Trying to access the property '${prop}'...`);
            return target[prop]
        } else {
            return false
        }
    },
    set(target, prop, val) {
        try{
            if(prop in target && prop == 'age') {
                if(!Number.isInteger(val)) {
                    throw new TypeError('The age is not an integer');
                }
                if(val > 200 || val < 0) {
                    throw new RangeError('The age is invalid');
                
                }
            } else {
                console.log(`Setting value '${val}' to '${prop}'`);
                target[prop] = val;
                return true;
            }
        }catch(error) {
            console.log('Uncaught '+ error.name + ': ' + error.message);
        }
        
    }
};
let person= new Proxy({},validator);

person.age = 100;
// Setting value'100' to 'age'
console.log(person.age);
// Trying to access the property'age'...
// 100
person.gender= "male";
// Setting value'male' to 'gender'
person.age = 'young';
// Uncaught TypeError: The age is not an integer
person.age = 300;
// Uncaught RangeError: The age is invalid