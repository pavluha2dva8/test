class Human {

constructor(firstName, lastName, gender, age, calories){
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.calories = calories;
    // if(this.__proto__.constructor == Human){
    //     this.live();
    // }
}
_img = './assets/images/human.png';

live(){
    setTimeout(() => {
        this.calories = 20;
        renderCard(this);
        let modal = document.querySelector('.card .modal');
        modal.innerText = `Feed me, I'm hungry`;
        modal.style.visibility = 'visible';
         setTimeout(()=> {
             modal.style.visibility = 'hidden';
            },2000);
    }, 5000);
setInterval(() => {
    this.calories -=200;
    renderCard(this);

}, 60000);
}

sleepFor(){
    let seconds;
    do {
        seconds = +prompt('How many seconds should sleep?');
        if (seconds < 0) {
            alert('You cant back time in past');
        } else if(isNaN(seconds)) {
            alert('Write please count of seconds');
        } else if(seconds == 0) {
            alert("I'm awake now");
            return
        }
    } while (seconds < 0);
    seconds *= 1000;

    let modal = document.querySelector('.card .modal');
    modal.innerText = 'I\'m sleeping';
    modal.style.visibility = 'visible';

     setTimeout(()=> {
         modal.style.visibility = 'hidden';
         setTimeout(`alert("I'm awake now")`,0);
        },seconds);
}

feed(){
    if(this.calories > 500){
        alert(`I'm not hungry`);
        return
    }
    let modal = document.querySelector('.card .modal');
    modal.innerText = 'Nom Nom Nom';
    modal.style.visibility = 'visible';

     setTimeout((o)=> {
         modal.style.visibility = 'hidden';
         this.calories += 200;
         renderCard(this)
         setTimeout(()=>{
                alert(`I'm still hungry`);
         },0);
        },10000,this);
}
}

class Superhero extends Human {
constructor(gender, age, calories){
    super(gender);
    delete this.lastName;
    this.firstName = 'Spider Man;'
    this.gender = gender;
    this.age = age;
    this.calories = calories;
    this.superАbilities = 'yes';
}
_img = './assets/images/spider.png'

web(){
    let modal = document.querySelector('.card .modal');
    modal.innerText = 'Shot the spiderweb!';
    modal.style.visibility = 'visible';

     setTimeout(()=> {
         modal.style.visibility = 'hidden';
        },1000);  
}

fly(){
    let modal = document.querySelector('.card .modal');
    modal.innerText = 'I\'m flying!';
    modal.style.visibility = 'visible';

     setTimeout(()=> {
         modal.style.visibility = 'hidden';
        },10000);  
}

fightWithEvil(){
    let modal = document.querySelector('.card .modal');
    modal.innerText = 'Khhhh-chh... Bang-g-g-g... Evil is defeated!';
    modal.style.visibility = 'visible';

     setTimeout(()=> {
         modal.style.visibility = 'hidden';
        },2000);  
}
}

function renderCard(obj) {
    // render properties
    let properties = '';
    
    for (let key in obj) {
        if(key[0] != '_') {  
            properties += `<li>${key}: ${obj[key]}</li>`;
        }
    }
    
    let propUl = document.querySelector('.card .property ul');
    propUl.innerHTML = properties;
    
    // render methods
    let methodsDiv = document.querySelector('.can-do .do')
    methodsDiv.innerHTML = '';  
    
    let step = obj;
    do{
        let methodsList = Object.getOwnPropertyNames(step.__proto__);
        methodsList.splice(methodsList.indexOf('constructor'),1);
        methodsList.splice(methodsList.indexOf('live'),1);
        console.log(methodsList);
        for(let method of methodsList) {
            let button = document.createElement('button');
            button.innerText = method;
            button.addEventListener('click',step[method].bind(step))
            methodsDiv.insertAdjacentElement('beforeend',button);
        }

        // console.log(step);
        step = step.__proto__;
    }while (step.__proto__.__proto__ != null);

    // render img
    let img = document.querySelector('.img img');
    img.src = obj._img;
    
}
let person = new Human('Taras','Petrukhno','Male','21',200);
person.live();
let spiderMan = new Superhero('Male','21',200);

renderCard(person);
console.log(person.__proto__.constructor == spiderMan);
let mutate = document.querySelector('.can-do span');
mutate.addEventListener('click',()=>{
    if(person.calories < 500) {
        let modal = document.querySelector('.card .modal');
    modal.innerText = 'I have to have more then 500 calories';
    modal.style.visibility = 'visible';

     setTimeout(()=> {
         modal.style.visibility = 'hidden';
        },2000);  
    }
    if(mutate.dataset.mutate == 'human' && person.calories > 500){
        mutate.dataset.mutate = 'hero';
        person = new Superhero('Male','21',person.calories);
        renderCard(person);
    } else if(mutate.dataset.mutate == 'hero') {
        mutate.dataset.mutate = 'human'
        person = new Human('Taras','Petrukhno','Male','21',person.calories);
        renderCard(person);
    }

})

