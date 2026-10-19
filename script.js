const projects = [
  {
    id: "ditc-cat",
    title: "DITC CAT",
    subtitle: "Voice AI Interactive Assistant",
    shortDescription: "A voice-first assistant that retrieves grounded DITC and CAMT information through a real-time character interface.",
    problem: "DITC and CAMT information is distributed across institutional sources, making it difficult to find through a natural, conversational interaction.",
    projectScope: "A functional academic voice-AI system covering a character interface, streaming audio bridge, knowledge retrieval, and an authenticated administration workflow.",
    role: "Lead Full-Stack & AI Developer",
    responsibilities: [
      "Developed the FastAPI WebSocket audio bridge for multi-turn Gemini Live conversations.",
      "Built the React character interface and managed microphone and session lifecycles to reduce audio feedback.",
      "Created the CAMT and DITC knowledge pipeline and an authenticated administration workflow."
    ],
    technicalImplementation: [
      "Combined semantic vector retrieval with keyword search over a PostgreSQL and pgvector knowledge base.",
      "Implemented character conversation states and lip synchronization driven by streaming audio and viseme fallbacks.",
      "Protected knowledge-base management and conversation analytics with JWT-based admin access."
    ],
    technologies: ["Python", "FastAPI", "React", "PostgreSQL", "pgvector", "Gemini Live", "WebSocket"],
    status: "Completed academic prototype",
    statusLabel: "Completed Prototype",
    teamType: "Primary Contributor",
    year: "2026",
    repository: "https://github.com/CutieCat8/AI-Chatbot-Character-DITC-",
    demo: null,
    images: [],
    featured: true,
    categories: ["full-stack", "back-end", "ai-cv", "leadership"],
    currentStatus: "The end-to-end voice, retrieval, character, and admin workflows are functional as an academic system. No production deployment or usage volume is claimed.",
    visualCode: "VOICE / RAG",
    tilt: { src: "assets/ditc-cat.webp", background: "#ffffff" }
  },
  {
    id: "dear-days",
    title: "Dear Days",
    subtitle: "Private Memory Diary with 3D Museum",
    shortDescription: "A private shared-memory platform with secure media workflows, relationship-based access, and an interactive 3D museum.",
    problem: "People need a private space to preserve and revisit shared memories without exposing personal media or relationships publicly.",
    projectScope: "A completed team project spanning authentication, memories, rooms, friendships, private storage, readers, and a 3D presentation layer.",
    role: "Full-Stack Developer / Primary Contributor",
    responsibilities: [
      "Developed the Supabase-backed data layer, schema migrations, and workflows for memories, rooms, friendships, and media.",
      "Built private profile-media flows and contributed friend, room, monthly, yearbook, and highlight interactions.",
      "Implemented the interactive 3D museum and memory-to-frame assignment workflow as part of a team project."
    ],
    technicalImplementation: [
      "Used Row Level Security and private storage policies to constrain access to personal and room media.",
      "Tightened database privileges and used database functions for multi-step writes that must succeed together.",
      "Separated application contracts from mock and Supabase data adapters to support testable integration."
    ],
    technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "React Three Fiber"],
    status: "Completed project",
    statusLabel: "Completed",
    teamType: "Team Project",
    year: "2026",
    repository: "https://github.com/CutieCat8/Dear-Days",
    demo: null,
    images: [],
    featured: true,
    categories: ["full-stack", "back-end"],
    currentStatus: "Completed as a team project. Contributions are described by area and do not imply sole ownership of the entire application.",
    visualCode: "DATA / 3D",
    tilt: { src: "assets/dear-days-book.webp", background: "#ffffff" }
  },
  {
    id: "lampang-smart-city",
    title: "Smart City Management Platform",
    subtitle: "Lampang Municipality",
    shortDescription: "Back-end reporting workflows and a people-counting component prepared for a municipal smart-city collaboration.",
    problem: "Municipal safety reporting needs structured incident data, useful comparisons, and camera analytics that can be calibrated for each source.",
    projectScope: "An in-development collaboration between CAMT, Lampang Municipality, and Pyramid Solution, covering reporting APIs and a planned computer-vision integration.",
    role: "Back-End & Computer Vision Developer",
    responsibilities: [
      "Developed database structures and REST API endpoints for safety reports.",
      "Built monthly summaries and event comparisons for an officer reporting interface.",
      "Developed a Python and YOLOv8 line-crossing counter with configurable sources and counting coordinates."
    ],
    technicalImplementation: [
      "Prepared RTSP source configuration and coordinate-based line counting for planned integration.",
      "Used development footage to investigate camera-angle and coordinate-calibration constraints.",
      "Kept reporting APIs and computer-vision processing as separately testable responsibilities."
    ],
    technologies: ["Python", "YOLOv8", "REST API", "Database Design", "RTSP"],
    status: "Project under development",
    statusLabel: "In Development",
    teamType: "Municipal Collaboration",
    year: "2026",
    repository: null,
    demo: null,
    images: [],
    featured: true,
    categories: ["back-end", "ai-cv"],
    currentStatus: "The municipal CCTV API and live camera feed have not been provided. The people-counting component is prepared for planned integration and has been evaluated with development footage only.",
    visualCode: "API / CV",
    tilt: { src: "assets/lampang.webp", background: "#ffffff", scale: 0.75 }
  },
  {
    id: "crowdlens",
    title: "CrowdLens",
    subtitle: "Real-Time Crowd Monitoring Demo",
    shortDescription: "A standalone webcam demonstration for people counting, line crossing, live monitoring, and opt-in LINE alerts.",
    problem: "The Lampang collaboration did not provide a municipal CCTV API or live feed in time for demonstration, so a self-contained proof of the workflow was needed.",
    projectScope: "An independently developed live demonstration presented at CAMT Job Fair using a local webcam rather than municipal infrastructure.",
    role: "Independent Developer",
    responsibilities: [
      "Built the project independently from webcam capture through monitoring and alerts.",
      "Implemented person detection, line-crossing counts, and a live monitoring dashboard.",
      "Added opt-in LINE notifications for crowd-density events and resolved Windows webcam capture issues."
    ],
    technicalImplementation: [
      "Used YOLOv8 and OpenCV to process webcam frames and track detected people.",
      "Prevented the same track from being counted repeatedly across frames.",
      "Connected density events to the LINE Messaging API for subscribed notifications."
    ],
    technologies: ["Python", "YOLOv8", "OpenCV", "LINE Messaging API"],
    status: "Completed live demonstration",
    statusLabel: "Live Demo",
    teamType: "Independent Project",
    year: "2026",
    repository: "https://github.com/CutieCat8/CrowdLens",
    demo: null,
    images: [],
    featured: true,
    categories: ["ai-cv"],
    currentStatus: "Completed as a standalone webcam demonstration. It is separate from the Lampang platform and is not connected to municipal cameras.",
    visualCode: "YOLO / LIVE",
    tilt: { src: "assets/crowdlens.webp", background: "#ffffff", scale: 0.75 }
  },
  {
    id: "classsync",
    title: "ClassSync",
    subtitle: "Student & Instructor Coordination Platform",
    shortDescription: "A role-based front-end prototype that brings coursework, submissions, announcements, and appointment availability into one flow.",
    problem: "Course information, assignments, and appointments are spread across multiple channels, making coordination difficult for students and instructors.",
    projectScope: "A functional front-end prototype, previously named TMA Dashboard, with local and mock data rather than production authentication or a deployed back end.",
    role: "Creator & Front-End Developer",
    responsibilities: [
      "Built role-based student and instructor interfaces.",
      "Combined announcements, assignments, submission status, and appointments.",
      "Implemented recurring schedules, pre-booking availability checks, submission verification, and reasoned override records."
    ],
    technicalImplementation: [
      "Created pure recurrence and conflict-detection logic that reports Busy or Available before an appointment is created.",
      "Structured front-end state for course schedules and role-specific workflows.",
      "Added automated tests around core scheduling behavior with Vitest."
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "Vitest"],
    status: "Functional front-end prototype",
    statusLabel: "Front-End Prototype",
    teamType: "Creator",
    year: "2026",
    repository: "https://github.com/CutieCat8/ClassSync",
    demo: null,
    images: [],
    featured: true,
    categories: ["full-stack"],
    currentStatus: "The front-end workflows are functional. Authentication and persistence are mock or local and are not presented as a production back end.",
    visualCode: "LOGIC / UI",
    tilt: { src: "assets/classsync.webp", background: "#ffffff", scale: 0.6 }
  },
  {
    id: "aeris",
    title: "AERIS",
    subtitle: "Flight Booking Platform",
    shortDescription: "A course project focused on booking business logic, seat validation, simulated checkout, and e-ticket generation.",
    problem: "A flight-booking flow must keep prices and seat availability authoritative at the server when users move from search to checkout.",
    projectScope: "A completed full-stack course project covering authentication, round-trip selection, seats, simulated payment, booking records, and e-tickets.",
    role: "Full-Stack Developer",
    responsibilities: [
      "Implemented authentication and the round-trip flight selection and checkout flow.",
      "Built seat selection, simulated payment, and e-ticket generation.",
      "Developed server-side confirmation logic that re-checks price and seat availability before creating a booking."
    ],
    technicalImplementation: [
      "Used Express services and SQLite persistence behind JWT-protected account workflows.",
      "Recalculated booking totals from database values rather than trusting browser state.",
      "Returned a conflict response when a selected seat was no longer available."
    ],
    technologies: ["Node.js", "Express", "SQLite", "JWT", "JavaScript"],
    status: "Completed course project",
    statusLabel: "Completed",
    teamType: "Course Project",
    year: "2026",
    repository: "https://github.com/CutieCat8/FlightBooking_Project",
    demo: null,
    images: [],
    featured: true,
    categories: ["full-stack", "back-end"],
    currentStatus: "Completed as a course project. Payment is simulated; no production payment or booking provider is connected.",
    visualCode: "BOOK / API",
    tilt: { src: "assets/aeris.webp", background: "#ffffff", scale: 0.7 }
  },
  {
    id: "chiang-mai-smart-city",
    title: "Chiang Mai Smart City",
    subtitle: "CCTV Monitoring Dashboard",
    shortDescription: "An academic officer and citizen dashboard prototype shaped around limited partner-provided violation imagery and metadata.",
    problem: "City officers and residents need clearer workflows for reviewing events and understanding how municipal information could be presented.",
    projectScope: "An academic prototype developed through CAMT and CAS Cogniser Thailand. The connected data was limited to violation images and selected metadata.",
    role: "Idea Initiator, Project Manager & Developer",
    responsibilities: [
      "Initiated the concept, managed project scope, and defined officer and citizen workflows.",
      "Developed React and TypeScript event-review and live-monitoring modules.",
      "Connected a limited partner webhook and transformed violation imagery and equipment metadata for display."
    ],
    technicalImplementation: [
      "Mapped incoming webhook records into reviewable dashboard events.",
      "Separated the limited partner data from prototype traffic, public-camera, and civic information datasets.",
      "Built responsive dashboard modules with React, TypeScript, routing, and chart components."
    ],
    technologies: ["React", "TypeScript", "Vite", "Webhook", "Recharts"],
    status: "Academic prototype",
    statusLabel: "Academic Prototype",
    teamType: "Leadership",
    year: "2025",
    repository: "https://github.com/CutieCat8/CCTV-Monitoring-Dashboard",
    demo: null,
    images: [{src: "assets/CCTVWEB.png", alt: "Officer dashboard interface from the Chiang Mai Smart City academic prototype"}],
    featured: false,
    categories: ["full-stack", "leadership"],
    currentStatus: "Only violation images and selected metadata came from the partner webhook. Traffic information, public CCTV views, and other city data are mock prototype data; the system is not presented as deployed municipal software.",
    visualCode: "LEAD / UI"
  },
  {
    id: "smart-flema",
    title: "Smart-FLEMA",
    subtitle: "ICT Startup Competition 2026",
    shortDescription: "An international smart-city business concept exploring crowd management and public-safety workflows.",
    problem: "Large public events need clearer ways to anticipate crowd pressure and coordinate safer movement through shared urban spaces.",
    projectScope: "A hackathon concept developed with an international team at the International College of Technology in Kanazawa, Japan.",
    role: "CAMT Representative & Idea Contributor",
    responsibilities: [
      "Collaborated with international team members on a smart-city business idea.",
      "Helped define the problem, proposed user workflows, and feasibility considerations.",
      "Contributed to the final pitch and presentation."
    ],
    technicalImplementation: [
      "The concept proposed crowd-management and public-safety workflows.",
      "The idea explored how future data sources might support operational decisions.",
      "No computer-vision system, dashboard, IoT integration, heatmap, or alerting software was implemented."
    ],
    technologies: ["Problem Framing", "User Flows", "Business Concept", "Pitching"],
    status: "Hackathon concept only",
    statusLabel: "Hackathon Concept",
    teamType: "International Team",
    year: "2026",
    repository: null,
    demo: null,
    images: [{src: "assets/JapanCompett.png", alt: "Veerachit and team presenting at the ICT Startup Competition 2026 in Kanazawa"}],
    featured: false,
    categories: ["leadership"],
    currentStatus: "Concept and pitch only. There was no functional software prototype, production system, or live data integration.",
    visualCode: "IDEA / PITCH"
  },
  {
    id: "agrilink",
    title: "AgriLink",
    subtitle: "Smart Farm Marketplace",
    shortDescription: "A hackathon marketplace concept designed to connect farmers and buyers through clearer digital flows.",
    problem: "Farmers and buyers face fragmented market access and limited transparency across agricultural transactions.",
    projectScope: "A Hylife Hackathon 2025 — Code for Change concept and interface prototype focused on marketplace direction and user journeys.",
    role: "Front-End Developer & Idea Initiator",
    responsibilities: [
      "Initiated and co-developed the marketplace concept connecting farmers with buyers.",
      "Designed front-end UI, user flows, and interactions.",
      "Contributed to product direction and feature strategy during the hackathon."
    ],
    technicalImplementation: [
      "Translated the marketplace concept into navigable front-end flows.",
      "Focused implemented work on interface structure and interactions.",
      "AI, IoT, QR traceability, and cold-chain logistics remain proposed ideas unless separately evidenced."
    ],
    technologies: ["Front-End UI", "User Flows", "Product Strategy", "Prototyping"],
    status: "Hackathon concept / prototype",
    statusLabel: "Hackathon Prototype",
    teamType: "Team Project",
    year: "2025",
    repository: null,
    demo: null,
    images: [{src: "assets/AgriLink.png", alt: "AgriLink marketplace interface created for Hylife Hackathon 2025"}],
    featured: false,
    categories: ["full-stack", "leadership"],
    currentStatus: "The verified work covers the concept, interface, flows, and interactions. Proposed AI, IoT, traceability, or logistics capabilities are not presented as implemented.",
    visualCode: "IDEA / UI"
  }
];

