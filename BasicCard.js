const inquirer = require('inquirer');

// getting questions

var data = require('./questions.js');

var RealQuestions = data.RealQuestions;
var StudyQuestions = data.StudyQuestions;
var QuestionsOne = data.QuestionsOne;

first();


function user() {
    var command = process.argv[2];

    console.log("Was not able to quite finish this feature and run project again")
    if (command === 'q1 front') {

        console.log(QuestionsOne.front)

    } else {


        process.exit();

    }


}
//function user(){
//var command = process.argv[2];

//console.log("questions number is like q1 front run command q1 front")
//if(command === 'q1 front') {

//console.log(QuestionsOne.front)

//}

//else{




//}


//}

function first() {

    inquirer
        .prompt([{
            name: 'action',
            type: 'list',
            message: 'Pik user if you want to see questions for everything else.',
            choices: ['user', 'everything']
        }]).then(function(answer) {
            if (answer.action === 'user') {
                user();
            } else if (answer.action === 'everything') {

                choice();
            } else if (answer.action === 'FNB') {


            } else {
                process.exit();
            }
        });
}



function choice() {
    inquirer
        .prompt([{
            name: 'action',
            type: 'list',
            message: 'What would you like to do?',
            choices: ['Study', 'Flash', 'FNB', 'Stop Studying']
        }]).then(function(answer) {
            if (answer.action === 'Study') {
                studyCards();
            } else if (answer.action === 'Flash') {

                realCards();
            } else if (answer.action === 'FNB') {

                user();
            } else {
                console.log("========>>>>>>Run Node BasicCard.js to start the program again<<<<<<<<<====")
                process.exit();
            }
        });
}


//function FNB() {

//  user();
// body...
//}

////////////////////////////////////////////



///////////////////////////////////////////////

//realCards should happen when you click flash

/////////////////////////////////////////////////////////////////////



function realCards() {
    inquirer
        .prompt([{
            name: 'CardQ',
            type: 'list',
            message: 'Pick a questions any questions',
            choices: [RealQuestions[0].flash, RealQuestions[1].flash, RealQuestions[2].flash, RealQuestions[3].flash, RealQuestions[4].flash, RealQuestions[5].flash]
        }]).then(function(answer) {
            RealQuestions.forEach(function(card) {
                if (answer.CardQ === card.flash) {
                    inquirer.prompt([{
                        name: 'CardAn',
                        type: 'list',
                        message: 'Answer at your will',
                        choices: [RealQuestions[3].an, RealQuestions[0].an, RealQuestions[2].an, RealQuestions[4].an, RealQuestions[1].an, RealQuestions[5].an]
                    }]).then(function(answers) {
                        if (answers.CardAn === card.an) {
                            console.log('\n-------That is correct Now learn more---------\n');
                        } else {
                            console.log(`\nThat is wrong,`);
                        }
                        choice();
                    });
                }
            });
        });
}

/////////////////////////////////////////////////////////////////////////////

function studyCards() {
    inquirer
        .prompt([{
            name: 'questions',
            type: 'list',
            message: 'What is on the mind?',
            choices: [StudyQuestions[0].front, StudyQuestions[1].front, StudyQuestions[2].front, StudyQuestions[3].front, StudyQuestions[4].front, StudyQuestions[5].front]
        }]).then(function(answer) {
            StudyQuestions.forEach(function(card) {
                if (answer.questions === card.front) {
                    inquirer.prompt([{
                        name: 'guess',
                        type: 'list',
                        message: 'Answer at your will?',
                        choices: [StudyQuestions[2].back, StudyQuestions[0].back, StudyQuestions[3].back, StudyQuestions[1].back, StudyQuestions[4].back, StudyQuestions[5].back]
                    }]).then(function(answers) {
                        if (answers.guess === card.back) {
                            console.log('\n-------That is correct Now learn more---------\n');
                        } else {
                            console.log(`\nThat is wrong, the correct answer to that questions is\n =====> ${card.back} <=====\n`);
                        }
                        //Restart App
                        choice();
                    });
                }
            });
        });
}