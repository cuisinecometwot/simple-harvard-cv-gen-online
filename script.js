// Global variables
let educationCount = 1;
let experienceCount = 1;
let certificationCount = 1;
let projectCount = 1;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
});

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

// Add education section
function addEducation() {
    const container = document.getElementById('educationContainer');
    const newItem = document.createElement('div');
    newItem.className = 'education-item';
    newItem.innerHTML = `
        <div class="form-group">
            <label>Bằng cấp *</label>
            <input type="text" name="degree" placeholder="Ví dụ: Cử nhân Khoa học Máy tính" required>
        </div>
        <div class="form-group">
            <label>Tên trường *</label>
            <input type="text" name="school" placeholder="Ví dụ: Đại học Bách Khoa Hà Nội" required>
        </div>
        <div class="form-group">
            <label>Năm tốt nghiệp *</label>
            <input type="number" name="graduationYear" min="1900" max="2030" required>
        </div>
        <div class="form-group">
            <label>GPA (tùy chọn)</label>
            <input type="text" name="gpa" placeholder="Ví dụ: 3.8/4.0">
        </div>
        <div class="form-group">
            <label>Thành tích nổi bật</label>
            <textarea name="achievements" rows="2" placeholder="Ví dụ: Thủ khoa, học bổng toàn phần..."></textarea>
        </div>
        <button type="button" class="remove-btn" onclick="removeEducation(this)">Xóa</button>
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
            <label>Vị trí công việc *</label>
            <input type="text" name="position" placeholder="Ví dụ: Software Engineer" required>
        </div>
        <div class="form-group">
            <label>Tên công ty *</label>
            <input type="text" name="company" placeholder="Ví dụ: Google Inc." required>
        </div>
        <div class="form-group">
            <label>Thời gian làm việc *</label>
            <input type="text" name="duration" placeholder="Ví dụ: 2020 - 2023" required>
        </div>
        <div class="form-group">
            <label>Mô tả công việc *</label>
            <textarea name="description" rows="3" placeholder="Mô tả chi tiết về trách nhiệm và thành tựu..." required></textarea>
        </div>
        <button type="button" class="remove-btn" onclick="removeExperience(this)">Xóa</button>
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

// Add certification section
function addCertification() {
    const container = document.getElementById('certificationContainer');
    const newItem = document.createElement('div');
    newItem.className = 'certification-item';
    newItem.innerHTML = `
        <div class="form-group">
            <label>Tên chứng chỉ *</label>
            <input type="text" name="certName" placeholder="Ví dụ: AWS Certified Solutions Architect" required>
        </div>
        <div class="form-group">
            <label>Tổ chức cấp *</label>
            <input type="text" name="certOrg" placeholder="Ví dụ: Amazon Web Services" required>
        </div>
        <div class="form-group">
            <label>Ngày cấp</label>
            <input type="month" name="certDate">
        </div>
        <div class="form-group">
            <label>Mã chứng chỉ (nếu có)</label>
            <input type="text" name="certId" placeholder="Ví dụ: AWS-123456">
        </div>
        <button type="button" class="remove-btn" onclick="removeCertification(this)">Xóa</button>
    `;
    container.appendChild(newItem);
    certificationCount++;
}

// Remove certification section
function removeCertification(button) {
    if (certificationCount > 1) {
        button.parentElement.remove();
        certificationCount--;
    }
}

// Add project section
function addProject() {
    const container = document.getElementById('projectContainer');
    const newItem = document.createElement('div');
    newItem.className = 'project-item';
    newItem.innerHTML = `
        <div class="form-group">
            <label>Tên dự án *</label>
            <input type="text" name="projectName" placeholder="Ví dụ: E-commerce Website" required>
        </div>
        <div class="form-group">
            <label>Mô tả dự án *</label>
            <textarea name="projectDesc" rows="2" placeholder="Mô tả ngắn gọn về dự án..." required></textarea>
        </div>
        <div class="form-group">
            <label>Công nghệ sử dụng</label>
            <input type="text" name="projectTech" placeholder="Ví dụ: React, Node.js, MongoDB">
        </div>
        <div class="form-group">
            <label>Link dự án (nếu có)</label>
            <input type="url" name="projectLink" placeholder="https://github.com/username/project">
        </div>
        <button type="button" class="remove-btn" onclick="removeProject(this)">Xóa</button>
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
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        linkedin: document.getElementById('linkedin').value,
        website: document.getElementById('website').value,
        
        // Objective
        objective: document.getElementById('objective').value,
        
        // Education
        education: [],
        
        // Experience
        experience: [],
        
        // Skills
        skills: document.getElementById('skills').value.split('\n').filter(skill => skill.trim()),
        
        // Certifications
        certifications: [],
        
        // Projects
        projects: [],
        
        // Languages
        languages: document.getElementById('languages').value.split('\n').filter(lang => lang.trim()),
        
        // Hobbies
        hobbies: document.getElementById('hobbies').value
    };
    
    // Collect education data
    const educationItems = document.querySelectorAll('.education-item');
    educationItems.forEach(item => {
        const degree = item.querySelector('input[name="degree"]').value;
        const school = item.querySelector('input[name="school"]').value;
        const graduationYear = item.querySelector('input[name="graduationYear"]').value;
        const gpa = item.querySelector('input[name="gpa"]').value;
        const achievements = item.querySelector('textarea[name="achievements"]').value;
        
        if (degree && school && graduationYear) {
            formData.education.push({
                degree, school, graduationYear, gpa, achievements
            });
        }
    });
    
    // Collect experience data
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach(item => {
        const position = item.querySelector('input[name="position"]').value;
        const company = item.querySelector('input[name="company"]').value;
        const duration = item.querySelector('input[name="duration"]').value;
        const description = item.querySelector('textarea[name="description"]').value;
        
        if (position && company && duration && description) {
            formData.experience.push({
                position, company, duration, description
            });
        }
    });
    
    // Collect certification data
    const certificationItems = document.querySelectorAll('.certification-item');
    certificationItems.forEach(item => {
        const certName = item.querySelector('input[name="certName"]').value;
        const certOrg = item.querySelector('input[name="certOrg"]').value;
        const certDate = item.querySelector('input[name="certDate"]').value;
        const certId = item.querySelector('input[name="certId"]').value;
        
        if (certName && certOrg) {
            formData.certifications.push({
                certName, certOrg, certDate, certId
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
                <div class="cv-contact">
                    ${data.email ? `Email: ${data.email}` : ''}
                    ${data.phone ? ` | Phone: ${data.phone}` : ''}
                    ${data.address ? ` | ${data.address}` : ''}
                </div>
                <div class="cv-contact">
                    ${data.linkedin ? `LinkedIn: ${data.linkedin}` : ''}
                    ${data.website ? ` | Website: ${data.website}` : ''}
                </div>
            </div>
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
        html += `
            <div class="cv-section">
                <div class="cv-section-title">Học vấn</div>
                <div class="cv-section-content">
        `;
        data.education.forEach(edu => {
            html += `
                <div class="cv-item">
                    <div class="cv-item-title">${edu.degree}</div>
                    <div class="cv-item-company">${edu.school} | ${edu.graduationYear}</div>
                    ${edu.gpa ? `<div class="cv-item-date">GPA: ${edu.gpa}</div>` : ''}
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
                <div class="cv-section-title">Kinh nghiệm làm việc</div>
                <div class="cv-section-content">
        `;
        data.experience.forEach(exp => {
            html += `
                <div class="cv-item">
                    <div class="cv-item-title">${exp.position}</div>
                    <div class="cv-item-company">${exp.company} | ${exp.duration}</div>
                    <div class="cv-item-description">${exp.description}</div>
                </div>
            `;
        });
        html += `</div></div>`;
    }
    
    // Skills
    if (data.skills.length > 0) {
        html += `
            <div class="cv-section">
                <div class="cv-section-title">Kỹ năng</div>
                <div class="cv-section-content">
                    <ul class="cv-skills-list">
        `;
        data.skills.forEach(skill => {
            html += `<li>${skill.trim()}</li>`;
        });
        html += `</ul></div></div>`;
    }
    
    // Certifications
    if (data.certifications.length > 0) {
        html += `
            <div class="cv-section">
                <div class="cv-section-title">Chứng chỉ</div>
                <div class="cv-section-content">
        `;
        data.certifications.forEach(cert => {
            html += `
                <div class="cv-item">
                    <div class="cv-item-title">${cert.certName}</div>
                    <div class="cv-item-company">${cert.certOrg}${cert.certDate ? ` | ${cert.certDate}` : ''}</div>
                    ${cert.certId ? `<div class="cv-item-date">ID: ${cert.certId}</div>` : ''}
                </div>
            `;
        });
        html += `</div></div>`;
    }
    
    // Projects
    if (data.projects.length > 0) {
        html += `
            <div class="cv-section">
                <div class="cv-section-title">Dự án nổi bật</div>
                <div class="cv-section-content">
        `;
        data.projects.forEach(project => {
            html += `
                <div class="cv-item">
                    <div class="cv-item-title">${project.projectName}</div>
                    ${project.projectTech ? `<div class="cv-item-company">Công nghệ: ${project.projectTech}</div>` : ''}
                    <div class="cv-item-description">${project.projectDesc}</div>
                    ${project.projectLink ? `<div class="cv-item-date">Link: ${project.projectLink}</div>` : ''}
                </div>
            `;
        });
        html += `</div></div>`;
    }
    
    // Languages
    if (data.languages.length > 0) {
        html += `
            <div class="cv-section">
                <div class="cv-section-title">Ngôn ngữ</div>
                <div class="cv-section-content">
                    <ul class="cv-skills-list">
        `;
        data.languages.forEach(lang => {
            html += `<li>${lang.trim()}</li>`;
        });
        html += `</ul></div></div>`;
    }
    
    // Hobbies
    if (data.hobbies) {
        html += `
            <div class="cv-section">
                <div class="cv-section-title">Sở thích</div>
                <div class="cv-section-content">${data.hobbies}</div>
            </div>
        `;
    }
    
    html += `</div>`;
    return html;
}

// Generate PDF from HTML preview
function generatePDF() {
    const formData = collectFormData();
    
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.phone) {
        alert('Vui lòng điền đầy đủ thông tin bắt buộc (Họ tên, Email, Số điện thoại)');
        return;
    }
    
    if (formData.education.length === 0) {
        alert('Vui lòng thêm ít nhất một thông tin học vấn');
        return;
    }
    
    if (formData.experience.length === 0) {
        alert('Vui lòng thêm ít nhất một kinh nghiệm làm việc');
        return;
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
        alert('Có lỗi khi tạo PDF. Vui lòng thử lại.');
        // Remove temporary container in case of error
        if (document.body.contains(tempContainer)) {
            document.body.removeChild(tempContainer);
        }
    });
}
