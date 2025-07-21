/*jshint esversion: 6 */
/*global html2pdf*/

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#app").innerHTML = `
  <div id="resume-container">
    <section class="resume">
      <section class="resume-top"> 
          <img src="/photo.png" alt="avatar" class="avatar">
          
          <div class="nameBox">
            <p class="text1">Hello 👋 I’m</p>
            <div class="item">
              <h2 class="text2">Karthik SR</h2>
              <p class="text3">UX/UI Designer</p>
            </div>
          </div>
        
          <div class="languagesBox">
            <h3 class="languages-title">Languages</h3>
            <div class="languages-content">
              <div class="row">
                <p>English</p><div class="bar full"></div>
              </div>
              <div class="row">
                <p>Malayalam</p><div class="bar full"></div>
              </div>
              <div class="row">
                <p>Hindi</p><div class="bar medium"></div>
              </div>
            </div>
          </div>
      </section>

      <section class="resume-medium">
          <div class="experience">
            <h1 class="word">Experience</h1>
            <div class="list">
        
              <!-- Card 1 -->
              <div class="exp-card green">
                <div class="exp-header">
                  <p class="exp-date">Jun. 2023 – Present</p>
                  <div class="tag-color">most recent</div>
                </div>
                <div class="content">
                  <div class="job-info">
                    <h3 class="exp-title">Marketing Manager</h3>
                    <p class="exp-company">Pankayam &nbsp;|&nbsp; Full-time</p>
                  </div>
                  <ul class="exp-tasks">
                    <li>Strategy development and planning of campaigns that promote the business and generate genuine traffic</li>
                    <li>SEO Content Creation for Blogs, Website, Social media</li>
                  </ul>
                </div>
              </div>
        
              <!-- Card 2 -->
              <div class="exp-card white">
                <div class="exp-header">
                  <p class="exp-date">2017 – Present</p>
                </div>
                <div class="content">
                  <div class="job-info">
                    <h3 class="exp-title">Graphic / Web designer</h3>
                    <p class="exp-company">Freelance</p>
                  </div>
                  <ul class="exp-tasks">
                    <li>Development of internal projects from scratch, product design of brands</li>
                    <li>Landing page, webapps and hybrid apps</li>
                    <li>Coordinating with outside agencies, art services, web designer, marketing, printers, and colleagues</li>
                  </ul>
                </div>
              </div>
        
              <!-- Card 3 -->
              <div class="exp-card white">
                <div class="exp-header">
                  <p class="exp-date">Sep. 2021 – Jun. 2023</p>
                </div>
                <div class="content">
                  <div class="job-info">
                    <h3 class="exp-title">Legal Assistant</h3>
                    <p class="exp-company">Law Firm &nbsp;|&nbsp; Intern</p>
                  </div>
                  <ul class="exp-tasks">
                    <li>Provide administrative support to lawyer and enhance office effectiveness</li>
                    <li>Handle communication with clients, witnesses etc.</li>
                    <li>Prepare case briefs and summarize depositions, interrogatories and testimony</li>
                  </ul>
                </div>
              </div>
        
            </div>
          </div>
        
          <div class="tools">
              <h3>Tools</h3>
            
              <div class="tool-section">
                <div class="tool-title">design</div>
                <div class="tool-grid">
                  <img src="/tools/figma.png" alt="Figma">
                  <img src="/tools/photoshop.png" alt="Photoshop">
                  <img src="/tools/illustrator.png" alt="Illustrator">
                  <img src="/tools/premiere.png" alt="Premiere">
                  <img src="/tools/notion.png" alt="Notion">
                  <img src="/tools/meet.png" alt="Google Meet">
                </div>
              </div>
            
              <div class="tool-section">
                <div class="tool-title">no-code</div>
                <div class="tool-grid">
                  <img src="/tools/zapier.png" alt="Zapier">
                  <img src="/tools/webflow.png" alt="Webflow">
                  <img src="/tools/framer.png" alt="Framer">
                  <img src="/tools/wordpress.png" alt="WordPress">
                </div>
              </div>
            
              <div class="tool-section">
                <div class="tool-title">artoficial intelligence</div>
                <div class="tool-grid">
                  <img src="/tools/openai.png" alt="OpenAI">
                  <img src="/tools/palette.png" alt="Palette">
                  <img src="/tools/sailboat.png" alt="Sailboat">
                </div>
              </div>
          </div>
      </section>

      <section class="resume-bottom">
        <div class="education-section">
            <h2>Education</h2>
            <div class="education-grid">
              <div class="two">
                  <div class="education-card green">
                    <div class="card-header">
                      <span>2023</span>
                      <img src="/heart-icon.png" alt="heart" class="icon" />
                    </div>
                    <h3>UI/UX</h3>
                    <p class="tags">#UX #UI #research #DesignSystem #Ui #wireframing #figma #Ux</p>
                    <p class="institution">Coursera</p>
                  </div>
                  <div class="education-card white">
                    <div class="card-header"><span>2017</span></div>
                    <h3>Graphic design</h3>
                    <p class="tags-green">#branding #web #illustration #adobe</p>
                    <p class="institution">Coursrea</p>
                  </div>  
              </div>
              
              <div class="solo">
                  <div class="education-card white">
                    <div class="card-header"><span>2017 - 2022</span></div>
                    <h3>Law</h3>
                    <p class="tags-green">#law #legalStudies #contracts #internationalLaws</p>
                    <p class="institution">University of Kerala</p>
                  </div>
              </div>                   
            </div>
        </div>
        
        <div class="extraBox">
          <div class="interestsBox">
            <h2>Interests</h2>
            <div class="tags-container">
              <div class="tag">branding</div>
              <div class="tag">design</div>
              <div class="tag">photography</div>
              <div class="tag">artificial intelligence</div>
              <div class="tag">illustration</div>
              <div class="tag">typography</div>
              <div class="tag">social networks</div>
              <div class="tag">research</div>
              <div class="tag">dron pilot</div>
              <div class="tag">games</div>
            </div>
          </div>
        
          <div class="contact">
            <p>Let’s chat! I’m ready to work on <br>exciting projects</p>
            <span class="email">srkarthik.designscape@gmail.com</span>
          </div>
      </div>

      </section>
    </section>
  </div>
