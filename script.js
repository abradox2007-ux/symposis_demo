/* ==========================================================================
   ⚡ AuraFeast'26 — Master Client Script
   Zero backend dependencies. Pure Vanilla JavaScript.
   ========================================================================== */

// 🔗 Centralized Registration Link (Update here if needed)
const REGISTRATION_URL = "https://forms.gle/aurafeast2026";

/* ===== COMPLETE EVENT DATABASE (12 EVENTS) ===== */
const EVENTS_DATA = [
  // --- TECHNICAL EVENTS (6) ---
  {
    id: "tech-paper-presentation",
    title: "Paper Presentation",
    category: "technical",
    categoryLabel: "Technical Track",
    image: "ref_images/paper_presentation.jpg",
    summary: "Showcase original research, breakthrough technical insights, and architectural innovations before an expert jury of academicians and industry veterans.",
    desc1: "Paper Presentation at AuraFeast'26 invites aspiring researchers, student engineers, and technical innovators to present their original findings, theoretical insights, and implementation prototypes before a distinguished jury of senior academicians and industry veterans. Participants are encouraged to explore cutting-edge engineering domains including Generative AI, Quantum Computing, Blockchain Architectures, Cloud-Native Distributed Systems, IoT, Edge Analytics, and Sustainable Computing.",
    desc2: "Each registered team must deliver a structured 8-minute slide deck presentation followed by a rigorous 4-minute defense session answering targeted questions from the jury and audience. Critical emphasis is placed on conceptual originality, real-world engineering feasibility, depth of mathematical/empirical validation, and clarity of articulation. Outstanding presentations will receive top honors, cash awards, and certificates of excellence.",
    teamSize: "1 – 3 Members",
    timing: "10:30 AM – 01:00 PM",
    venue: "Seminar Hall 1",
    coordinator: "Staff & Student Leads: +91 98401 XXXXX",
    rules: [
      "Manuscripts should strictly follow standard IEEE 2-column format (max 6 pages).",
      "8 minutes presentation time + 4 minutes Q&A with jury.",
      "Bring 2 hard copies and a soft copy in PDF/PPT format on a pen drive.",
      "Plagiarism must be below 15%."
    ]
  },
  {
    id: "tech-coding-challenge",
    title: "Coding Challenge",
    category: "technical",
    categoryLabel: "Technical Track",
    image: "ref_images/coding_challenge.jpg",
    summary: "The flagship algorithmic battleground designed to push competitive programmers and problem-solvers to their absolute limits.",
    desc1: "The Coding Challenge is the flagship algorithmic battleground of AuraFeast'26, designed to push competitive programmers, software crafters, and problem-solvers to their absolute intellectual limits in a high-intensity timed environment. Spread across multi-tiered rounds of increasing computational complexity, the contest features problem statements spanning dynamic programming, graph theory traversal, advanced tree structures, combinatorial optimization, and greedy heuristics.",
    desc2: "Round 1 begins with a fast-paced MCQ and rapid-fire debugging elimination challenge. Top qualifiers advance to the high-stakes live coding arena where automated test suites evaluate solution correctness, runtime execution speed, and memory consumption. Supported programming languages include C, C++, Java, and Python.",
    teamSize: "Solo (1 Member)",
    timing: "10:30 AM – 12:45 PM",
    venue: "CSE Programming Lab 1 & 2",
    coordinator: "Tech Leads: +91 98402 XXXXX",
    rules: [
      "Supported languages: C, C++, Java, Python 3.",
      "Round 1: 30 minutes algorithmic aptitude & code snippet debugging.",
      "Round 2: 60 minutes live problem solving on an offline platform.",
      "Internet access and external AI assistance tools are strictly prohibited."
    ]
  },
  {
    id: "tech-web-designs",
    title: "Web Design Challenge",
    category: "technical",
    categoryLabel: "Technical Track",
    image: "ref_images/web_designs.jpg",
    summary: "Transform on-the-spot thematic problem statements into responsive, high-aesthetic, and accessible web experiences.",
    desc1: "The Web Design Challenge challenges creative developers and front-end architects to transform on-the-spot thematic problem statements into responsive, high-aesthetic, and accessible web experiences under strict time limits. Participants must craft functional web applications using pure HTML5, CSS3, and modern Vanilla JavaScript, emphasizing typography, visual hierarchy, mobile adaptability, and interactive animations.",
    desc2: "Submissions are judged on semantic HTML markup, cross-browser responsiveness, UI finesse, creative adherence to the surprise theme, and clean code organization. Standout projects demonstrating state-of-the-art aesthetics and micro-interactions will walk away with top prizes.",
    teamSize: "1 – 2 Members",
    timing: "10:30 AM – 01:00 PM",
    venue: "IT Web Technologies Lab",
    coordinator: "Design Leads: +91 98403 XXXXX",
    rules: [
      "Surprise theme will be announced on the spot.",
      "Allowed technologies: HTML5, CSS3, Vanilla JS (No pre-built templates or heavy UI frameworks).",
      "Total duration: 2 Hours for complete design and coding.",
      "Designs must be fully responsive across mobile and desktop viewports."
    ]
  },
  {
    id: "tech-uixpert",
    title: "UIXpert",
    category: "technical",
    categoryLabel: "Technical Track",
    image: "ref_images/UIXpert.jpg",
    summary: "A premier product and UI/UX design battleground testing user research, wireframing, component design systems, and interactive prototypes.",
    desc1: "UIXpert is the premier product and UI/UX design battleground testing user research, wireframing, component design systems, and interactive prototypes. Designers receive an end-user scenario and must conceptualize a seamless digital product that solves user pain points with exceptional ergonomics and visual craft.",
    desc2: "Participants will utilize Figma to build wireframes, interactive user flows, accessible color palettes, and polished micro-interactions. The evaluation evaluates design rationale, user empathy, accessibility adherence (WCAG standards), and visual delight.",
    teamSize: "1 – 2 Members",
    timing: "11:00 AM – 01:15 PM",
    venue: "Design Lab / CAD Lab",
    coordinator: "UI/UX Leads: +91 98404 XXXXX",
    rules: [
      "Tool: Figma (web/desktop).",
      "Deliverables: Low-fidelity user flow wireframe + High-fidelity interactive prototype.",
      "Time allotted: 90 minutes designing + 5 minutes prototype presentation to judges.",
      "Judging criteria: Usability, Visual Aesthetics, Design System Consistency, and User Flow Logic."
    ]
  },
  {
    id: "tech-bug-finders",
    title: "Bug Busters (Bug Finder)",
    category: "technical",
    categoryLabel: "Technical Track",
    image: "ref_images/bug_finder.jpg",
    summary: "Hunt down cryptic logic errors, syntax faults, memory leaks, and concurrency deadlocks hidden inside obfuscated codebases.",
    desc1: "Bug Busters is an adrenaline-fueled code audit and debugging showdown designed for sharp-eyed developers. Competitors are handed multi-file codebases plagued with subtle logic errors, off-by-one edge cases, race conditions, memory leaks, and runtime exceptions.",
    desc2: "Your mission is to inspect, diagnose, rectify, and refactor the faulty snippets in record time while ensuring all automated test assertions pass without regression. Speed, analytical precision, and deep language comprehension are paramount.",
    teamSize: "Solo (1 Member)",
    timing: "11:30 AM – 01:00 PM",
    venue: "Systems Lab",
    coordinator: "QA Leads: +91 98405 XXXXX",
    rules: [
      "Codebases provided in C/C++, Java, and Python.",
      "Round 1: Rapid error identification in 20 short snippets (25 minutes).",
      "Round 2: Deep logic bug hunting and patch submission in a complex program (45 minutes).",
      "Fastest accurate submissions receive highest score multipliers."
    ]
  },
  {
    id: "tech-cyberquest",
    title: "CyberQuest",
    category: "technical",
    categoryLabel: "Technical Track",
    image: "ref_images/CyberQuest.jpg",
    summary: "Jeopardy-style Capture The Flag (CTF) tournament spanning cryptography, web exploitation, network forensics, and steganography.",
    desc1: "CyberQuest is a fast-paced Jeopardy-style Capture The Flag (CTF) tournament challenging ethical hackers, security enthusiasts, and cyber defenders. Teams navigate a dynamic board of security challenges spanning web vulnerabilities, cryptographic ciphers, reverse engineering, digital forensics, and packet analysis.",
    desc2: "Each successfully captured flag unlocks points and reveals increasingly intricate challenge tiers. Real-time live scoreboard tracking keeps the tension soaring until the final buzzer sounds.",
    teamSize: "1 – 2 Members",
    timing: "10:30 AM – 01:15 PM",
    venue: "Cyber Security Lab",
    coordinator: "Security Leads: +91 98406 XXXXX",
    rules: [
      "Jeopardy CTF format with dynamic flag scoring.",
      "Categories: Web Security, Cryptography, Forensics, OSINT, and Reverse Engineering.",
      "Attacking the tournament infrastructure or fellow participants will lead to immediate disqualification.",
      "Flag format: AF26{...}."
    ]
  },

  // --- NON-TECHNICAL EVENTS (6) ---
  {
    id: "nontech-photography",
    title: "Photo Hunt (Photography)",
    category: "non-technical",
    categoryLabel: "Non-Technical Track",
    image: "ref_images/photography.jpg",
    summary: "Capture the raw emotions, architectural symmetry, and dynamic energy of the symposium through your creative lens.",
    desc1: "Photo Hunt at AuraFeast'26 is the premier visual arts and campus photography competition inviting shutterbugs, visual storytellers, and mobile photographers to document the vibrancy, candid spirit, and visual energy of the symposium.",
    desc2: "Participants receive thematic photo prompts in the morning and have the campus grounds as their canvas. Submissions are judged by professional photographers on composition, lighting nuance, storytelling depth, framing originality, and visual impact.",
    teamSize: "Solo (1 Member)",
    timing: "Full Day (Submissions by 02:00 PM)",
    venue: "Campus Wide & Media Desk",
    coordinator: "Media Leads: +91 98407 XXXXX",
    rules: [
      "DSLR, Mirrorless cameras, and Mobile phones permitted.",
      "Photos must be captured within the college campus on the day of the symposium.",
      "Basic color grading and exposure adjustments allowed; heavy AI manipulation or composite generation is prohibited.",
      "Submit uncompressed RAW/JPEG files along with original EXIF data before 02:00 PM."
    ]
  },
  {
    id: "nontech-film-fest",
    title: "Film Fest (Short Film)",
    category: "non-technical",
    categoryLabel: "Non-Technical Track",
    image: "ref_images/film_fest.jpg",
    summary: "Step behind the lens and showcase your original short films, creative cinematography, direction, and storytelling on the big screen.",
    desc1: "Film Fest at AuraFeast'26 is the ultimate stage for aspiring filmmakers, cinematographers, screenwriters, and digital creators to showcase their visual masterpieces on the grand auditorium screen. From thought-provoking social narratives and sci-fi thrillers to gripping dramas and hilarious comedies, let your storytelling captivate a live audience and an esteemed panel of cine experts.",
    desc2: "All submitted short films will be screened before the jury followed by an interactive Q&A session with the director and cast. Entries will be evaluated on originality of concept, scriptwriting, technical cinematography, audio/BGM design, editing flow, and overall emotional and artistic impact.",
    teamSize: "1 – 4 Members",
    timing: "10:30 AM – 01:30 PM",
    venue: "Main Auditorium / AV Hall",
    coordinator: "Film & Media Leads: +91 98408 XXXXX",
    rules: [
      "Duration of the short film: 5 to 15 minutes (including opening and closing credits).",
      "Must be original student work; plagiarism or unauthorized full clips will lead to disqualification.",
      "Video format: MP4 or MKV (Full HD 1080p minimum resolution) brought on a USB drive.",
      "English subtitles are strongly recommended if the dialogue is in regional languages.",
      "Jury decision on creativity, direction, and technical craft is final."
    ]
  },
  {
    id: "nontech-playverse",
    title: "playVerse (Online Gaming)",
    category: "non-technical",
    categoryLabel: "Non-Technical Track",
    image: "ref_images/playverse.jpg",
    summary: "The ultimate dual-arena esports battleground featuring high-speed Online Chess showdowns and high-octane BGMI battle royale squad wars.",
    desc1: "playVerse is AuraFeast'26's premier esports tournament bringing together tactical grandmasters and mobile gaming champions across two dynamic competitive leagues: 1. Online Blitz & Rapid Chess and 2. BGMI (Battlegrounds Mobile India) Custom Room Squad Warfare.",
    desc2: "In the Chess Arena, players duel in timed Swiss-system online brackets with zero room for error. In the BGMI Arena, 4-player squads drop onto custom room battlegrounds (Erangel/Miramar) in high-stakes tactical survival, positioning, and gunplay matches where survival points and frag multipliers dictate the leaderboard champions.",
    teamSize: "Solo (Chess) / 4 Members Squad (BGMI)",
    timing: "11:00 AM – 01:30 PM",
    venue: "eSports Arena / IT Seminar Hall",
    coordinator: "Gaming Leads: +91 98409 XXXXX",
    rules: [
      "Gaming Track 1 (Chess): Played online on Chess.com / Lichess under 5+3 Blitz / Rapid rules.",
      "Gaming Track 2 (BGMI): Custom room matches in Squad mode (Erangel/Miramar). BYOD (Bring Your Own Device). Mobile only.",
      "Strict anti-cheat policy: Emulators, iPad view tools, trigger accessories, or third-party plugins are banned.",
      "Stable campus Wi-Fi access will be provided, but participants are encouraged to have mobile data backup.",
      "Leaderboard is calculated on official placement points + frag kills."
    ]
  },
  {
    id: "nontech-flip-the-channel",
    title: "Flip the Channel",
    category: "non-technical",
    categoryLabel: "Non-Technical Track",
    image: "ref_images/flip_the_channel.jpg",
    summary: "The ultimate impromptu acting showdown where actors must switch characters, genres, and emotions the instant the host flips the channel!",
    desc1: "Flip the Channel is a high-energy theatrical, comedic, and impromptu acting battleground that tests instant adaptability, stage presence, and spontaneous humor. Teams take the stage to act out an ongoing scene, but the twist is: the host will randomly announce 'Flip!' and call out a completely new TV channel or genre!",
    desc2: "From Breaking News, Dramatic Soap Operas, and Anime Battles to Horror Movies, Teleshopping Ads, Sports Commentary, and Cartoon Shows, participants must immediately morph their characters, body language, and dialogue without breaking stride. The team with the sharpest comedic timing, quickest reflexes, and most entertaining performance takes the crown!",
    teamSize: "2 – 3 Members",
    timing: "11:30 AM – 01:00 PM",
    venue: "Seminar Hall 2 / Stage Area",
    coordinator: "Drama & Theatre Leads: +91 98410 XXXXX",
    rules: [
      "Each team gets 3 to 5 minutes of total stage time.",
      "The host/judges will call out random channel switches every 30 to 45 seconds.",
      "Actors must adapt their role, tone, and genre instantly without halting the performance flow.",
      "Channels may include: News Channel, Cartoon, Horror, Mega Serial/Soap Opera, Teleshopping, Sports, Sci-Fi.",
      "Vulgarity, derogatory language, or offensive content will lead to immediate disqualification."
    ]
  },
  {
    id: "nontech-movquiz",
    title: "MOVQuiz (Cinema Trivia)",
    category: "non-technical",
    categoryLabel: "Non-Technical Track",
    image: "ref_images/movquiz.png",
    summary: "Celebrate world cinema, blockbuster soundtracks, iconic dialogues, and director trivia in an electrifying movie buff showdown.",
    desc1: "MOVQuiz is the ultimate cinephile battleground celebrating the magic of cinema across Kollywood, Bollywood, and Hollywood. Test your knowledge of iconic film dialogues, legendary background scores, hidden director easter eggs, and unforgettable box office moments.",
    desc2: "The competition features dialogue identification, slowed/reversed soundtrack clues, frame-by-frame scene guessing, and high-energy director-actor connect rounds.",
    teamSize: "2 Members",
    timing: "11:00 AM – 01:15 PM",
    venue: "Auditorium Main Stage",
    coordinator: "Cine Leads: +91 98411 XXXXX",
    rules: [
      "Rounds include: BGM identification, Frame guessing, Dialogue recall, and Filmography connections.",
      "Written prelims followed by 5 rounds of live stage showdown.",
      "Use of mobile phones or Shazam/sound identifier apps will lead to instant disqualification."
    ]
  },
  {
    id: "nontech-funclash",
    title: "Funclash (Offline Games)",
    category: "non-technical",
    categoryLabel: "Non-Technical Track",
    image: "ref_images/funclash.jpg",
    summary: "An action-packed 3-round offline carnival featuring Damsharas (Dumb Charades), Pictionary/Relay, and the Grand Campus Treasure Hunt.",
    desc1: "Funclash is a three-tiered entertainment and team challenge showdown packed with laughter, fast thinking, and campus exploration. Gather your squad to battle through three consecutive knockout rounds that test non-verbal communication, artistic guessing, and puzzle-solving agility.",
    desc2: "Round 1: Damsharas (Dumb Charades - act and guess cinema & tech terms without speaking). Round 2: Pictionary / Mini-Relay Challenge (draw or solve tactile clues against a ticking clock). Round 3: The Grand Campus Treasure Hunt (unravel cryptic riddles hidden across campus landmarks to locate the golden chest first).",
    teamSize: "2 – 4 Members",
    timing: "10:30 AM – 02:30 PM",
    venue: "Campus Quadrangle & Activity Lawn",
    coordinator: "Event Leads: +91 98412 XXXXX",
    rules: [
      "Teams of 2 to 4 members compete across 3 consecutive rounds.",
      "Round 1: Damsharas (Dumb Charades) — No lip-syncing or spelling allowed (2 mins per prompt).",
      "Round 2: Pictionary / Mystery Mini Challenge — Fastest teams to solve visual clues qualify for the finale.",
      "Round 3: Grand Treasure Hunt — Teams receive clue maps across campus zones; first team to find the artifact wins.",
      "Fair play and campus boundary guidelines must be strictly adhered to."
    ]
  }
];

