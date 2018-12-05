// loading页面动画加载
// let wecomePage = document.getElementById('welcomePage');
// setTimeout(function () {
//     wecomePage.classList.remove('active');
// }, 2000);

// 注册点击事件
let portfolio1 = document.getElementById('portfolio1');
let portfolio2 = document.getElementById('portfolio2');
let portfolio3 = document.getElementById('portfolio3');
let bar = document.getElementById('bar');

portfolio1.addEventListener('click', function () {
    bar.className = 'portfolioBar state-1'
});

portfolio2.addEventListener('click', function () {
    bar.className = 'portfolioBar state-2'
});

portfolio3.addEventListener('click', function () {
    bar.className = 'portfolioBar state-3'
});

