'use strict';

function choose_even(collection) {
  var even=[];
  var n=0;
  for(var i=0;i<collection.length;i++){
    if(collection[i]%2==0){
      even[n]=collection[i];
      n++;
    }
  }
  return even;
  //在这里写入代码
}

module.exports = choose_even;
