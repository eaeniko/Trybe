let n = 5;
let print = "*";
let line = [' '];

// // 1
// for (let index = 0; index < n; index += 1) {
//   line += print;
// }
// for (let index = 0; index < n; index += 1) {
//   console.log(line);
// }

// 2

// for (let index = 0; index < n; index += 1) {
//   line += print;
//   console.log(line);
// }


// 3
for (let index = 0; index < n; index += 1) {
  if (index < n) {
    line.push(' ');
    console.log(line);
  } else {
    line.push(print[index]);
  }

  

}