const projectGrid = document.getElementById("projectGrid");
const experienceList = document.getElementById("experienceList");
const filterStatus = document.getElementById("filterStatus");
const caseDialog = document.getElementById("caseDialog");
const dialogContent = document.getElementById("dialogContent");
const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");
const siteHeader = document.querySelector(".site-header");
let activeFilter = "all";

const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const renderTags = (technologies, limit) => technologies
  .slice(0, limit)
  .map((technology) => `<li>${escapeHtml(technology)}</li>`)
  .join("");

const renderProjectVisual = (project) => {
  if (project.images.length) {
    const image = project.images[0];
    return `<div class="project-visual project-visual-image"><img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt)}" loading="lazy" /></div>`;
  }

  const parts = project.visualCode.split(" / ");
  if (project.tilt) {
    return `
    <div class="project-visual project-visual-type project-visual-tilt" style="--tile-bg: ${escapeHtml(project.tilt.background)}; --tilt-scale: ${project.tilt.scale || 1}" aria-hidden="true">
      <div class="tilt-stage"><div class="tilt-card"><img src="${escapeHtml(project.tilt.src)}" alt="" draggable="false" loading="lazy" /></div></div>
      <span>${escapeHtml(parts[0])}</span><span>${escapeHtml(parts[1] || "BUILD")}</span>
      <i>${escapeHtml(project.year)}</i>
    </div>`;
  }

  const video = project.video
    ? `<video src="${escapeHtml(project.video)}"${project.videoSpeed ? ` data-speed="${project.videoSpeed}"` : ""} autoplay muted loop playsinline preload="metadata"></video>`
    : "";
  return `
    <div class="project-visual project-visual-type${project.video ? " project-visual-video" : ""}"${project.videoTop ? ` style="--video-top: ${escapeHtml(project.videoTop)}; --video-size: ${escapeHtml(project.videoSize || "76%")}; --video-shift: ${escapeHtml(project.videoShift || "0%")}"` : ""} aria-hidden="true">
      ${video}
      <span>${escapeHtml(parts[0])}</span><span>${escapeHtml(parts[1] || "BUILD")}</span>
      <i>${escapeHtml(project.year)}</i>
    </div>`;
};

