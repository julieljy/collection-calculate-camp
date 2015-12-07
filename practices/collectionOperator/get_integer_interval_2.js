'use strict';

function get_integer_interval_2(number_a, number_b) {
  var even_number_increase=[];
  var even_number_decrease=[];
  var n=0;
  if(number_a<number_b){
    for(var i=number_a;i<=number_b;i++){
      if(i%2==0){
        even_number_increase[n]=i;
        n++;
      }
    }
    return even_number_increase;
  }
  else if(number_a>number_b){
    for(var i=number_a;i>=number_b;i--){
        if(i%2==0){
          even_number_decrease[n]=i;
          n++;
        }
    }
    return even_number_decrease;
  }
  else{
    return [number_b];
  }
  //在这里写入代码
}



module.exports = get_integer_interval_2;
