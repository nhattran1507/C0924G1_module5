const person={
    firstName:'John',
    lastName:'Doe',
    age:30,
    gender:'Male',
    occupation:'Developer',
    nationality:'America',
    city:'New York',
    hobbies:['reading','traveling','photography'],
    languages:['English','Spanish'],
    education:{
        degree:'Bachelor',
        major:'Computer Science',
        university:'Harvard University',
    }
}

const {
    firstName,
    gender,
    education:{degree},
    languages:[English],
}=person;

const student={
    firstName,
    gender,
    degree,
    English,
}

console.log(student);