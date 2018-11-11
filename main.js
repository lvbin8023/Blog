// loading页面动画加载
// let wecomePage = document.getElementById('welcomePage');
// setTimeout(function () {
//     wecomePage.classList.remove('active');
// }, 2000);

// 添加offset类
let specialTags = document.querySelectorAll('[data-x]');
for (let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset');
}

// 固定导航栏
setTimeout(function () {
    findClosest();
}, 0);
let topNavBar = document.getElementById('topNavBar');
window.onscroll = function () {
    if (window.scrollY > 0) {
        topNavBar.classList.add('sticky');
    } else {
        topNavBar.classList.remove('sticky');
    }
    findClosest();
};

function findClosest() {
    let specialTags = document.querySelectorAll('[data-x]');
    let minIndex = 0;
    for (let i = 1; i < specialTags.length; i++) {
        if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
            minIndex = i;
        }
    }
    // minIndex就是离窗口顶部最近的元素
    specialTags[minIndex].classList.remove('offset');
    let id = specialTags[minIndex].id;
    let a = document.querySelector('a[href="#' + id + '"]');
    let li = a.parentNode;
    let liBrothers = li.parentNode.children;
    console.log(liBrothers);
    for (let j = 0; j < liBrothers.length; j++) {
        liBrothers[j].classList.remove('hightLight');
    }
    li.classList.add('hightLight');
}

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
        let top = document.querySelector(event.currentTarget.getAttribute('href')).offsetTop;

        // 设置循环动画
        function animate(time) {
            requestAnimationFrame(animate);
            TWEEN.update(time);
        }

        requestAnimationFrame(animate);

        let currentTop = window.scrollY;
        let targetTop = top - 80;
        let coords = {y: currentTop}; // 起始点
        let tween = new TWEEN.Tween(coords)
            .to({y: targetTop}, 500)
            .easing(TWEEN.Easing.Quadratic.InOut) // 使用缓动功能使的动画更加平滑
            .onUpdate(function () {
                window.scrollTo(0, coords.y);
            })
            .start(); // 立即开始 tween
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