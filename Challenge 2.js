let currentYear = 2020;
let birthYear = prompt('Enter your year of birth!');
const age = currentYear - birthYear
if(age <18){
    console.log('Minor');
}else if(age >36){
    console.log('Elder')
}else if(age >18 || age <36){
    console.log('Youth');
}
