
/*
// 1. Написати функцію яка буде робити deep (глибоку) копію об'єкта.


  function copy(salaries) {
    let clone = {
        ...salaries,
        role: {
            ...salaries.role
        }
    }
    return clone;
  }
  
  let salaries = {
    name: 'john',
    age: 22,
    role: {
        isAdmin: true
    }    
  }
  
  console.log(copy(salaries));

*/

// 2. Зробити глибоку копію об'єкта 3 способами ( тернарка, for, assign)
/*


let salaries = {
    name: 'john',
    age: 22,
   address: {
      street: 'Shevchenka 10',
      city: 'Kiev',
      country: 'Ukraine'
  },
  property: {
      isActive: true,
      isAdmin: false,
      wallet: {
          balance: 1000
  }
  }
  }



  
 /*  1 варіант 
  let clone = {
    ...salaries,
    address: {
        ...salaries.address
    },
    property: {
        ...salaries.property,
        wallet: {
            ...salaries.property.wallet
        }
    }
}
console.log(clone);
*/

/* 2 варіант
let clone_2 = Object.assign({}, salaries);
clone_2.address = Object.assign({}, salaries.address);
clone_2.property = Object.assign({}, salaries.property);
clone_2.property.wallet = Object.assign({}, salaries.property.wallet);

console.log(clone_2);
*/



// 3 варіант
/*

function deepClone(obj) {
    let cloneObj = {}; 
    for(let key in  obj) {
       if(typeof obj[key] ==='object'){ 
          cloneObj [key] = deepClone (obj [key]) 
       }else{
           cloneObj [key] = obj [key] 
       }
    }
    return cloneObj 
}

salaries.property.isActive = 10;
let obj2 = deepClone(salaries);

console.log(obj2, 'test'); 

*/

//3 Написати функцію як буде робити об'єкт верхнього рівня (без вкладень)
/*



let salaries = {
    name: 'john',
    age: 22,
   address: {
      street: 'Shevchenka 10',
      city: 'Kiev',
      country: 'Ukraine'
  },
  property: {
      isActive: true,
      isAdmin: false,
      wallet: {
          balance: 1000
  }
  }
  }
  

function cloneObj(salaries) {
    let clone = {};

    Object.assign(clone, salaries, salaries.address, salaries.property, salaries.property.wallet);

    delete clone.property;
    delete clone.address;
    delete clone.wallet;
    return clone;
}

let obj = cloneObj(salaries);
console.log(obj);

*/


