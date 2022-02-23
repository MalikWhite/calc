let a = ''; //first number
let b = ''; //second number
let sign = ''; // math operator
let finish = false;

function allClear() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const action = ['+', '-', 'X', '/', '%'] 

// вывод на экран 

const out = document.querySelector('.calc-screen');



document.querySelector('.btn-reset').onclick = allClear;

const calcBtns = document.querySelector('.calc-buttons')
calcBtns.addEventListener('click', (event) => {
    if (!event.target.classList.contains('btn')) return;
    if (event.target.classList.contains('btn-reset')) return;
    out.textContent = '';
    const key = event.target.textContent

    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key
            out.textContent = a;
        } else if (a !== '' && b !== '' && finish) {
            b = key
            finish = false
            out.textContent = b;
        } else {
            b += key;
            out.textContent = b;
        }
        console.log(a, b, sign);
        return
    }
    if (action.includes(key)) {
        sign = key
        out.textContent = sign;
        return
    }


    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = a - b;
                break;
            case 'X':
                a = a * b;
                break;
            case '/':
                if (b === '0') {
                    out.textContent = 'Ошибка';
                    a = '';
                    b = '';
                    sign = '';
                    return
                }
                a = a / b;
                break;
            case '%':
                a = a % b;
                break;

        }
        finish = true;
        out.textContent = a;
    }
})


// change theme

const switchMode = document.getElementById('switch-mode')

switchMode.addEventListener('click', ()=>{
    let theme = document.getElementById('theme');
    if(theme.getAttribute('href') === './css/dark-theme.css'){
        theme.href = './css/light-theme.css'
    } else {
        theme.href = './css/dark-theme.css'
    }
    reset;
})
