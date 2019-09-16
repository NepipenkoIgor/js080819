const buffer = (function makeBuffer() {
    let cache = [];

    function fn(value) {
        if (!value) {
            return cache.join(' ');
        }
        cache.push(value);
    }

    fn.clear = function () {
        cache = [];
    };

    return fn;
})();
buffer('JS');
buffer('TS');
console.log(buffer());
buffer.clear();
console.log(buffer());
