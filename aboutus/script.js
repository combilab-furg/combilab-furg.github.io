const studentCardsContainer = document.getElementById('student-cards');


function loadStudents(students){
    students.forEach(student => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';
        card.innerHTML = `
            <div class="card h-100 card-glass">
                <img src="../assets/images/students/${student.photo}" class="card-img-top card-students-photo" alt="Photo of ${student.name}">
                <div class="card-body">
                    <h6 class="card-title students-card-tittle" style="place-self: center;">${student.name}</h6>
                    <p class="card-text student-text">
                        <strong>Major:</strong> ${student.major}<br>
                        <strong>Email:</strong> <a href="mailto:${student.email}">${student.email}</a>
                    </p>
                    <a href="mailto:${student.email}" class="btn button-card btn_lattes">Contact</a>
                    <a href="${student.lattes}" class="btn button-card btn_lattes">Lattes</a>
                </div>
            </div>
        `;
        studentCardsContainer.appendChild(card);
    });
}

async function getStudents() {
    try {
        const response = await fetch(`../docs/master_students.json`);
        const students = await response.json();
        loadStudents(students);
        
    } catch (error) {
        console.error('Error loading publications:', error);
    }
}

// Carregar publicações ao carregar a página
window.onload = () =>{
    getStudents();
}