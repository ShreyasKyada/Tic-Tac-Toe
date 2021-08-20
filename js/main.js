const main = document.getElementsByClassName('option-container')[0];
const mainContainer = document.getElementsByClassName('option-toggle-container')[0];
const closeBtn = document.getElementsByClassName('close-btn-container')[0];
const flexMusic = document.getElementsByClassName('flex-music')[0];
const flexMusic1 = document.getElementsByClassName('flex-music')[1];
const flexMusicContainer = document.getElementsByClassName('flex-music-container')[0];
const first = document.getElementById('first');
const second = document.getElementById('second');
const forth = document.getElementById('forth');
const fifth = document.getElementById('fifth');
let f = false;
let s = false;
let f1 = false;
let s1 = false;


document.addEventListener('click', (event) => {
    if (event.target.closest('.option-toggle-container')) {
        if (event.target.closest('.close-btn-container')) {
            if (main.classList.contains('add')) {
                main.classList.remove('add');
                closeBtn.classList.remove('visible');
                flexMusic.classList.remove('visible');
                flexMusic1.classList.remove('visible');
                flexMusicContainer.classList.remove('show');
            }
        }
        else if (event.target.closest('#first')) {
            if (!f) {
                localStorage.setItem('on1', 'on1');
                first.classList.add('click');
                if (first.classList.contains('re-click'))
                    first.classList.remove('re-click');
                f = true;
            }
            else {
                first.classList.remove('click');
                first.classList.add('re-click');
                second.classList.add('click');
                second.classList.remove('re-click');
                localStorage.removeItem('on1', 'on1');
                localStorage.setItem('off1', 'off1');
                f = false;
                s = false;
            }
        }
        else if (event.target.closest('#second')) {
            if (!s) {
                second.classList.add('re-click');
                localStorage.setItem('on1', 'on1');
                localStorage.removeItem('off1', 'off1');
                first.classList.remove('re-click');
                first.classList.add('click');
                second.classList.remove('click');
                s = true;
                f = true;
            }
            else {
                s = false;
            }
        }
        else if (event.target.closest('#forth')) {
            if (!f1) {
                localStorage.setItem('on2', 'on2');
                forth.classList.add('click');
                if (forth.classList.contains('re-click'))
                    forth.classList.remove('re-click');
                f1 = true;
            }
            else {
                forth.classList.remove('click');
                forth.classList.add('re-click');
                fifth.classList.add('click');
                fifth.classList.remove('re-click');
                localStorage.removeItem('on2', 'on2');
                localStorage.setItem('off2', 'off2');
                f1 = false;
                s1 = false;
            }
        }
        else if (event.target.closest('#fifth')) {
            if (!s1) {
                localStorage.setItem('on2', 'on2');
                localStorage.removeItem('off2', 'off2');
                fifth.classList.add('re-click');
                forth.classList.remove('re-click');
                forth.classList.add('click');
                fifth.classList.remove('click');
                s1 = true;
                f1 = true;
            }
            else {
                s1 = false;
            }
        }
    }
    else if (event.target.closest('#option')) {
        main.classList.add('add');
        closeBtn.classList.add('visible');
        flexMusic.classList.add('visible');
        flexMusic1.classList.add('visible');
        flexMusicContainer.classList.add('show');
    }
    else {
        if (main.classList.contains('add')) {
            main.classList.remove('add');
            closeBtn.classList.remove('visible');
            flexMusic.classList.remove('visible');
            flexMusic1.classList.remove('visible');
            flexMusicContainer.classList.remove('show');
        }
    }
});

if (localStorage.getItem('on1') == 'on1') {
    first.classList.add('click');
    if (first.classList.contains('re-click'))
        first.classList.remove('re-click');
    f = true;
}
else {
    first.classList.remove('click');
    first.classList.add('re-click');
    second.classList.add('click');
    second.classList.remove('re-click');
}

if (localStorage.getItem('on2') == 'on2') {
    forth.classList.add('click');
    if (forth.classList.contains('re-click'))
        forth.classList.remove('re-click');
    f1 = true;
}
else {
    forth.classList.remove('click');
    forth.classList.add('re-click');
    fifth.classList.add('click');
    fifth.classList.remove('re-click');
}