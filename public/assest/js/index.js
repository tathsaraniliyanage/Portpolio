// var show = true;

// const showProject = (e) => {
//     if (show) {
//         show = false;
//         $('#projects').css({ 'display': 'flex' })

//         $('#project-btn-icon').removeClass('fa-chevron-down')
//         $('#project-btn-icon').addClass('fa-chevron-up')

//         $('#project-show-text').text("Less project")
//     } else {
//         show = true;
//         $('#projects').css({ 'display': 'none' })

//         $('#project-btn-icon').addClass('fa-chevron-down')
//         $('#project-btn-icon').removeClass('fa-chevron-up')

//         $('#project-show-text').text("Show project")
//     }
// }

// var show_list = true;
// const click_nav = () => {
//     if (show_list) {
//         show_list = false;
//         $('#burger-list').css({ 'display': 'flex' })

//     } else {
//         show_list = true;
//         $('#burger-list').css({ 'display': 'none' })

//     }
// }

// const click_on_list_item = () => {
//     show_list = true;
//     $('#burger-list').css({ 'display': 'none' })
// }








// Initialize with projects visible by default
let projectsVisible = true;

const toggleProjects = () => {
    if (projectsVisible) {
        // Hide projects
        projectsVisible = false;
        $('#projects').css({ 'display': 'none' });
        $('#project-btn-icon').removeClass('fa-chevron-up').addClass('fa-chevron-down');
        $('#project-show-text').text("Show projects");
    } else {
        // Show projects
        projectsVisible = true;
        $('#projects').css({ 'display': 'flex' });
        $('#project-btn-icon').removeClass('fa-chevron-down').addClass('fa-chevron-up');
        $('#project-show-text').text("Hide projects");
    }
}


$(document).ready(function () {
    $('#projects').css({ 'display': 'flex' });
});


var show_list = true;
const click_nav = () => {
    if (show_list) {
        show_list = false;
        $('#burger-list').css({ 'display': 'flex' });
    } else {
        show_list = true;
        $('#burger-list').css({ 'display': 'none' });
    }
}

const click_on_list_item = () => {
    show_list = true;
    $('#burger-list').css({ 'display': 'none' });
}





