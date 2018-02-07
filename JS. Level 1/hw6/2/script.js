document.addEventListener("DOMContentLoaded", function () {
    var buttonsBuy = document.getElementsByClassName('buy');
    for (var i = 0; i < buttonsBuy.length; i++) {
        buttonsBuy[i].addEventListener('click', addToBasket)
    }

    function addToBasket(e) {
        for (var i = 0; i < e.target.parentElement.children.length; i++) {
            if (e.target.parentElement.children[i].tagName == 'H3') {
                var nameText = e.target.parentElement.children[i].textContent;
            } else if ((e.target.parentElement.children[i].className == 'price')) {
                var priceValue = e.target.parentElement.children[i].textContent;
            }
        }

        var basket = document.querySelector('.basket');
        var newProduct = document.createElement('div');
        newProduct.classList.add('new-product');
        basket.appendChild(newProduct);

        var name = document.createElement('div');
        name.innerText = nameText;
        newProduct.appendChild(name);

        var price = document.createElement('div');
        price.classList.add('price-value');
        price.innerText = priceValue;
        newProduct.appendChild(price);

        //сумма
        var sum = 0;
        var prices = document.getElementsByClassName('price-value');
        var masSum = [];
        for (var i = 0; i < prices.length; i++) {
            masSum[i] = parseInt(prices[i].innerText);
            sum = sum + masSum[i]
        }

        var sumDiv = document.querySelector('.sum');
        sumDiv.innerText = 'Сумма: ' + sum;
    }

})
