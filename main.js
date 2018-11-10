// loading页面动画加载
let wecomePage = document.getElementById('welcomePage');
setTimeout(function () {
    wecomePage.classList.remove('active');
}, 2000);

// 固定导航栏
let topNavBar = document.getElementById('topNavBar');
window.onscroll = function () {
    if (window.scrollY > 0) {
        topNavBar.classList.add('sticky');
    } else {
        topNavBar.classList.remove('sticky');
    }
};

// 下拉菜单
let liTags = document.querySelectorAll('nav.menu > ul >li');
for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (event) {
        let li = event.currentTarget;
        li.classList.add('active');
    };
    liTags[i].onmouseleave = function () {
        let li = event.currentTarget;
        li.classList.remove('active');
    }
}

// 锚点跳转
let aTags = document.querySelectorAll('nav.menu > ul >li >a');
for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (event) {
        event.preventDefault();
        let a = event.currentTarget;
        let href = a.getAttribute('href');
        let element = document.querySelector(href);
        let top = element.offsetTop - 80;
        window.scrollTo(0, top);
    }
}


// 注册点击事件
let portfolio1 = document.getElementById('portfolio1');
let portfolio2 = document.getElementById('portfolio2');
let portfolio3 = document.getElementById('portfolio3');
let bar = document.getElementById('bar');

portfolio1.onclick = function () {
    bar.className = 'portfolioBar state-1'
};

portfolio2.onclick = function () {
    bar.className = 'portfolioBar state-2'
};

portfolio3.onclick = function () {
    bar.className = 'portfolioBar state-3'
};