/* ==========================================================================
   Initializations on DOM Ready
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initIntroAnimation();
  renderEvents("all", "");
  initFilterControls();
  initModal();
  initCountdown();
  initCanvas();
  initMobileNav();
  setupRegistrationLinks();
});

/* ==========================================================================
   🎬 CINEMATIC INTRO ANIMATION CONTROLLER (6.0s Pure Visual Engine)
   ========================================================================== */
let introRafId = null;
let isIntroActive = false;
let boomTimer = null;

function initIntroAnimation() {
  const introScreen = document.getElementById("introScreen");
  const introContainer = document.querySelector(".intro-container");
  const shockwave = document.getElementById("introShockwave");
  const speakerLeft = document.getElementById("introSpeakerLeft");
  const speakerRight = document.getElementById("introSpeakerRight");
  const skipBtn = document.getElementById("introSkipBtn");
  const replayNavBtn = document.getElementById("replayIntroBtn");
  const replayFooterBtn = document.getElementById("footerReplayIntroBtn");
  const particlesContainer = document.getElementById("introParticles");
  const progressBar = document.getElementById("introProgressBar");
  const percentText = document.getElementById("introHudPercent");
  const stepText = document.getElementById("introHudStep");
  const sysStatusText = document.getElementById("introSysStatus");

  if (!introScreen) return;

  // Check prefers-reduced-motion
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) {
    introScreen.style.display = "none";
    return;
  }

  // Create lightweight floating particles
  if (particlesContainer && particlesContainer.childElementCount === 0) {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 20; i++) {
      const p = document.createElement("span");
      p.className = "intro-particle";
      p.style.left = `${(i * 5) + (Math.random() * 4)}%`;
      p.style.setProperty("--duration", `${4.5 + Math.random() * 2.5}s`);
      p.style.setProperty("--delay", `${(i * 0.25) % 3}s`);
      fragment.appendChild(p);
    }
    particlesContainer.appendChild(fragment);
  }

  function triggerVisualImpact() {
    // 1. Trigger visual shockwave ring
    if (shockwave) {
      shockwave.classList.remove("trigger-boom");
      void shockwave.offsetWidth; // Force reflow
      shockwave.classList.add("trigger-boom");
    }

    // 2. Trigger subtle screen shake
    if (introContainer) {
      introContainer.classList.remove("boom-shake");
      void introContainer.offsetWidth; // Force reflow
      introContainer.classList.add("boom-shake");
    }

    // 3. Trigger physical bass pumping on side speakers
    [speakerLeft, speakerRight].forEach(speaker => {
      if (speaker) {
        speaker.classList.remove("speaker-pumping");
        void speaker.offsetWidth; // Force reflow
        speaker.classList.add("speaker-pumping");
      }
    });
  }

  function startSequence() {
    isIntroActive = true;
    introScreen.style.display = "flex";
    introScreen.classList.remove("intro-exit");
    document.body.style.overflow = "hidden";

    if (progressBar) progressBar.style.transform = "scaleX(0)";
    if (percentText) percentText.textContent = "00%";
    if (stepText) stepText.textContent = "INITIALIZING NEURAL CORES...";
    if (sysStatusText) sysStatusText.textContent = "SYSTEM: CALIBRATING";

    if (introRafId) cancelAnimationFrame(introRafId);
    if (boomTimer) clearTimeout(boomTimer);

    // Trigger visual shockwave & speaker pump when title pops in (~450ms)
    boomTimer = setTimeout(() => {
      if (isIntroActive) {
        triggerVisualImpact();
      }
    }, 450);

    const DURATION = 6000; // Exact 6.0 seconds
    let startTime = null;
    let lastPercentInt = -1;

    function step(timestamp) {
      if (!isIntroActive) return;
      if (!startTime) startTime = timestamp;

      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / DURATION, 1.0);
      const percentage = progress * 100;
      const currentInt = Math.floor(percentage);

      // Hardware-accelerated GPU scaleX without layout thrashing
      if (progressBar) {
        progressBar.style.transform = `scaleX(${progress})`;
      }

      // Update text only when integer changes to minimize DOM writes
      if (currentInt !== lastPercentInt) {
        lastPercentInt = currentInt;
        if (percentText) percentText.textContent = `${String(currentInt).padStart(2, "0")}%`;

        if (stepText) {
          if (percentage < 18) {
            stepText.textContent = "INITIALIZING NEURAL CORES & SUB-SYSTEMS...";
          } else if (percentage < 38) {
            stepText.textContent = "CALIBRATING 12 COMPETITION ARENAS...";
          } else if (percentage < 60) {
            stepText.textContent = "SYNCHRONIZING PSVPEC CAMPUS MAINFRAME...";
          } else if (percentage < 82) {
            stepText.textContent = "AUTHENTICATING CSE & IT PROTOCOLS...";
          } else if (percentage < 97) {
            stepText.textContent = "SYSTEM ARMED & READY // 15.09.2026";
          } else {
            stepText.textContent = "LAUNCHING AURAFEAST '26 EXPERIENCE...";
          }
        }
      }

      if (progress < 1.0) {
        introRafId = requestAnimationFrame(step);
      } else {
        if (progressBar) progressBar.style.transform = "scaleX(1)";
        if (percentText) percentText.textContent = "100%";
        setTimeout(dismissIntro, 200);
      }
    }

    introRafId = requestAnimationFrame(step);
  }

  function dismissIntro() {
    if (!isIntroActive) return;
    isIntroActive = false;
    if (introRafId) cancelAnimationFrame(introRafId);
    if (boomTimer) clearTimeout(boomTimer);

    if (progressBar) progressBar.style.transform = "scaleX(1)";
    if (percentText) percentText.textContent = "100%";
    if (stepText) stepText.textContent = "SYSTEM READY // WELCOME";
    if (sysStatusText) sysStatusText.textContent = "SYSTEM: ONLINE";

    introScreen.classList.add("intro-exit");
    document.body.style.overflow = "";

    // Stagger animate Hero Elements into view
    triggerHeroEntrance();

    setTimeout(() => {
      if (!isIntroActive) {
        introScreen.style.display = "none";
      }
    }, 750);
  }

  function triggerHeroEntrance() {
    const heroElements = document.querySelectorAll(
      ".hero .eyebrow, .hero .h1-stack, .hero .hero-sub, .hero .hero-actions, .hero .hero-badge-card"
    );
    heroElements.forEach((el, index) => {
      el.classList.remove("hero-stagger-in");
      void el.offsetWidth; // Force reflow
      el.classList.add("hero-stagger-in");
      el.style.animationDelay = `${index * 0.12}s`;
    });
  }

  // Click on screen to dismiss / enter immediately
  introScreen.addEventListener("click", () => {
    dismissIntro();
  });

  // Skip Button
  if (skipBtn) {
    skipBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      dismissIntro();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (isIntroActive && (e.key === "Escape" || e.key === " " || e.key === "Enter")) {
      e.preventDefault();
      dismissIntro();
    }
  });

  // Replay Triggers
  if (replayNavBtn) {
    replayNavBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      startSequence();
    });
  }

  if (replayFooterBtn) {
    replayFooterBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(startSequence, 300);
    });
  }

  // Start Intro on Load
  startSequence();
}

