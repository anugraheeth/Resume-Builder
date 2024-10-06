let about = []
let achievements = [];
let experiences = [];
let educations = [];
let projects = [];
let skills = [];


//function to convert  date yyy-mm-dd to m-yy

function formatDate(dateString) {
    // Create a new Date object
    const date = new Date(dateString);
    
    // Options for formatting
    const options = { month: 'short', year: '2-digit' };
    
    // Use toLocaleDateString to format the date
    return date.toLocaleDateString('en-US', options).replace(",", ""); // Remove the comma
}


document.getElementById('addachiev').addEventListener('click', function(e) {
    e.preventDefault();
    
    const achieveContainer = document.getElementById('achieve');
    const index = achieveContainer.children.length / 2;

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('col');
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'atitle' + index);
    titleLabel.textContent = 'Title';
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.id = 'atitle' + index;
    titleInput.name = 'Title';

    const descDiv = document.createElement('div');
    descDiv.classList.add('col');
    const descLabel = document.createElement('label');
    descLabel.setAttribute('for', 'adesc' + index);
    descLabel.textContent = 'Description';
    const descInput = document.createElement('input');
    descInput.type = 'text';
    descInput.id = 'adesc' + index;
    descInput.name = 'Description';

    //  remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');
    removeButton.addEventListener('click', function(e) {
        e.preventDefault();
        titleDiv.remove();
        descDiv.remove();
        removeButton.remove();
    });

    titleDiv.appendChild(titleLabel);
    titleDiv.appendChild(titleInput);
    descDiv.appendChild(descLabel);
    descDiv.appendChild(descInput);
    achieveContainer.appendChild(titleDiv);
    achieveContainer.appendChild(descDiv);
    achieveContainer.appendChild(removeButton);
});


document.getElementById('addexp').addEventListener('click', function(e) {
    e.preventDefault();

    const experienceContainer = document.getElementById('experience-container');
    const index = experienceContainer.children.length / 6;

    const fields = [
        { label: 'Title', id: 'exptitle' + index, name: 'Title', type: 'text' },
        { label: 'origin/Organization', id: 'origin' + index, name: 'origin', type: 'text' },
        { label: 'Location', id: 'loc' + index, name: 'Location', type: 'text' },
        { label: 'Start Date', id: 'expstart' + index, name: 'Start Date', type: 'date' },
        { label: 'End Date', id: 'expend' + index, name: 'End Date', type: 'date' },
        { label: 'Description', id: 'expdesc' + index, name: 'Description', type: 'text' }
    ];

    fields.forEach(field => {
        const div = document.createElement('div');
        div.classList.add('col');
        const label = document.createElement('label');
        label.setAttribute('for', field.id);
        label.textContent = field.label;
        const input = document.createElement('input');
        input.type = field.type;
        input.id = field.id;
        input.name = field.name;

        div.appendChild(label);
        div.appendChild(input);
        experienceContainer.appendChild(div);
    });


    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');
    removeButton.addEventListener('click', function(e) {
        e.preventDefault();
        fields.forEach(field => {
            const input = document.getElementById(field.id);
            if (input) {
                input.parentElement.remove();
            }
        });
        removeButton.remove();
    });

    experienceContainer.appendChild(removeButton);
});


document.getElementById('addedu').addEventListener('click', function(e) {
    e.preventDefault();

    const eduContainer = document.getElementById('edu');
    const index = eduContainer.children.length / 6;

    const fields = [
        { label: 'School', id: 'eduname' + index, name: 'School', type: 'text' },
        { label: 'origin', id: 'qualify' + index, name: 'origin', type: 'text' },
        { label: 'location', id: 'location' + index, name: 'location', type: 'text' },
        { label: 'Start Date', id: 'edustart' + index, name: 'Start Date', type: 'date' },
        { label: 'End Date', id: 'eduend' + index, name: 'End Date', type: 'date' },
        { label: 'Description', id: 'edudesc' + index, name: 'Description', type: 'text' }
    ];

    fields.forEach(field => {
        const div = document.createElement('div');
        div.classList.add('col');
        const label = document.createElement('label');
        label.setAttribute('for', field.id);
        label.textContent = field.label;
        const input = document.createElement('input');
        input.type = field.type;
        input.id = field.id;
        input.name = field.name;

        div.appendChild(label);
        div.appendChild(input);
        eduContainer.appendChild(div);
    });

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');
    removeButton.addEventListener('click', function(e) {
        e.preventDefault();
        fields.forEach(field => {
            const input = document.getElementById(field.id);
            if (input) {
                input.parentElement.remove();
            }
        });
        removeButton.remove();
    });

    eduContainer.appendChild(removeButton);
});


document.getElementById('idpro').addEventListener('click', function(e) {
    e.preventDefault();

    const projectContainer = document.getElementById('project');
    const index = projectContainer.children.length / 3;

    const fields = [
        { label: 'Project Name', id: 'pname' + index, name: 'Project', type: 'text' },
        { label: 'Project Link', id: 'plink' + index, name: 'Project Link', type: 'text' },
        { label: 'Description', id: 'pdesc' + index, name: 'Description', type: 'text' }
    ];

    fields.forEach(field => {
        const div = document.createElement('div');
        div.classList.add('col');
        const label = document.createElement('label');
        label.setAttribute('for', field.id);
        label.textContent = field.label;
        const input = document.createElement('input');
        input.type = field.type;
        input.id = field.id;
        input.name = field.name;

        div.appendChild(label);
        div.appendChild(input);
        projectContainer.appendChild(div);
    });


    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');
    removeButton.addEventListener('click', function(e) {
        e.preventDefault();
        fields.forEach(field => {
            const input = document.getElementById(field.id);
            if (input) {
                input.parentElement.remove();
            }
        });
        removeButton.remove();
    });

    projectContainer.appendChild(removeButton);
});


document.getElementById('addskill').addEventListener('click', function(e) {
    e.preventDefault();

    const skillContainer = document.getElementById('skill');
    const index = skillContainer.children.length;

    const div = document.createElement('div');
    div.classList.add('col');
    const label = document.createElement('label');
    label.setAttribute('for', 'sname' + index);
    label.textContent = 'Skill';
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'sname' + index;
    input.name = 'Skills';

    div.appendChild(label);
    div.appendChild(input);
    skillContainer.appendChild(div);


    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');
    removeButton.addEventListener('click', function(e) {
        e.preventDefault();
        div.remove(); 
        removeButton.remove(); 
    });

    skillContainer.appendChild(removeButton);
});


const pic =  document.getElementById("pic")

let picture = ''

pic.addEventListener('change',(e) =>{
    console.log(e)
    const image = pic.files[0]

    const reader =new FileReader()


    reader.addEventListener('load',()=>{
        picture = reader.result
    })
    
    reader.readAsDataURL(image)
})



document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();


    
    const name =  document.getElementById("name").value
    const middle =  document.getElementById("middle").value
    const last =  document.getElementById("last").value
    
    const designation =  document.getElementById("designation").value
    const address =  document.getElementById("address").value
    const email =  document.getElementById("email").value
    const phone =  document.getElementById("phone").value
    const summary =  document.getElementById("aboutme").value

    aboutEntry = { name, middle, last, picture, designation, address, email, phone, summary}
    
    if (Object.values(aboutEntry).some(value => value)) {
        about.push(aboutEntry);
    }



    // storee achievements
    achievements = [];
    document.querySelectorAll('#achieve .col').forEach((col, index) => {
        if (index % 2 === 0) {
            const title = col.querySelector('input').value;
            const description = col.nextElementSibling.querySelector('input').value;
            if (title || description) { // Check if at least one is filled
                achievements.push({ title, description });
            }
        }
    });

    // storee experiences
    experiences = [];
    document.querySelectorAll('#experience-container .col').forEach((col, index) => {
        if (index % 6 === 0) {
            const title = col.querySelector('input').value;
            const origin = col.nextElementSibling.querySelector('input').value;
            const location = col.nextElementSibling.nextElementSibling.querySelector('input').value;
            const startDate = formatDate(col.nextElementSibling.nextElementSibling.nextElementSibling.querySelector('input').value);
            const endDate = formatDate(col.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.querySelector('input').value);
            const description = col.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.querySelector('input').value;
            if (title || origin || location ||  description) {
                experiences.push({ title, origin, location, startDate, endDate, description });
            }
        }
    });

    // storee educations
    educations = [];
    document.querySelectorAll('#edu .col').forEach((col, index) => {
        if (index % 6 === 0) {
            const school = col.querySelector('input').value;
            const origin = col.nextElementSibling.querySelector('input').value;
            const location = col.nextElementSibling.nextElementSibling.querySelector('input').value;
            const startDate = formatDate(col.nextElementSibling.nextElementSibling.nextElementSibling.querySelector('input').value);
            const endDate = formatDate(col.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.querySelector('input').value);
            const description = col.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.querySelector('input').value;
            if (school || origin || location || description) {
                educations.push({ school, origin, location, startDate, endDate, description });
            }
        }
    });

    // storee projects
    projects = [];
    document.querySelectorAll('#project .col').forEach((col, index) => {
        if (index % 3 === 0) {
            const projectName = col.querySelector('input').value;
            const projectLink = col.nextElementSibling.querySelector('input').value;
            const projectDescription = col.nextElementSibling.nextElementSibling.querySelector('input').value;
            if (projectName || projectLink || projectDescription) {
                projects.push({ projectName, projectLink, projectDescription });
            }
        }
    });

    // storee skills
    skills = [];
    document.querySelectorAll('#skill .col').forEach((col) => {
        const skill = col.querySelector('input').value;
        if (skill) {
            skills.push({ skill });
        }
    });

    console.log('About : ',about)
    console.log('Achievements:', achievements);
    console.log('Experiences:', experiences);
    console.log('Educations:', educations);
    console.log('Projects:', projects);
    console.log('Skills:', skills);


    generateCV()
});





function generateCV() {
    const cvSections = [];


    cvSections.push({
        title: "About",
        items : about
    })

    // to avoid zeroe enty
    if (achievements.length > 0) {
        cvSections.push({
            title: "Achievements",
            items: achievements
        });
    }

    if (experiences.length > 0) {
        cvSections.push({
            title: "Experiences",
            items: experiences
        });
    }

    if (educations.length > 0) {
        cvSections.push({
            title: "Education",
            items: educations
        });
    }

    if (projects.length > 0) {
        cvSections.push({
            title: "Projects",
            items: projects
        });
    }

    if (skills.length > 0) {
        cvSections.push({
            title: "Skills",
            items: skills
        });
    }



    console.log(cvSections);

    //storing  data in ls

    localStorage.setItem('data', JSON.stringify(cvSections));

    window.location.href = 'cv.html';
}

    
