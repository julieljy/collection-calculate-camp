'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  var no_commen_elements=[];
  var check;
  for(var i=0;i<collection_a.length;i++){
    check=0;
    for(var j=0;j<collection_b.length;j++){
      if(collection_a[i]==collection_b[j]){
        check=1;
      }
    }
    if(check==0){
      no_commen_elements.push(collection_a[i]);
    }
  }
  return no_commen_elements;
  //在这里写入代码
}

module.exports = choose_no_common_elements;
