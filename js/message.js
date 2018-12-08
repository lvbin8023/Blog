!function () {
    let view = document.querySelector('section.message');
    let model = {
        init: function () {
            let APP_ID = 'OnqyMMpEE9GEff1FljRuPF5E-9Nh9j0Va';
            let APP_KEY = 'hOenA0u5I2o6RmSLSPLM3CG1';
            AV.init({appId: APP_ID, appKey: APP_KEY});
        },
        // 获取数据
        fetch: function () {
            let query = new AV.Query('Message');
            return query.find(); // Promise对象
        },
        // 创建数据
        save: function (name, content) {
            let Message = AV.Object.extend('Message');
            let message = new Message();
            return message.save({ // Promise 对象
                'name': name,
                'content': content
            })
        }
    };
    let controller = {
        view: null,
        model: null,
        init: function (view, model) {
            this.view = view;
            this.model = model;
            this.messageList = view.querySelector('#messageList');
            this.form = view.querySelector('form');
            this.model.init();
            this.loadMessages();
            this.bindEvents()
        },
        loadMessages: function () {
            this.model.fetch().then((messages) => {
                let array = messages.map((item) => item.attributes);
                array.forEach((item) => {
                    let li = document.createElement('li');
                    li.innerText = `${item.name}: ${item.content}`;
                    this.messageList.appendChild(li);
                })
            });
        },
        bindEvents: function () {
            // form表单提交数据，保存到数据表
            this.form.addEventListener('submit', (event) => {
                event.preventDefault();
                this.saveMessage();
            });
        },
        saveMessage: function () {
            let myForm = this.form;
            let name = myForm.querySelector('input[name=name]').value;
            let content = myForm.querySelector('input[name=content]').value;
            this.model.save(name, content).then(function (object) {
                let li = document.createElement('li');
                li.innerText = `${object.attributes.name}: ${object.attributes.content}`;
                let messageList = document.querySelector('#messageList');
                myForm.querySelector('input[name=content]').value = '';
                messageList.appendChild(li);
            });
        }
    };
    controller.init.call(controller, view, model);
}.call();