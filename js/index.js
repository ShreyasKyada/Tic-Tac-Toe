const single = document.getElementsByClassName('btn1')[0];
const multi = document.getElementsByClassName('btn2')[0];


single.addEventListener('click', () => {
    localStorage.setItem('single','single');
    localStorage.removeItem('multi','multi');
});

multi.addEventListener('click', () => {
    localStorage.setItem('multi','multi');
    localStorage.removeItem('single','single');
});