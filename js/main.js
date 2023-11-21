alert('Hello again, World!');

const FIRSTNAME = "Maria";
let lastName = "Nefulda"; 
 // var lastName = "Nefulda"; //
let age = 10 + 13;
console.log(typeof age, age);
age = "twenty three";
age = 23.0;
age = true;
console.log (FIRSTNAME, lastName);

const fullName = (first, last) => {
        console.log(first, last);
        console.log(first +"'s favourite pet are pandas");
}

fullName("Maria", "Nefulda");
fullName("Mia",  "Bia");
fullName("IDK", "MAN");
