// Kata1 forEach();
const cohortThreeNames = ["Michael", "James", "Lea", "Carl", "Doug"]

function forEach(cohortThreeNames) {
    document.write("<br>" + "Hello my name is " + cohortThreeNames + "." + "</br>")
}

function input() {
    for (let i = 0; i < cohortThreeNames.length; i++) {
        forEach(cohortThreeNames[i])
    }
}
input();

// Kata2 map();
let array = [1, 2, 3, 4]

function map() {
    for (let incrementer of array) {
        incrementer += 1;
        document.write("<br>" + incrementer + "</br>");
    }
}
map();

// function map(array, callBack) {
//     for (let i = 0; i < hours.length; i++) {
//         array = hours[i]
//         callBack (array, i, hours)
//     }
// }

// Kata3 some
function some(array, callBack) {
    for (let i = 0; i < array.length; i++) {
        const arrayFind = array[i];
        if (arrayFind === array[i]) {
            return true;
        } else if (arrayFind !== array[i]) {
            return false;
        }
        callBack(arrayFind, i, array);
    }
}

// function some(findEvens) {
//     if (findEvens % 2 === 0) {
//     document.write("true");
//     } else {
//         document.write("false");
//     }
// }

//Katas4 find()
function find(array, callBack) {
    for (let i = 0; i < array.length; i++) {
        const arraySearch = array[i];
        if (arraySearch[i] === array[i]) {
            return arraySearch;
        } else if (arraySearch !== array[i]) {
            return "undefined";
        }
    }
    callBack(arraySearch, i, array);
}

//Katas5 findIndex()
function findIndex(array, callBack) {
    for (let i = 0; i < array.length; i++) {
        const arrayIndex = array[i];
        if (arrayIndex[i] === array[i]) {
            return arrayIndex[i]
        } else if (arrayFind !== array[i]) {
            return -1;
        }
    }
    callBack(arrayIndex, i, array)
}

//Katas6 every()
function every(array, callBack) {
    for (let i = 0; i < array.length; i++) {
        const every = array[i];
        if (every === array) {
            return true;
        } else if (every !== array[i]) {
            return false;
        }
    }
    callBack(every, i, array)
}
