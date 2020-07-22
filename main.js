"use strict";

/*
const ageCheck = (age) => {
    if (age < 21) {
        console.log("No drinks for you!")
    } else {
        console.log("Party!")
    }
}


ageCheck(12)
ageCheck(21)


const lengthOutPut = (string) => {
    return string.length
}

console.log(lengthOutPut("jordan"))


const quoteFinder = (testString) => {
    return "winter is coming".indexOf(testString)
}

console.log(quoteFinder('is'))
*/

const employee = {
    firstName: 'Jordan',
    lastName: 'Smith',
    role: 'Student',
    accountNumber: '8675309',
    isManager: false,
    titles: ['Musician', 'Gardener'],
    accolade: {
        title: 'Employee of the Year',
        dateEarned: '1/2/2020',
        expires: '12/31/2020',
        isCool: true
    }
}

console.log(employee.firstName)
const keyToCheck = 'accolade';

console.log(employee[keyToCheck]['isCool'])
console.log(employee.accolade.isCool)

const employeeStatus = (myStatus) => {
    if (myStatus.firstName[0] === 'J'){
        myStatus.status = 'vip'
    } else {
        myStatus.status = 'peasant'
    }
}

console.log(employee.status)