document.addEventListener('DOMContentLoaded', () => {
    const resumeContent = document.getElementById('conainer');
    const downloadButton = document.getElementById('downloadPdf');
    const generateLinkButton = document.getElementById('generateLink');
    const shareableLink = document.getElementById('shareableLink');
    
    const urlParams = new URLSearchParams(window.location.search);
    const data = urlParams.get('resumeData') || localStorage.getItem('resumeData');
    console.log('Data retrieved:', data); // Log the retrieved data


    if (resumeContent) {
        const data = localStorage.getItem('resumeData');
        if (data) {
            const resumeData = JSON.parse(data);

            resumeContent.innerHTML = `
                <section id="head">
                    <div id="top-left"></div>
                        <img src=${resumeData.picUrl} alt="Profile Picture">
                    </div>
                    <div id="top-right">
                        <h1>${resumeData.name}</h1>
                        <div id="contact">  
                            <p>${resumeData.num}</p>
                            <p>${resumeData.email}</p>
                            <p>${resumeData.add}</p>
                        </div>
                    </div>
                </section>
        <section id="aboutme">
            <p>${resumeData.about}</p>
        </section>
        <section id="edu">
            <h2>Education</h2>
            <h3>${resumeData.deg} in ${resumeData.major}</h3>
            <div id="details">
                <h4>${resumeData.uniname}</h4>
                <p>${resumeData.yearpass}</p>
            </div>
           
        </section>
        <section id="skills">
            <h2>Skills</h2>
            <div id="showskills">
                <ul class="bullet">
                    <li>${resumeData.skill1}</li>
                    <li>${resumeData.skill2}</li>
                    <li>${resumeData.skill3}</li>
                    <li>${resumeData.skill4}</li>
                    <li>${resumeData.skill5}</li>
                </ul>
            </div>
        </section>
        <section id="work">
            <h2>Work Experience</h2>
            <div class="container">
                <h3>${resumeData.company}</h3>
                <div class="title">
                    <h4>${resumeData.pos}</h4>
                    <h4>${resumeData.year}</h4>
                </div>
                <div class="keypoint">
                    <h4>Achievement</h4>
                    <p>${resumeData.achieve}</p>
                </div>
            </div>
        </section>
            `;
        } else {
            resumeContent.innerHTML = '<p>No resume data found.</p>';
        }
    } else {
        console.error('Resume content element not found');
    }

    if (downloadButton) {
        downloadButton.addEventListener('click', () => {
            window.print(); 
        });
    } else {
        console.error('Download button not found');
    }

    if (generateLinkButton) {
        generateLinkButton.addEventListener('click', () => {
            if (data) {
                const encodedData = encodeURIComponent(data);
                const uniqueLink = `${window.location.origin}${window.location.pathname}?resumeData=${encodedData}`;
                if (shareableLink) {
                    shareableLink.textContent = uniqueLink;
                    shareableLink.style.display = 'block';
                }
            } else {
                console.error('No resume data found to generate link');
            }
        });
    } else {
        console.error('Generate link button not found');
    }
});