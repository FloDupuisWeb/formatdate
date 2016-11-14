# formatDate : module to format a Date Object in Javascript
formatdate.js permit you to format a Date Object in Javascript.
Just create a Date Object and call `.format('template')` to have a readable date.

## Installation
Download formatdate.js and call it in your HTML page

## How use it ?
Just create a Date Object and call our function, like :
`var myDate = new Date();
console.log( "My date in format dd/mm/yyyy :: " + myDate.format( 'shortdate' ) );`

## Flags description
- d : Return the day of the month (1 - 31)
- dd : Return the day of the month with zero before (01 - 31)
- ddd : Return the short name of the day (ex: "Lun" for "Lundi")
- dddd : Return the name of the day (ex: "Lundi")

## Few examples
