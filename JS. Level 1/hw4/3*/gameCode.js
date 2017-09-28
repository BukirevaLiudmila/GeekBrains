var event, ok,
    money = 0;

do {
    ok = false;
    event = +prompt(tests.a00 + tests.a1 + tests.a2 + tests.a3 + tests.a4 + '-1 - Выход из игры');
    if (event == -1) {
        break;
    }
    else {
        ok = isAnswer(tests.a0, event);
    }
} while (!ok);
switch (event) {
    case 1:
    case 2:
    case 4:
        if (event == -1) {
            break;
        }
        ok = false;
        alert('Может, в следующий раз повезёт.');
        break;
    case 3:
        money += 14;
        alert('Это удача! Вы заработали' + money + ' рублей. \nИдем дальше!');
        do {
            ok = false;
            event = +prompt(tests.b00 + tests.b1 + tests.b2 + tests.b3 + tests.b4 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(tests.b0, event);
            }
        } while (!ok);
        switch (event) {
            case 2:
            case 3:
            case 4:
                ok = false;
                alert('Поздравляем! Вы выиграли ' + money + ' рублей');
                break;
            case 1:
                money += 40;
                alert('Это удача! Вы заработали ' + money + ' рублей. \nИдем дальше!');
                do {
                    ok = false;
                    event = +prompt(tests.c00 + tests.c1 + tests.c2 + tests.c3 + tests.c4 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(tests.c0, event);
                    }
                } while (!ok);
                switch (event) {
                    case 1:
                    case 2:
                    case 3:
                        ok = false;
                        alert('Поздравляем! Вы выиграли ' + money + ' рублей');
                        break;
                    case 4:
                        money += 99;
                        alert('Поздравляем! Вы дошли до конца \nи заработали ' + money + ' рублей!');
                        break;
                    case -1:
                        break;
                    default:
                        alert('Ошибка');
                }
                break;
            case -1:
                break;
            default:
                alert('Ошибка');
        }
    break;
    case -1:
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру!');
//------------------------------------------
    function isAnswer(q, event) {
        if (isNaN(event) || !isFinite(event)) {
            alert('Вы ввели недопустимый символ');
            return false;
        }
        else if (event < 1 || event > q) {
            alert('Ваше число выходит из допустимого диапозона');
            return false;
        }
        else {
            return true;
        }
    }
