!function () {
    let view = document.querySelector('#topNavBar');
    let controller = {
        view: null,
        init: function (view) {
            this.view = view;
            this.bindEvents.call(this);
        },
        bindEvents: function () {
            // 导航栏动画
            window.addEventListener('scroll', () => {
                if (window.scrollY > 0) {
                    this.active();
                } else {
                    this.deactive();
                }
            });
        },
        active: function () {
            this.view.classList.add('sticky');
        },
        deactive: function () {
            this.view.classList.remove('sticky');
        }
    };
    controller.init.call(controller, view);
}.call();