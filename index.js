// ======================= NAVIGATION FOR FLOATING LINKS =======================
const floatingNavs = document.querySelectorAll(".floating__nav a");

// Function to remove existing "active" class from all navigation links
const removeActiveClass = () => {
  floatingNavs.forEach((nav) => {
    nav.classList.remove("active");
  });
};

// Add event listeners to each navigation link to set "active" class on click
floatingNavs.forEach((nav) => {
  nav.addEventListener("click", () => {
    removeActiveClass();
    nav.classList.add("active");
  });
});

// ======================= RESUME SECTION =======================
const resumeRight = document.querySelector(".resume__right");

// Content for the "About Me" section
const aboutContent = `
    <h4>About me</h4>
    <p><br></p>
   <h5 class="about">My name is Rajan, a software developer based in London, U.K. 
   <br>
   <br>
  I create user-friendly digital experiences with clean, maintainable code. Currently, I'm expanding my skills by integrating back-end functionality into front-end projects and exploring new frameworks.
`;

const aboutBtn = document.querySelector(".about__btn");
const skillsBtn = document.querySelector(".skills__btn");
const experienceBtn = document.querySelector(".experience__btn");
const educationBtn = document.querySelector(".education__btn");

// Helper function to reset the "primary" class from all buttons
const resetButtonClasses = () => {
  aboutBtn.classList.remove("primary");
  skillsBtn.classList.remove("primary");
  experienceBtn.classList.remove("primary");
  educationBtn.classList.remove("primary");
};

// Set "About Me" as the default content on page load
resumeRight.innerHTML = aboutContent; // Load About Me content by default
resetButtonClasses(); // Ensure no residual "primary" classes
aboutBtn.classList.add("primary"); // Highlight the "About Me" button

// Event listeners for "About Me" button
aboutBtn.addEventListener("click", () => {
  resetButtonClasses(); // Reset all buttons
  resumeRight.innerHTML = aboutContent; // Load About Me content
  resumeRight.className = "resume__right about";
  aboutBtn.classList.add("primary"); // Highlight the clicked button
});

const skillsContent = `
    <h4>Skills</h4>
    <p><br></p>
    <ul class="tech-stack">
        <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" alt="HTML logo" />
            <span></span>
        </li>
        <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" alt="CSS logo" />
            <span></span>
        </li>
            <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="SASS logo" />
            <span></span>
        </li>
        <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt="JavaScript logo" />
            <span></span>
        </li>
         <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" alt="TypeScript logo" />
            <span></span>
        </li>
        <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain.svg" alt="Java logo" />
            <span></span>
        </li>
        <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="ReactJS logo" />
            <span></span>
        </li>
        
    </ul>
`;

skillsBtn.addEventListener("click", () => {
  resetButtonClasses(); // Reset all buttons
  resumeRight.innerHTML = skillsContent; // Load Tech Stack content
  resumeRight.className = "resume__right skills";
  skillsBtn.classList.add("primary"); // Highlight the clicked button
});

// Content for the "Experience" section
const experienceContent = `
    <h4>Experience</h4>
    <p><br></p>
    <ul>
        <li>
          <h5>JustIT Bootcamp<span> (July 24 - October 24)</span></h5>
            <p>Skills Bootcamp in Software development</p>
        </li>
        <li>
          <h5>_nology <span> (Jun 25 - Aug 25)</span></h5>
            <p>_nology Pathway-to-Tech Programme (8 week intensive course in software engineering)</p>
        </li>
    </ul>
`;

experienceBtn.addEventListener("click", () => {
  resetButtonClasses(); // Reset all buttons
  resumeRight.innerHTML = experienceContent; // Load Experience content
  resumeRight.className = "resume__right";
  experienceBtn.classList.add("primary"); // Highlight the clicked button
});

// Content for the "Education" section
const educationContent = `
    <h4>Education</h4>
    <p><br></p>
    <ul>
        <li>
            <h5>University Of Essex <span>(2019-21)</span></h5>
            <p>Bachelor of Science: Economics</p>
            <p>Grade: 1:1</p>
        </li>
    </ul>
`;

educationBtn.addEventListener("click", () => {
  resetButtonClasses(); // Reset all buttons
  resumeRight.innerHTML = educationContent; // Load Education content
  resumeRight.className = "resume__right education";
  educationBtn.classList.add("primary"); // Highlight the clicked button
});

// ======================= MIXITUP FOR PROJECTS SECTION =======================
const containerEl = document.querySelector(".projects__container");
let mixer = mixitup(containerEl, {
  animation: {
    enable: false,
  },
});

// Show all projects by default
mixer.filter("*");

// ======================= THEME TOGGLER =======================
const themeToggler = document.querySelector(".nav__theme-btn");
const liveBg = document.querySelector(".live-bg");
const NUM_SHAPES = 20;

// Function to create shapes
function createShapes() {
  for (let i = 0; i < NUM_SHAPES; i++) {
    const shape = document.createElement("div");
    const shapeType = ["circle", "triangle"][Math.floor(Math.random() * 3)];
    shape.classList.add("shape", shapeType);

    // Randomize size and position
    const size = Math.random() * 30 + 10;
    if (shapeType === "circle") {
      shape.style.width = `${size}px`;
      shape.style.height = `${size}px`;
    } else if (shapeType === "triangle") {
      shape.style.borderLeft = `${size / 2}px solid transparent`;
      shape.style.borderRight = `${size / 2}px solid transparent`;
      shape.style.borderBottom = `${size}px solid`;
    }

    // Randomize position and animation
    shape.style.left = `${Math.random() * 100}vw`;
    shape.style.animationDuration = `${Math.random() * 5 + 5}s`;
    shape.style.animationDelay = `${Math.random() * 3}s`;

    liveBg.appendChild(shape);
  }

  updateShapeStyles();
}

// Function to update shape colors based on the current theme
function updateShapeStyles() {
  const isDarkMode = document.body.classList.contains("dark-theme-variables");
  const shapes = document.querySelectorAll(".shape");

  shapes.forEach((shape) => {
    if (shape.classList.contains("circle")) {
      shape.style.background = isDarkMode ? "#FFFF" : "#000307";
    } else if (shape.classList.contains("triangle")) {
      shape.style.borderBottomColor = isDarkMode ? "#FFFF" : "#000307";
    }
  });
}

// Handle theme toggling
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  // Toggle button icon and save theme
  if (document.body.classList.contains("dark-theme-variables")) {
    themeToggler.innerHTML = `<i class="uil uil-sun"></i>`;
    window.localStorage.setItem("portfolio-theme", "dark-theme-variables");
  } else {
    themeToggler.innerHTML = `<i class="uil uil-moon"></i>`;
    window.localStorage.setItem("portfolio-theme", "");
  }

  // Update shape styles dynamically when toggling theme
  updateShapeStyles();
});

// Apply saved theme on page load
const savedTheme = window.localStorage.getItem("portfolio-theme");
if (savedTheme) {
  document.body.classList.add(savedTheme);
}
createShapes(); // Initialize shapes on page load
