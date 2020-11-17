

let buttonplus = document.getElementsByClassName("plus");
for (let plus of buttonplus) {
    plus.addEventListener("click", function () {
        plus.previousElementSibling.value++;
        shoppingTotal();
    });
}

let buttonminus = document.getElementsByClassName("minus");
for (let minus of buttonminus) {
    minus.addEventListener("click", function () {
        minus.nextElementSibling.value--;
        shoppingTotal();
    });
}

let buttonremove = document.getElementsByClassName("fa-trash-alt");
for (let rmv of buttonremove) {
    rmv.addEventListener("click", function () {
        rmv.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
        shoppingTotal();
        console.log(rmv)
    });
}

let hearts = document.getElementsByClassName("fa-heart");
for (let heart of hearts) {
    heart.addEventListener("click", function () {
        if (heart.style.color != "red") {
            heart.style.color = "red";
        } else {
            heart.style.color = "black";
        }
    });
}

function shoppingTotal() {
    let quantity = document.getElementsByName("quantity");
    let prices = document.getElementsByName("price");
    let total = document.getElementById("total");
    let sum = 0;
    for (let i = 0; i < prices.length; i++) {
        sum += quantity[i].value * prices[i].innerHTML;
    }
    return total.innerHTML = sum.toFixed(2) + ' TND';

}
