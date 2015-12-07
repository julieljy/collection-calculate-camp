'use strict';

function choose_no_repeat_number(collection) {
  var no_repeat=[];
  var n=0;
  var check;
  no_repeat[0]=collection[0];
  for(var i=1;i<collection.length;i++){
    check=0;
    for(var j=0;j<n+1;j++){
      if(collection[i]==no_repeat[j]){
        check=1;
      }
    }
    if(check==0){
      n++;
      no_repeat[n]=collection[i];
    }
  }
  return no_repeat;
  //在这里写入代码
}

module.exports = choose_no_repeat_number;
