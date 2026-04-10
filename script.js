const mobileNav = document.getElementById("mobileNav");
const menuToggle = document.getElementById("menuToggle");
const exploreBtn = document.getElementById("exploreBtn");
const playBtn = document.getElementById("playBtn");
const closeModal = document.getElementById("closeModal");
const videoModal = document.getElementById("videoModal");
const toast = document.getElementById("toast");
const allServiceBtn = document.getElementById("allServiceBtn");
const servicesBody = document.querySelector(".services-body");
const serviceCards = document.querySelectorAll(".service-card");
const experienceLayout = document.getElementById("experienceLayout");
const experienceItems = document.querySelectorAll(".experience-item");
const experienceViewButtons = document.querySelectorAll(".experience-view");
const detailClose = document.getElementById("detailClose");
const detailTitle = document.getElementById("detailTitle");
const detailSubtitle = document.getElementById("detailSubtitle");
const detailResponsibilities = document.getElementById("detailResponsibilities");
const detailOverview = document.getElementById("detailOverview");
const caseDetailButtons = document.querySelectorAll(".case-detail-btn");
const reachForm = document.getElementById("reachForm");
const tagPills = document.querySelectorAll(".tag-pill");
let selectedExperienceId = "smart-flema";
let hoveredExperienceId = null;

const experienceData = {
  "smart-flema": {
    title: "ICT Startup Competition 2026 - Smart Flema",
    subtitle: "International College of Technology, Kanazawa",
    responsibilities: [
      "Selected as a representative from CAMT, Chiang Mai University.",
      "Collaborated with international team members to develop a startup-oriented technology solution.",
      "Contributed to front-end, full-stack, UX, and business-focused product design."
    ],
    overview: [
      "This academic prototype was inspired by smart city initiatives to improve urban crowd management and public safety through CCTV and IoT integration.",
      "The system uses computer vision to detect congestion in places such as markets, festivals, and transport hubs. When overcrowding is detected, officers receive actionable alerts to redirect traffic flow, open alternative routes, or deploy support resources.",
      "The platform includes two interfaces: an Officer Dashboard with real-time crowd analytics, heatmaps, and automated alerts; and a Citizen Dashboard with live CCTV feeds, safety notifications, and event information.",
      "The prototype demonstrates how CCTV and IoT data can be transformed into intelligent crowd-management tools for safer and more efficient urban experiences."
    ]
  },
  "chiangmai-smartcity": {
    title: "Project Manager - Chiang Mai Smart City",
    subtitle: "CAMT CMU x CAS COGNISER (THAILAND) COMPANY LIMITED · 2025",
    responsibilities: [
      "Designed and implemented both officer and citizen interfaces, including real-time traffic analysis, violation detection, public CCTV access, safety updates, complaints, and city events.",
      "Developed front-end UI/UX and back-end services, integrated IoT data from CCTV and sensors, and deployed the platform on the web.",
      "Led planning and coordination for the CCTV monitoring dashboard prototype."
    ],
    overview: [
      "This project is an academic prototype aligned with Chiang Mai Municipality's smart city concept.",
      "The goal was to design and build a Smart City CCTV Monitoring Dashboard that improves traffic management, public safety, and citizen engagement through data-driven systems.",
      "The platform includes an Officer Dashboard for municipal staff and a Citizen Dashboard for city information, complaints, and public relations.",
      "The system shows how CCTV and IoT data can become actionable insights for authorities while delivering practical value to everyday citizens."
    ]
  },
  agrilink: {
    title: "Hylife Hackathon 2025 - AgriLink Smart Farm Marketplace",
    subtitle: "CAMT CMU · 2025",
    responsibilities: [
      "Initiated and co-developed the core idea and solution for an agrilink platform addressing transparency issues in Thailand's agricultural market.",
      "Designed and developed front-end UI, user flows, and interaction features for a farm-to-buyer marketplace.",
      "Contributed to project direction and feature strategy during hackathon execution."
    ],
    overview: [
      "AgriLink is a hackathon-based academic prototype designed to improve transparency, fairness, and efficiency in Thailand's agricultural supply chain.",
      "It addresses key challenges such as middleman-driven price suppression, limited traceability, and high post-harvest losses.",
      "The platform connects farms directly with buyers through a transparent digital marketplace, supported by smart logistics and quality assurance.",
      "Core capabilities include digital farm profiles, QR-based traceability, and AI-powered cold-chain logistics to improve food safety, freshness, and trust.",
      "The solution demonstrates how AI, IoT, and data-driven platforms can reduce post-harvest losses, improve market access for farmers, and support informed purchasing decisions."
    ]
  }
};

const showToast = (text) => {
  toast.textContent = text;
  toast.classList.add("show");
  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => {
    toast.classList.remove("show");
  }, 1700);
};

menuToggle.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".mobile-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

