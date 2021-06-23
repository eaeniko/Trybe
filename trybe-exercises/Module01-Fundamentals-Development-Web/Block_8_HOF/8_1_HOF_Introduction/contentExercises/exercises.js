const wakeUp = () => console.log('Acordando');
const callBreakfeast = () => console.log('Bora tomar café!!');
const sleep = () => console.log('Partiu dormir!!');
const doingThings = (callback) => {
  callback();
}
doingThings(sleep);