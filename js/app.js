var playAgain = 'yes'
var max = 10;
var randomnum = Math.floor((Math.random()*max)+1);
var name = prompt('HELLO HUMAN FRIEND, WHAT IS YOUR NAME');
alert('FANTASTIC NAME ' + name.toUpperCase() + '!');
do
{
  if (playAgain.toLowerCase()  == 'yes') {
    alert('TIME TO PLAY');
  } else{
    alert('YOU SAID ' + playAgain.toUpperCase() + ' AND I AM TAKING THAT AS A YES.');
  }
  var counter = 0;
  var num = prompt('HUMAN FRIEND, ' + name.toUpperCase() +': PICK A NUMBER BETWEEN 1 AND ' + max + '!');
  do
  {
    if (num == randomnum){
      break;
    }else if (num < randomnum){
      alert("MY NUMBER IS LARGER BECAUSE COMPUTERS ARE POWERFUL");
      counter++
    }else {
      alert("MY NUMBER IS SMALLER BECAUSE COMPUTERS ARE CRAFTY");
      counter++
    }
    num = prompt('PICK THE CORRECT NUMBER');
  }
  while (num != randomnum);
  counter++
  alert('VICTORY FOR THOSE WHO ARE VICTORIOUS, IT TOOK YOU ' + counter + ' GUESSES!');
    if (counter === 1){
      alert('WHOA FIRST GUESS!');
    }else if (counter < max/2){
      alert('WELL PLAYED ' + name.toUpperCase());
    }else {
      alert(counter + ' GUESSES? BAD JOB ' + name.toUpperCase());
    }
  playAgain = prompt('PLAY AGAIN? YES OR NO')
}
while (playAgain.toLowerCase() != 'no')