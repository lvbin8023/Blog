!function () {
    // 添加offset类
    let specialTags = document.querySelectorAll('[data-x]');
    for (let i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.add('offset');
    }
// 固定导航栏
    setTimeout(function () {
        findClosest();
    }, 0);
    window.addEventListener('scroll', function () {
        findClosest();
    });

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
}.call();