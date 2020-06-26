function get(num){
    var result = document.getElementById("yes");
    result.value += num;
}
function getl(){
    var result = document.getElementById("yes");
    result.value = " ";
}
function getr(){
    var result = document.getElementById("yes");
    result.value = eval(result.value) ;
}
