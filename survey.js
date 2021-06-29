const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  'What do you listen to while doing that?',
  'Which meal is your favourite (eg: dinner, brunch, etc.)',
  "What's your favourite thing to eat for that meal?",
  'Which sport is your absolute favourite?',
  'What is your superpower? In a few words, tell us what you are amazing at!',
];

const generateProfile = (answers) =>
  `${answers[0]} loves listening to ${answers[2]} while ${answers[1]}, ` +
  `devouring ${answers[4]} for ${answers[3]}, ` +
  `prefers ${answers[5]} over any other sport, ` +
  `and is amazing at ${answers[6]}. `;

const interview = (questions) => {
  const answers = [];
  rl.question(questions[0] + '\n', (answer) => {
    answers.push(answer);
    rl.question(questions[1] + '\n', (answer) => {
      answers.push(answer);
      rl.question(questions[2] + '\n', (answer) => {
        answers.push(answer);
        rl.question(questions[3] + '\n', (answer) => {
          answers.push(answer);
          rl.question(questions[4] + '\n', (answer) => {
            answers.push(answer);
            rl.question(questions[5] + '\n', (answer) => {
              answers.push(answer);
              rl.question(questions[6] + '\n', (answer) => {
                answers.push(answer);
                console.log('\n' + generateProfile(answers));
                rl.close();
              });
            });
          });
        });
      });
    });
  });
};

interview(questions);
