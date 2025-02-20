const sv1={
    firstName:'John',
    gender:'Male',
    degrees:'Bachelor',
    english:'English',
}

const sv2={
    name:'John',
    gender:'Male',
    degrees:'Bachelor',
    english:'English',
}

const getIfo=(object)=>{
    const{
        firstName='Quan',
        degrees='Na'
    }=object;
    console.log(`First Name: ${firstName}`);
    console.log(`Degree: ${degrees}`);
}

getIfo(sv1);
getIfo(sv2);