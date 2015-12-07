'use strict';

function grouping_count(collection) {
  var group={};
  var n=0;
  var check;
  group.collection[0]=1;
  for(var i=1;i<collection.length;i++){
    check=0;
    for(var j=1;j<n+2;j++){
      if(collection[i]==group){
        check=1;

      }
    }
  }

  //在这里写入代码
}

module.exports = grouping_count;
