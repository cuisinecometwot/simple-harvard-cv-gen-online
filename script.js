// Global variables
let educationCount = 1;
let experienceCount = 1;
let certificationCount = 1;
let projectCount = 1;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    loadSampleData();
});

// Safe getter for optional inputs
function getInputValue(inputId) {
    const element = document.getElementById(inputId);
    return element ? element.value : '';
}

function initializeEventListeners() {
    // Preview button
    document.getElementById('previewBtn').addEventListener('click', previewCV);
    
    // Generate PDF button
    document.getElementById('generateBtn').addEventListener('click', generatePDF);
    
    // Modal close
    document.querySelector('.close').addEventListener('click', closeModal);
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('previewModal');
        if (event.target === modal) {
            closeModal();
        }
    });
}

// Load sample data based on template
function loadSampleData() {
    // Check if form is empty
    const fullName = document.getElementById('fullName').value;
    if (fullName) return; // Don't load sample data if user has already started filling
    
    // Personal Information
    document.getElementById('fullName').value = 'Firstname Lastname';
    document.getElementById('email').value = 'youremail@college.harvard.edu';
    document.getElementById('phone').value = 'phone number';
    document.getElementById('address').value = 'Home or Campus Street Address • City, State Zip';
    
    // Education - Harvard University
    const educationItem = document.querySelector('.education-item');
    educationItem.querySelector('input[name="school"]').value = 'Harvard University';
    educationItem.querySelector('input[name="location"]').value = 'Cambridge, MA';
    educationItem.querySelector('input[name="degree"]').value = 'Degree, Concentration. GPA [Note: GPA is Optional]';
    educationItem.querySelector('input[name="startDate"]').value = '2020-09';
    educationItem.querySelector('input[name="endDate"]').value = '2024-05';
    educationItem.querySelector('input[name="gpa"]').value = '3.8/4.0';
    educationItem.querySelector('textarea[name="achievements"]').value = 'Relevant Coursework: [Note: Optional. Awards and honors can also be listed here.]';
    
    // Experience
    const experienceItem = document.querySelector('.experience-item');
    experienceItem.querySelector('input[name="company"]').value = 'Organization';
    experienceItem.querySelector('input[name="location"]').value = 'City, State (or Remote)';
    experienceItem.querySelector('input[name="position"]').value = 'Position Title';
    experienceItem.querySelector('input[name="startDate"]').value = '2022-06';
    experienceItem.querySelector('input[name="endDate"]').value = '2023-08';
    experienceItem.querySelector('textarea[name="description"]').value = 'Beginning with your most recent position, describe your experience, skills, and resulting outcomes in bullet or paragraph form.\nBegin each line with an action verb and include details that will help the reader understand your accomplishments, skills, knowledge, abilities, or achievements.\nQuantify where possible.\nDo not use personal pronouns; each line should be a phrase rather than a full sentence.';
    
    // Leadership & Activities
    const projectItem = document.querySelector('.project-item');
    projectItem.querySelector('input[name="projectName"]').value = 'Organization';
    projectItem.querySelector('input[name="projectTech"]').value = 'Role';
    projectItem.querySelector('textarea[name="projectDesc"]').value = 'This section can be formatted similarly to the Experience section, or you can omit descriptions for activities.\nIf this section is more relevant to the opportunity you are applying for, consider moving this above your Experience section.';
    
    // Skills & Interests
    document.getElementById('skills').value = 'List computer software and programming languages';
    document.getElementById('languages').value = 'List foreign languages and your level of fluency';
    document.getElementById('hobbies').value = 'List activities you enjoy that may spark interview conversation';
}

// Add education section
function addEducation() {
    const container = document.getElementById('educationContainer');
    const newItem = document.createElement('div');
    newItem.className = 'education-item';
    newItem.innerHTML = `
        <div class="form-group">
            <label>School/University *</label>
            <input type="text" name="school" placeholder="e.g., Harvard University" required>
        </div>
        <div class="form-group">
            <label>Location *</label>
            <input type="text" name="location" placeholder="e.g., Cambridge, MA" required>
        </div>
        <div class="form-group">
            <label>Degree *</label>
            <input type="text" name="degree" placeholder="e.g., Bachelor of Science in Computer Science" required>
        </div>
        <div class="form-group">
            <label>Start Date *</label>
            <input type="month" name="startDate" required>
        </div>
        <div class="form-group">
            <label>End Date *</label>
            <input type="month" name="endDate" required>
        </div>
        <div class="form-group">
            <label>GPA (Optional)</label>
            <input type="text" name="gpa" placeholder="e.g., 3.8/4.0">
        </div>
        <div class="form-group">
            <label>Achievements</label>
            <textarea name="achievements" rows="2" placeholder="e.g., Magna Cum Laude, Dean's List..."></textarea>
        </div>
        <button type="button" class="remove-btn" onclick="removeEducation(this)">Remove</button>
    `;
    container.appendChild(newItem);
    educationCount++;
}

