'use strict';

function choose_common_elements(collection_a, collection_b) {
  var commen_elements=[];
  for(var i=0;i<collection_a.length;i++){
    for(var j=0;j<collection_b.length;j++){
      if(collection_a[i]==collection_b[j]){
        commen_elements.push(collection_a[i]);
      }
    }
  }
  return commen_elements;
  //在这里写入代码
}

module.exports = choose_common_elements;
