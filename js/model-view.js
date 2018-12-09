window.model = function (options) {
    let resourceName = options.resourceName;
    return {
        init: function () {
            let APP_ID = 'OnqyMMpEE9GEff1FljRuPF5E-9Nh9j0Va';
            let APP_KEY = 'hOenA0u5I2o6RmSLSPLM3CG1';
            AV.init({appId: APP_ID, appKey: APP_KEY});
        },
        fetch: function () {
            let query = new AV.Query(resourceName);
            return query.find(); // Promise对象
        },
        save: function (object) {
            let Message = AV.Object.extend(resourceName);
            let message = new Message();
            return message.save(object)
        }
    }
};

window.View = function (selector) {
    return document.querySelector(selector);
};