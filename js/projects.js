// ---------------------futuro file json-------------------------//

var projects = 
    {
        "project1": {
            "header": "Project 1",
            "textOverview": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus.",
            "textDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.",
            "image": "img/projects/project1.jpg",
            "externalLink": "",
            "tags": ["tag1", "tag2", "tag3"],
        },
    
        "project2": {
            "header": "Project 2",
            "textOverview": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus.",
            "textDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.",
            "image": "img/projects/project2.jpg",
            "externalLink": "",
            "tags": ["tag1"],
    
        },
    };

// ---------------------create list-------------------------//
    
var projectsInplace = document.getElementById('list-projects');

function createElement(type, className) {
    var element = document.createElement(type);
    element.className = className;
    return element;
};

function create(list) {
    for (var project in list) {
        var projectLi = createElement('li', 'project');

        var projectText = createElement('div', 'project-text');

        var projectHeader = createElement('h3', 'project-header');
        projectHeader.innerHTML = projects[project].header;
        projectText.appendChild(projectHeader);
        
        var projectTextOverview = createElement('p', 'project-text-overview');
        projectTextOverview.innerHTML = projects[project].textOverview;
        projectText.appendChild(projectTextOverview);
        
        var projectExternalLink = createElement('a', 'project-external-link');
        projectExternalLink.href = projects[project].externalLink;
        projectExternalLink.innerHTML = 'External Link';
        projectText.appendChild(projectExternalLink);
        
        var projectTags = createElement('p', 'project-tags');
        projectTags.innerHTML = projects[project].tags;
        projectText.appendChild(projectTags);
        
        var projectImage = createElement('img', 'project-image');
        projectImage.src = projects[project].image;
        projectLi.appendChild(projectImage);

        projectLi.appendChild(projectText);

        projectsInplace.appendChild(projectLi);
    }
};


create(projects);

//-----------------------Filter-----------------------//

function getInputs(inputs) {
    inputs = inputs.value.toLowerCase();
    
    return inputs
    
}

var inputFilter = document.getElementById('input-filter-projects');
var projectsLi = document.getElementsByClassName('project');
var report = document.getElementById('report');
var numberOfVisibleProjects = projectsLi.length;
report.innerHTML = numberOfVisibleProjects;

inputFilter.addEventListener('input', function(e) {
    
    var inputs = getInputs(inputFilter);
    numberOfVisibleProjects = 0;
    for (var i = 0; i < projectsLi.length; i++) {
        var projectLi = projectsLi[i];
        var projectTags = projectLi.getElementsByClassName('project-tags')[0].innerHTML.toLowerCase();
        var projectHeader = projectLi.getElementsByClassName('project-header')[0].innerHTML.toLowerCase();
        
        if (projectTags.indexOf(inputs) > -1 || projectHeader.indexOf(inputs) > -1) {
            projectLi.style.display = '';
            numberOfVisibleProjects++;
            
        } else {
            projectLi.style.display = 'none';
        }
    }
    // ---------------------report-------------------------//
    report.innerHTML = numberOfVisibleProjects;

});
