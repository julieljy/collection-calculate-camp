'use strict';

function choose_multiples_of_three(collection) {
  var multiples_of_three=[];
  var n=0;
  for(var i=0;i<collection.length;i++){
    if(collection[i]%3==0){
      multiples_of_three[n]=collection[i];
      n++;
    }
  }
  return multiples_of_three;
  //在这里写入代码
}

module.exports = choose_multiples_of_three;
