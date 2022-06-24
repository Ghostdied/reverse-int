module.exports = function reverse(n) {
    let result = ''
    if (n < 0) {
        return (n * -1).toString().split('').reverse().join('')
    } else {
        return n.toString().split('').reverse().join('')
    }

}