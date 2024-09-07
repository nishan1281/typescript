function addHandler(n1, n2, cb) {
    var sum = n1 + n2;
    return cb(sum);
}
var data = addHandler(10, 20, function (x) {
    return x;
});
console.log(data);
