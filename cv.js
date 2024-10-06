
 const data = JSON.parse(localStorage.getItem('data')) || [];

function renderCV(sections) {
    let expected = ['About', 'Achievements', 'Experiences', 'Education', 'Projects', 'Skills'];

    expected = expected.filter(name => {
        return !data.some(section => section.title === name);
    });

    //console.log(expected)
    expected.forEach(value =>{
        const exp = document.getElementById(value)
        exp.innerHTML=``
    })
    
    sections.forEach(section => {
        if(section.title=='About'){
            const about = section.items[0]
            document.getElementById('name').innerHTML = about.name+' '+about.middle+' '+about.last
            document.getElementById('email').innerHTML = `<strong>Email : </strong>`+ about.email
            document.getElementById('phone').innerHTML = `<strong>Phone : </strong>`+ about.phone
            document.getElementById('address').innerHTML =  `<strong>Address : </strong>`+ about.address
            document.getElementById('designation').innerHTML = about.designation
            document.getElementById('summary').innerHTML =  about.summary 
            document.getElementById('profile').src = about.picture
        }
        else if(section.title == 'Skills')
        {
            const skills = section.items
            
            const divee = document.getElementById('Skills')
            divee.innerHTML=``
            const heading = document.createElement('h2')
            heading.textContent=section.title
            divee.appendChild(heading)

            const hr = document.createElement('hr')
            divee.appendChild(hr)

            skills.forEach(skill =>{
                const skillp = document.createElement('p')
                skillp.textContent=skill.skill
                divee.appendChild(skillp)
            })
        }   
        else if(section.title == 'Achievements'){
            const sectionDiv = document.getElementById('Achievements');
            sectionDiv.innerHTML=``
            const heading = document.createElement('h2');
            heading.textContent = section.title;
            sectionDiv.appendChild(heading);

            const hr = document.createElement('hr')
            sectionDiv.appendChild(hr)
    
            section.items.forEach(item => {
                const itemDiv = document.createElement('p');
                itemDiv.classList='section-title'
                itemDiv.textContent = item.title 
                sectionDiv.appendChild(itemDiv);



                const itemDiv2 = document.createElement('p');
                itemDiv2.textContent = item.description 
                sectionDiv.appendChild(itemDiv2);
            });

        }
        else if(section.title == "Projects"){
            const sectionDiv = document.getElementById('Projects');
            sectionDiv.innerHTML=``
            const heading = document.createElement('h2');
            heading.textContent = section.title;
            sectionDiv.appendChild(heading);

            const hr = document.createElement('hr')
            sectionDiv.appendChild(hr)
    
            section.items.forEach(item => {
                const itemDiv = document.createElement('p');
                itemDiv.classList='section-title'
                itemDiv.textContent = item.projectName 
                sectionDiv.appendChild(itemDiv);

                const itemDiv2 = document.createElement('p');
                itemDiv2.textContent = item.projectDescription 
                sectionDiv.appendChild(itemDiv2);

                if(item.projectLink!=''){
                    const link = document.createElement('a')
                    const itemDiv3 = document.createElement('p');
                    link.href = item.projectLink 
                    link.textContent = 'Click Here To See The Project'
                    link.target='_blank'
                    itemDiv3.appendChild(link)
                    sectionDiv.appendChild(itemDiv3);
                }
            }); 
        }
        // for education and experience
        else{
            // console.log(section)
            const sectionDiv = document.getElementById(section.title);
            sectionDiv.innerHTML=``
            const heading = document.createElement('h2');
            heading.textContent = section.title;
            sectionDiv.appendChild(heading);

            const hr = document.createElement('hr')
            sectionDiv.appendChild(hr)
    
            section.items.forEach(item => {

                if(section.title == 'Education'){
                    const itemDiv = document.createElement('h2');
                    itemDiv.classList='edu'
                    itemDiv.textContent = item.origin
                    sectionDiv.appendChild(itemDiv);

                    const itemDiv3 = document.createElement('p');
                    itemDiv3.innerHTML = `${item.school} - ${item.location}` 
                    sectionDiv.appendChild(itemDiv3);
                }
                else{
                    const itemDiv = document.createElement('p');
                    itemDiv.classList='section-title'
                    itemDiv.innerHTML = `<strong>${item.origin}</strong> - ${item.location}` 
                    sectionDiv.appendChild(itemDiv);

                    const itemDiv3 = document.createElement('p');
                    itemDiv3.textContent = item.title 
                    sectionDiv.appendChild(itemDiv3);
                }
        
                const itemDiv4 = document.createElement('p');
                itemDiv4.innerHTML = `&#8226; ${item.description}`
                sectionDiv.appendChild(itemDiv4);


                const itemDiv2 = document.createElement('p');
                itemDiv2.id='dates'
               if(item.endDate ==''||item.endDate=="Invalid Date"){
                    item.endDate = 'present'
                    itemDiv2.textContent = item.startDate + ' to ' + item.endDate 
                    sectionDiv.appendChild(itemDiv2);
               }
                
                if(item.startDate =="Invalid Date"){
                    document.getElementById('dates').innerHTML=``
                }
                    

            })
        }
       
    });


}

renderCV(data)



