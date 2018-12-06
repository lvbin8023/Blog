!function () {
    // 导航栏动画
    let topNavBar = document.getElementById('topNavBar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            topNavBar.classList.add('sticky');
        } else {
            topNavBar.classList.remove('sticky');
        }
    });
}.call();