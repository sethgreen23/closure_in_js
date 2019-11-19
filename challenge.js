(function(){
    //build the question constractor
let Question=function(question,proposition,correctAnswer){
    this.question=question;
    this.proposition=proposition;
    this.correctAnswer=correctAnswer;
};
Question.prototype.randomQuestion=function(){
    
    console.log(this.question+"\n");
    for(let i=0;i<this.proposition.length;i++){
        console.log(i+": "+this.proposition[i]);
    }
}
Question.prototype.checkAnswer=function(userAnswer,callback){
    var score;
    if(this.correctAnswer==userAnswer){
        console.log("Correct Answer");
        score=callback(true);
    }else{
        console.log("Not Correct Answer");
        score=callback(false);
    }
    return this.displayScore(score);
}
Question.prototype.displayScore=function(score){
    console.log("Your current score is "+score);
    console.log("--------------------------------------------");
}
//question 1
let question1=new Question(
    "What does CSS stand for?",
    ["Computer Style Sheets","Cascading Style Sheets","Colorful Style Sheets","Creative Style Sheets"],
    1
);
//question 2
let question2=new Question(
    "What is the correct HTML for referring to an external style sheet?",
    [" <style src=\"mystyle.css\">"," <stylesheet>mystyle.css</stylesheet>"," <link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\">"],
    2
);
//question 3
let question3=new Question(
    "Where in an HTML document is the correct place to refer to an external style sheet?",
    [" <style src=\"mystyle.css\">"," <stylesheet>mystyle.css</stylesheet>"," <link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\">"],
    2
);
//question 4
let question4=new Question(
    "How'\s the creator of this course?",
    ["Jonas","Chaith","John"," James"],
    0
);
function score(){
    var sc=0;
    return function(correct){
        if (correct){
            return ++sc;
        }else{
            return sc;
        }
    }
}
let keepScore=score();
//put the questions on an array
let questions=[question1,question2,question3,question4];
function game(){
    let score=0;
    //create a random number
    let randomNum=Math.floor(Math.random()*questions.length);
    let choseAnswer=questions[randomNum];
    //display a question
    choseAnswer.randomQuestion();
    //use prompt to see check the correct answer
    let userAnswer=prompt("What is the correct answer")
    if(userAnswer!="exit"){
        choseAnswer.checkAnswer(parseInt(userAnswer),keepScore);
         game();
    }
    
}
game();

})();