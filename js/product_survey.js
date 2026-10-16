function submitFeedback(){}


//Variaveis
const submitButton = document.getElementById('submitBtn');

function getFeedbackData() {
    return {
        username: document.getElementById('name').value,
        age: document.getElementById('age').value,
        email: document.getElementById('email').value,
        job: document.getElementById('job').value,
        designation: document.getElementById('designation').value,
        productType: document.getElementById('productType').value,
        feedback: document.getElementById('feedbackText').value
    };
}

function displayFeedback(data) {
    document.getElementById('userName').textContent = data.username;
    document.getElementById('userAge').textContent = data.age;
    document.getElementById('userEmail').textContent = data.email;
    document.getElementById('userJob').textContent = data.job;
    document.getElementById('userDesignation').textContent = data.designation;
    document.getElementById('userProductChoice').textContent = data.productType;
    document.getElementById('userFeedback').textContent = data.feedback;

    document.getElementById('userInfo').style.display = 'block';
}

function submitFeedback(event) {
    event.preventDefault();

    const feedbackData = getFeedbackData();

    displayFeedback(feedbackData);

    console.log(feedbackData);
}

submitButton.addEventListener('click', submitFeedback);
