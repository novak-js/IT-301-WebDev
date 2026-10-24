// Browser validation runs before this submit handler. Nothing is sent or saved.
const feedbackForm = document.getElementById("feedback_form");
const feedbackStatus = document.getElementById("feedback_status");

feedbackForm.addEventListener("submit", function(event) {
    event.preventDefault();
    feedbackStatus.textContent = "Your entries passed validation. This practice form has not sent or saved anything.";
});
