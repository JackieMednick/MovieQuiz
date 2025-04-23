const questions = document.querySelectorAll('.question');
const resultDiv = document.getElementById('result');

// Tracking and answers
let currentQuestion = 0;
const answers = [];

// Array
const movieDatabase = [
  { mood: "sad", genre: "comedy", title: "The Grand Budapest Hotel", description: "March 7, 2014 - 1h 39m" },
  { mood: "sad", genre: "romance", title: "Me Before You", description: "June 3, 2013 - 1h 50m" },
  { mood: "sad", genre: "drama", title: "Dallas Buyers Club", description: "November 22, 2013 - 1 hr 57m" },
  { mood: "sad", genre: "sci-fi", title: "Her", description: "December 18, 2013 - 2hr 6m" },

  { mood: "happy", genre: "comedy", title: "Superbad", description: "August 17, 2007 - 1hr 59m" },
  { mood: "happy", genre: "romance", title: "Crazy Rich Asians", description: "August 15th, 2018 - 2h 1m" },
  { mood: "happy", genre: "drama", title: "The Breakfast Club", description: "February 15, 1985 - 1hr 37m" },
  { mood: "happy", genre: "sci-fi", title: "Galaxy Quest", description: "December 25, 1999 - 1h 42m" },

  { mood: "stressed", genre: "comedy", title: "Once Upon a Time in Hollywood", description: "July 26, 2019 - 2h 40m" },
  { mood: "stressed", genre: "romance", title: "Notting Hill", description: "May 28th, 1999 - 2h 4m" },
  { mood: "stressed", genre: "drama", title: "Knives Out", description: "November 27, 2019 - 2h 10m" },
  { mood: "stressed", genre: "sci-fi", title: "Eternal Sunshine of the Spotless Mind", description: "March 19, 2004 - 1h 48m" },

  { mood: "bored", genre: "comedy", title: "Ferris Bueller’s Day Off", description: "June 11, 1986 - 1h 43m" },
  { mood: "bored", genre: "romance", title: "The Princess Bride", description: "October 9, 1987 - 1h 38m" },
  { mood: "bored", genre: "drama", title: "Forrest Gump", description: "July 6, 1994 - 2h 22m" },
  { mood: "bored", genre: "sci-fi", title: "The Martian", description: "October 2, 2015 - 2h 31m" }
];

// Shows the questions one at a timeee
function showQuestion(index) {
  questions.forEach(q => q.classList.remove('active'));
  if (index < questions.length) {
    questions[index].classList.add('active');
  } else {
    showResult();
  }
}

// Results
function showResult() {
  const mood = answers[0];     // Question 1
  const genre = answers[2];    // Question two

  const match = movieDatabase.find(
    movie => movie.mood === mood && movie.genre === genre
  );

  if (match) {
    resultDiv.innerHTML = `
      <h2>🍿 Your Movie: <span>${match.title}</span></h2>
      <p>${match.description}</p>
    `;
    localStorage.setItem('lastMovieMatch', JSON.stringify(match));
  } else {
    resultDiv.innerHTML = `
    `;
  }
}

document.querySelectorAll('.answers button').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.getAttribute('data-answer');
    answers.push(answer);
    currentQuestion++;
    showQuestion(currentQuestion);
  });
});

// Start the quiz
showQuestion(currentQuestion);
