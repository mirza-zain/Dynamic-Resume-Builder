document.addEventListener('DOMContentLoaded', function () {
    var resumeContent = document.getElementById('conainer');
    var downloadButton = document.getElementById('downloadPdf');
    var generateLinkButton = document.getElementById('generateLink');
    var shareableLink = document.getElementById('shareableLink');
    var urlParams = new URLSearchParams(window.location.search);
    var data = urlParams.get('resumeData') || localStorage.getItem('resumeData');
    console.log('Data retrieved:', data); // Log the retrieved data
    if (resumeContent) {
        var data_1 = localStorage.getItem('resumeData');
        if (data_1) {
            var resumeData = JSON.parse(data_1);
            resumeContent.innerHTML = "\n                <section id=\"head\">\n                    <div id=\"top-left\"></div>\n                        <img src=".concat(resumeData.picUrl, " alt=\"Profile Picture\">\n                    </div>\n                    <div id=\"top-right\">\n                        <h1>").concat(resumeData.name, "</h1>\n                        <div id=\"contact\">  \n                            <p>").concat(resumeData.num, "</p>\n                            <p>").concat(resumeData.email, "</p>\n                            <p>").concat(resumeData.add, "</p>\n                        </div>\n                    </div>\n                </section>\n        <section id=\"aboutme\">\n            <p>").concat(resumeData.about, "</p>\n        </section>\n        <section id=\"edu\">\n            <h2>Education</h2>\n            <h3>").concat(resumeData.deg, " in ").concat(resumeData.major, "</h3>\n            <div id=\"details\">\n                <h4>").concat(resumeData.uniname, "</h4>\n                <p>").concat(resumeData.yearpass, "</p>\n            </div>\n           \n        </section>\n        <section id=\"skills\">\n            <h2>Skills</h2>\n            <div id=\"showskills\">\n                <ul class=\"bullet\">\n                    <li>").concat(resumeData.skill1, "</li>\n                    <li>").concat(resumeData.skill2, "</li>\n                    <li>").concat(resumeData.skill3, "</li>\n                    <li>").concat(resumeData.skill4, "</li>\n                    <li>").concat(resumeData.skill5, "</li>\n                </ul>\n            </div>\n        </section>\n        <section id=\"work\">\n            <h2>Work Experience</h2>\n            <div class=\"container\">\n                <h3>").concat(resumeData.company, "</h3>\n                <div class=\"title\">\n                    <h4>").concat(resumeData.pos, "</h4>\n                    <h4>").concat(resumeData.year, "</h4>\n                </div>\n                <div class=\"keypoint\">\n                    <h4>Achievement</h4>\n                    <p>").concat(resumeData.achieve, "</p>\n                </div>\n            </div>\n        </section>\n            ");
        }
        else {
            resumeContent.innerHTML = '<p>No resume data found.</p>';
        }
    }
    else {
        console.error('Resume content element not found');
    }
    if (downloadButton) {
        downloadButton.addEventListener('click', function () {
            window.print();
        });
    }
    else {
        console.error('Download button not found');
    }
    if (generateLinkButton) {
        generateLinkButton.addEventListener('click', function () {
            if (data) {
                var encodedData = encodeURIComponent(data);
                var uniqueLink = "".concat(window.location.origin).concat(window.location.pathname, "?resumeData=").concat(encodedData);
                if (shareableLink) {
                    shareableLink.textContent = uniqueLink;
                    shareableLink.style.display = 'block';
                }
            }
            else {
                console.error('No resume data found to generate link');
            }
        });
    }
    else {
        console.error('Generate link button not found');
    }
});
