exports.a = function () {
    console.log('a called');
    console.log('module.exports vs exports',(module.exports===exports));
    console.log('global.module vs module',(global.module===module));

};

exports.b = function () {
    console.log('b called');
};