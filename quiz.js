// Function to check the answer
function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";
    
    // Get user's answer
    const userAnswer = (document.querySelector('input[name="quiz"]:checked')).value;
    
    // Get feedback element
    const feedbackElement = document.getElementById('feedback');

    // Check if an answer is selected
    if (userAnswer) {
        // Compare user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
            feedbackElement.style.color = "green";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
            feedbackElement.style.color = "red";
        }
    } else {
        feedbackElement.textContent = "Please select an answer.";
        feedbackElement.style.color = "orange";
    }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
