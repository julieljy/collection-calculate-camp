'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  var divisible_integer=[];
  for(var i=0;i<collection_a.length;i++){
    for(var j=0;j<collection_b.length;j++){
      if(collection_a[i]%collection_b[j]==0){
        divisible_integer.push(collection_a[i]);
      }
    }
  }
  return divisible_integer;
  //在这里写入代码
}

module.exports = choose_divisible_integer;
