'use strict';

function get_intersection(collection_a, collection_b) {
  var intersection=[];
  var n=0;
  for(var i=0;i<collection_b.length;i++){
    for(var j=0;j<collection_a.length;j++){
      if(collection_a[j]==collection_b[i]){
        intersection[n]=collection_a[j];
        n++;
      }
    }
  }
  return intersection;
  //在这里写入代码
}

module.exports = get_intersection;
