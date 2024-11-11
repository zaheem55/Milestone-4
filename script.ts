document.getElementById('resume-form')!.addEventListener('submit', function (event) {
    event.preventDefault();

    // Collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Create the resume HTML content
    const resumeHTML = `
        <h2>Editable Resume</h2>
        <h3><span contenteditable= "true"> ${name}</span></h3>
        <p><strong>Email:</strong><span contenteditable= "true"> ${email}</span></p>
        <p><strong>Phone:</strong><span contenteditable= "true"> ${phone}</span></p>

        <h3>Education</h3>
        <p contenteditable= "true">${education}</p>

        <h3>Experience</h3>
        <p contenteditable= "true">${experience}</p>

        <h3>Skills</h3>
        <p contenteditable= "true">${skills}</p>
    `;

    // Display the resume
    document.getElementById('resume-display')!.innerHTML = resumeHTML;
});