exploreBtn.addEventListener("click", () => {
  const workSection = document.getElementById("work");
  workSection.scrollIntoView({ behavior: "smooth", block: "start" });
  showToast("Scrolling to Work section");
});

allServiceBtn.addEventListener("click", () => {
  const experienceSection = document.getElementById("experience");
  experienceSection.scrollIntoView({ behavior: "smooth", block: "start" });
  showToast("Opening experience section");
});

document.querySelectorAll(".service-read").forEach((button) => {
  button.addEventListener("click", () => {
    const serviceName = button.getAttribute("data-service") || "Service";
    showToast(`Selected service: ${serviceName}`);
  });
});

if (servicesBody && serviceCards.length > 0) {
  serviceCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      servicesBody.classList.add("is-hovering");
      serviceCards.forEach((item) => item.classList.remove("is-active"));
      card.classList.add("is-active");
    });
  });

  servicesBody.addEventListener("mouseleave", () => {
    servicesBody.classList.remove("is-hovering");
    serviceCards.forEach((item) => item.classList.remove("is-active"));
  });
}

const renderExperienceDetail = (expId) => {
  const exp = experienceData[expId];
  if (!exp || !detailTitle || !detailSubtitle || !detailResponsibilities || !detailOverview) {
    return;
  }

  detailTitle.textContent = exp.title;
  detailSubtitle.textContent = exp.subtitle;

  detailResponsibilities.innerHTML = "";
  exp.responsibilities.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    detailResponsibilities.appendChild(li);
  });

  detailOverview.innerHTML = "";
  const overviewList = document.createElement("ul");
  exp.overview.forEach((paragraph) => {
    const li = document.createElement("li");
    li.textContent = paragraph;
    overviewList.appendChild(li);
  });
  detailOverview.appendChild(overviewList);
};

const syncExperienceActiveCard = () => {
  if (!experienceItems.length) {
    return;
  }

  const activeId = hoveredExperienceId || selectedExperienceId;
  experienceItems.forEach((item) => {
    item.classList.toggle("is-active", item.getAttribute("data-exp-id") === activeId);
  });
};

const openExperienceById = (expId) => {
  if (!experienceLayout) {
    return;
  }

  selectedExperienceId = expId;
  hoveredExperienceId = null;
  renderExperienceDetail(expId);
  experienceLayout.classList.add("is-open");
  syncExperienceActiveCard();
};

if (experienceLayout && experienceItems.length > 0) {
  syncExperienceActiveCard();

  experienceViewButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const expId = button.getAttribute("data-exp-id") || "smart-flema";
      openExperienceById(expId);

      showToast("Showing project details");
    });
  });

  experienceItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      hoveredExperienceId = item.getAttribute("data-exp-id");
      syncExperienceActiveCard();
    });

    item.addEventListener("click", (event) => {
      if (event.target.classList.contains("experience-view")) {
        return;
      }

      const expId = item.getAttribute("data-exp-id") || "smart-flema";
      openExperienceById(expId);
    });
  });

  const experienceList = document.querySelector(".experience-list");
  if (experienceList) {
    experienceList.addEventListener("mouseleave", () => {
      hoveredExperienceId = null;
      syncExperienceActiveCard();
    });
  }
}

if (caseDetailButtons.length > 0) {
  caseDetailButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const expId = button.getAttribute("data-target") || "smart-flema";
      const expSection = document.getElementById("experience");

      if (expSection) {
        expSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      openExperienceById(expId);
      showToast("Opening selected case details");
    });
  });
}

if (detailClose && experienceLayout) {
  detailClose.addEventListener("click", () => {
    experienceLayout.classList.remove("is-open");
    hoveredExperienceId = null;
    syncExperienceActiveCard();
  });
}

if (tagPills.length > 0) {
  tagPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      pill.classList.toggle("is-selected");
    });
  });
}

if (reachForm) {
  reachForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const selectedTags = Array.from(tagPills)
      .filter((pill) => pill.classList.contains("is-selected"))
      .map((pill) => pill.textContent?.trim())
      .filter(Boolean);

    showToast(
      selectedTags.length > 0
        ? `Message sent with ${selectedTags.length} selected topics`
        : "Message sent successfully"
    );

    reachForm.reset();
    tagPills.forEach((pill) => pill.classList.remove("is-selected"));
  });
}

playBtn.addEventListener("click", () => {
  videoModal.classList.add("open");
  videoModal.setAttribute("aria-hidden", "false");
});

const closeVideoModal = () => {
  videoModal.classList.remove("open");
  videoModal.setAttribute("aria-hidden", "true");
};

closeModal.addEventListener("click", closeVideoModal);

videoModal.addEventListener("click", (event) => {
  if (event.target === videoModal) {
    closeVideoModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeVideoModal();
  }
});
