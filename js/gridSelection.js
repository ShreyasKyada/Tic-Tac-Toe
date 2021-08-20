let dropdown = document.getElementsByClassName('first-list')[0];
let text = document.getElementsByClassName('first-text')[0];
let list = document.getElementsByClassName('first-select')[0];
let select = document.getElementsByClassName('first-grid-items');
let dropdown1 = document.getElementsByClassName('second-list')[0];
let text1 = document.getElementsByClassName('second-text')[0];
let list1 = document.getElementsByClassName('second-select')[0];
let select1 = document.getElementsByClassName('second-grid-items');

let grid = '3x3';

document.addEventListener('click', (event) => {
    if (event.target.closest('.first-list')) {
        if (list.classList.contains('h')) {
            list.classList.remove('h');
            list.classList.add('hide');
        }
        else {
            list.classList.add('h');
            list.classList.remove('hide');
        }
        if (!list1.classList.contains('hide')) {
            list1.classList.add('hide');
            list1.classList.remove('h');
            list1.style.height = '0rem';
        }
    }
    else {
        list.classList.remove('h');
        list.classList.add('hide');
    }
});

for (let option of select) {
    option.onclick = function () {
        text.innerHTML = this.textContent;
        list.classList.toggle('hide');
        list.classList.remove('h');
        grid = this.textContent;
    }
}

document.addEventListener('click', (event) => {
    if (event.target.closest('.second-list')) {
        let h = 0, i = 1;
        for (option1 of select1) {
            if ((grid.charAt(0) === '1' && (grid.charAt(1) === '0' || grid.charAt(1) === '1'))) {
                option1.style.visibility = 'visible';
                h = 0.8 * i;
            }
            else if (grid.charAt(0) < option1.innerHTML) {
                option1.style.visibility = 'hidden';
            }
            else {
                option1.style.visibility = 'visible';
                h = 0.8 * i;
            }
            i++;
        }
        if (list1.classList.contains('h')) {
            list1.classList.remove('h');
            list.classList.add('hide');
            list1.style.height = '0rem';
        }
        else {
            list1.classList.add('h');
            list1.classList.remove('hide');
            list1.style.height = h + 'rem';
        }
    }
    else {
        list1.classList.remove('h');
        list1.classList.remove('hide');
        list1.style.height = '0rem';
    }
});

for (let option1 of select1) {
    option1.onclick = function () {
        text1.innerHTML = this.textContent;
        if (list1.classList.contains('hide'))
            list1.classList.remove('hide');
        if (!list1.classList.contains('hide'))
            list1.classList.add('hide');
        list1.classList.remove('h');
        list1.style.height = '0rem';
    }
}

let play = document.getElementById('single-player');
let player2TextBox = document.getElementsByClassName('player2-textbox')[0];
let p1 = document.getElementsByClassName('player1')[1];
let p2 = document.getElementsByClassName('player2')[1];

play.addEventListener('click', () => {
    let str1 = p1.value.replace(/\s+/g,' ').trim();
    let str2 = p2.value.replace(/\s+/g,' ').trim();
    if (str1.length > 0 && str2 > 0) {
        localStorage.setItem('pname1',str1);
        localStorage.setItem('pname2',str2);
        localStorage.removeItem('single');
        localStorage.removeItem('multi');
    }
    else {
        localStorage.setItem('pname1','player 1');
        localStorage.setItem('pname2','player 2');
    }
    localStorage.removeItem('single');
    localStorage.removeItem('multi');
    localStorage.setItem('grid',grid);
    localStorage.setItem('symbol', text1.textContent);
});


if (localStorage.getItem('single') === 'single') {
    player2TextBox.style.display = "none";
}