// Remove education section
function removeEducation(button) {
    if (educationCount > 1) {
        button.parentElement.remove();
        educationCount--;
    }
}

// Add experience section
function addExperience() {
    const container = document.getElementById('experienceContainer');
    const newItem = document.createElement('div');
    newItem.className = 'experience-item';
    newItem.innerHTML = `
        <div class="form-group">
            <label>Company/Organization *</label>
            <input type="text" name="company" placeholder="e.g., Google Inc." required>
        </div>
        <div class="form-group">
            <label>Location *</label>
            <input type="text" name="location" placeholder="e.g., Mountain View, CA" required>
        </div>
        <div class="form-group">
            <label>Position Title *</label>
            <input type="text" name="position" placeholder="e.g., Software Engineer" required>
        </div>
        <div class="form-group">
            <label>Start Date *</label>
            <input type="month" name="startDate" required>
        </div>
        <div class="form-group">
            <label>End Date *</label>
            <input type="month" name="endDate" placeholder="Leave blank if currently working">
        </div>
        <div class="form-group">
            <label>Job Description *</label>
            <textarea name="description" rows="3" placeholder="Describe your responsibilities and achievements (one bullet point per line)..." required></textarea>
        </div>
        <button type="button" class="remove-btn" onclick="removeExperience(this)">Remove</button>
    `;
    container.appendChild(newItem);
    experienceCount++;
}

// Remove experience section
function removeExperience(button) {
    if (experienceCount > 1) {
        button.parentElement.remove();
        experienceCount--;
    }
}


// Add project section (Leadership & Activities)
function addProject() {
    const container = document.getElementById('projectContainer');
    const newItem = document.createElement('div');
    newItem.className = 'project-item';
    newItem.innerHTML = `
        <div class="form-group">
            <label>Organization/Project Name *</label>
            <input type="text" name="projectName" placeholder="e.g., Harvard Computer Science Club" required>
        </div>
        <div class="form-group">
            <label>Role *</label>
            <input type="text" name="projectTech" placeholder="e.g., President, Project Lead" required>
        </div>
        <div class="form-group">
            <label>Activity Description *</label>
            <textarea name="projectDesc" rows="2" placeholder="Describe your activities and achievements..." required></textarea>
        </div>
        <div class="form-group">
            <label>Link (Optional)</label>
            <input type="url" name="projectLink" placeholder="https://example.com">
        </div>
        <button type="button" class="remove-btn" onclick="removeProject(this)">Remove</button>
    `;
    container.appendChild(newItem);
    projectCount++;
}

// Remove project section
function removeProject(button) {
    if (projectCount > 1) {
        button.parentElement.remove();
        projectCount--;
    }
}

// Collect form data
function collectFormData() {
    const formData = {
        // Personal information
        fullName: getInputValue('fullName'),
        email: getInputValue('email'),
        phone: getInputValue('phone'),
        address: getInputValue('address'),
        linkedin: getInputValue('linkedin'),
        website: getInputValue('website'),
        
        // Objective
        objective: getInputValue('objective'),
        
        // Education
        education: [],
        
        // Experience
        experience: [],
        
        // Skills
        skills: (getInputValue('skills') || '').split('\n').filter(skill => skill.trim()),
        
        
        // Projects
        projects: [],
        
        // Languages
        languages: (getInputValue('languages') || '').split('\n').filter(lang => lang.trim()),
        
        // Hobbies
        hobbies: getInputValue('hobbies')
    };
    
    // Collect education data
    const educationItems = document.querySelectorAll('.education-item');
    educationItems.forEach(item => {
        const school = item.querySelector('input[name="school"]').value;
        const location = item.querySelector('input[name="location"]').value;
        const degree = item.querySelector('input[name="degree"]').value;
        const startDate = item.querySelector('input[name="startDate"]').value;
        const endDate = item.querySelector('input[name="endDate"]').value;
        const gpa = item.querySelector('input[name="gpa"]').value;
        const achievements = item.querySelector('textarea[name="achievements"]').value;
        
        if (school && location && degree && startDate && endDate) {
            formData.education.push({
                school, location, degree, startDate, endDate, gpa, achievements
            });
        }
    });
    
    // Collect experience data
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach(item => {
        const company = item.querySelector('input[name="company"]').value;
        const location = item.querySelector('input[name="location"]').value;
        const position = item.querySelector('input[name="position"]').value;
        const startDate = item.querySelector('input[name="startDate"]').value;
        const endDate = item.querySelector('input[name="endDate"]').value;
        const description = item.querySelector('textarea[name="description"]').value;
        
        if (company && location && position && startDate && description) {
            formData.experience.push({
                company, location, position, startDate, endDate, description
            });
        }
    });
    
    
    // Collect project data
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        const projectName = item.querySelector('input[name="projectName"]').value;
        const projectDesc = item.querySelector('textarea[name="projectDesc"]').value;
        const projectTech = item.querySelector('input[name="projectTech"]').value;
        const projectLink = item.querySelector('input[name="projectLink"]').value;
        
        if (projectName && projectDesc) {
            formData.projects.push({
                projectName, projectDesc, projectTech, projectLink
            });
        }
    });
    
    return formData;
}