const linkMarkup = (project, compact = false) => {
  const links = [];
  if (project.repository) {
    links.push(`<a class="text-link" href="${escapeHtml(project.repository)}" target="_blank" rel="noopener noreferrer" aria-label="View ${escapeHtml(project.title)} repository on GitHub">GitHub <span aria-hidden="true">↗</span></a>`);
  }
  if (project.demo) {
    links.push(`<a class="text-link" href="${escapeHtml(project.demo)}" target="_blank" rel="noopener noreferrer" aria-label="Open live demo for ${escapeHtml(project.title)}">Live Demo <span aria-hidden="true">↗</span></a>`);
  }
  return links.length ? `<div class="${compact ? "card-links" : "dialog-links"}">${links.join("")}</div>` : "";
};

const projectCard = (project, index) => `
  <article class="project-card" style="--stack: ${index}" data-categories="${project.categories.join(" ")}">
    <header class="project-card-head">
      <div class="project-tab"><p class="project-number">0${index + 1}</p><h3>${escapeHtml(project.title)}</h3></div>
    </header>
    ${renderProjectVisual(project)}
    <div class="project-card-body">
      <div class="badge-row"><span class="badge badge-status">${escapeHtml(project.statusLabel)}</span><span class="badge">${escapeHtml(project.teamType)}</span></div>
      <p class="project-subtitle">${escapeHtml(project.subtitle)}</p>
      <p class="project-summary">${escapeHtml(project.shortDescription)}</p>
      <p class="project-role"><span>Role</span>${escapeHtml(project.role)}</p>
      <ul class="tech-list" aria-label="Technologies">${renderTags(project.technologies, 5)}</ul>
      <div class="project-actions">
        <button class="text-link case-study-button" type="button" data-project-id="${escapeHtml(project.id)}">View Case Study <span aria-hidden="true">→</span></button>
        ${linkMarkup(project, true)}
      </div>
    </div>
  </article>`;

