function even() {
    let evennum = '';
    for(let i= 1 ; i<= 20;i++){
        if(i%2==0){
           evennum+= i + ' ';
        }
    }
    document.getElementById("output").innerHTML=  evennum;
  }