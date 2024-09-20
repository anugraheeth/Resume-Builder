
document.addEventListener('DOMContentLoaded', function() {
    const addAchievementBtn = document.getElementById('add-achievement');
    const addExperienceBtn = document.getElementById('add-experience');
    const addEducationBtn = document.getElementById('add-education');
    const addProjectBtn = document.getElementById('add-project');
    const addSkillBtn = document.getElementById('add-skill');

    addAchievementBtn.addEventListener('click', () => addSection('achievements'));
    addExperienceBtn.addEventListener('click', () => addSection('experiences'));
    addEducationBtn.addEventListener('click', () => addSection('education'));
    addProjectBtn.addEventListener('click', () => addSection('projects'));
    addSkillBtn.addEventListener('click', () => addSection('skills'));

    function addSection(sectionType) {
        const container = document.getElementById(`${sectionType}-container`);
        const newEntry = container.querySelector(`.${sectionType.slice(0, -1)}-entry`).cloneNode(true);
        
        // Clear input values
        newEntry.querySelectorAll('input').forEach(input => input.value = '');
        
        // Add remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        removeBtn.addEventListener('click', function() {
            container.removeChild(newEntry);
        });
        newEntry.appendChild(removeBtn);

        container.appendChild(newEntry);
    }
});