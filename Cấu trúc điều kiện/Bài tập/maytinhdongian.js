function tinh(num){
    document.getElementById("cal").value +=num;
}
function tinhkq(){
    let exp=document.getElementById("cal").value;
    document.getElementById("cal").value= eval(exp);
}
function reset() {
    document.getElementById("cal").value = "";
}