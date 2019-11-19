//function constructor
let Question=function(question,answers,correct){
    this.question=question;
    this.answers=answers;
    this.correct=correct;
}
//display question
Question.prototype.displayQuestion=function(){
    console.log(this.question);
    for(let i=0;i<this.answers.length;i++){
        console.log(i+":"+this.answers[i]);
    }
    
}
Question.prototype.checkAnswer=function(userAnswer,callback){
    let score;
    if(userAnswer==this.correct){
        console.log("Your Answer is Correct");
        score=callback(true);

    }else{
        console.log("Your Answer is Wrong!!!");
        score=callback(false);
    }
    this.displayScore(score);
}
//display score
Question.prototype.displayScore=function(score){
    console.log("Your current Score is "+score);
    console.log("-----------------------------------------");
}
//making questions
//question 1
let q1=new Question(
    "What does CSS stand for?",
    ["Computer Style Sheets","Cascading Style Sheets","Colorful Style Sheets","Creative Style Sheets"],
    1
);
//question 2
let q2=new Question(
    "What is the correct HTML for referring to an external style sheet?",
    [" <style src=\"mystyle.css\">"," <stylesheet>mystyle.css</stylesheet>"," <link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\">"],
    2
);
//question 3
let q3=new Question(
    "Where in an HTML document is the correct place to refer to an external style sheet?",
    [" <style src=\"mystyle.css\">"," <stylesheet>mystyle.css</stylesheet>"," <link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\">"],
    2
);
//question 4
let q4=new Question(
    "How'\s the creator of this course?",
    ["Jonas","Chaith","John"," James"],
    0
);
//store in the array
questions=[q1,q2,q3,q4];
//closure in action
function score(){
    var sc=0;
    return function(correct){
        if(correct){
            return ++sc;
        }else{
            return sc;
        }
    }
}
let keepScore=score();
//function the game
function game(){
    //make a random variable
    let randNumber=Math.floor(Math.random()*questions.length);
    //display the question
    questions[randNumber].displayQuestion();
    //take the answer from the user
    let userAnswer=prompt("Please give an answer?");
    if(userAnswer!=="exit"){
        //chek the answer
        questions[randNumber].checkAnswer(userAnswer,keepScore);
        game();
    }
    
}
game();
