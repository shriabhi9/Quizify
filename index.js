let readlineSync = require("readline-sync");
let score = 0;
let userName = readlineSync.question("What is your name? ")
console.log(`Welcome to marvel, ${userName}`)

/** Databases */
const database = {
  data: [
    {
      Question: `Who is the billionaire genius and armored superhero known as Iron Man?`,
      options: {
        a: "Steve Rogers",
        b: "Tony Stark",
        c: "Bruce Banner",
        d: "Peter Parker"
      },
      correctAnswer: "b"
    },
    {
      Question: "What is the real name of the Norse God of Thunder, also known as Thor?",
      options: {
        a: "Loki Laufeyson",
        b: "Thor Odinson",
        c: "Clint Barton",
        d: "Stephen Strange",
      },
      correctAnswer: "b"
    },
    {
      Question: `Which Marvel superhero is often referred to as the "Merc with a Mouth" due to his tendency to talk and joke a lot?`,
      options: {
        a: "Black Panther",
        b: "Daredevil",
        c: "Wolverine",
        d: "Deadpool",
      },
      correctAnswer: "d"
    },
    {
      Question: "Who is the arch-nemesis of Spider-Man, known for his maniacal laughter and green appearance?",
      options: {
        a: "Venom",
        b: "Doc Octopus",
        c: "Green Goblin",
        d: "Sandman",
      },
      correctAnswer: "c"
    },
    {
      Question: "Which powerful artifact in the Marvel Universe grants its wielder the ability to control space, time, reality, power, the mind, and the soul?",
      options: {
        a: "Infinity Gauntlet",
        b: "Cosmic Cube",
        c: "Tesseract",
        d: "Eye of Agamotto",
      },
      correctAnswer: "a"
    },
  ]
}

const leaderboard = {
  data: [
    {
      name: "Ashish",
      score: 3
    },
    {
      name: "Riya",
      score: 1
    },
    {
      name: "Jay",
      score: 4
    }
  ]
}

/** Play game */
function playGame(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    console.log(`Your Answer is correct`)
    score++
  } else {
    console.log("Your Answer is wrong")
    console.log(`Correct Answer : ${correctAnswer}`)
  }
}


/** Question and Answer */
function showQuestionAndAnswers(database) {
  for (let i = 0; i < database.data.length; i++) {
    console.log("=======================================================================")
    console.log(`\nQue ${i + 1} - ${database.data[i].Question}\n`)
    for (let key in database.data[i].options) {
      console.log(`${key} - ${database.data[i].options[key]}`)
    }
    let userAnswer = readlineSync.question("Choose the correct Option(a/b/c/d):").toLowerCase()
    playGame(userAnswer, database.data[i].correctAnswer)
  }
}

/** LeaderBoard */
function showLeaderboard(leaderboard) {
  leaderboard.data.push({ name: userName, score: score })
  let sortedScoreList = leaderboard.data.sort((a, b) => b.score - a.score);
  console.log("\nCheck your position on the Leader Board🎉🎉")
  for (let leader of sortedScoreList) {
    console.log(`${leader.name} -  Score: ${leader.score}`)
  }
}


showQuestionAndAnswers(database)
console.log(`\nYour score is - ${score}`);
showLeaderboard(leaderboard)