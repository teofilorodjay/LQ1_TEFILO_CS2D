// Persona 1 data
const person1 = { firstName: "Maria", lastName: "Delos Santos Las Marias", age: 25, address: "Upper Session Road, Baguio City, Benguet" };
// Persona 2 data
const person2 = { firstName: "Juan Gamoso", lastName: "Dela Cruz", age: 28, address: "San Nicolas, Candon City, Ilocos Sur" };

// Rearrange Name
function rearrangeName(person) {
    return `${person.lastName}, ${person.firstName}`;
}

// Console log output
console.log("Person 1:", rearrangeName(person1), person1.age, person1.address);
console.log("Person 2:", rearrangeName(person2), person2.age, person2.address);

// Calculate total age and address lenght
const totalAge = person1.age + person2.age;
const totalAddressLength = person1.address.length + person2.address.length;

// Print results
console.log("Total age:", totalAge);
console.log("Total address length:", totalAddressLength);
