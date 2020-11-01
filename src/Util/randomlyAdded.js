// Randomly added correct answer to the array of incorrect answers
export default function randomlyAdded(questions) {
    return questions.map(question => {
        let max = question.incorrect.length
        let index = Math.floor(Math.random() * (max - 0) + 1) //why max - 0 ?
        question.incorrect.splice(index, 0, question.correct)
        return question
    })
}