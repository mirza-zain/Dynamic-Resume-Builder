document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('forms') as HTMLFormElement;

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); 
            const formData = new FormData(form);
            const data: { [key: string]: string } = {};
            formData.forEach((value, key) => {
                data[key] = value.toString();
            });

            localStorage.setItem('resumeData', JSON.stringify(data));

            // Redirect to the resume page
            window.location.href = './resume.html';
        });
    } else {
        console.error('Form element not found');
    }
});