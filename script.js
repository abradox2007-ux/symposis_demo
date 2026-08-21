/* ==========================================================================
   ⚡ Aurafest'26 — Master Client Script
   Zero backend dependencies. Pure Vanilla JavaScript.
   ========================================================================== */

// 🔗 Centralized Registration Link (Update here if needed)
const REGISTRATION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdMr-D0D3Y5-nAXSpiwK2A6ERJShkyeVgWcmJjPk3jHYydm-w/viewform?usp=publish-editor";

/* ===== COMPLETE EVENT DATABASE (11 EVENTS) ===== */
const EVENTS_DATA = [
  // --- TECHNICAL EVENTS (5) ---
  {
    id: "tech-paper-pres",
    title: "Paper Presentation",
    category: "technical",
    categoryLabel: "Technical Track",
    image: "ref_images/paper_presentation.jpg",
    summary: "Showcase original research, breakthrough technical insights, and architectural innovations before an expert jury of academicians and industry veterans.",
    desc1: "Paper Presentation at Aurafest'26 invites aspiring researchers, student engineers, and technical innovators to present their original findings, theoretical insights, and implementation prototypes before a distinguished jury of senior academicians and industry veterans. Participants are encouraged to explore cutting-edge engineering domains including Generative AI, Quantum Computing, Blockchain Architectures, Cloud-Native Distributed Systems, IoT, Edge Analytics, and Sustainable Computing.",
    desc2: "Each registered team must deliver a structured 8-minute slide deck presentation followed by a rigorous 4-minute defense session answering targeted questions from the jury and audience. Critical emphasis is placed on conceptual originality, real-world engineering feasibility, depth of mathematical/empirical validation, and clarity of articulation. Outstanding presentations will receive top honors, winner medals, and certificates of excellence.",
    teamSize: "1 – 2 Members",
    timing: "Will be announced on 24th September",
    venue: "Will be announced on 24th September",
    coordinator: "Staff Organizers: Mrs. Umamaheswari B (+91 99621 03890), Mrs. Reena R (+91 98409 88141)",
    rules: [
      "Team size: 1 to 2 members per team (Max 2).",
      "Manuscripts should strictly follow standard IEEE 2-column format (max 6 pages).",
      "8 minutes presentation time + 4 minutes Q&A with jury.",
      "Bring 2 hard copies and a soft copy in PDF/PPT format on a pen drive.",
      "Plagiarism must be below 15%."
    ]
  },
  {
    id: "tech-syntax-master",
    title: "Syntax Master",
    category: "technical",
    categoryLabel: "Technical Track",
    image: "ref_images/Syntax_master.png",
    summary: "The flagship algorithmic battleground designed to push competitive programmers and problem-solvers to their absolute limits.",
    desc1: "Syntax Master is the flagship algorithmic battleground of Aurafest'26, designed to push competitive programmers, software crafters, and problem-solvers to their absolute intellectual limits in a high-intensity timed environment. Spread across multi-tiered rounds of increasing computational complexity, the contest features problem statements spanning dynamic programming, graph theory traversal, advanced tree structures, combinatorial optimization, and greedy heuristics.",
    desc2: "Round 1 begins with a fast-paced MCQ and rapid-fire debugging elimination challenge. Top qualifiers advance to the high-stakes live coding arena where automated test suites evaluate solution correctness, runtime execution speed, and memory consumption. Supported programming languages include C, C++, Java, and Python.",
    teamSize: "1 – 4 Members",
    timing: "Will be announced on 24th September",
    venue: "Will be announced on 24th September",
    coordinator: "Staff Organizers: Mrs. Umamaheswari B (+91 99621 03890), Mrs. Reena R (+91 98409 88141)",
    rules: [
      "Team size: 1 to 4 members per team (Max 4).",
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
    summary: "Transform on-the-spot thematic problem statements into responsive, high-aesthetic web experiences using any development tools of choice.",
    desc1: "The Web Design Challenge challenges creative developers and full-stack architects to transform on-the-spot thematic problem statements into responsive, high-aesthetic, and functional web applications under timed conditions. Participants have the complete freedom to use any tools, frameworks, and modern technologies to build their website.",
    desc2: "Submissions will be evaluated on overall frontend visual aesthetics, UI/UX responsiveness, and solid backend structure. The team that crafts the most exceptional frontend design combined with an efficient backend architecture wins the competition. Event coordinators and judges will review all builds and announce the final winner.",
    teamSize: "1 – 4 Members",
    timing: "Will be announced on 24th September",
    venue: "Will be announced on 24th September",
    coordinator: "Staff Organizers: Mrs. Umamaheswari B (+91 99621 03890), Mrs. Reena R (+91 98409 88141)",
    rules: [
      "Team size: 1 to 4 members per team (Max 4).",
      "Surprise theme will be announced on the spot.",
      "Participants are free to use any development tools, libraries, or frameworks to build the website.",
      "Evaluation Criteria: The team with the superior frontend design, UI responsiveness, and robust backend structure wins.",
      "Total duration: 1 Hours for complete design and development.",
      "The event coordinators and judges will review all submissions and announce the final winner."
    ]
  },
  {
    id: "tech-quiz",
    title: "Tech Quiz",
    category: "technical",
    categoryLabel: "Technical Track",
    image: "ref_images/tech_quiz.jpg",
    summary: "Test your technical acumen, computing history, emerging tech breakthroughs, and programming knowledge in a thrilling multi-round battle of tech wits.",
    desc1: "Tech Quiz at Aurafest'26 is the ultimate cerebral battleground designed for tech enthusiasts, geek minds, and computer science aficionados. Spanning the entire spectrum of computing—from computer architectures, operating systems, and programming paradigms to Generative AI, cloud infrastructure, cybersecurity history, and tech industry milestones—this competition puts your speed and knowledge to the test.",
    desc2: "The event begins with a fast-paced preliminary round to shortlist the top qualifiers. Finalists advance to the live buzzer stage featuring audio-visual clues, connect rounds, rapid-fire questions, and high-stakes wager rounds.",
    teamSize: "1 – 4 Members",
    timing: "Will be announced on 24th September",
    venue: "Will be announced on 24th September",
    coordinator: "Staff Organizers: Mrs. Umamaheswari B (+91 99621 03890), Mrs. Reena R (+91 98409 88141)",
    rules: [
      "Team size: 1 to 4 members per team (Max 4).",
      "Round 1: 25-minute written / digital prelims covering core CS, AI, tech trivia, and industry innovations.",
      "Round 2: Stage finals with audio-visual, buzzer, and rapid-fire rounds.",
      "Use of mobile phones, smart watches, or search engines is strictly prohibited during the quiz.",
      "Quiz Master's decision is final and binding."
    ]
  },
  {
    id: "tech-startup-ideas",
    title: "Startup Ideas",
    category: "technical",
    categoryLabel: "Technical Track",
    image: "ref_images/STARTUP.png",
    summary: "Pitch your breakthrough business model, tech-driven venture, or innovative product prototype before venture mentors and industry judges.",
    desc1: "Startup Ideas at Aurafest'26 provides aspiring student entrepreneurs and tech visionaries a launchpad to pitch their innovative business concepts, disruptive products, and tech startup models before an esteemed panel of incubation mentors, angel investors, and industry founders.",
    desc2: "Teams will pitch their business model, target market, revenue stream, technology architecture, and go-to-market strategy in an intense 7-minute pitch followed by 3 minutes of rigorous Q&A with the jury. Feasibility, market potential, technological innovation, and financial viability are the key evaluation pillars.",
    teamSize: "1 – 4 Members",
    timing: "Will be announced on 24th September",
    venue: "Will be announced on 24th September",
    coordinator: "Staff Organizers: Mrs. Umamaheswari B (+91 99621 03890), Mrs. Reena R (+91 98409 88141)",
    rules: [
      "Team size: 1 to 4 members per team (Max 4).",
      "Pitch format: 7 minutes slide deck presentation + 3 minutes jury Q&A.",
      "Bring PPT/PDF presentation on a USB drive and optional working prototype/demo if available.",
      "Evaluation metrics: Problem Statement & Innovation, Market Feasibility, Business & Revenue Model, and Presentation Clarity.",
      "Judges' decision is final and binding."
    ]
  },

  // --- NON-TECHNICAL EVENTS (6) ---
  {
    id: "nontech-photography",
    title: "Capture X",
    category: "non-technical",
    categoryLabel: "Non-Technical Track",
    image: "ref_images/photography.jpg",
    summary: "Capture the raw emotions, architectural symmetry, and dynamic energy of the symposium through your creative lens.",
    desc1: "Capture X at Aurafest'26 is the premier visual arts and campus photography competition inviting shutterbugs, visual storytellers, and mobile photographers to document the vibrancy, candid spirit, and visual energy of the symposium.",
    desc2: "Participants receive thematic photo prompts in the morning and have the campus grounds as their canvas. Submissions are judged by professional photographers on composition, lighting nuance, storytelling depth, framing originality, and visual impact.",
    teamSize: "1 – 4 Members",
    timing: "Will be announced on 24th September",
    venue: "Will be announced on 24th September",
    coordinator: "Staff Organizers: Mrs. Umamaheswari B (+91 99621 03890), Mrs. Reena R (+91 98409 88141)",
    rules: [
      "Team size: 1 to 4 members per team (Max 4).",
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
    image: "ref_images/FLIM FEST.png",
    summary: "Step behind the lens and showcase your original short films, creative cinematography, direction, and storytelling on the big screen.",
    desc1: "Film Fest at Aurafest'26 is the ultimate stage for aspiring filmmakers, cinematographers, screenwriters, and digital creators to showcase their visual masterpieces on the grand auditorium screen. From thought-provoking social narratives and sci-fi thrillers to gripping dramas and hilarious comedies, let your storytelling captivate a live audience and an esteemed panel of cine experts.",
    desc2: "All submitted short films will be screened before the jury followed by an interactive Q&A session with the director and cast. Entries will be evaluated on originality of concept, scriptwriting, technical cinematography, audio/BGM design, editing flow, and overall emotional and artistic impact.",
    teamSize: "1 – 4 Members",
    timing: "Will be announced on 24th September",
    venue: "Will be announced on 24th September",
    coordinator: "Staff Organizers: Mrs. Umamaheswari B (+91 99621 03890), Mrs. Reena R (+91 98409 88141)",
    rules: [
      "Team size: 1 to 4 members per team (Max 4).",
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
    summary: "The ultimate multi-arena esports battleground featuring high-speed Online Chess showdowns, high-octane BGMI battle royale squad wars, and action-packed Free Fire Max battles.",
    desc1: "playVerse is Aurafest'26's premier esports tournament bringing together tactical grandmasters and mobile gaming champions across three dynamic competitive leagues: 1. Online Blitz & Rapid Chess, 2. BGMI (Battlegrounds Mobile India) Custom Room Squad Warfare, and 3. Free Fire Max Custom Room Clash.",
    desc2: "In the Chess Arena, players duel in timed Swiss-system online brackets with zero room for error. In the Battle Royale Arenas: Every elimination must come from a single-bullet headshot, while body shots and continuous weapon spraying are completely banned. Players may only use high-damage, single-shot weapons, typically limited to the Desert Eagle, M1887 shotgun, Woodpecker, or SVD. Matches utilize the Clash Squad mode, set to a best-of-7 or best-of-13 rounds structure to determine the winner. Default match coins are set to 1500 to allow players to purchase their preferred weapons in the very first round. The Limited Ammo setting is turned off to grant players infinite gloo walls for quick cover and movement practice. Weapon skins and attributes are disabled in the room settings to ensure completely balanced gun stats for both players. Active and passive character abilities are turned off to keep the match focused purely on aiming and mechanical skill. Finally, camping inside safe zones or rushing directly into the opponent's spawn area before the fight begins is strictly prohibited.",
    teamSize: "1 – 4 Members (Solo for Chess / Squad for BGMI & Free Fire)",
    timing: "Will be announced on 24th September",
    venue: "Will be announced on 24th September",
    coordinator: "Staff Organizers: Mrs. Umamaheswari B (+91 99621 03890), Mrs. Reena R (+91 98409 88141)",
    rules: [
      "Team size: 1 to 4 members per team (Max 4; Solo for Chess).",
      "Gaming Track 1 (Chess): Played online on Chess.com / Lichess under 5+3 Blitz / Rapid rules.",
      "Gaming Track 2 (BGMI): Custom room matches in Squad mode (Erangel/Miramar). BYOD (Bring Your Own Device). Mobile only.",
      "Gaming Track 3 (Free Fire Max): Custom room matches in Squad mode (Bermuda/Purgatory). BYOD. Mobile only.",
      "Strict anti-cheat policy: Emulators, iPad view tools, trigger accessories, or third-party plugins are banned.",
      "participants are encouraged to have mobile data for internet connection.",
      "Leaderboard is calculated on official placement points + frag kills."
    ]
  },
  {
    id: "nontech-flip-the-channel",
    title: "Flip the Channel",
    category: "non-technical",
    categoryLabel: "Non-Technical Track",
    image: "ref_images/flip_the_channel.png",
    summary: "The ultimate impromptu acting showdown where actors must switch characters, genres, and emotions the instant the host flips the channel!",
    desc1: "Flip the Channel is a high-energy theatrical, comedic, and impromptu acting battleground that tests instant adaptability, stage presence, and spontaneous humor. Teams take the stage to act out an ongoing scene, but the twist is: the host will randomly announce 'Flip!' and call out a completely new TV channel or genre!",
    desc2: "From Breaking News, Dramatic Soap Operas, and Anime Battles to Horror Movies, Teleshopping Ads, Sports Commentary, and Cartoon Shows, participants must immediately morph their characters, body language, and dialogue without breaking stride. The team with the sharpest comedic timing, quickest reflexes, and most entertaining performance takes the crown!",
    teamSize: "1 – 4 Members",
    timing: "Will be announced on 24th September",
    venue: "Will be announced on 24th September",
    coordinator: "Staff Organizers: Mrs. Umamaheswari B (+91 99621 03890), Mrs. Reena R (+91 98409 88141)",
    rules: [
      "Team size: 1 to 4 members per team (Max 4).",
      "Each team gets 3 to 5 minutes of total stage time.",
      "The host/judges will call out random channel switches every 30 to 45 seconds.",
      "Actors must adapt their role, tone, and genre instantly without halting the performance flow.",
      "Channels may include: News Channel, Cartoon, Horror, Mega Serial/Soap Opera, Teleshopping, Sports, Sci-Fi.",
      "Vulgarity, derogatory language, or offensive content will lead to immediate disqualification."
    ]
  },
  {
    id: "nontech-movquiz",
    title: "Lights , Camera , Guess!",
    category: "non-technical",
    categoryLabel: "Non-Technical Track",
    image: "ref_images/movquiz.png",
    summary: "Celebrate world cinema, blockbuster soundtracks, iconic dialogues, and director trivia in an electrifying movie buff showdown.",
    desc1: "Lights, Camera, Guess! is the ultimate cinephile battleground celebrating the magic of cinema across Kollywood, Bollywood, and Hollywood. Test your knowledge of iconic film dialogues, legendary background scores, hidden director easter eggs, and unforgettable box office moments.",
    desc2: "The competition features dialogue identification, slowed/reversed soundtrack clues, frame-by-frame scene guessing, and high-energy director-actor connect rounds.",
    teamSize: "1 – 4 Members",
    timing: "Will be announced on 24th September",
    venue: "Will be announced on 24th September",
    coordinator: "Staff Organizers: Mrs. Umamaheswari B (+91 99621 03890), Mrs. Reena R (+91 98409 88141)",
    rules: [
      "Team size: 1 to 4 members per team (Max 4).",
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
    teamSize: "1 – 4 Members",
    timing: "Will be announced on 24th September",
    venue: "Will be announced on 24th September",
    coordinator: "Staff Organizers: Mrs. Umamaheswari B (+91 99621 03890), Mrs. Reena R (+91 98409 88141)",
    rules: [
      "Team size: 1 to 4 members per team (Max 4).",
      "Teams compete across 3 consecutive rounds.",
      "Round 1: Damsharas (Dumb Charades) — No lip-syncing or spelling allowed (2 mins per prompt).",
      "Round 2: Pictionary / Mystery Mini Challenge — Fastest teams to solve visual clues qualify for the finale.",
      "Round 3: Grand Treasure Hunt — Teams receive clue maps across campus zones; first team to find the artifact wins.",
      "Fair play and campus boundary guidelines must be strictly adhered to."
    ]
  }
];

function initApp() {
  try { initCountdown(); } catch (e) { console.warn("Countdown init:", e); }
  try { initIntroAnimation(); } catch (e) { console.warn("Intro init:", e); }
  try { renderEvents("all", ""); } catch (e) { console.warn("Events render:", e); }
  try { initFilterControls(); } catch (e) { console.warn("Filters init:", e); }
  try { initModal(); } catch (e) { console.warn("Modal init:", e); }
  try { initMobileNav(); } catch (e) { console.warn("MobileNav init:", e); }
  try { setupRegistrationLinks(); } catch (e) { console.warn("Links init:", e); }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

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
            stepText.textContent = "CALIBRATING 11 COMPETITION ARENAS...";
          } else if (percentage < 60) {
            stepText.textContent = "SYNCHRONIZING PSVPEC CAMPUS MAINFRAME...";
          } else if (percentage < 82) {
            stepText.textContent = "AUTHENTICATING CSE & IT PROTOCOLS...";
          } else if (percentage < 97) {
            stepText.textContent = "SYSTEM ARMED & READY // 26.09.2026";
          } else {
            stepText.textContent = "LAUNCHING AURAFEST '26 EXPERIENCE...";
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
      ".hero .eyebrow, .hero .hero-title-wrap, .hero .h1-stack, .hero .hero-sub, .hero .hero-actions, .hero .hero-badge-card"
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
    <div class="modal-body" data-event="${event.id}">
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
          <div class="label">Organizers</div>
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
   Countdown Timer (Target: Sept 26, 2026)
   ========================================================================== */
function initCountdown() {
  const daysEl = document.getElementById("cdDays");
  const hoursEl = document.getElementById("cdHours");
  const minsEl = document.getElementById("cdMins");
  const secsEl = document.getElementById("cdSecs");

  if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

  // 26th September 2026 at 09:00 AM IST (Month index 8 = September)
  const targetDate = new Date(2026, 8, 26, 9, 0, 0).getTime();

  function update() {
    const now = Date.now();
    const distance = targetDate - now;

    if (distance <= 0) {
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
/* Background Canvas removed per request */
function initCanvas() {}

/* ==========================================================================
   Mobile Navigation Drawer Controller
   ========================================================================== */
function initMobileNav() {
  const menuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");

  if (!menuBtn || !navLinks) return;

  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close menu when clicking any nav item
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (navLinks.classList.contains("open") && !navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
      navLinks.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });
}
