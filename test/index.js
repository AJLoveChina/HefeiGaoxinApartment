/**
 * Created by hejie2.0 on 2017/8/24.
 */
var opn = require('opn');

alert();
function alert() {

    // opn("https://github.com?t=" + Math.random()).then(() => {
    //     process.exit(123);
    // });
    opn("../Tulips.jpg").then(() => {
        process.exit(1);
    })
}