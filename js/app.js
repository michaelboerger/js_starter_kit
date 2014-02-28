var randomnum = Math.floor((Math.random()*10)+1);
var name = prompt('HELLO HUMAN FRIEND, WHAT IS YOUR NAME');
var num = prompt('HELLO HUMAN FRIEND, ' + name.toUpperCase() +': PICK A NUMBER BETWEEN 1 AND 10');
do
{
  alert('NO, BAD HUMAN');
  if (num < randomnum){
    alert("MY NUMBER IS LARGER BECAUSE COMPUTERS ARE POWERFUL");
  }else {
    alert("MY NUMBER IS SMALLER BECAUSE COMPUTERS ARE CRAFTY");
  }
  num = prompt('PICK THE CORRECT NUMBER OR REPORT FOR ');
}
while (num != randomnum);
alert('VICTORY FOR THOSE WHO ARE VICTORIOUS');