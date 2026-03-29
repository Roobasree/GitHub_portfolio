function showSection(sectionID){
    const section = document.querySelectorAll('.section');

    section.forEach(section=>{
        section.classList.remove('active');
    })

    document.getElementById(sectionID).classList.add('active')
}