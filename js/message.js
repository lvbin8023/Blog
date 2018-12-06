let APP_ID = 'OnqyMMpEE9GEff1FljRuPF5E-9Nh9j0Va';
let APP_KEY = 'hOenA0u5I2o6RmSLSPLM3CG1';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});
console.log('运行到这里没有出错');

// 创建TestObject表
let TestObject = AV.Object.extend('jack');
// 在表中创建一行数据
let testObject = new TestObject();
// 数据内容是：words:'Hello World'，保存到TestObject表中
// 如果运行成功，那么就执行alert
testObject.save({
    words: 'Hello World!',
    name:'lvbin'
}).then(function(object) {
    alert('LeanCloud Rocks!');
});