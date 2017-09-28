var mas = [3, 24, 647, 1000];
for (var i = 0; i < mas.length; i++) {
  console.log('Число ' + mas[i] + ': ' + JSON.stringify(numToObj(mas[i])));
}

function numToObj(num) {
    var objNum = {};
    if (num > 999) {
        console.log('Число больше 999');
    } else {
        var strNum = num.toString();
        var sizeNum =  strNum.length;
        if (sizeNum == 3) {
            objNum['единицы'] = +strNum.charAt(2);
            objNum['десятки'] = +strNum.charAt(1);
            objNum['сотни'] = +strNum.charAt(0);
        } else {
            if (sizeNum == 2) {
                objNum['единицы'] = +strNum.charAt(1);
                objNum['десятки'] = +strNum.charAt(0);
            } else {
                objNum['единицы'] = num;
                objNum['десятки'] = 0;
            }
            objNum['сотни'] = 0;
        }
    }
    return objNum;
}
