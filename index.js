var questionsArr = [
    {
        question: 'Charmander the best pokemon',
        answer: true
    },
    {
        question: 'UF has one mascot',
        answer: false
    },
    {
        question: 'UF is better than FSU',
        answer: true
    },
    {
        question: 'This website for a computer programming class',
        answer: true
    },
    {
        question: 'Fell67 has never used JavaScript before this',
        answer: false
    }
]

function runQuiz () {
    let numberOfRightAns = 0

    // Ask the user the questions and document the number of right answers
    for (let questionAns of questionsArr) {
        let ans = confirm(questionAns.question)

        if (ans === questionAns.answer) {
            numberOfRightAns++
        }
    }
    
    // Calculate what percent of answers were correct and tell user
    alert(Math.round((numberOfRightAns / questionsArr.length) * 100) + '%')
    
}