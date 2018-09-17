exports.handler = (event, context, callback) => {
    // TODO implement
    let min=5
    let max=20
    let generateNumber = Math.floor(Math.random() *max) + min;
    callback(null, generateNumber);
};