const experienceCard = (project, index) => `
  <article class="experience-item">
    <div class="experience-order">0${index + 1}</div>
    <div class="experience-content">
      <div class="badge-row"><span class="badge badge-status">${escapeHtml(project.statusLabel)}</span><span class="badge">${escapeHtml(project.teamType)}</span></div>
      <h3>${escapeHtml(project.title)}</h3>
      <p class="experience-subtitle">${escapeHtml(project.subtitle)} · ${escapeHtml(project.year)}</p>
      <p>${escapeHtml(project.shortDescription)}</p>
    </div>
    <div class="experience-role"><span>Role</span><p>${escapeHtml(project.role)}</p></div>
    <button class="round-button case-study-button" type="button" data-project-id="${escapeHtml(project.id)}" aria-label="View ${escapeHtml(project.title)} case study">↗</button>
  </article>`;

const renderProjects = () => {
  const featured = projects.filter((project) => project.featured && (activeFilter === "all" || project.categories.includes(activeFilter)));
  projectGrid.innerHTML = featured.map(projectCard).join("");
  projectGrid.querySelectorAll("video[data-speed]").forEach((video) => {
    video.defaultPlaybackRate = Number(video.dataset.speed);
    video.playbackRate = Number(video.dataset.speed);
  });
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    projectGrid.querySelectorAll("video").forEach((video) => video.pause());
  }
  filterStatus.textContent = `${featured.length} project${featured.length === 1 ? "" : "s"} shown.`;
};

