const personForm = document.getElementById("personForm");
const personNameInput = document.getElementById("personName");
const personAgeInput = document.getElementById("personAge");
const submitBtn = document.getElementById("submitBtn");

let people = JSON.parse(localStorage.getItem("people"));
if (!people) people = [];

personForm.addEventListener("submit",(e) =>{
    e.preventDefault();
    const newPerson = {
        id: uuidv4(),
        name: personNameInput.value,
        age: personAgeInput.value,
    };
    people.push(newPerson);
    localStorage.setItem("person", JSON.stringify(newPerson));

    console.log("People:", people);
});