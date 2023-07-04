const fs = require("fs");
const readline = require("readline");
const HelperFxn = require("./helper")
const fileStream = fs.createReadStream("./input/Typescript_OC9KBG959KH95A3K.txt");

const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity,
});

let starQuestiontReading = false;
let QuestionBlock = "";
let QuestionSection = [];

// Desired Question Block
 rl.on("line", (line) => {
  if (line.includes("Desired Question Start")) {
    starQuestiontReading = true;
    return;
  }

  if (line.includes("Desired Question End")) {
    starQuestiontReading = false;
    HelperFxn.desiredQuestionValidation(QuestionSection)
    rl.close();
    return;
  }
  if (starQuestiontReading) {
    if(line != ""){
      QuestionBlock+=line;
      QuestionSection.push(QuestionBlock); 
    }
  }

});


// Desired Answer Start

let startAnswer = false;
let AnswerBlock = "";
let AnswerSections = [];
rl.on("line", (line) => {
  if (line.includes("Desired Answer Start")) {
   
    startAnswer = true;   
    return;
  }

  if (line.includes("Desired Answer End")) {
    startAnswer = false;
    HelperFxn.desiredAnswerValidation(AnswerSections)
    rl.close();
    return;
  }

  if (startAnswer) { 
    if (line != "") {
      AnswerBlock+=line;
      AnswerSections.push(AnswerBlock);  
    }
  }
  
});



 