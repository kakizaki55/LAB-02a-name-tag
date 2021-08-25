

const newName = document.getElementById('new-Name');

const update = document.getElementById('update');

const OGname = document.getElementById('name');

console.log(newName.value);

update.addEventListener('click', ()=> {
    const name = newName.value;

    OGname.textContent = name;
});

const greenButton = document.getElementById('green');

greenButton.addEventListener('click',() => {
    document.getElementById('id').style.backgroundColor = "green";

});
const pinkButton = document.getElementById('pink');

pinkButton.addEventListener('click',() => {
    document.getElementById('id').style.backgroundColor = "pink";

});
const blueButton = document.getElementById('blue');

blueButton.addEventListener('click',() => {
    document.getElementById('id').style.backgroundColor = "blue";

});

const redButton = document.getElementById('red');

redButton.addEventListener('click',() => {
    document.getElementById('id').style.backgroundColor = "red";

});



const newPronoun = document.getElementById('pronoun');

const updatePronoun = document.getElementById('updatePronoun');

const selectedPronoun = document.getElementById('selectedPronoun');

updatePronoun.addEventListener('click', ()=> {
    const newP = newPronoun.value;

    selectedPronoun.textContent = newP;
});

console.log(newPronoun.value);







 