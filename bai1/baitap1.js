const checkPrime = (number) => {
    if (typeof number !== 'number' || !Number.isInteger(number)) return false;
    if (number <= 1) return false;
    for(let i=2;i<=Math.sqrt(number);i++){
        if(number % i == 0){
            return false;
        }
    }
    return true;
}

const numbers=[1,2,3,4,5,6,7,8,9,10];

const primeNumbers=numbers.filter(checkPrime);
console.log(checkPrime(5))

console.log("Các số nguyên tố trong mảng:", primeNumbers);