let cartQuantity =0;

function showQuantity() {
    document.getElementById("quantity").textContent = cartQuantity;
}

function plusOne(){
    cartQuantity +=1;
}

function plusTwo(){
    cartQuantity +=2;
}

function plusThree(){
    cartQuantity+=3;
}

function reset(){
    cartQuantity=0;
}