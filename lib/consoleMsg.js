/**
 * Runs a message in console letting user know app is running
 * @param {Number} portNum - listening port
 * @param {Number} speed - interval
 */
module.exports = function runConsoleMsg(portNum, speed) {
    console.log(`Node server listening on port ${portNum}`);
    let dot = '';
    const message = `Node server listening on port ${portNum}`;
    setInterval(() => {
        console.clear();
        console.log(message + dot);
        dot.length > 2 ? dot = '' : dot += '.';
    }, speed);
}
