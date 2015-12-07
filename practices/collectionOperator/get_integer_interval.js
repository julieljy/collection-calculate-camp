'use strict';

function get_integer_interval(number_a, number_b) {
var number_increase=[];
var number_decrease=[];
var n=0;
  if(number_a<number_b){
    for(var i=number_a;i<=number_b;i++){
      number_increase[n]=i;
      n++;
    }
    return number_increase;
  }
  else if(number_a>number_b){
    for(var i=number_a;i>=number_b;i--){
      number_decrease[n]=i;
      n++;
    }
    return number_decrease;
  }
  else{
    return [number_a];
  }
}

module.exports = get_integer_interval;

