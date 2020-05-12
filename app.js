const form = document.querySelector('.quiz-form')
const scoreText = document.querySelector('.score')
const correctAnswers = ['B', 'D', 'A', 'C',]
const resultContainer = document.querySelector('.result')
let score = 0

const getUserAnswers = () => correctAnswers.map((_, index) => form[`inputQuestion${index + 1}`].value)

const calculateUserScore = userAnswers => {
  userAnswers.forEach((userAnswer, index) => {
    const correctAnswer = userAnswer === correctAnswers[index]

    if (correctAnswer) {
      score += 25
    }
  })
}

const incrementCounter = () => {
  let counter = 0

  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer)
    }

    scoreText.innerText = `${counter++}%`
  }, 25);
}

const goUpSmoothly = (top, left) => {
  scrollTo({
    top: top,
    left: left,
    behavior: 'smooth'
  })
}

const showFinalScore = () => {
  goUpSmoothly(0, 0)
  resultContainer.classList.remove('d-none')
}

const submitAnswers = event => {
  event.preventDefault()

  score = 0

  const userAnswers = getUserAnswers()

  calculateUserScore(userAnswers)
  showFinalScore()
  incrementCounter()
}

form.addEventListener('submit', submitAnswers)
