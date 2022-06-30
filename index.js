let objectExample = {
    name: 'Vlad',
    age: 24,
    sayHello: function() {
        console.log(`Hello my name is ${this.name}`)
    }
}


objectExample.newProperty = "this is the new property value";

// let doSomething = () => {
//     console.log('testing');
//     let a = 4;
//     let b = 3;
//     console.log(a, b);
// }

// objectExample.newMethod = doSomething;

// console.log(objectExample);


// objectExample.age = 30;



objectExample.sayHello = function() {
    console.log('updated method')
}

// objectExample.sayHello();



// console.log(objectExample);

let handleClick = () => {
    console.log('clicked from external function')
}

let pElement = document.getElementById('p-element');
// console.log(pElement);

// pElement.addEventListener('click', (event) => {
//     console.log(event.target);
//     // handleClick();
// })

let nameInput = document.getElementById('name-input');
let ageInput = document.getElementById('age-input');
let submitButton = document.getElementById('submit-form');

// nameInput.addEventListener('keydown', (event) => {
//     let newParagraphElement = document.createElement('p');
//     let divElement = document.querySelector('div');

//     divElement.append(newParagraphElement);
//     newParagraphElement.innerText = event.target.value;
// })


// submitButton.addEventListener('click', (event) => {
//     event.preventDefault();
//     let name = nameInput.value;
//     let age = ageInput.value;

//     let newParagraph = document.createElement('p');
//     let divElement = document.querySelector('div');
//     divElement.append(newParagraph);

//     newParagraph.innerText = `Numele userului este ${name} si are ${age} ani`

//     console.log(name, age)
// })


// let listContainerElement = document.getElementById('list-container');

// let fruits = ['mango', 'orange', 'strawberry', 'cherry', 'apple'];
// console.log(fruits);

// Iterare
// let createList = (fruits) => {
//     fruits.map((fruit) => {
//         let fruitElement = document.createElement('li');
//         fruitElement.innerText = fruit;

//         listContainerElement.append(fruitElement)
//     })

//     listContainerElement.addEventListener('click', (event) => {
//         let currentClickedElement = event.target;
//         console.log('the user clicked on this element', currentClickedElement);

//         listContainerElement.removeChild(currentClickedElement);
//     })
// }

// createList(fruits);

// window.addEventListener('resize', (event) => {
//     console.log(event)
//     // console.log('user resized window')
// })


let url = "https://jsonplaceholder.typicode.com/photos";


const getPhotos = () => {

fetch(url)
.then((res) => {
    return res.json();
})
.then((responseFromBackend) => {
    let divElement = document.querySelector('div');
    let photos = responseFromBackend;
    photos.map((photo) => {
        let newUserElement = document.createElement('p');
        newUserElement.style = 'border: 1px solid red; width: 200px'
        divElement.append(newUserElement);
        newUserElement.innerText = photo.title;

    })
})
}

submitButton.addEventListener('click', () => {
    event.preventDefault();
    getPhotos();
})