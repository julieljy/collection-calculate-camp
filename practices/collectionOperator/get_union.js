'use strict';

function get_union(collection_a, collection_b) {
  var union=collection_a;
  var n=collection_a.length;
  for(var i=0;i<collection_b.length;i++){
    var check=0;
    for(var j=0;j<collection_a.length;j++){
      if(collection_a[j]==collection_b[i]){
        check=1;
      }
    }
    debugger;
    if(check==0){
      union[n]=collection_b[i];
      n++;
    }
  }
  return union;
  //在这里写入代码
}

module.exports = get_union;