`;

  const editableFields = [
    { selector: ".text2", key: "resume_name" },
    { selector: ".text3", key: "resume_job" },
    { selector: ".email", key: "resume_email" },
  ];

  editableFields.forEach(({ selector, key }) => {
    const el = document.querySelector(selector);
    if (!el) return;
    el.contentEditable = true;
    if (localStorage.getItem(key)) el.textContent = localStorage.getItem(key);
    el.addEventListener("blur", () =>
      localStorage.setItem(key, el.textContent),
    );
  });

  function removeOldRipple(target) {
    const oldRipple = target.querySelector(".ripple-circle");
    if (oldRipple) oldRipple.remove();
  }

  function buildRippleElement(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const ripple = document.createElement("span");
    ripple.className = "ripple-circle";
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    return ripple;
  }

  function appendAndAnimateRipple(target, ripple) {
    target.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());
  }

  function createRipple(event) {
    removeOldRipple(event.currentTarget);
    const ripple = buildRippleElement(event);
    appendAndAnimateRipple(event.currentTarget, ripple);
  }

  document
    .querySelectorAll(".ripple, .exp-card, .education-card, .tag")
    .forEach((el) => {
      el.classList.add("ripple");
      el.addEventListener("click", createRipple);
    });

  document.getElementById("downloadPDF").addEventListener("click", () => {
    window.scrollTo(0, 0);

    const element = document.getElementById("resume-container");
    const opt = {
      margin: 0.5,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save();
  });
});
