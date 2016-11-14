# formatDate : module to format a Date Object in Javascript
formatdate.js permit you to format a Date Object in Javascript.
Just create a Date Object and call `.format('template')` to have a readable date.

## Installation
Download formatdate.js and call it in your HTML page

## How use it ?
Just create a Date Object and call our function, like :
```
var myDate = new Date();
console.log( "My date in format dd/mm/yyyy :: " + myDate.format( 'shortdate' ) );
```

## Flags description
- d : Return the day of the month (1 - 31)
- dd : Return the day of the month with zero before (01 - 31)
- ddd : Return the short name of the day (ex: "Lun" for "Lundi")
- dddd : Return the name of the day (ex: "Lundi")
- m : Return the number of the month (1 - 12)
- mm : Return the number of the month with zero before (01 - 12)
- mmm : Return the short name of the month (ex: "Jan" for "Janvier")
- mmmm : Return the name of the month (ex: "Janvier")
- yy : Return the short year (ex: 16 for 2016)
- yyyy : Return the year
- hh : Return hours with zero before (00 - 23)
- ii : Return minutes with zero before (00 - 59)
- ss : Return seconds with zero before (00 - 59)

## Templates
We add many templates to facilitate date formatting : `myDate.format("mediumdate")`will return `14 Nov. 2016`

## Few examples
```
var now = new Date();
now.format("dd/mm/yyyy"); // Return "14/11/2016"
now.format("fulldate"); // Return "Lundi 14 Novembre 2016"
now.format("Le dd/mm/yy à hh:ii"); // Return "Le 14/11/16 à 13:37"
```
