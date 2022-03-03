let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['/', 'X', '-', '+', '+/-'];

// Экран 

const out = document.querySelector('.tablo p');

function clearAll () {
    a = ''; 
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.allclear').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    //Нажата не кнопка
    if(!event.target.classList.contains('btn')) return;
    //Нажата кнопка AC 
    if(event.target.classList.contains('allclear')) return;

    out.textContent = '';
    //Получаю нажатую кнопку 
    const key = event.target.textContent;
    
    //Если кнопк 0-9 
    if (digit.includes(key)) {
        if (b ==='' && sign === '') {
        a += key;
        console.log(a, sign, b);
        out.textContent = a;
        }

        else if (a!=='' && b!=='' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        }
        else {
            b += key;
            out.textContent = b;
        }
        console.log(a, sign, b)
        return;
    }

    //Нажата кнопка действия 

    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log(sign);
        return;
    }

    //Нажата = 

    if (key === '=') {
        switch (sign){
            case "+":
                a = (+a) + (+b);
                break;

            case "-":
                a = a - b;
                break;

            case "X":
                a = a * b;
                break;

            case "/":
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a; 
        console.log(a, sign, b)
    }
}
