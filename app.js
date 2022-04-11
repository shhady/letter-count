const array = ["Hello", "Good Day", "Your Welcome", "hotdog", 
"hamburgers"];

const add = (obj, letter) => {
    if(obj[letter]) {
        obj[letter] +=1;
    }else {
        obj[letter] = 1;
    }
}

const counter = (arr) => {
    const count = {};
    for (let i of arr) {
        for(let j=0; j<i.length; j++){
            if(i[j].toLowerCase() !== " "){
                add(count, i[j].lowerCase())
            }
        }
    }
}
