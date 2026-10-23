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
      "Built a FastAPI WebSocket voice bridge streaming audio between the browser and Gemini Live for multi-turn spoken conversations.",
      "Designed and built a React + TypeScript character interface for tablets with wake-word activation.",
      "Implemented lip synchronization with Thai-language support.",
      "Built a knowledge pipeline that crawls CAMT and DITC sources, then chunks, embeds, and indexes the content.",
      "Designed and built a React + Material UI admin dashboard for managing documents, triggering syncs, testing chat, and viewing analytics.",
      "Designed the PostgreSQL schema and set up Docker Compose, CI, and a pytest suite."
    ],
    technicalImplementation: [
      "Combined semantic (pgvector) and keyword search, scoping answers to DITC and CAMT topics.",
      "Used content-hash upserts so only changed pages are re-indexed.",
      "Used half-duplex turn-taking to prevent speaker output feeding back into the microphone.",
      "Decoupled sessions from WebSocket connections so dropped connections can reconnect.",
      "Stored only session metadata for analytics, with no audio or raw transcripts retained.",
      "Secured admin features with JWT authentication and bcrypt-hashed passwords."
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
    tilt: { src: "assets/ditc-cat.webp", background: "#ffffff", scale: 0.8 }
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
    demo: "https://dear-days-kappa.vercel.app/",
    images: [],
    featured: true,
    categories: ["full-stack", "back-end"],
    currentStatus: "Completed as a team project. Contributions are described by area and do not imply sole ownership of the entire application.",
    visualCode: "DATA / 3D",
    tilt: { src: "assets/dear-days-book.webp", background: "#ffffff", scale: 0.7 }
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
    repository: "https://github.com/PreturnPRO/AI-Counting",
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
    tilt: { src: "assets/crowdlens.webp", background: "#ffffff", scale: 0.6 }
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
    id: "the-commons",
    title: "The Commons",
    subtitle: "Restaurant Website with Menu & Ordering Flow",
    shortDescription: "A restaurant website with a categorised menu, a persistent cart, a receipt, and an order history, built with plain HTML, CSS, and JavaScript.",
    problem: "A restaurant needs a clear online presence where guests can browse the menu, find the venue, and place an order without friction.",
    projectScope: "A completed front-end website covering a landing page, a menu page with categories and item details, a cart, a receipt, and an order history. Orders are simulated and stored in the browser.",
    role: "Front-End Developer",
    responsibilities: [
      "Built the landing page with menu highlights and a find-us section.",
      "Implemented the menu page with category tabs and an item detail view.",
      "Created the cart, receipt, and order-history screens."
    ],
    technicalImplementation: [
      "Kept the menu in a single data module that the menu, cart, and receipt screens all read from.",
      "Persisted the cart and order history in localStorage, with a cart badge that stays in sync across pages.",
      "Deployed as a static site on Azure Static Web Apps through a GitHub Actions workflow."
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Azure Static Web Apps"],
    status: "Completed front-end website",
    statusLabel: "Completed",
    teamType: "Course Project",
    year: "2026",
    repository: "https://github.com/CutieCat8/The-Commons-Website",
    demo: "https://gray-river-0c8ce3e00.7.azurestaticapps.net",
    images: [],
    featured: true,
    categories: ["full-stack"],
    currentStatus: "The browsing, cart, receipt, and order-history flows work in the browser. There is no back end, payment, or real order processing; orders are simulated and kept in localStorage.",
    visualCode: "MENU / CART",
    tilt: { src: "assets/the-commons.webp", background: "#ffffff", scale: 0.55 }
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
    tilt: { src: "assets/aeris.webp", background: "#ffffff", scale: 0.58 }
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
    award: "Winning the Audience Popular Vote Award.",
    problem: "Large public events need clearer ways to anticipate crowd pressure and coordinate safer movement through shared urban spaces.",
    projectScope: "A hackathon concept developed with an international team at the International College of Technology in Kanazawa, Japan.",
    role: "CAMT Representative & Idea Contributor",
    responsibilities: [
      "Collaborated with international team members on a smart-city business idea.",
      "Helped define the problem, proposed user workflows, and feasibility considerations.",
      "Contributed to the final pitch and presentation.",
      "Won the Audience Popular Vote Award at the ICT Startup Competition 2026."
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
    currentStatus: "Concept and pitch only, awarded the Audience Popular Vote Award at the ICT Startup Competition 2026. There was no functional software prototype, production system, or live data integration.",
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
const casePage = document.getElementById("casePage");
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
  return links.length ? `<div class="${compact ? "card-links" : "case-links"}">${links.join("")}</div>` : "";
};

const projectCard = (project, index) => `
  <article class="project-card" style="--stack: ${index}" data-categories="${project.categories.join(" ")}">
    <header class="project-card-head">
      <div class="project-tab" role="button" tabindex="0" aria-label="Show ${escapeHtml(project.title)}"><p class="project-number">0${index + 1}</p><h3>${escapeHtml(project.title)}</h3></div>
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

const pageTitle = document.title;
let caseReturnY = null;

// Screenshots for the case study carousel, resized from the project pictures into assets/carousel/.
// A project with several parts lists them as sets, each shown on its own tab so they never mix in the ring.
const caseGalleryCounts = {
  "aeris": 8,
  "ditc-cat": [
    { label: "Admin", dir: "ditc-cat", count: 7 },
    { label: "Character", dir: "ditc-cat/character", count: 5 }
  ],
  "lampang-smart-city": [
    { label: "Pitch deck", type: "book", dir: "lampang-smart-city/slides", count: 8 },
    { label: "Screens", dir: "lampang-smart-city", count: 5 }
  ],
  "agrilink": [{ label: "Pitch deck", type: "book", dir: "agrilink", count: 10 }],
  "smart-flema": [
    { label: "Pitch deck", type: "book", dir: "smart-flema", count: 15 },
    { label: "Gallery", dir: "smart-flema/gallery", count: 3 }
  ],
  "chiang-mai-smart-city": [
    { label: "Officer", dir: "chiang-mai-smart-city/officer", count: 3 },
    { label: "Citizen", dir: "chiang-mai-smart-city/citizen", count: 5 }
  ],
  "classsync": 8,
  "the-commons": 7,
  "crowdlens": 3,
  "dear-days": 7
};

const caseGallerySets = (project) => {
  const entry = caseGalleryCounts[project.id];
  const sets = Array.isArray(entry) ? entry : entry ? [{ label: "", dir: project.id, count: entry }] : [];
  const fallback = [project.images[0]?.src || project.tilt?.src].filter(Boolean);
  const built = sets.length
    ? sets.map(({ label, dir, count, type }) => ({
        label,
        type,
        images: Array.from({ length: count }, (_, i) => `assets/carousel/${dir}/${String(i + 1).padStart(2, "0")}.webp`)
      }))
    : [{ label: "", images: fallback }];
  // A cylinder needs enough faces to read as a ring, so short galleries repeat.
  built.forEach((set) => {
    while (set.type !== "book" && set.images.length < 6) set.images = set.images.concat(set.images);
  });
  return built;
};

const carouselFaces = (project, set) => set.images.map((src, i) => `
    <button class="carousel3d-face" type="button" data-src="${escapeHtml(src)}" aria-label="Enlarge ${escapeHtml(project.title)} ${escapeHtml(set.label)} screen ${i + 1}">
      <img src="${escapeHtml(src)}" alt="${escapeHtml(project.title)} ${escapeHtml(set.label)} — screen ${i + 1}" draggable="false" loading="${i < 3 ? "eager" : "lazy"}" />
    </button>`).join("");

const ringMarkup = (project, set) => `
    <div class="carousel3d" tabindex="0" role="group" aria-roledescription="carousel" aria-label="${escapeHtml(project.title)} screens. Drag or use the arrow keys to rotate.">
      <div class="carousel3d-ring">${carouselFaces(project, set)}</div>
    </div>`;

const bookMarkup = (project, set) => `
    <div class="book3d" tabindex="0" role="group" aria-roledescription="book" aria-label="${escapeHtml(project.title)} ${escapeHtml(set.label)}. Drag a page, or use the arrow keys or buttons, to turn it.">
      <div class="book3d-stage"><div class="book3d-curl"><div class="book3d-book"></div></div></div>
      <div class="book3d-controls">
        <button type="button" data-book="prev" aria-label="Previous pages">←</button>
        <span class="book3d-count" aria-live="polite"></span>
        <button type="button" data-book="next" aria-label="Next pages">→</button>
        <button type="button" data-book="enlarge">⤢ Enlarge</button>
      </div>
    </div>`;

const renderCaseStage = (project, sets) => {
  const tabs = sets.length > 1
    ? `<div class="carousel3d-tabs" role="group" aria-label="Choose what to view">${sets.map((set, i) => `<button class="carousel3d-tab${i === 0 ? " is-active" : ""}" type="button" data-set="${i}" aria-pressed="${i === 0}">${escapeHtml(set.label)}</button>`).join("")}</div>`
    : "";
  return `${tabs}<div class="case-stage"></div>`;
};

// Short screen recordings, played on request and kept apart from the rotating screenshots.
const caseVideos = {
  "ditc-cat": { src: "assets/carousel/ditc-cat/demo.mp4", poster: "assets/carousel/ditc-cat/demo-poster.jpg" }
};

// The lightbox lives inside the case page because the rest of the body is hidden while a case study is open.
const openCarouselLightbox = (media, label) => {
  const box = document.createElement("div");
  box.className = "carousel3d-lightbox";
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-modal", "true");
  box.setAttribute("aria-label", label);
  box.innerHTML = `<button class="carousel3d-close" type="button" aria-label="Close">×</button>`;
  box.prepend(media);
  const close = () => {
    media.pause?.();
    box.remove();
    document.removeEventListener("keydown", onKey, true);
  };
  const onKey = (event) => {
    if (event.key !== "Escape") return;
    event.stopPropagation();
    close();
  };
  box.addEventListener("click", (event) => {
    if (event.target === box || event.target.closest(".carousel3d-close")) close();
  });
  document.addEventListener("keydown", onKey, true);
  casePage.append(box);
};

const openCarouselImage = (src, alt) => {
  const image = document.createElement("img");
  image.src = src;
  image.alt = alt;
  openCarouselLightbox(image, "Enlarged screen");
  // A picture closes on any click, a video only on the backdrop or the close button.
  image.addEventListener("click", () => image.closest(".carousel3d-lightbox")?.querySelector(".carousel3d-close").click());
};

const openCaseVideo = (video, title) => {
  const player = document.createElement("video");
  player.src = video.src;
  player.poster = video.poster;
  player.controls = true;
  player.autoplay = true;
  player.playsInline = true;
  player.setAttribute("aria-label", `${title} demo video`);
  openCarouselLightbox(player, `${title} demo video`);
};

const initCaseCarousel = (root) => {
  const ring = root.querySelector(".carousel3d-ring");
  const faces = [...ring.children];
  const step = 360 / faces.length;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let angle = 0;
  let velocity = 0;
  let dragging = false;
  let moved = 0;
  let lastX = 0;
  let lastTime = 0;
  let paused = false;
  let pressedFace = null;
  let radius = 0;

  const paint = () => {
    ring.style.transform = `translateZ(${-radius}px) rotateY(${angle}deg)`;
  };

  const layout = () => {
    const faceWidth = Math.min(460, Math.max(200, root.clientWidth * 0.42));
    radius = (faceWidth + 30) / 2 / Math.tan(Math.PI / faces.length);
    root.style.setProperty("--face-width", `${faceWidth}px`);
    faces.forEach((face, i) => {
      face.style.transform = `rotateY(${i * step}deg) translateZ(${radius}px)`;
    });
    paint();
  };

  let frame = 0;
  const tick = (time) => {
    if (!root.isConnected) return;
    const dt = Math.min(0.05, (time - (frame || time)) / 1000);
    frame = time;
    if (!dragging) {
      if (Math.abs(velocity) > 1) {
        angle += velocity * dt;
        velocity *= Math.pow(0.04, dt);
      } else if (!reduceMotion && !paused) {
        angle -= 5 * dt;
      }
    }
    paint();
    requestAnimationFrame(tick);
  };

  root.addEventListener("pointerdown", (event) => {
    dragging = true;
    pressedFace = event.target.closest(".carousel3d-face");
    moved = 0;
    velocity = 0;
    lastX = event.clientX;
    lastTime = event.timeStamp;
    root.setPointerCapture(event.pointerId);
  });
  root.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    const dx = event.clientX - lastX;
    const dt = Math.max(1, event.timeStamp - lastTime) / 1000;
    moved += Math.abs(dx);
    angle += dx * 0.3;
    velocity = reduceMotion ? 0 : (dx * 0.3) / dt;
    lastX = event.clientX;
    lastTime = event.timeStamp;
  });
  const release = () => {
    dragging = false;
  };
  root.addEventListener("pointerup", release);
  root.addEventListener("pointercancel", release);
  root.addEventListener("pointerenter", () => { paused = true; });
  root.addEventListener("pointerleave", () => { paused = false; });
  root.addEventListener("focusin", () => { paused = true; });
  root.addEventListener("focusout", () => { paused = false; });

  // A drag that ends over a face must not also enlarge it.
  // Pointer capture retargets the click to the carousel, so the face is remembered from pointerdown.
  root.addEventListener("click", () => {
    const face = pressedFace;
    pressedFace = null;
    if (!face || moved > 6) return;
    openCarouselImage(face.dataset.src, face.querySelector("img").alt);
  });

  root.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") angle += step;
    else if (event.key === "ArrowRight") angle -= step;
    else return;
    event.preventDefault();
  });

  new ResizeObserver(layout).observe(root);
  layout();
  requestAnimationFrame(tick);
};


// Page-curl geometry, ported from the Dear Days book. Origin at the spine's top, x to the right, y down: the right
// page covers x in [0, W] and the left page x in [-W, 0]. A sheet is hinged at the spine and held by a corner, which
// is pulled to p; the fold line is the perpendicular bisector of corner -> p, and the part on the corner's side is
// folded over onto p's side as its mirror image.
const bookCorner = (direction, W, cornerY) => ({ x: direction === "next" ? W : -W, y: cornerY });

// Keeps the pulled corner where a sheet bound to the spine could really put it.
const bookLimitPull = (p, direction, W, cornerY, H) => {
  let { x, y } = p;
  x = direction === "next" ? Math.min(x, W) : Math.max(x, -W);
  const c = bookCorner(direction, W, cornerY);
  const limits = [0, H].map((cy) => ({ cy, r: Math.hypot(c.x, c.y - cy) }));
  for (let pass = 0; pass < 12; pass += 1) {
    for (const { cy, r } of limits) {
      const distance = Math.hypot(x, y - cy);
      if (distance > r) {
        x = (x * r) / distance;
        y = cy + ((y - cy) * r) / distance;
      }
    }
  }
  return { x, y };
};

// Sutherland-Hodgman against one half-plane: keeps the points with sign * ((q - m) . n) >= 0.
const bookClip = (polygon, n, m, sign) => {
  const side = (q) => sign * ((q.x - m.x) * n.x + (q.y - m.y) * n.y);
  const out = [];
  polygon.forEach((current, index) => {
    const previous = polygon[(index + polygon.length - 1) % polygon.length];
    const a = side(previous);
    const b = side(current);
    if ((a >= 0) !== (b >= 0)) {
      const t = a / (a - b);
      out.push({ x: previous.x + (current.x - previous.x) * t, y: previous.y + (current.y - previous.y) * t });
    }
    if (b >= 0) out.push(current);
  });
  return out;
};

const bookCurl = (rawPull, direction, W, H, cornerY) => {
  const c = bookCorner(direction, W, cornerY);
  const p = bookLimitPull(rawPull, direction, W, cornerY, H);
  const vx = p.x - c.x;
  const vy = p.y - c.y;
  const length = Math.hypot(vx, vy);
  const left = direction === "next" ? 0 : -W;
  const rect = [{ x: left, y: 0 }, { x: left + W, y: 0 }, { x: left + W, y: H }, { x: left, y: H }];
  const progress = Math.max(0, Math.min(1, direction === "next" ? (W - p.x) / (2 * W) : (p.x + W) / (2 * W)));
  if (length < 0.5) return { flat: true, p, flatPolygon: rect, flapPolygon: [], matrix: [1, 0, 0, 1, 0, 0], normal: { x: 0, y: 0 }, mid: c, progress };

  const n = { x: vx / length, y: vy / length };
  const m = { x: (c.x + p.x) / 2, y: (c.y + p.y) / 2 };
  const reflect = (q) => {
    const k = 2 * ((q.x - m.x) * n.x + (q.y - m.y) * n.y);
    return { x: q.x - k * n.x, y: q.y - k * n.y };
  };
  // The back face of the sheet maps (u, v) to the sheet point (ox - u, v), then reflects across the fold line.
  const a00 = 1 - 2 * n.x * n.x;
  const a01 = -2 * n.x * n.y;
  const ox = direction === "next" ? W : 0;
  const d = 2 * (m.x * n.x + m.y * n.y);
  return {
    flat: false,
    p,
    flatPolygon: bookClip(rect, n, m, 1),
    flapPolygon: bookClip(rect, n, m, -1).map(reflect),
    matrix: [-a00, -a01, a01, 1 - 2 * n.y * n.y, a00 * ox + d * n.x, a01 * ox + d * n.y],
    normal: n,
    mid: m,
    progress
  };
};

// The path of the pulled corner for a turn started by a button or key: lifts from the corner, sweeps across, lands.
const bookAutoPull = (t, direction, W, H, cornerY) => {
  const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const c = bookCorner(direction, W, cornerY);
  const lift = (cornerY === 0 ? 1 : -1) * H * 0.14 * Math.sin(Math.PI * eased);
  return { x: c.x + (direction === "next" ? -1 : 1) * 2 * W * eased, y: c.y + lift };
};

const initCaseBook = (root, project, set, startSpread = 0) => {
  const book = root.querySelector(".book3d-book");
  const curlBox = root.querySelector(".book3d-curl");
  const stage = root.querySelector(".book3d-stage");
  const count = root.querySelector(".book3d-count");
  const prev = root.querySelector('[data-book="prev"]');
  const next = root.querySelector('[data-book="next"]');
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const images = set.images;
  const spreadCount = Math.ceil((images.length + 1) / 2);
  // Spread 0 is the cover alone on the right; spread s then shows pages 2s-1 and 2s.
  const pagesOf = (spread) => (spread === 0 ? [null, 0] : [2 * spread - 1, 2 * spread < images.length ? 2 * spread : null]);
  const AUTO_MS = 950;
  const SETTLE_MS = 340;
  let W = 400;
  let H = 225;
  let shown = startSpread;
  let flip = null;
  let layers = null;
  let pull = { x: 0, y: 0 };
  let raf = 0;
  let press = null;

  const face = (index, side) => {
    if (index === null) return null; // an empty side is empty air: the book is closed there
    const page = document.createElement("div");
    page.className = "book3d-paper";
    page.dataset.side = side;
    page.innerHTML = `<img src="${escapeHtml(images[index])}" alt="${escapeHtml(project.title)} ${escapeHtml(set.label)} — slide ${index + 1}" draggable="false" />`;
    return page;
  };

  const slot = (index, side, left) => {
    const box = document.createElement("div");
    box.className = "book3d-slot";
    box.style.left = `${left}px`;
    const page = face(index, side);
    if (page) box.append(page);
    return box;
  };

  // A closed book is centred on its one page: the cover on the right at the start, the last page on the left at the end.
  const offsetFor = (spread) => (spread === 0 ? -W / 2 : pagesOf(spread)[1] === null ? W / 2 : 0);

  const renderStatic = (left, right) => {
    book.replaceChildren(slot(left, "left", 0), slot(right, "right", W));
    layers = null;
  };

  const showSpread = (spread) => {
    const [l, r] = pagesOf(spread);
    renderStatic(l, r);
    book.style.transform = `translateX(${offsetFor(spread)}px)`;
    count.textContent = `${pagesOf(spread).filter((index) => index !== null).map((index) => index + 1).join(" – ")} / ${images.length}`;
    prev.disabled = spread === 0;
    next.disabled = spread === spreadCount - 1;
  };

  const toPolygon = (points) => (points.length < 3 ? "inset(100%)" : `polygon(${points.map((q) => `${q.x + W}px ${q.y}px`).join(",")})`);

  // Writes one frame: where the fold is, what is clipped, where the folded part sits.
  const paint = (raw, current) => {
    const g = bookCurl(raw, current.direction, W, H, current.cornerY);
    pull = g.p;
    layers.flat.style.clipPath = toPolygon(g.flatPolygon);
    layers.flapOuter.style.visibility = g.flat ? "hidden" : "visible";
    layers.flapClip.style.clipPath = toPolygon(g.flapPolygon);
    const [a, b, c, d, e, f] = g.matrix;
    layers.flap.style.transform = `matrix(${a},${b},${c},${d},${e + W},${f})`;
    if (!g.flat) {
      const angle = Math.atan2(-g.normal.x, g.normal.y);
      layers.bar.style.transform = `translate(${g.mid.x + W}px, ${g.mid.y}px) rotate(${angle}rad)`;
    }
    // slide between the two resting positions as the cover or the last page opens or closes
    const from = offsetFor(current.from);
    book.style.transform = `translateX(${from + (offsetFor(current.to) - from) * g.progress}px)`;
  };

  const startFlip = (started) => {
    flip = started;
    const forward = flip.direction === "next";
    const [fromLeft, fromRight] = pagesOf(flip.from);
    const [toLeft, toRight] = pagesOf(flip.to);
    renderStatic(forward ? fromLeft : toLeft, forward ? toRight : fromRight);

    const div = (className) => Object.assign(document.createElement("div"), { className });
    const flat = div("book3d-curl-flat");
    flat.append(slot(forward ? fromRight : fromLeft, forward ? "right" : "left", forward ? W : 0));
    const flapOuter = div("book3d-curl-outer");
    const flapClip = div("book3d-curl-clip");
    const flap = div("book3d-curl-flap");
    const backFace = face(forward ? toLeft : toRight, forward ? "left" : "right");
    if (backFace) flap.append(backFace);
    const bar = Object.assign(document.createElement("span"), { className: "book3d-curl-bar" });
    flapClip.append(flap, bar);
    flapOuter.append(flapClip);
    book.append(flat, flapOuter);
    layers = { flat, flapOuter, flapClip, flap, bar };
    paint(flip.mode === "auto" ? bookCorner(flip.direction, W, flip.cornerY) : pull, flip);
  };

  const finish = (current, commit) => {
    cancelAnimationFrame(raf);
    flip = null;
    if (commit) shown = current.to;
    showSpread(shown);
  };

  // Moves the pulled corner from where it is to `target`, then ends the turn as finished or cancelled.
  const settle = (current, target, commit, duration) => {
    const start = pull;
    const began = performance.now();
    const step = (now) => {
      const t = duration <= 0 ? 1 : Math.min(1, (now - began) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      paint({ x: start.x + (target.x - start.x) * eased, y: start.y + (target.y - start.y) * eased }, current);
      if (t < 1) raf = requestAnimationFrame(step);
      else finish(current, commit);
    };
    raf = requestAnimationFrame(step);
  };

  // A turn started by a button, a key or a click plays by itself.
  const turnTo = (spread) => {
    if (flip || spread < 0 || spread >= spreadCount || spread === shown) return;
    if (reduceMotion) {
      shown = spread;
      showSpread(shown);
      return;
    }
    const current = { from: shown, to: spread, direction: spread > shown ? "next" : "prev", cornerY: H, mode: "auto" };
    startFlip(current);
    const began = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - began) / AUTO_MS);
      paint(bookAutoPull(t, current.direction, W, H, current.cornerY), current);
      if (t < 1) raf = requestAnimationFrame(step);
      else finish(current, true);
    };
    raf = requestAnimationFrame(step);
  };

  // Enlarging opens a second, bigger book on the same spread, so it can be turned there too.
  const enlarge = () => {
    const holder = document.createElement("div");
    holder.innerHTML = bookMarkup(project, set);
    const big = holder.firstElementChild;
    big.classList.add("is-large");
    big.querySelector('[data-book="enlarge"]').remove();
    openCarouselLightbox(big, "Enlarged slides");
    initCaseBook(big, project, set, shown);
    big.focus();
  };

  // ---- dragging
  const local = (event) => {
    const rect = curlBox.getBoundingClientRect();
    const offset = flip ? 0 : offsetFor(shown);
    return { x: event.clientX - rect.left - W - offset, y: event.clientY - rect.top };
  };

  curlBox.addEventListener("pointerdown", (event) => {
    if (flip || (event.pointerType === "mouse" && event.button !== 0)) return;
    press = { id: event.pointerId, x: event.clientX, y: event.clientY, started: false };
  });

  curlBox.addEventListener("pointermove", (event) => {
    if (!press || press.id !== event.pointerId) return;
    const dx = event.clientX - press.x;
    const dy = event.clientY - press.y;
    if (!press.started) {
      if (Math.hypot(dx, dy) < 7) return;
      const origin = local({ clientX: press.x, clientY: press.y });
      const direction = origin.x > 0 && dx < 0 && shown + 1 < spreadCount ? "next" : origin.x < 0 && dx > 0 && shown > 0 ? "prev" : null;
      if (direction === null || Math.abs(dx) < Math.abs(dy) * 0.6) {
        if (Math.abs(dy) > Math.abs(dx)) press = null; // a vertical gesture is not a page turn
        return;
      }
      press.started = true;
      window.getSelection()?.removeAllRanges();
      curlBox.setPointerCapture(event.pointerId);
      const cornerY = origin.y < H / 2 ? 0 : H;
      const c = bookCorner(direction, W, cornerY);
      pull = bookLimitPull({ x: c.x + dx, y: c.y + dy }, direction, W, cornerY, H);
      root.classList.add("is-dragging");
      startFlip({ from: shown, to: direction === "next" ? shown + 1 : shown - 1, direction, cornerY, mode: "drag" });
      return;
    }
    if (!flip || flip.mode !== "drag") return;
    const c = bookCorner(flip.direction, W, flip.cornerY);
    paint({ x: c.x + dx, y: c.y + dy }, flip);
  });

  const endPress = (event) => {
    if (!press || press.id !== event.pointerId) return;
    const { started, x, y } = press;
    press = null;
    root.classList.remove("is-dragging");
    if (!started) {
      // a plain click on a page turns it
      if (event.type === "pointerup" && !flip) turnTo(local({ clientX: x, clientY: y }).x > 0 ? shown + 1 : shown - 1);
      return;
    }
    if (!flip || flip.mode !== "drag") return;
    const commit = flip.direction === "next" ? pull.x < W * 0.5 : pull.x > -W * 0.5;
    const c = bookCorner(flip.direction, W, flip.cornerY);
    settle(flip, commit ? { x: flip.direction === "next" ? -W : W, y: flip.cornerY } : c, commit, reduceMotion ? 0 : SETTLE_MS);
  };
  curlBox.addEventListener("pointerup", endPress);
  curlBox.addEventListener("pointercancel", endPress);

  root.addEventListener("click", (event) => {
    const button = event.target.closest("[data-book]");
    if (!button) return;
    if (button.dataset.book === "enlarge") enlarge();
    else turnTo(shown + (button.dataset.book === "next" ? 1 : -1));
  });
  root.addEventListener("keydown", (event) => {
    if (event.target !== root) return;
    if (event.key === "ArrowRight") turnTo(shown + 1);
    else if (event.key === "ArrowLeft") turnTo(shown - 1);
    else return;
    event.preventDefault();
  });

  const layout = () => {
    if (flip) return;
    H = Math.max(120, Math.min(stage.clientHeight - 24, (stage.clientWidth / 2 - 14) * 9 / 16));
    W = (H * 16) / 9;
    root.style.setProperty("--pw", `${W}px`);
    root.style.setProperty("--ph", `${H}px`);
    curlBox.style.width = `${2 * W}px`;
    curlBox.style.height = `${H}px`;
    showSpread(shown);
  };

  new ResizeObserver(layout).observe(stage);
  layout();
};

const mountCaseStage = (stage, project, set) => {
  stage.innerHTML = set.type === "book" ? bookMarkup(project, set) : ringMarkup(project, set);
  const hint = casePage.querySelector("[data-case-hint]");
  if (hint) hint.textContent = set.type === "book" ? "Drag a page to turn it" : "Drag to rotate · click to enlarge";
  if (set.type === "book") initCaseBook(stage.querySelector(".book3d"), project, set);
  else initCaseCarousel(stage.querySelector(".carousel3d"));
};

const renderCasePage = (project) => {
  const at = projects.indexOf(project);
  const next = [1, 2].map((step) => projects[(at + step) % projects.length]).filter((item) => item !== project);
  const primaryLink = project.demo
    ? { href: project.demo, label: "Open the live demo" }
    : project.repository ? { href: project.repository, label: "View the source on GitHub" } : null;
  const gallerySets = caseGallerySets(project);
  const fact = (label, value) => `<div class="case-fact"><dt>${label}</dt><dd>${escapeHtml(value)}</dd></div>`;

  casePage.innerHTML = `
    <div class="case-wrap">
      <nav class="case-bar" aria-label="Case study">
        <button class="case-back" type="button" data-case-close>← Back to projects</button>
        <span>Veerachit Mongkol · Case studies</span>
        <span>${escapeHtml(project.year)}</span>
      </nav>
      <header class="case-head">
        <p class="case-kicker">Case study · ${escapeHtml(project.title)} · ${escapeHtml(project.visualCode)}</p>
        <h1 id="caseTitle" tabindex="-1">${escapeHtml(project.subtitle)}</h1>
        ${project.award
          ? `<blockquote class="case-quote"><span class="quote-mark" aria-hidden="true">“</span>${escapeHtml(project.shortDescription)}<span class="quote-mark" aria-hidden="true">”</span></blockquote><p class="case-deck">${escapeHtml(project.award)}</p>`
          : `<p class="case-deck">${escapeHtml(project.shortDescription)}</p>`}
        <p class="case-byline">By <strong>Veerachit Mongkol</strong> · ${escapeHtml(project.role)} · ${escapeHtml(project.year)}</p>
      </header>
      <figure class="case-figure">
        ${renderCaseStage(project, gallerySets)}
        <figcaption><span>${escapeHtml(project.title)}</span><span>${caseVideos[project.id] ? `<button class="case-demo-button" type="button" data-case-video>▶ Watch demo</button>` : ""}<span data-case-hint></span></span></figcaption>
      </figure>
      <div class="case-layout">
        <div class="case-main">
          <div class="case-columns">
            <p>${escapeHtml(project.problem)}</p>
            <p>${escapeHtml(project.projectScope)}</p>
          </div>
          <blockquote class="case-pull"><p class="case-label">Current status</p><p>${escapeHtml(project.currentStatus)}</p></blockquote>
          <div class="case-lists">
            <section><h2 class="case-label">My contribution</h2><ol>${project.responsibilities.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ol></section>
            <section><h2 class="case-label">Technical implementation</h2><ol>${project.technicalImplementation.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ol></section>
          </div>
        </div>
        <aside class="case-facts" aria-label="Project facts">
          <p class="case-facts-head">How it was built</p>
          <dl>
            ${fact("Stack", project.technologies.join(" · "))}
            ${fact("Role", project.role)}
            ${fact("Entered", project.year)}
            ${fact("Team", project.teamType)}
            ${fact("Status", project.statusLabel)}
          </dl>
          <div class="case-related">
            <p class="case-label">More case studies</p>
            ${next.map((item) => `<a href="#case/${escapeHtml(item.id)}"><span>${escapeHtml(item.title)}</span><span aria-hidden="true">→</span></a>`).join("")}
          </div>
        </aside>
      </div>
      <footer class="case-foot">
        <button class="case-button" type="button" data-case-close>← Back to projects</button>
        ${primaryLink ? `<a class="case-button case-button-primary" href="${escapeHtml(primaryLink.href)}" target="_blank" rel="noopener noreferrer">${primaryLink.label} →</a>` : ""}
      </footer>
    </div>`;
  const stage = casePage.querySelector(".case-stage");
  mountCaseStage(stage, project, gallerySets[0]);
  casePage.querySelectorAll(".carousel3d-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      casePage.querySelectorAll(".carousel3d-tab").forEach((other) => {
        other.classList.toggle("is-active", other === tab);
        other.setAttribute("aria-pressed", String(other === tab));
      });
      mountCaseStage(stage, project, gallerySets[Number(tab.dataset.set)]);
    });
  });
  casePage.querySelector("[data-case-video]")?.addEventListener("click", () => openCaseVideo(caseVideos[project.id], project.title));
};

// A case study is a page of its own, addressed as #case/<id>, so the browser's back button works.
const syncCaseRoute = () => {
  const match = location.hash.match(/^#case\/(.+)$/);
  const project = match && projects.find((item) => item.id === decodeURIComponent(match[1]));
  const isOpen = document.body.classList.contains("case-open");

  if (project) {
    if (!isOpen) caseReturnY ??= window.scrollY;
    renderCasePage(project);
    casePage.hidden = false;
    document.body.classList.add("case-open");
    document.title = `${project.title} — case study | Veerachit Mongkol`;
    window.scrollTo(0, 0);
    document.getElementById("caseTitle").focus({ preventScroll: true });
  } else if (isOpen) {
    casePage.hidden = true;
    casePage.innerHTML = "";
    document.body.classList.remove("case-open");
    document.title = pageTitle;
    if (caseReturnY === null) document.getElementById("projects").scrollIntoView();
    else window.scrollTo(0, caseReturnY);
    caseReturnY = null;
  }
};

const closeCaseStudy = () => {
  history.replaceState(null, "", location.pathname + location.search);
  syncCaseRoute();
};

const openCaseStudy = (projectId) => {
  if (projects.some((item) => item.id === projectId)) location.hash = `case/${projectId}`;
};

// Clicking a folder tab scrolls its card to the top of the stack so it opens in full.
const openStackedCard = (card) => {
  const cards = [...projectGrid.querySelectorAll(".project-card")];
  const index = cards.indexOf(card);
  const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
  if (!window.matchMedia("(min-width: 981px)").matches) {
    window.scrollTo({ top: window.scrollY + card.getBoundingClientRect().top - 88, behavior });
    return;
  }
  const grid = getComputedStyle(projectGrid);
  const zoom = card.getBoundingClientRect().width / card.offsetWidth;
  const gap = (parseFloat(grid.rowGap) || 0) * zoom;
  const stuckTop = (parseFloat(grid.getPropertyValue("--stack-top")) + index * parseFloat(grid.getPropertyValue("--stack-peek"))) * zoom;
  let natural = projectGrid.getBoundingClientRect().top + window.scrollY;
  for (let i = 0; i < index; i += 1) natural += cards[i].getBoundingClientRect().height + gap;
  window.scrollTo({ top: Math.max(0, natural - stuckTop), behavior });
};

projectGrid.addEventListener("click", (event) => {
  const tab = event.target.closest(".project-tab");
  if (tab) openStackedCard(tab.closest(".project-card"));
});

projectGrid.addEventListener("keydown", (event) => {
  const tab = event.target.closest(".project-tab");
  if (!tab || (event.key !== "Enter" && event.key !== " ")) return;
  event.preventDefault();
  openStackedCard(tab.closest(".project-card"));
});

const tiltReset = ["--tx", "--ty", "--sx", "--sy", "--mx", "--my", "--glow"];

if (window.matchMedia("(hover: hover) and (pointer: fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.addEventListener("pointermove", (event) => {
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

  document.addEventListener("pointerout", (event) => {
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

casePage.addEventListener("click", (event) => {
  if (event.target.closest("[data-case-close]")) closeCaseStudy();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && document.body.classList.contains("case-open")) closeCaseStudy();
});

window.addEventListener("hashchange", syncCaseRoute);

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
syncCaseRoute();

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