// Preview CV
function previewCV() {
    const formData = collectFormData();
    const previewContent = generateCVHTML(formData);
    
    document.getElementById('previewContent').innerHTML = previewContent;
    document.getElementById('previewModal').style.display = 'block';
}

// Close modal
function closeModal() {
    document.getElementById('previewModal').style.display = 'none';
}

// Generate CV HTML for preview and PDF
function generateCVHTML(data) {
    let html = `
        <div class="cv-preview">
            <div class="cv-header">
                <div class="cv-name">${data.fullName || 'Họ và tên'}</div>
                <div class="cv-header-line"></div>
            </div>
            <div class="cv-contact">
                ${data.address ? data.address : ''}${data.address && data.email ? ' • ' : ''}${data.email ? data.email : ''}${(data.address || data.email) && data.phone ? ' • ' : ''}${data.phone ? data.phone : ''}
            </div>
            ${data.linkedin || data.website ? `<div class="cv-contact">${data.linkedin ? `LinkedIn: ${data.linkedin}` : ''}${data.linkedin && data.website ? ' • ' : ''}${data.website ? `Website: ${data.website}` : ''}</div>` : ''}
    `;
    
    // Objective
    if (data.objective) {
        html += `
            <div class="cv-section">
                <div class="cv-section-title">Mục tiêu nghề nghiệp</div>
                <div class="cv-section-content">${data.objective}</div>
            </div>
        `;
    }
    
    // Education
    if (data.education.length > 0) {
        // Extra line break before Education section
        html += `<div class="cv-spacer"></div>`;
        html += `
            <div class="cv-section">
                <div class="cv-section-title">Education</div>
                <div class="cv-section-content">
        `;
        data.education.forEach(edu => {
            // Format dates
            const startDate = edu.startDate ? new Date(edu.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : '';
            const endDate = edu.endDate ? new Date(edu.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : '';
            const dateRange = startDate && endDate ? `${startDate} - ${endDate}` : '';
            
            html += `
                <div class="cv-item">
                    <div class="cv-item-header">
                        <span class="cv-item-company">${edu.school}</span>
                        <span class="cv-item-location">${edu.location}</span>
                    </div>
                    <div class="cv-item-degree">${edu.degree}${edu.gpa ? `. GPA: ${edu.gpa}` : ''}</div>
                    <div class="cv-item-date">${dateRange}</div>
                    ${edu.achievements ? `<div class="cv-item-description">${edu.achievements}</div>` : ''}
                </div>
            `;
        });
        html += `</div></div>`;
    }
    
    // Experience
    if (data.experience.length > 0) {
        html += `
            <div class="cv-section">
                <div class="cv-section-title">Experience</div>
                <div class="cv-section-content">
        `;
        data.experience.forEach(exp => {
            // Format dates
            const startDate = exp.startDate ? new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : '';
            const endDate = exp.endDate ? new Date(exp.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : '';
            const dateRange = startDate && endDate ? `${startDate} - ${endDate}` : startDate || 'Present';
            
            html += `
                <div class="cv-item">
                    <div class="cv-item-header">
                        <span class="cv-item-company">${exp.company}</span>
                        <span class="cv-item-location">${exp.location}</span>
                    </div>
                    <div class="cv-item-position">${exp.position}</div>
                    <div class="cv-item-date">${dateRange}</div>
                    <div class="cv-item-description">
                        <ul class="cv-bullet-list">
                            ${exp.description.split('\n').filter(line => line.trim()).map(line => 
                                `<li>${line.trim()}</li>`
                            ).join('')}
                        </ul>
                    </div>
                </div>
            `;
        });
        html += `</div></div>`;
    }
    
    // Leadership & Activities (using projects as activities)
    if (data.projects.length > 0) {
        html += `
            <div class="cv-section">
                <div class="cv-section-title">Leadership & Activities</div>
                <div class="cv-section-content">
        `;
        data.projects.forEach(project => {
            html += `
                <div class="cv-item">
                    <div class="cv-item-header">
                        <span class="cv-item-company">${project.projectName}</span>
                        <span class="cv-item-location">City, State</span>
                    </div>
                    <div class="cv-item-position">${project.projectTech || 'Project'}</div>
                    <div class="cv-item-date">2023 - Present</div>
                    <div class="cv-item-description">
                        <ul class="cv-bullet-list">
                            <li>${project.projectDesc}</li>
                            ${project.projectLink ? `<li>Link: ${project.projectLink}</li>` : ''}
                        </ul>
                    </div>
                </div>
            `;
        });
        html += `</div></div>`;
    }
    
    // Skills & Interests
    if (data.skills.length > 0 || data.languages.length > 0 || data.hobbies) {
        html += `
            <div class="cv-section">
                <div class="cv-section-title">Skills & Interests</div>
                <div class="cv-section-content">
        `;
        if (data.skills.length > 0) {
            html += `<div class="cv-skills-category"><strong>Technical:</strong> ${data.skills.join(', ')}</div>`;
        }
        if (data.languages.length > 0) {
            html += `<div class="cv-skills-category"><strong>Language:</strong> ${data.languages.join(', ')}</div>`;
        }
        if (data.hobbies) {
            html += `<div class="cv-skills-category"><strong>Interests:</strong> ${data.hobbies}</div>`;
        }
        html += `</div></div>`;
    }
    
    
    html += `</div>`;
    return html;
}

// Generate PDF from HTML preview
function generatePDF() {
    const formData = collectFormData();
    
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.phone) {
        alert('Please fill in all required fields (Full Name, Email, Phone Number)');
        return;
    }
    
    if (formData.education.length === 0) {
        alert('Please add at least one education entry');
        return;
    }
    
    if (formData.experience.length === 0) {
        alert('Please add at least one experience entry');
        return;
    }
    
    // Validate education fields
    for (let edu of formData.education) {
        if (!edu.school || !edu.location || !edu.degree || !edu.startDate || !edu.endDate) {
            alert('Please fill in all education fields (school, location, degree, dates)');
            return;
        }
    }
    
    // Validate experience fields
    for (let exp of formData.experience) {
        if (!exp.company || !exp.location || !exp.position || !exp.startDate) {
            alert('Please fill in all experience fields (company, location, position, start date)');
            return;
        }
    }
    
    // Generate HTML content first
    const cvHTML = generateCVHTML(formData);
    
    // Create a temporary container for the CV
    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = cvHTML;
    tempContainer.style.position = 'absolute';
    tempContainer.style.left = '-9999px';
    tempContainer.style.top = '0';
    tempContainer.style.width = '8.5in';
    tempContainer.style.backgroundColor = 'white';
    tempContainer.style.padding = '40px';
    tempContainer.style.fontFamily = 'Times New Roman, serif';
    tempContainer.style.lineHeight = '1.4';
    tempContainer.style.color = '#000';
    
    // Add to body temporarily
    document.body.appendChild(tempContainer);
    
    // Convert HTML to canvas then to PDF
    html2canvas(tempContainer, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        width: tempContainer.offsetWidth,
        height: tempContainer.offsetHeight
    }).then(canvas => {
        // Remove temporary container
        document.body.removeChild(tempContainer);
        
        // Create PDF
        const { jsPDF } = window.jspdf;
        const imgData = canvas.toDataURL('image/png');
        
        // Calculate dimensions
        const imgWidth = 210; // A4 width in mm
        const pageHeight = 297; // A4 height in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        const doc = new jsPDF('p', 'mm', 'a4');
        
        // Add image to PDF
        if (imgHeight <= pageHeight) {
            // Single page
            doc.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        } else {
            // Multiple pages
            let heightLeft = imgHeight;
            let position = 0;
            
            // First page
            doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
            
            // Additional pages
            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                doc.addPage();
                doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }
        }
        
        // Save PDF
        const fileName = `${formData.fullName.replace(/\s+/g, '_')}_CV.pdf`;
        doc.save(fileName);
    }).catch(error => {
        console.error('Error generating PDF:', error);
        alert('Error generating PDF. Please try again.');
        // Remove temporary container in case of error
        if (document.body.contains(tempContainer)) {
            document.body.removeChild(tempContainer);
        }
    });
}
