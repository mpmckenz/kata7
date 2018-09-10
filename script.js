// Kata1 forEach();
const cohortThreeNames = ["Michael", "James", "Lea", "Carl", "Doug"]

function forEach (cohortThreeNames) {
    console.log("Hello my name is " + cohortThreeNames + ".")
}

function input () {
    for (let i = 0; i < cohortThreeNames.length; i++) {
    forEach(cohortThreeNames[i])
    }
}
input();

// Kata2 map();
function map(array, callBack) {
    for (let i = 0; i < hours.length; i++) {
        array = hours[i]
        callBack (array, i, hours)
    }
}

// Kata3 some
let findEvens = [1, 3, 5, 6, 7, 9, 11]

function some (element) {
    console.log(element % 2 === 0);
}