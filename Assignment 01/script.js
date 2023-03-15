// function makeTxt() {
//     var textOne = 'ERROR 404!';
//     var textTwo = 'Please stay HOME!';

//     var splitOne = textOne.split('');
//     var splitTwo = textTwo.split('');
//     var arr = [splitOne, splitTwo];
//     return arr;
// }

// var array = makeTxt();
// var scroll = document.getElementById('error');
// var loop;

// var i = 0;

// function start() {
//     if (array[i].length > 0) {
//         scroll.innerHTML += array[i].shift();
//         ;
//         loop = setTimeout(start, 200);
//     }
//     else {
//         i++;
//         if (i > 2) {
//             i = 0;
//             array = makeTxt();
//         }
//         scroll.innerHTML = '';
//         start();
//     }
// }
// start();