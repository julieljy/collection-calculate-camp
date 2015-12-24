'use strict';

function grouping_count(collection) {
  var group={};
  var keys=[];
  var check;
  debugger;
  var a=collection[0].toString()
  group[a]=1;
  for(var i=1;i<collection.length;i++){
    check=0;
    for(var key in group){
      keys.push(key);
      for(var j=0;j<keys.length;j++){
        if(collection[i]==keys[j]){
          group.keys[j]++;
          check=1;
        }
      }
      if(check==0){
        a=collection[i].toString()
        group.[a]=1;
      }
    }
  }
  return group;
  //在这里写入代码
}

module.exports = grouping_count;
