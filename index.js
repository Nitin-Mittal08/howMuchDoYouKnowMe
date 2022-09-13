var readlineSync = require("readline-sync");
var questionArr = [{
  question:"What do I like, Tea or Coffee? ",
  answer: "Tea"
},{
  question:"What is my native place? ",
  answer:"Bathinda"
},{
  question:"Who do you like more superman or batman? ",
  answer:"Batman"
}];
var score = 0;
var highscore=2;
function quiz(question, answer){
  var userAns = readlineSync.question(question);

  if(userAns===answer){
    console.log("You are correct!");
    score++;
  }else{
    console.log("You are Incorrect");
    score--;
  }
}

for(var i= 0;i<questionArr.length;i++){
  quiz(questionArr[i].question,questionArr[i].answer);
}

console.log("Your FINAL score is:"+score);
if (score>=highscore) {
  highscore = score;
  console.log("You have beaten the highscore of "+highscore);
  console.log("Send the screenshot of your to nitin2000mittal@gmail.com");
}
