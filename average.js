
function average(numbers) {
  const filtedList = numbers.filter( (number) =>{
    return !Number.isNaN(number);
  });
  return filtedList.reduce((p, c)=> p + c, 0) / filtedList.length;
}

module.exports = {average};