/* ==========================================================================
   Centralized Registration Links Setup
   ========================================================================== */
function setupRegistrationLinks() {
  document.querySelectorAll(".register-link-btn").forEach(btn => {
    btn.setAttribute("href", REGISTRATION_URL);
    btn.setAttribute("target", "_blank");
    btn.setAttribute("rel", "noopener noreferrer");
  });
}

/* ==========================================================================
   Render Event Cards
   ========================================================================== */
function renderEvents(categoryFilter = "all", searchQuery = "") {
  const grid = document.getElementById("eventsGrid");
  if (!grid) return;

  const normalizedSearch = searchQuery.toLowerCase().trim();
  const filtered = EVENTS_DATA.filter(event => {
    const matchesCat = categoryFilter === "all" || event.category === categoryFilter;
    const matchesQuery = !normalizedSearch ||
      event.title.toLowerCase().includes(normalizedSearch) ||
      event.summary.toLowerCase().includes(normalizedSearch) ||
      event.categoryLabel.toLowerCase().includes(normalizedSearch);
    return matchesCat && matchesQuery;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 48px 20px; background: var(--card-bg); border: 1px dashed var(--line); border-radius: var(--radius-lg);">
        <h3 style="font-family: var(--font-display); font-size: 1.3rem; margin-bottom: 8px; color: var(--ink);">No events found</h3>
        <p style="color: var(--graphite); font-size: 0.95rem;">Try adjusting your filter or search keywords.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(event => `
    <article class="event-card" id="${event.id}">
      <div class="card-img-wrap">
        <img src="${event.image}" alt="${event.title}" loading="lazy">
        <span class="card-tag ${event.category === 'technical' ? 'tech' : 'non-tech'}">
          ${event.category === 'technical' ? '⚡ Technical' : '🎯 Non-Technical'}
        </span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${event.title}</h3>
        <p class="card-summary">${event.summary}</p>
        
        <div class="card-meta-pills">
          <span class="meta-pill">👥 ${event.teamSize}</span>
          <span class="meta-pill">⏱️ ${event.timing}</span>
        </div>

        <div class="card-footer">
          <button type="button" class="btn btn-ghost btn-sm view-details-btn" data-event-id="${event.id}">
            View Details & Rules
          </button>
          <a href="${REGISTRATION_URL}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm register-link-btn">
            Register ↗
          </a>
        </div>
      </div>
    </article>
  `).join("");

  // Attach modal click listeners
  grid.querySelectorAll(".view-details-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const eventId = btn.getAttribute("data-event-id");
      openEventModal(eventId);
    });
  });
}

