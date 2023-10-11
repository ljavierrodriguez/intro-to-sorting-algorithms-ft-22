let person = {
    name: 'John',
    lastname: 'Doe'
}

person.name
person["name"]

min = 0;

i = min + 1;

let nombres = ["Sara", "Maria", "Ines", "Fabiola", "Sofia", "Ana", "Miguel", "Andres", "Jose", "Carlos", "Barbara", "Diana"];
let nombresR1 = ["Maria", "Sara", "Ines", "Fabiola", "Sofia", "Ana", "Miguel", "Andres", "Jose", "Carlos", "Barbara", "Diana"];
let nombresR2 = ["Maria", "Ines", "Sara", "Fabiola", "Sofia", "Ana", "Miguel", "Andres", "Jose", "Carlos", "Barbara", "Diana"];
let nombresR3 = ["Maria", "Ines", "Fabiola", "Sara", "Sofia", "Ana", "Miguel", "Andres", "Jose", "Carlos", "Barbara", "Diana"];

let notas = [100, 23, 43, 10, 90, 1000, 34, 12, 22, 20];

let users = [
    { username: 'user10', rango: 1 },
    { username: 'user11', rango: 4 },
    { username: 'user1', rango: 2 },
    { username: 'user3', rango: 5 },
    { username: 'user100', rango: 3 },
    { username: 'user88', rango: 9 },
    { username: 'user21', rango: 7 },
    { username: 'user31', rango: 6 }
]

/* let i = 0;
while (i < nombres.length - 1) {
    let indice = 0;
    while (indice < nombres.length - 1) {
        if (nombres[indice] > nombres[indice + 1]) {
            const temp = nombres[indice];
            nombres[indice] = nombres[indice + 1];
            nombres[indice + 1] = temp;
        }
        indice++;
    }
    i++;
} */

function bubbleSort(arr) {
    let i = 0;
    while (i < arr.length - 1) {
        let indice = 0;
        while (indice < arr.length - 1) {
            if (arr[indice] > arr[indice + 1]) {
                const temp = arr[indice];
                arr[indice] = arr[indice + 1];
                arr[indice + 1] = temp;
            }
            indice++;
        }
        i++;
    }

    return arr;
}

function bubbleSortObject(arr, attr) {
    let i = 0;
    let size = arr.length;
    while (i < size - 1) {
        let indice = 0;
        while (indice < size - 1) {
            if (arr[indice][attr] > arr[indice + 1][attr]) {
                const temp = arr[indice];
                arr[indice] = arr[indice + 1];
                arr[indice + 1] = temp;
            }
            indice++;
        }
        i++;
    }

    return arr;
}

console.log(nombres);
console.log(bubbleSort(nombres));

console.log(notas);
console.log(bubbleSort(notas));

console.log(users);
console.log(bubbleSortObject(users, "rango"));
console.log(bubbleSortObject(users, "username"));

ejemplo = [5, 2, 4, 3, 6, 1];

/* 
[5, 2, 4, 3, 6, 1]
[2, 5, 4, 3, 6, 1]
[1, 5, 4, 3, 6, 2]
[1, 4, 5, 3, 6, 2]
[1, 3, 5, 4, 6, 2]
[1, 2, 5, 4, 6, 3]
[1, 2, 4, 5, 6, 3]
[1, 2, 3, 5, 6, 4]
[1, 2, 3, 5, 6, 4]
[1, 2, 3, 4, 6, 5]
[1, 2, 3, 4, 5, 6]
*/

min = 0; // 0 // 1 // 2
// i = min + 1; // 1 // 2 // 3 // 4 // 5
// i = min + 1; // 2 // 3 // 4 // 5
i = min + 1; // 3 // 4 // 5



function selectionSort(arr){
    let min = 0;
    let size = arr.length;
    while(min < size - 1 ){
        for(let i = min + 1; i < arr.length; i++){
            if(arr[min] > arr[i]){
                const temp = arr[min]; // 5
                arr[min] = arr[i]; // 5 x 2
                arr[i] = temp;
            }
        }
        min++;
    }
}

let total = 0;
for(let i = 1; i <= 10; i++){
    for(let j = 1; j <= 10; j++){
        // aqui
        total = total + 1;
    }
}
console.log(total);


let a = [2, 3, 5];
let b = [2, 4];
let c = [2, 3, 6, 1];

total = 0;
for(let i = 0; i <a.length; i++){
    for(let j = 0; j < b.length; j++){
        for(let k = 0; k < c.length; k++){
            console.log(i,"-", j, "-", k);
            total = total + 1;
        }
    }
}
console.log(total);