const renderExperience = () => {
  experienceList.innerHTML = projects.filter((project) => !project.featured).map(experienceCard).join("");
};

const listMarkup = (items) => `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;

const openCaseStudy = (projectId) => {
  const project = projects.find((item) => item.id === projectId);
  if (!project) return;

  dialogContent.innerHTML = `
    <header class="dialog-header">
      <div class="badge-row"><span class="badge badge-status">${escapeHtml(project.statusLabel)}</span><span class="badge">${escapeHtml(project.teamType)}</span></div>
      <h2 id="dialogTitle">${escapeHtml(project.title)}</h2>
      <p class="dialog-subtitle">${escapeHtml(project.subtitle)}</p>
      <p class="dialog-role">${escapeHtml(project.role)} · ${escapeHtml(project.year)}</p>
    </header>
    <div class="dialog-grid">
      <section><p class="dialog-label">Problem</p><p>${escapeHtml(project.problem)}</p></section>
      <section><p class="dialog-label">Project Scope</p><p>${escapeHtml(project.projectScope)}</p></section>
      <section><p class="dialog-label">My Contribution</p>${listMarkup(project.responsibilities)}</section>
      <section><p class="dialog-label">Technical Implementation</p>${listMarkup(project.technicalImplementation)}</section>
      <section class="dialog-status"><p class="dialog-label">Current Status</p><p>${escapeHtml(project.currentStatus)}</p></section>
      <section><p class="dialog-label">Technologies</p><ul class="tech-list">${renderTags(project.technologies, project.technologies.length)}</ul></section>
      <section><p class="dialog-label">Links</p>${linkMarkup(project) || "<p>No public repository or live demo is listed for this project.</p>"}</section>
    </div>`;

  caseDialog.showModal();
  document.body.classList.add("dialog-open");
  document.getElementById("dialogClose").focus();
};

const tiltReset = ["--tx", "--ty", "--sx", "--sy", "--mx", "--my", "--glow"];

if (window.matchMedia("(hover: hover) and (pointer: fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  projectGrid.addEventListener("pointermove", (event) => {
    const tile = event.target.closest(".project-visual-tilt");
    if (!tile) return;
    const rect = tile.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    tile.style.setProperty("--tx", `${(-y * 18).toFixed(2)}deg`);
    tile.style.setProperty("--ty", `${(x * 18).toFixed(2)}deg`);
    tile.style.setProperty("--sx", `${(-x * 28).toFixed(1)}px`);
    tile.style.setProperty("--sy", `${(16 - y * 28).toFixed(1)}px`);
    tile.style.setProperty("--mx", `${((x + 0.5) * 100).toFixed(1)}%`);
    tile.style.setProperty("--my", `${((y + 0.5) * 100).toFixed(1)}%`);
    tile.style.setProperty("--glow", "1");
  });

  projectGrid.addEventListener("pointerout", (event) => {
    const tile = event.target.closest(".project-visual-tilt");
    if (!tile || tile.contains(event.relatedTarget)) return;
    tiltReset.forEach((name) => tile.style.removeProperty(name));
  });
}

document.getElementById("projectFilters").addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  activeFilter = button.dataset.filter;
  document.querySelectorAll(".filter-button").forEach((filterButton) => {
    const isActive = filterButton === button;
    filterButton.classList.toggle("is-active", isActive);
    filterButton.setAttribute("aria-pressed", String(isActive));
  });
  renderProjects();
});

document.addEventListener("click", (event) => {
  const trigger = event.target.closest(".case-study-button");
  if (trigger) openCaseStudy(trigger.dataset.projectId);
});

document.getElementById("dialogClose").addEventListener("click", () => caseDialog.close());
caseDialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));
caseDialog.addEventListener("click", (event) => {
  const rect = caseDialog.getBoundingClientRect();
  const inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
  if (!inside) caseDialog.close();
});

const closeMobileNav = () => {
  mobileNav.classList.remove("is-open");
  mobileNav.setAttribute("aria-hidden", "true");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
};

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  if (isOpen) {
    closeMobileNav();
  } else {
    mobileNav.classList.add("is-open");
    mobileNav.setAttribute("aria-hidden", "false");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Close navigation");
  }
});

mobileNav.addEventListener("click", (event) => {
  if (event.target.matches("a")) closeMobileNav();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    closeMobileNav();
    menuToggle.focus();
  }
});

const updateHeaderBackground = () => {
  siteHeader.classList.toggle("is-scrolled", window.scrollY > 8);
};

updateHeaderBackground();
window.addEventListener("scroll", updateHeaderBackground, { passive: true });

document.getElementById("currentYear").textContent = new Date().getFullYear();
renderProjects();
renderExperience();

if (window.createCrosshair && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  createCrosshair({
    color: "#ffffff",
    targetEffect: "lock",
    targetSelector: "a:not(.desktop-nav a), button, h1, h2, h3, h4, p, [data-crosshair-target]",
    axisLines: false,
    adaptive: true,
    thickness: 1,
    opacity: 0.85,
    smoothing: 0.35,
    showCoordinates: true
  });
}
