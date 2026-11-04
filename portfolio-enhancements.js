// =================== SHARED PORTFOLIO ENHANCEMENTS: COMMAND PALETTE (CTRL+K) & CV MODAL ===================

document.addEventListener("DOMContentLoaded", () => {
  // Inject Command Palette + CV Preview Modal + Toast into body
  const uiContainer = document.createElement("div");
  uiContainer.innerHTML = `
    <!-- COMMAND PALETTE (CTRL + K) -->
    <div class="cmd-overlay" id="cmdOverlay">
      <div class="cmd-modal">
        <div class="cmd-search-bar">
          <i class='bx bx-search'></i>
          <input type="text" id="cmdInput" placeholder="Type a command or search projects, skills, links..." autocomplete="off" />
          <span class="cmd-kbd">ESC</span>
        </div>
        <div class="cmd-list" id="cmdList"></div>
        <div class="cmd-footer">
          <span><strong style="color:#94a3b8;">&uarr;&darr;</strong> to navigate &bull; <strong style="color:#94a3b8;">Enter</strong> to select</span>
          <span>Stuart Mzimba Portfolio</span>
        </div>
      </div>
    </div>

    <!-- CV PREVIEW & DOWNLOAD MODAL -->
    <div class="cv-modal-overlay" id="cvModalOverlay">
      <div class="cv-modal-box">
        <div class="cv-modal-header">
          <h3><i class='bx bx-file'></i> Curriculum Vitae — Stuart Mzimba</h3>
          <div class="cv-modal-actions">
            <a href="Stuart_Mzimba_CV.pdf" download="Stuart_Mzimba_CV.pdf" class="cv-download-btn">
              <i class='bx bx-download'></i> Download Official PDF
            </a>
            <button class="cv-close-btn" id="closeCvModal" aria-label="Close CV Modal">
              <i class='bx bx-x'></i>
            </button>
          </div>
        </div>
        <div class="cv-modal-body">
          <div class="cv-summary-sheet">
            <div class="cv-sheet-top">
              <div>
                <h2>STUART MZIMBA</h2>
                <p>Final-Year BICT Student &bull; Full-Stack &amp; Software Developer</p>
              </div>
              <div class="cv-contact-Chips">
                <span><i class='bx bx-map'></i> Mbombela West Acres, SA</span>
                <span><i class='bx bx-phone'></i> 076 669 6948</span>
                <span><i class='bx bx-envelope'></i> 240919246@ump.ac.za</span>
              </div>
            </div>

            <div class="cv-block">
              <h4>Executive Profile</h4>
              <p>
                Final-year Bachelor of Information and Communication Technology student at the University of Mpumalanga (Expected 2027). Strong foundation in software development, web and mobile application development, database management, and problem-solving through academic and personal projects. Proficient in Python, Java, JavaScript, Kotlin, and SQL.
              </p>
            </div>

            <div class="cv-grid-2">
              <div class="cv-block">
                <h4>Education</h4>
                <p><strong>BICT (Bachelor of Information &amp; Communication Technology)</strong><br>University of Mpumalanga &bull; Expected 2027</p>
                <p style="margin-top:8px;"><strong>National Senior Certificate</strong><br>Mjokwane Secondary School &bull; 2023</p>
              </div>

              <div class="cv-block">
                <h4>Certifications &amp; Courses</h4>
                <p><strong>IBM Developer Skills Network (CognitiveClass.ai)</strong><br>&bull; Data Science 101<br>&bull; Data Science Tools</p>
              </div>

              <div class="cv-block">
                <h4>Core Technical Skills</h4>
                <p>Python &bull; Java &bull; JavaScript &bull; Kotlin &bull; SQL &bull; React &bull; Node.js &bull; Web &amp; Mobile App Development &bull; Database Management</p>
              </div>

              <div class="cv-block">
                <h4>Languages &amp; Reference</h4>
                <p><strong>Languages:</strong> English, SiSwati, isiZulu<br><strong>Reference:</strong> B.P. Ngomane (Uncle) — 076 987 7545</p>
              </div>
            </div>
          </div>

          <iframe src="Stuart_Mzimba_CV.pdf" class="cv-pdf-frame" title="Stuart Mzimba CV PDF"></iframe>
        </div>
      </div>
    </div>

    <!-- TOAST NOTIFICATION -->
    <div class="portfolio-toast" id="portfolioToast">
      <i class='bx bx-check-circle'></i>
      <span id="toastMessage">Action completed!</span>
    </div>
  `;
  document.body.appendChild(uiContainer);

  // Toast helper
  window.showPortfolioToast = function(msg) {
    const toast = document.getElementById("portfolioToast");
    const toastMsg = document.getElementById("toastMessage");
    if (!toast || !toastMsg) return;
    toastMsg.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2600);
  };

  // CV Modal Triggers
  const cvModalOverlay = document.getElementById("cvModalOverlay");
  const closeCvModal = document.getElementById("closeCvModal");

  window.openCvModal = function() {
    cvModalOverlay.classList.add("open");
  };

  document.querySelectorAll("[data-open-cv]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      window.openCvModal();
    });
  });

  closeCvModal.addEventListener("click", () => cvModalOverlay.classList.remove("open"));
  cvModalOverlay.addEventListener("click", (e) => {
    if (e.target === cvModalOverlay) cvModalOverlay.classList.remove("open");
  });

  // Command Palette Data & Logic
  const commands = [
    { group: "Quick Actions", title: "Preview / Download CV (Resume)", sub: "Stuart_Mzimba_CV.pdf", icon: "bx-file", badge: "PDF", action: () => window.openCvModal() },
    { group: "Quick Actions", title: "Download CV Directly", sub: "Save PDF to device", icon: "bx-download", badge: "Download", action: () => { const a = document.createElement('a'); a.href = 'Stuart_Mzimba_CV.pdf'; a.download = 'Stuart_Mzimba_CV.pdf'; a.click(); window.showPortfolioToast("Downloading Stuart_Mzimba_CV.pdf..."); } },
    { group: "Quick Actions", title: "Copy Personal Email", sub: "stuartmzimba@gmail.com", icon: "bx-copy", badge: "Copy", action: () => { navigator.clipboard.writeText("stuartmzimba@gmail.com"); window.showPortfolioToast("Copied stuartmzimba@gmail.com!"); } },
    { group: "Quick Actions", title: "Copy University Email", sub: "240919246@ump.ac.za", icon: "bx-envelope", badge: "Copy", action: () => { navigator.clipboard.writeText("240919246@ump.ac.za"); window.showPortfolioToast("Copied 240919246@ump.ac.za!"); } },
    { group: "Quick Actions", title: "Copy Phone Number", sub: "076 669 6948", icon: "bx-phone", badge: "Copy", action: () => { navigator.clipboard.writeText("0766696948"); window.showPortfolioToast("Copied 076 669 6948!"); } },

    { group: "Navigation", title: "Go to Home", sub: "Overview & Hero", icon: "bx-home-alt", badge: "Page", action: () => window.location.href = "index.html" },
    { group: "Navigation", title: "Go to Projects Showcase", sub: "All GitHub & AI Projects", icon: "bx-layer", badge: "Page", action: () => window.location.href = "projects.html" },
    { group: "Navigation", title: "Go to Background & Education", sub: "UMP BICT, IBM Certificates & Skills", icon: "bx-graduation", badge: "Page", action: () => window.location.href = "Background.html" },
    { group: "Navigation", title: "Go to Contact & Message Form", sub: "Send a direct message", icon: "bx-paper-plane", badge: "Page", action: () => window.location.href = "contacts.html" },

    { group: "Featured Projects", title: "AI Code Tutor (BICT131)", sub: "Live on Vercel + GitHub", icon: "bx-bot", badge: "Live App", action: () => window.location.href = "projects.html?project=ai-code-tutor" },
    { group: "Featured Projects", title: "Youth Job & Internship Finder", sub: "Live on Railway (Jakarta EE 10)", icon: "bx-briefcase-alt-2", badge: "Live App", action: () => window.location.href = "projects.html?project=Job-Finder" },
    { group: "Featured Projects", title: "Hybrid Music Recommendation System", sub: "Live on Railway (FP-Growth & FastAPI)", icon: "bx-headphone", badge: "Live App", action: () => window.location.href = "projects.html?project=music-recommendation-system" },
    { group: "Featured Projects", title: "Launch Youth Job Finder (Live Demo)", sub: "job-finder-production-0c08.up.railway.app", icon: "bx-globe", badge: "Railway", action: () => window.open("https://job-finder-production-0c08.up.railway.app", "_blank") },
    { group: "Featured Projects", title: "Launch Music Recommender (Live Demo)", sub: "music-recommender-production-9141.up.railway.app", icon: "bx-globe", badge: "Railway", action: () => window.open("https://music-recommender-production-9141.up.railway.app", "_blank") },
    { group: "Featured Projects", title: "Launch AI Code Tutor (Live Demo)", sub: "bict131-code-tutor.vercel.app", icon: "bx-globe", badge: "Vercel", action: () => window.open("https://bict131-code-tutor.vercel.app", "_blank") },
    { group: "Featured Projects", title: "Student Mark Management System", sub: "Java & OOP", icon: "bx-bar-chart-alt-2", badge: "Project", action: () => window.location.href = "projects.html?project=StudentMarkApp2" },

    { group: "Social Profiles", title: "Open GitHub Profile", sub: "github.com/stuartmzimba", icon: "bxl-github", badge: "External", action: () => window.open("https://github.com/stuartmzimba", "_blank") },
    { group: "Social Profiles", title: "Open LinkedIn Profile", sub: "linkedin.com/in/stuart-mzimba-95836832a", icon: "bxl-linkedin", badge: "External", action: () => window.open("https://www.linkedin.com/in/stuart-mzimba-95836832a/", "_blank") }
  ];

  const cmdOverlay = document.getElementById("cmdOverlay");
  const cmdInput = document.getElementById("cmdInput");
  const cmdList = document.getElementById("cmdList");
  let selectedIndex = 0;
  let filteredCommands = [...commands];

  function renderCommandList() {
    const q = cmdInput.value.toLowerCase().trim();
    filteredCommands = commands.filter(c =>
      !q ||
      c.title.toLowerCase().includes(q) ||
      c.sub.toLowerCase().includes(q) ||
      c.group.toLowerCase().includes(q)
    );

    if (selectedIndex >= filteredCommands.length) selectedIndex = 0;

    cmdList.innerHTML = "";
    let currentGroup = "";

    filteredCommands.forEach((cmd, idx) => {
      if (cmd.group !== currentGroup) {
        currentGroup = cmd.group;
        const groupEl = document.createElement("div");
        groupEl.className = "cmd-group-label";
        groupEl.textContent = currentGroup;
        cmdList.appendChild(groupEl);
      }

      const item = document.createElement("div");
      item.className = `cmd-item ${idx === selectedIndex ? "selected" : ""}`;
      item.innerHTML = `
        <div class="cmd-item-left">
          <i class='bx ${cmd.icon}'></i>
          <div>
            <span class="cmd-item-title">${cmd.title}</span>
            <span class="cmd-item-sub">${cmd.sub}</span>
          </div>
        </div>
        <span class="cmd-item-badge">${cmd.badge}</span>
      `;
      item.addEventListener("click", () => {
        closeCommandPalette();
        cmd.action();
      });
      cmdList.appendChild(item);
    });
  }

  window.openCommandPalette = function() {
    cmdOverlay.classList.add("open");
    cmdInput.value = "";
    selectedIndex = 0;
    renderCommandList();
    setTimeout(() => cmdInput.focus(), 50);
  };

  function closeCommandPalette() {
    cmdOverlay.classList.remove("open");
  }

  document.querySelectorAll("[data-open-cmd]").forEach(btn => {
    btn.addEventListener("click", () => window.openCommandPalette());
  });

  cmdOverlay.addEventListener("click", (e) => {
    if (e.target === cmdOverlay) closeCommandPalette();
  });

  cmdInput.addEventListener("input", () => {
    selectedIndex = 0;
    renderCommandList();
  });

  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      if (cmdOverlay.classList.contains("open")) {
        closeCommandPalette();
      } else {
        window.openCommandPalette();
      }
    } else if (e.key === "Escape") {
      closeCommandPalette();
      cvModalOverlay.classList.remove("open");
    } else if (cmdOverlay.classList.contains("open")) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        selectedIndex = (selectedIndex + 1) % Math.max(1, filteredCommands.length);
        renderCommandList();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        selectedIndex = (selectedIndex - 1 + Math.max(1, filteredCommands.length)) % Math.max(1, filteredCommands.length);
        renderCommandList();
      } else if (e.key === "Enter" && filteredCommands[selectedIndex]) {
        e.preventDefault();
        const chosen = filteredCommands[selectedIndex];
        closeCommandPalette();
        chosen.action();
      }
    }
  });
});