/* ==========================================================================
   Filter & Search Controls
   ========================================================================== */
function initFilterControls() {
  const tabs = document.querySelectorAll(".filter-tab");
  const searchInput = document.getElementById("eventSearch");

  let currentCategory = "all";
  let currentSearch = "";

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentCategory = tab.getAttribute("data-category");
      renderEvents(currentCategory, currentSearch);
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value;
      renderEvents(currentCategory, currentSearch);
    });
  }
}

/* ==========================================================================
   Event Details Modal Handling
   ========================================================================== */
let modalBackdrop, modalContentContainer, modalCloseBtn;

function initModal() {
  modalBackdrop = document.getElementById("eventModal");
  modalContentContainer = document.getElementById("modalDetailsContainer");
  modalCloseBtn = document.getElementById("modalCloseBtn");

  if (!modalBackdrop) return;

  modalCloseBtn.addEventListener("click", closeModal);
  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBackdrop.classList.contains("open")) {
      closeModal();
    }
  });
}

function openEventModal(eventId) {
  const event = EVENTS_DATA.find(ev => ev.id === eventId);
  if (!event || !modalContentContainer) return;

  modalContentContainer.innerHTML = `
    <div class="modal-header-img">
      <img src="${event.image}" alt="${event.title}">
      <button type="button" class="modal-close-btn" onclick="closeModal()" aria-label="Close modal">✕</button>
    </div>
    <div class="modal-body">
      <span class="modal-category-tag">${event.categoryLabel}</span>
      <h2 class="modal-title">${event.title}</h2>
      
      <p class="modal-desc">${event.desc1}</p>
      <p class="modal-desc">${event.desc2}</p>

      <div class="modal-meta-grid">
        <div class="modal-meta-item">
          <div class="label">Team Size</div>
          <div class="val">${event.teamSize}</div>
        </div>
        <div class="modal-meta-item">
          <div class="label">Timing</div>
          <div class="val">${event.timing}</div>
        </div>
        <div class="modal-meta-item">
          <div class="label">Venue</div>
          <div class="val">${event.venue}</div>
        </div>
        <div class="modal-meta-item">
          <div class="label">Contact</div>
          <div class="val">${event.coordinator}</div>
        </div>
      </div>

      <div class="modal-rules-box">
        <h4>📋 Event Rules & Guidelines</h4>
        <ul>
          ${event.rules.map(rule => `<li>${rule}</li>`).join("")}
        </ul>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-outline" onclick="closeModal()">Close</button>
        <a href="${REGISTRATION_URL}" target="_blank" rel="noopener noreferrer" class="btn btn-primary register-link-btn">
          Register for this Event ↗
        </a>
      </div>
    </div>
  `;

  modalBackdrop.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  if (!modalBackdrop) return;
  modalBackdrop.classList.remove("open");
  document.body.style.overflow = "";
}
window.closeModal = closeModal;

