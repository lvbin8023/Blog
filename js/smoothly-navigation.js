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