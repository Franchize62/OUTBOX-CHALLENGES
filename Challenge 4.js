function checkArray(arr){
    let obj = {
        evens:[],
        odds:[],
        chars:[]
    }
arr.forEach(value => {
        if(typeof value === 'string'){
            obj.chars.push(value);
        }
        else if(value % 2 === 0){
            obj.evens.push(value);
        }
        else{
            obj.odds.push(value);
        }
    });
    
    console.log(obj);
}


checkArray([1,2,3,4,5,6,'a','b','c'])