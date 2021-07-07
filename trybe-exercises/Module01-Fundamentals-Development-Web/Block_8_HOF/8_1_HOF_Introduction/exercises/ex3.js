const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnwser = (rightAn, stuAn) => {
  let points = 0;
  for (const key in rightAn) {
    if(rightAn[key] === stuAn[key]) {
      points += 1;
    } else if (rightAn[key] !== stuAn[key] && stuAn[key] !== 'N.A') {
      points -= 0.5;
    } 
  }
  return console.log(points);
}

const resultAnswers = (righAnswers, studentAnswers) => checkAnwser(righAnswers, studentAnswers);

resultAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS);