let achievements = [];
let experiences = [];
let educations = [];
let projects = [];
let skills = [];

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
        { label: 'Company/Organization', id: 'company' + index, name: 'Company', type: 'text' },
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
        { label: 'Degree', id: 'qualify' + index, name: 'Degree', type: 'text' },
        { label: 'City', id: 'city' + index, name: 'City', type: 'text' },
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


document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();


    achievements = [];
    document.querySelectorAll('#achieve .col').forEach((col, index) => {
        if (index % 2 === 0) {
            const title = col.querySelector('input').value;
            const description = col.nextElementSibling.querySelector('input').value;
            achievements.push({ title, description });
        }
    });


    experiences = [];
    document.querySelectorAll('#experience-container .col').forEach((col, index) => {
        if (index % 6 === 0) {
            const title = col.querySelector('input').value;
            const company = col.nextElementSibling.querySelector('input').value;
            const location = col.nextElementSibling.nextElementSibling.querySelector('input').value;
            const startDate = col.nextElementSibling.nextElementSibling.nextElementSibling.querySelector('input').value;
            const endDate = col.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.querySelector('input').value;
            const description = col.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.querySelector('input').value;
            experiences.push({ title, company, location, startDate, endDate, description });
        }
    });

    educations = [];
    document.querySelectorAll('#edu .col').forEach((col, index) => {
        if (index % 6 === 0) {
            const school = col.querySelector('input').value;
            const degree = col.nextElementSibling.querySelector('input').value;
            const city = col.nextElementSibling.nextElementSibling.querySelector('input').value;
            const startDate = col.nextElementSibling.nextElementSibling.nextElementSibling.querySelector('input').value;
            const endDate = col.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.querySelector('input').value;
            const description = col.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.querySelector('input').value;
            educations.push({ school, degree, city, startDate, endDate, description });
        }
    });


    projects = [];
    document.querySelectorAll('#project .col').forEach((col, index) => {
        if (index % 3 === 0) {
            const projectName = col.querySelector('input').value;
            const projectLink = col.nextElementSibling.querySelector('input').value;
            const projectDescription = col.nextElementSibling.nextElementSibling.querySelector('input').value;
            projects.push({ projectName, projectLink, projectDescription });
        }
    });


    skills = [];
    document.querySelectorAll('#skill .col').forEach((col) => {
        const skill = col.querySelector('input').value;
        skills.push({ skill });
    });

    console.log('Achievements:', achievements);
    console.log('Experiences:', experiences);
    console.log('Educations:', educations);
    console.log('Projects:', projects);
    console.log('Skills:', skills);
});
