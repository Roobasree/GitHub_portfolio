function showSection(sectionID){
    const section = document.querySelectorAll('.section');

    section.forEach(section=>{
        section.classList.remove('active');
    })

    document.getElementById(sectionID).classList.add('active')
}

function toggleMenu() {
  document.querySelector(".navbar").classList.toggle("active");
}


document.addEventListener("click", function (event) {
  const navbar = document.querySelector(".navbar");
  const menuIcon = document.querySelector(".menu-icon");

  if (
    navbar.classList.contains("active") &&
    !navbar.contains(event.target) &&
    !menuIcon.contains(event.target)
  ) {
    navbar.classList.remove("active");
  }
});