$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    // contact form submission
    $("#contact-form").submit(function (event) {
        event.preventDefault();

        emailjs.init(EMAILJS_PUBLIC_KEY);

        emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                $("#contact-form")[0].reset();
                alert("Form Submitted Successfully!");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again.");
            });
    });

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Bipin Poudel";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/images/favhand.png");
        }
    });


// <!-- typed js effect  -->
var typed = new Typed(".typing-text", {
    strings: ["Frontend Development", "Backend Development", "CI/CD", "Web Development", "Full Stack Development"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});


const skills = [
    { "name": ".NET", "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/640px-Microsoft_.NET_logo.svg.png" },
    { "name": "Angular", "icon": "https://img.icons8.com/color/48/000000/angularjs.png" },
    { "name": "PrimeNG", "icon": "https://imgs.search.brave.com/NeUx82INfkVhWw5M-MwmVDLhwNCzXbaeNvPSs5cjtS0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vdGhlZnJv/bnRlbmRhcmNoaXRl/Y3QuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDI1LzA1L3By/aW1lbmcud2VicD9m/aXQ9NjI0LDI3NCZz/c2w9MQ" },
    { "name": "Versioning", "icon": "https://img.icons8.com/color/48/000000/git.png" },
    { "name": "Django", "icon": "https://img.icons8.com/color/48/000000/django.png" },
    { "name": "MSSQL", "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/SQL_%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF.png/640px-SQL_%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF.png" },
    {
        "name": "ReactJS",
        "icon": "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
    },
    {
        "name": "Bootstrap",
        "icon": "https://img.icons8.com/color/48/000000/bootstrap.png"
    },
    {
        "name": "Sass",
        "icon": "https://img.icons8.com/color/48/000000/sass.png"
    },
    {
        "name": "HTML5",
        "icon": "https://img.icons8.com/color/48/000000/html-5--v1.png"
    },
    {
        "name": "CSS3",
        "icon": "https://img.icons8.com/color/48/000000/css3.png"
    },
    {
        "name": "JavaScript",
        "icon": "https://img.icons8.com/color/48/000000/javascript--v1.png"
    },
    {
        "name": "Java",
        "icon": "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png"
    },
    {
        "name": "Python",
        "icon": "https://img.icons8.com/color/48/000000/python--v1.png"
    },
    {
        "name": "MySQL",
        "icon": "https://img.icons8.com/color/48/000000/mysql-logo.png"
    },
    {
        "name": "Netlify",
        "icon": "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png"
    },
    {
        "name": "Git VCS",
        "icon": "https://img.icons8.com/color/48/000000/git.png"
    },
    {
        "name": "GitHub",
        "icon": "https://img.icons8.com/glyph-neue/48/ffffff/github.png"
    },

];

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
      <div class="bar">
        <div class="info">
          <img src="${skill.icon}" alt="${skill.name}" style="width:40px;height:40px;">
          <span>${skill.name}</span>
        </div>
      </div>`;
    });
    skillsContainer.innerHTML = skillHTML;
}

showSkills(skills);

const projects = [
    {
        name: "Card Management System",
        description: "Manage credit/debit card operations.",
        image: "./assets/images/projects/CardMS.webp",
        technologies: ".NET Core, C#, Angular, PrimeNG, MSSQL"
    },
    {
        name: "Inventory Management System",
        description: "Manage products, stock, vendors and orders.",
        image: "./assets/images/projects/IMS.webp",
        technologies: ".NET Core, C#, MSSQL"
    },
    {
        name: "Rental System",
        description: "Online platform for renting properties.",
        image: "./assets/images/projects/RoomRentalSys.webp",
        technologies: "Django, Python, MySQL, Bootstrap"
    },
    {
        name: "Mero Notes",
        description: "A note-collecting application.",
        image: "./assets/images/projects/meronotes.webp",
        technologies: "JavaScript, HTML, CSS"
    }
];


function showProjects(projects) {
    const container = document.getElementById("projectsContainer");
    let html = "";
    projects.forEach(project => {
        html += `
      <div class="project-box">
        <img src="${project.image}" alt="${project.name}">
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <p><strong>Technologies:</strong> ${project.technologies}</p>

      </div>
    `;
    });
    container.innerHTML = html;
}

showProjects(projects);


// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});

// Poudel developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

// Start of Tawk.to Live Chat
// var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
// (function () {
//     var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
//     s1.async = true;
//     s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
//     s1.charset = 'UTF-8';
//     s1.setAttribute('crossorigin', '*');
//     s0.parentNode.insertBefore(s1, s0);
// })();
// // End of Tawk.to Live Chat


/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });