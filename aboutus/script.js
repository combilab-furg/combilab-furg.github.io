const studentCardsContainer = document.getElementById('student-cards');
const gradStudentCardsContainer = document.getElementById('grad-student-cards');
const docStudentCardsContainer = document.getElementById('doc-student-cards');


function loadStudents(students, studentsCard){
    students.forEach(student => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';
        card.innerHTML = `
            <div class="card h-100 card-glass">
                <img src="../assets/images/students/${student.photo}" class="card-img-top card-students-photo" alt="Photo of ${student.name}">
                <div class="card-body">
                    <h6 class="card-title students-card-tittle" style="place-self: center;">${student.name}</h6>
                    <p class="card-text student-text">
                        ${student.major ? `<strong>Major:</strong> ${student.major}` : `<strong>Course:</strong> ${student.course}`} <br>
                        <strong>Email:</strong> <a href="mailto:${student.email}">${student.email}</a>
                    </p>
                    <a href="mailto:${student.email}" class="btn button-card btn_lattes">Contact</a>
                    <a href="${student.lattes}" class="btn button-card btn_lattes">Lattes</a>
                </div>
            </div>
        `;
        studentsCard.appendChild(card);
    });
}

async function getStudents() {
    try {
        const response1 = await fetch(`../docs/doc_students.json`);
        const students1 = await response1.json();
        loadStudents(students1, docStudentCardsContainer);
    } catch (error) {
        console.error('Error loading students:', error);
    }
    try {
        const response2 = await fetch(`../docs/master_students.json`);
        const students2 = await response2.json();
        loadStudents(students2, studentCardsContainer);
        
    } catch (error) {
        console.error('Error loading publications:', error);
    }
    try {
        const response3 = await fetch(`../docs/grad_students.json`);
        const students3 = await response3.json();
        loadStudents(students3, gradStudentCardsContainer);
        
    } catch (error) {
        console.error('Error loading students:', error);
    }
}

// Carregar publicações ao carregar a página
window.onload = () =>{
    getStudents();
}