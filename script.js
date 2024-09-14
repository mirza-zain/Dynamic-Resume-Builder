document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('forms');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            var formData = new FormData(form);
            var data = {};
            formData.forEach(function (value, key) {
                data[key] = value.toString();
            });
            localStorage.setItem('resumeData', JSON.stringify(data));
            // Redirect to the resume page
            window.location.href = './resume.html';
        });
    }
    else {
        console.error('Form element not found');
    }
});
