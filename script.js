var counter = 0;
//constractor to store the question and answer
var Question = function(question , ans, correct){
    this.question = question;
    this.ans = ans;
    this.correct = correct;
}
//select random Question
Question.prototype.randQue = function(){
    console.log(this.question);
    for(var i = 0;i<this.ans.length ; i++){
        console.log(i+ ' : ' + this.ans[i]);
    }
    this.selAns = prompt("please input the number");
    this.check();
}
//chack if answer is wwrong or correct
Question.prototype.check = function(){
    if(this.selAns != 'exist'){
        if(this.selAns == this.correct){
            counter++;
            console.log("its correct!: " + counter );
        }else{
            counter--;
            console.log("its wrong :'(: " + counter);
        }
    
        console.log("-------------------------");
        randQue();
    }else{
        console.log("nooooob");
    }
}
function randQue(){
    var n = Math.floor(Math.random() * storeQue.length);
    storeQue[n].randQue();
}

//write the question and answer , they are instance to Question constractor
var q1 = new Question('is javaScrapt is good langoage? ' , ['yes' , 'no'], 0);
var q2 = new Question("what's ur name?" , ['mohmed', 'kamal', 'anas'] ,  0);
var q3 = new Question("what's ur favorate color?" , ['blue' , 'black', 'red'], 1);
var q4 = new Question("whats the name if this courses's teacher?" ,['john' , 'mark', 'jones'], 2);
var storeQue = [q1 ,q2 ,q3 ,q4];
randQue();