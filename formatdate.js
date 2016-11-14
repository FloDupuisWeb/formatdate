/**
 * Format a Date object
 *
 * Created in 2016
 * Version 1.0
 * 
 * @author FloDupuisWeb
 *
 */

var formatDate = (function(){
  'use strict';
  var self = {};
  
  // Many templates to format the date (french format)
  var templates = {
    tinydate: "dd/mm/yy",
    shortdate: "dd/mm/yyyy",
    mediumdate: "dd mmm yyyy",
    longdate: "dd mmmm yyyy",
    fulldate: "dddd dd mmmm yyyy",
    shorttime: "hh:ii",
    mediumtime: "hh:ii:ss",
    complete: "dddd dd mmmm yyyy, hh:ii:ss"
  };
  
  // French labels to format the date
  var labels = {
    shortday : ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
    day: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
    shortmonth: ["Jan", "Fev", "Mar", "Avr", "Mai", "Juin", "Juil", "Aout", "Sep", "Oct", "Nov", "Dec"],
    month: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
  };
  
  // Function can add zero before a string
  function pad(val, len){
    val = String(val);
    len = len || 2;
    while (val.length < len) val = "0" + val;
    return val;
  }
  
  // Function to format the date
  self.format = function( date , mask ){
    var regExp = /d{2,4}|m{1,4}|y{2,4}|[his]{2}/g;
    
    // if isset a template for this mask
    mask = templates[mask] || mask;

    // if we have no date, we take tomorrow date
    date = date || new Date();

    // functions on date object
    var fct = {
      day: date.getDay(),
      date: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };

    // flags can be used in this object
    var flags = {
      d: fct.date,
      dd: pad( fct.date ),
      ddd: labels.shortday[fct.day],
      dddd: labels.day[fct.day],
      m: fct.month + 1,
      mm: pad( fct.month + 1 ),
      mmm: labels.shortmonth[fct.month],
      mmmm: labels.month[fct.month],
      yy: String(fct.year).substr(2),
      yyyy: fct.year,
      hh: pad(fct.hour),
      ii: pad(fct.minute),
      ss: pad(fct.second)
    };

    // replace flags with date infos
    return mask.replace( regExp , function(i){
      return i in flags ? flags[i] : i.slice(1, i.length - 1);
    });
  };
  
  return self;
})();

// Update Date object to have our formatDate module
Date.prototype.format = function( mask ){
  return formatDate.format( this , mask );
};
