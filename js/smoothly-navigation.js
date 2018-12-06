!function () {
    let view = document.querySelector('nav.menu');
    let controller = {
        view: null,
        init: function (view) {
            this.view = view;
            this.initAnimation();
            this.bindEvents();
        },
        initAnimation: function () {
            // 设置循环动画
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }

            requestAnimationFrame(animate);
        },
        scrollToElement: function () {
            let top = document.querySelector(event.currentTarget.getAttribute('href')).offsetTop;
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
        },
        bindEvents: function () {
            // 锚点跳转
            let aTags = this.view.querySelectorAll('nav.menu > ul >li >a');
            for (let i = 0; i < aTags.length; i++) {
                aTags[i].onclick = (event) => {
                    event.preventDefault();
                    this.scrollToElement();
                }
            }
        }
    };
    controller.init.call(controller, view);
}.call();