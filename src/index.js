module.exports = function reverse (n) {
    let number = Math.abs(n);
    let result = ('' + number).split('').reverse().join();
    result = result.replace(/,/g, '');
    return result
}
