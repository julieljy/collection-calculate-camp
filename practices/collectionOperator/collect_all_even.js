'use strict';
function collect_all_even(collection) {
var n=0;
var even_number=[];
  for( var i=0;i<collection.length;i++){
    if(collection[i]%2==0){
      debugger;
      even_number[n]=collection[i];
      n++;
    }
  }
return even_number;
  //在这里写入代码
}

module.exports = collect_all_even;
