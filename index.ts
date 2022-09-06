/* 
Author: Rony Garcia
Date: 5 sep 2022
Purpose: This code is compound of functions that let us get 
active records and serialize the response and sort records by a key of the object
*/
import moment from "moment";
import getActiveRecords from "./utils/activeRecords";
import IPerson from "./interfaces/IPerson";
import sortedRecords from "./utils/sortRecords";

const rockyObj: IPerson = {
    'Name': 'Rocky',
    'Favorite Food': 'Sushi',
    'Favorite Movie': 'Back to The Future',
    'Status': 'Inactive'
}
const miroslavObj: IPerson = {
    'Name': 'Miroslav',
    'Favorite Food': 'Sushi',
    'Favorite Movie': 'American Psycho',
    'Status': 'Active'
}
const donnyObj: IPerson = {
    'Name': 'Donny',
    'Favorite Food': 'Singapore chow mei fun',
    'Favorite Movie': 'The Princess Bride',
    'Status': 'Inactive'
}
const mattObj: IPerson = {
    'Name': 'Matt',
    'Favorite Food': 'Brisket Tacos',
    'Favorite Movie': 'The Princess Bride',
    'Status': 'Active'
}

// Declaring my object
const ronyObj: IPerson = {
    Name: 'Rony',
    'Favorite Food': 'Mexican Food',
    'Favorite Movie': 'Fast and Furious',
    'Status': 'Active',
}

// Declaring an array of objects that were declared before
const arrObj = [rockyObj, miroslavObj, donnyObj, mattObj, ronyObj];

// Adding Date property to every object
arrObj.forEach((person) => person.Date = moment().format('YYYY-M-D hh:mm'));

// Getting active records and serialized response
const activeObj = getActiveRecords(arrObj);
console.log('Active records: \n', activeObj);

// Getting sorted objects by key object
const sortBy = 'Name';
const sortedObj = sortedRecords(arrObj, sortBy);
console.log(`Sorted records by ${sortBy}: \n`, sortedObj);