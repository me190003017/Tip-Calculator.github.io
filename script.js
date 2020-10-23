function calculateTip(){
    let billAmt = document.getElementById('billamt').value;
    let servicequal = document.getElementById('serviceQual').value;
    let num = document.getElementById('peopleamt').value;

    if(billAmt==0 || servicequal==0){
        alert("please enter values");
        return;
    }
    if(num=="" || num<=1){
        num=1;
        document.getElementById('each').style.display="none";

    }
    else{
        document.getElementById('each').style.display="block";

    }
    var total=(billAmt*servicequal)/num;
    total=Math.round(total*100) / 100;
    total=total.toFixed(2);
    document.getElementById("totalTip").style.display="block";

    document.getElementById("tip").innerHTML=total;

}
document.getElementById('totalTip').style.display = 'none';
document.getElementById('each').style.display ='none';

document.getElementById("calculate").onclick=function(){
    calculateTip();
};