document.getElementById('resume-form').addEventListener('submit', function (event) {
    event.preventDefault();
    // Collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Create the resume HTML content
    var resumeHTML = "\n        <h2>Editable Resume</h2>\n        <h3><span contenteditable= \"true\"> ".concat(name, "</span></h3>\n        <p><strong>Email:</strong><span contenteditable= \"true\"> ").concat(email, "</span></p>\n        <p><strong>Phone:</strong><span contenteditable= \"true\"> ").concat(phone, "</span></p>\n\n        <h3>Education</h3>\n        <p contenteditable= \"true\">").concat(education, "</p>\n\n        <h3>Experience</h3>\n        <p contenteditable= \"true\">").concat(experience, "</p>\n\n        <h3>Skills</h3>\n        <p contenteditable= \"true\">").concat(skills, "</p>\n    ");
    // Display the resume
    document.getElementById('resume-display').innerHTML = resumeHTML;
});
