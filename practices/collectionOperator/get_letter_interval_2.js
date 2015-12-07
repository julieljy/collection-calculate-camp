'use strict';

function get_letter_interval_2(number_a, number_b) {
  var letter_arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t',
  'u','v','w','x','y','z','aa', 'ab', 'ac', 'ad', 'ae', 'af', 'ag','ah', 'ai', 'aj', 'ak', 'al',
  'am', 'an', 'ao', 'ap','aq', 'ar', 'as', 'at', 'au', 'av', 'aw', 'ax', 'ay','az', 'ba']
  var letter_increase=[];
  var letter_decrease=[];
  var n=0;
  if(number_a<number_b){
    for(var i=number_a-1;i<number_b;i++){
    debugger;
      letter_increase[n]=letter_arr[i];
      n++;
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

module.exports = get_letter_interval_2;