/* ==========================================================================
   Countdown Timer (Target: Sept 15, 2026)
   ========================================================================== */
function initCountdown() {
  const daysEl = document.getElementById("cdDays");
  const hoursEl = document.getElementById("cdHours");
  const minsEl = document.getElementById("cdMins");
  const secsEl = document.getElementById("cdSecs");

  if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

  const targetDate = new Date("September 15, 2026 09:00:00").getTime();

  function update() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minsEl.textContent = "00";
      secsEl.textContent = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minsEl.textContent = String(minutes).padStart(2, "0");
    secsEl.textContent = String(seconds).padStart(2, "0");
  }

  update();
  setInterval(update, 1000);
}

/* ==========================================================================
   Mobile Nav Drawer
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

/* ==========================================================================
   Interactive Background Canvas (Vibrant Cyber Constellation & Colors)
   ========================================================================== */
function initCanvas() {
  const canvas = document.getElementById("cyberCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)");

  let width, height;
  let nodes = [];
  const nodeCount = 42;
  const maxDist = 145;
  const maxDistSq = maxDist * maxDist;
  let mouse = { x: -1000, y: -1000, active: false };

  const vibrantColors = [
    { hex: "#A78BFA", rgb: "167, 139, 250" }, // Electric Violet
    { hex: "#FF2E88", rgb: "255, 46, 136" },  // Cyber Magenta
    { hex: "#00E5FF", rgb: "0, 229, 255" },   // Neon Cyan
    { hex: "#D4FF3D", rgb: "212, 255, 61" },  // Electric Lime
    { hex: "#C084FC", rgb: "192, 132, 252" }  // Bright Purple
  ];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    createNodes();
  }

  function createNodes() {
    nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      const colorObj = vibrantColors[i % vibrantColors.length];
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.55,
        vy: (Math.random() - 0.5) * 0.55,
        radius: 2.0 + Math.random() * 2.0,
        color: colorObj.hex,
        rgb: colorObj.rgb,
        pulseOffset: Math.random() * Math.PI * 2
      });
    }
  }

  // Mouse interaction
  window.addEventListener("pointermove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
  }, { passive: true });

  window.addEventListener("pointerleave", () => {
    mouse.active = false;
  }, { passive: true });

  let time = 0;

  function render() {
    ctx.clearRect(0, 0, width, height);
    time += 0.02;

    const isDarkTheme = document.documentElement.getAttribute("data-theme") === "dark";

    // Update positions and draw glowing nodes
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      if (!prefersReduced.matches) {
        n.x += n.vx;
        n.y += n.vy;

        // Mouse gentle push/attraction
        if (mouse.active) {
          const mdx = mouse.x - n.x;
          const mdy = mouse.y - n.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 180 && mdist > 0) {
            const force = (1 - mdist / 180) * 0.08;
            n.x += (mdx / mdist) * force * 5;
            n.y += (mdy / mdist) * force * 5;
          }
        }

        if (n.x < 0) n.x = width;
        else if (n.x > width) n.x = 0;
        if (n.y < 0) n.y = height;
        else if (n.y > height) n.y = 0;
      }

      // Dynamic glowing node pulse
      const currentRadius = n.radius + Math.sin(time + n.pulseOffset) * 0.6;
      ctx.beginPath();
      ctx.arc(n.x, n.y, Math.max(1, currentRadius), 0, Math.PI * 2);
      ctx.fillStyle = n.color;
      ctx.shadowColor = n.color;
      ctx.shadowBlur = isDarkTheme ? 10 : 6;
      ctx.fill();
      ctx.shadowBlur = 0; // reset shadow
    }

    // Draw multi-color connecting lines
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const distSq = dx * dx + dy * dy;

        if (distSq < maxDistSq) {
          const dist = Math.sqrt(distSq);
          const alpha = (1 - dist / maxDist) * (isDarkTheme ? 0.35 : 0.22);

          // Create vibrant gradient between connecting nodes
          const grad = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
          grad.addColorStop(0, `rgba(${nodes[i].rgb}, ${alpha})`);
          grad.addColorStop(1, `rgba(${nodes[j].rgb}, ${alpha})`);

          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.0;
          ctx.stroke();
        }
      }
    }

    if (!prefersReduced.matches) {
      requestAnimationFrame(render);
    }
  }

  window.addEventListener("resize", resize, { passive: true });
  resize();

  if (!prefersReduced.matches) {
    requestAnimationFrame(render);
  } else {
    render();
  }
}
