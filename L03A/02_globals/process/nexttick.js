process.nextTick(function () {
    console.log('next tick');
});


console.log('immediate');

process.nextTick(function () {
    console.log('after immediate');
});