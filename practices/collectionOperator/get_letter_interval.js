'use strict';

function get_letter_interval(number_a, number_b) {
  var letter_arr=['a', 'b', 'c', 'd', 'e'];
  var letter_increase=[];
  var letter_decrease=[];
  var n=0;
  if(number_a<number_b){
    for(var i=number_a-1;i<number_b;i++){
      letter_increase[i]=letter_arr[i];
    }
    return letter_increase;
  }
  else if(number_a>number_b){
    for(var i=number_a-1;i>=number_b-1;i--){
      letter_decrease[n]=letter_arr[i];
      n++;
    }
    return letter_decrease;
  }
  else{
    return [letter_arr[number_a-1]];
  }
  //在这里写入代码
}

module.exports = get_letter_interval;
