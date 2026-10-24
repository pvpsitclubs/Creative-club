/**
 * Creative Club — PVPSIT (CSM & CSD)
 * Centralized Data File for Coordinators, 2026 Events & Winners,
 * Activities, Gallery Archives & Showcase.
 */

const clubData = {
  // ==========================================
  // 1. FACULTY COORDINATORS
  // ==========================================
  facultyCoordinators: [
    {
      name: "Dr. Y. Padma",
      designation: "Associate Professor",
      dept: "Department of CSE",
      contact: "9885138378",
      role: "Faculty Coordinator"
    },
    {
      name: "Mrs. Mohammad Hafeena",
      designation: "Assistant Professor",
      dept: "Department of CSE (Data Science)",
      contact: "7331126313",
      role: "Faculty Advisor & Coordinator",
      image: "images/branding/Faculty.jpg",
      quote: "The Creative Club at PVPSIT is a platform to nurture imagination, expression and innovation. Through words and pixels, we aim to inspire originality and build a vibrant community of storytellers and creators."
    }
  ],

  // ==========================================
  // 2. COORDINATORS DATA (2026 & 2025 Batches)
  // ==========================================
  coordinators: {
    // Current Coordinators — 2026 Batch (From Official Club Coordinators Document)
    batch2026: [
      {
        id: "c2026-1",
        name: "Shalini Vengala",
        regNo: "23501A4264",
        role: "Student Coordinator",
        dept: "CSM (AI & ML)",
        batch: "4th Year • 2026 Batch",
        contact: "8919759794",
        quote: "Directing imaginative visions into tangible impact.",
        image: "images/coordinators/2026/shalini-vengala.jpeg",
        linkedin: "https://www.linkedin.com/company/pvpsit-aiml-datascience/",
        isPlaceholder: false
      },
      {
        id: "c2026-2",
        name: "Shaik. Neha Sumaya",
        regNo: "23501A4252",
        role: "Student Coordinator",
        dept: "CSM (AI & ML)",
        batch: "4th Year • 2026 Batch",
        contact: "6301728919",
        quote: "Empowering voices through evocative storytelling.",
        image: "images/coordinators/2026/neha-sumaya.jpeg",
        linkedin: "https://www.linkedin.com/company/pvpsit-aiml-datascience/",
        isPlaceholder: false
      },
      {
        id: "c2026-3",
        name: "Nadella Tej Karthik",
        regNo: "23501A4440",
        role: "Student Coordinator",
        dept: "CSD (Data Science)",
        batch: "4th Year • 2026 Batch",
        contact: "9247632447",
        quote: "Weaving algorithms and visual narratives into reality.",
        image: "images/coordinators/2026/nadella-tej-karthik.jpg",
        linkedin: "https://www.linkedin.com/company/pvpsit-aiml-datascience/",
        isPlaceholder: false
      },
      {
        id: "c2026-4",
        name: "Pinninti Raja Rohini",
        regNo: "23501A4447",
        role: "Student Coordinator",
        dept: "CSD (Data Science)",
        batch: "4th Year • 2026 Batch",
        contact: "6304068976",
        quote: "Cultivating spaces where creative expression flourishes.",
        image: "images/coordinators/2026/raja-rohini.jpeg",
        linkedin: "https://www.linkedin.com/company/pvpsit-aiml-datascience/",
        isPlaceholder: false
      },
      {
        id: "c2026-5",
        name: "Yadla Gayathri",
        regNo: "23501A4464",
        role: "Student Coordinator",
        dept: "CSD (Data Science)",
        batch: "4th Year • 2026 Batch",
        contact: "9951799509",
        quote: "Designing experiences that linger in the imagination.",
        image: "images/coordinators/2026/Gayathri.jpeg",
        linkedin: "https://www.linkedin.com/company/pvpsit-aiml-datascience/",
        isPlaceholder: false
      },
      {
        id: "c2026-6",
        name: "G. Phani Vasavya",
        regNo: "23501A4414",
        role: "Student Coordinator",
        dept: "CSD (Data Science)",
        batch: "4th Year • 2026 Batch",
        contact: "9390010558",
        quote: "Harmonizing literary depth with contemporary media.",
        image: "images/coordinators/2026/phani-vasavya.jpeg",
        linkedin: "https://www.linkedin.com/company/pvpsit-aiml-datascience/",
        isPlaceholder: false
      },
      {
        id: "c2026-7",
        name: "Ramisetti Sai Venkatesh",
        regNo: "23501A4247",
        role: "Student Coordinator",
        dept: "CSM (AI & ML)",
        batch: "4th Year • 2026 Batch",
        contact: "9281106944",
        quote: "Pushing the boundaries of technical artistry.",
        image: "images/coordinators/2026/ramisetti-sai-venkatesh.jpeg",
        linkedin: "https://www.linkedin.com/company/pvpsit-aiml-datascience/",
        isPlaceholder: false
      },
      {
        id: "c2026-8",
        name: "Kothareddy Sreenivasa Reddy",
        regNo: "23501A4229",
        role: "Student Coordinator",
        dept: "CSM (AI & ML)",
        batch: "4th Year • 2026 Batch",
        contact: "9063968343",
        quote: "Bridging logic and aesthetics with every project.",
        image: "images/coordinators/2026/kothareddy-sreenivasa-reddy.jpeg",
        linkedin: "https://www.linkedin.com/company/pvpsit-aiml-datascience/",
        isPlaceholder: false
      }
    ],

    // Senior Coordinators — 2025 Batch (Preserved with real photos)
    batch2025: [
      {
        id: "c2025-1",
        name: "P. Anjana Manogna",
        role: "Coordinator",
        dept: "CSM (AI & ML)",
        batch: "2025 Batch",
        quote: "Creativity is contagious.",
        image: "images/coordinators/2025/Anjana.jpeg",
        linkedin: "https://www.linkedin.com/company/pvpsit-aiml-datascience/",
        isPlaceholder: false
      },
      {
        id: "c2025-2",
        name: "A. Lasya Sree",
        role: "Coordinator",
        dept: "CSM (AI & ML)",
        batch: "2025 Batch",
        quote: "Words are my music.",
        image: "images/coordinators/2025/lasya.jpg",
        linkedin: "https://www.linkedin.com/company/pvpsit-aiml-datascience/",
        isPlaceholder: false
      },
      {
        id: "c2025-3",
        name: "P. Navya Sri",
        role: "Coordinator",
        dept: "CSD (Data Science)",
        batch: "2025 Batch",
        quote: "A good story lives forever.",
        image: "images/coordinators/2025/navya.jpeg",
        linkedin: "https://www.linkedin.com/company/pvpsit-aiml-datascience/",
        isPlaceholder: false
      },
      {
        id: "c2025-4",
        name: "R. Narendra",
        role: "Coordinator",
        dept: "CSM (AI & ML)",
        batch: "2025 Batch",
        quote: "Pixels are my paint.",
        image: "images/coordinators/2025/Narendra.jpeg",
        linkedin: "https://www.linkedin.com/company/pvpsit-aiml-datascience/",
        isPlaceholder: false
      },
      {
        id: "c2025-5",
        name: "K. Venkata Naga Koushik",
        role: "Coordinator",
        dept: "CSD (Data Science)",
        batch: "2025 Batch",
        quote: "Every frame tells a story.",
        image: "images/coordinators/2025/koushik.jpeg",
        linkedin: "https://www.linkedin.com/company/pvpsit-aiml-datascience/",
        isPlaceholder: false
      },
      {
        id: "c2025-6",
        name: "M. Naga Vardhan",
        role: "Coordinator",
        dept: "CSM (AI & ML)",
        batch: "2025 Batch",
        quote: "Code is poetry.",
        image: "images/coordinators/2025/Naga-Vardhan.jpeg",
        linkedin: "https://www.linkedin.com/company/pvpsit-aiml-datascience/",
        isPlaceholder: false
      }
    ]
  },

  // ==========================================
  // 3. EVENTS 2026 & OFFICIAL WINNERS (Source of Truth: Uploaded Document)
  // ==========================================
  events2026: [
    {
      id: "event-2026-1",
      slug: "pass-the-plot",
      title: "PASS THE PLOT",
      subtitle: "The Story Relay Challenge",
      tagline: "Come with an idea. Pass the plot. Create the story!",
      date: "22 August 2026",
      time: "10:00 AM – 12:00 PM",
      venue: "Room No. 247, Department of CSE (Data Science) Lab",
      type: "Team Event — 2 Members",
      participants: 76,
      academicYear: "2026–27",
      organizedBy: "Creative Club, PVPSIT",
      judge: {
        name: "T. Deepa",
        designation: "Assistant Professor",
        dept: "Department of CSE (AI & ML)"
      },
      coverImage: "images/events_2026/pass-the-plot-poster.png",
      description: "Pass the Plot was organized as a team-based creative storytelling challenge aimed at encouraging students to develop their creativity, imagination, teamwork, and quick decision-making abilities. Each team consisted of two members who were provided with a starting plot or prompt, taking turns continuing the story within a strict time limit while introducing unexpected twists and maintaining narrative continuity.",
      evaluation: "Stories were evaluated on creativity, continuity, imagination, originality, narrative flow, and effective teamwork.",
      outcomes: [
        "Encouraged creative thinking and vivid imagination among students.",
        "Improved students' spontaneous storytelling and narrative-building skills.",
        "Developed teamwork and collaborative synchronization under a two-member relay format.",
        "Enhanced quick thinking, adaptive responsiveness, and decision-making under time constraints."
      ],
      winners: [
        {
          position: "1st Prize",
          medal: "gold",
          title: "First Prize Winners",
          team: [
            { name: "G.R.N.S. Nikhil", regNo: "25501A4418", year: "2nd Year", dept: "CSD (Data Science)" },
            { name: "S. Rishika", regNo: "25501A4463", year: "2nd Year", dept: "CSD (Data Science)" }
          ],
          photo: "images/events_2026/pass-the-plot-1st-prize.jpg",
          caption: "First Prize Winners G.R.N.S. Nikhil & S. Rishika (2nd Year CSD) receiving awards at Pass the Plot."
        },
        {
          position: "2nd Prize",
          medal: "silver",
          title: "Second Prize Winners",
          team: [
            { name: "M. Harshal", regNo: "24501A4235", year: "3rd Year", dept: "CSM (AI & ML)" },
            { name: "K. Upendra", regNo: "24501A4227", year: "3rd Year", dept: "CSM (AI & ML)" }
          ],
          photo: "images/events_2026/pass-the-plot-2nd-prize.jpg",
          caption: "Second Prize Winners M. Harshal & K. Upendra (3rd Year CSM) receiving honors from faculty."
        },
        {
          position: "3rd Prize",
          medal: "bronze",
          title: "Third Prize Winners",
          team: [
            { name: "C. Taraka Ranga Raveendra", regNo: "23501A4214", year: "4th Year", dept: "CSM (AI & ML)" },
            { name: "N. Karthikeya", regNo: "23501A4226", year: "4th Year", dept: "CSM (AI & ML)" }
          ],
          photo: "images/events_2026/pass-the-plot-3rd-prize.jpg",
          caption: "Third Prize Winners C. Taraka Ranga Raveendra & N. Karthikeya (4th Year CSM) receiving their certificates."
        }
      ],
      gallery: [
        { src: "images/events_2026/pass-the-plot-1st-prize.jpg", title: "Pass the Plot — 1st Prize Distribution", caption: "G.R.N.S. Nikhil & S. Rishika receiving 1st Prize." },
        { src: "images/events_2026/pass-the-plot-2nd-prize.jpg", title: "Pass the Plot — 2nd Prize Distribution", caption: "M. Harshal & K. Upendra receiving 2nd Prize." },
        { src: "images/events_2026/pass-the-plot-3rd-prize.jpg", title: "Pass the Plot — 3rd Prize Distribution", caption: "C. Taraka Ranga Raveendra & N. Karthikeya receiving 3rd Prize." },
        { src: "images/events_2026/pass-the-plot-session-hall.jpg", title: "Pass the Plot — Competition in Session", caption: "Hall view of 76 participants engaging in the story relay in Room 247." },
        { src: "images/events_2026/pass-the-plot-team-brainstorming.jpg", title: "Pass the Plot — Team Narrative Synthesis", caption: "Teams actively writing and passing plot fragments against the clock." },
        { src: "images/events_2026/pass-the-plot-faculty-address.jpg", title: "Pass the Plot — Faculty Keynote Address", caption: "Faculty members addressing participants and celebrating creative story outcomes." }
      ]
    },
    {
      id: "event-2026-2",
      slug: "beyond-the-mark",
      title: "BEYOND THE MARK",
      subtitle: "Design the Future. Redefine the Brand.",
      tagline: "Think beyond the mark. Design the future. Redefine the brand!",
      date: "22 August 2026",
      time: "1:30 PM – 3:00 PM",
      venue: "Room No. 247, Department of CSE (Data Science) Lab",
      type: "Individual Event — 1 Participant",
      participants: 38,
      academicYear: "2026–27",
      organizedBy: "Creative Club, PVPSIT",
      judge: {
        name: "Dr. K. Pavan Kumar",
        designation: "Senior Assistant Professor",
        dept: "Department of CSE (AI & ML)"
      },
      coverImage: "images/events_2026/beyond-the-mark-poster.jpg",
      description: "Beyond the Mark was an individual creative design competition organized to challenge students at the intersection of branding, future technologies, and Artificial Intelligence. Each participant was assigned a well-known brand via lucky draw with a secret theme. Using AI image-generation tools, participants reimagined how their assigned brand could evolve by the year 2050, synthesizing futuristic visual identities, logos, and sustainable design campaigns.",
      evaluation: "Concepts were judged on futurism, aesthetic cohesion, originality, AI prompt precision, and visual narrative storytelling.",
      outcomes: [
        "Promoted future-oriented creative thinking and disruptive brand identity synthesis.",
        "Encouraged students to explore practical applications of AI image-generation tools.",
        "Developed visual thinking, typographic balance, and concept development skills.",
        "Provided hands-on experience combining advanced technology with creative graphic design."
      ],
      winners: [
        {
          position: "1st Prize",
          medal: "gold",
          title: "First Prize Winner",
          team: [
            { name: "M. Sonu", regNo: "23501A4434", year: "4th Year", dept: "CSD (Data Science)" }
          ],
          photo: "images/events_2026/beyond-the-mark-1st-prize.jpg",
          caption: "First Prize Winner M. Sonu (4th Year CSD) receiving the award for Beyond the Mark futuristic branding."
        },
        {
          position: "2nd Prize",
          medal: "silver",
          title: "Second Prize Winner",
          team: [
            { name: "J. Jaswanth", regNo: "24501A4420", year: "3rd Year", dept: "CSD (Data Science)" }
          ],
          photo: "images/events_2026/beyond-the-mark-2nd-prize.jpg",
          caption: "Second Prize Winner J. Jaswanth (3rd Year CSD) awarded for exceptional AI design concepts."
        },
        {
          position: "3rd Prize",
          medal: "bronze",
          title: "Third Prize Winner",
          team: [
            { name: "K. Upendra", regNo: "24501A4227", year: "3rd Year", dept: "CSM (AI & ML)" }
          ],
          photo: "images/events_2026/beyond-the-mark-3rd-prize.jpg",
          caption: "Third Prize Winner K. Upendra (3rd Year CSM) recognized for innovative futuristic logo architecture."
        }
      ],
      gallery: [
        { src: "images/events_2026/beyond-the-mark-1st-prize.jpg", title: "Beyond the Mark — 1st Prize Award Ceremony", caption: "M. Sonu (4th Year CSD) receiving 1st Prize." },
        { src: "images/events_2026/beyond-the-mark-2nd-prize.jpg", title: "Beyond the Mark — 2nd Prize Award Ceremony", caption: "J. Jaswanth (3rd Year CSD) receiving 2nd Prize." },
        { src: "images/events_2026/beyond-the-mark-3rd-prize.jpg", title: "Beyond the Mark — 3rd Prize Award Ceremony", caption: "K. Upendra (3rd Year CSM) receiving 3rd Prize." },
        { src: "images/events_2026/beyond-the-mark-session-hall.jpg", title: "Beyond the Mark — Design Lab Session", caption: "Participants in Room 247 immersed in AI design ideation." },
        { src: "images/events_2026/beyond-the-mark-ai-designing.jpg", title: "Beyond the Mark — Generative AI Prompting", caption: "Students engineering prompts and visualizing brand futures by 2050." }
      ]
    }
  ],

  // ==========================================
  // 4. SIGNATURE ACTIVITIES & WORKSHOPS
  // ==========================================
  activities: {
    year2026: [
      {
        id: "act-2026-1",
        title: "Pass The Plot (The Story Relay Challenge)",
        category: "Collaborative Fiction • 2026",
        icon: "fa-shuffle",
        accent: "#8B5CF6",
        shortDesc: "2-member team relay where teammates take turns building an evolving plot with unexpected twists against the countdown clock.",
        longDesc: "Teams of two receive an unpredictable plot prompt. Taking turns against the countdown clock, each member adds sudden twists and narrative arcs while preserving continuity and logical flow.",
        highlights: ["2-Member Relay", "Twist Architecture", "76 Participants", "22 Aug 2026"]
      },
      {
        id: "act-2026-2",
        title: "Beyond The Mark (Transforming Ideas into Creative Reality)",
        category: "Generative AI & Futuristic Design • 2026",
        icon: "fa-wand-magic-sparkles",
        accent: "#CCFF00",
        shortDesc: "Reimagine iconic global brand identities for the year 2050 using cutting-edge AI image-generation tools and prompt engineering.",
        longDesc: "A high-concept individual design sprint. Participants draw brands by lottery and synthesize visionary 2050 logos, sustainability manifestos, and visual identity systems using prompt engineering.",
        highlights: ["Generative AI Art", "Futuristic Branding", "Prompt Engineering", "22 Aug 2026"]
      }
    ],
    year2025: [
      {
        id: "act-2025-1",
        title: "Expressive On-the-Spot",
        category: "Literary & Performance • 2025",
        icon: "fa-feather-pointed",
        accent: "#FF5B37",
        shortDesc: "Draw a random mystery prompt and perform an original piece within 3 minutes.",
        longDesc: "A thrilling test of raw spontaneity, wit, and creative expression. Participants step up on stage with no script, weaving extempore poetry, monologues, or impromptu stand-up that sparks intense audience applause.",
        highlights: ["Spontaneity Under 180s", "Extempore Storytelling", "Audience Engagement"]
      },
      {
        id: "act-2025-2",
        title: "Story Fragment Challenge",
        category: "Collaborative Fiction • 2025",
        icon: "fa-puzzle-piece",
        accent: "#00E5FF",
        shortDesc: "Assemble scattered clues, obscure photographs, and cryptic notes into a cohesive plot against the clock.",
        longDesc: "Teams receive disjointed story artifacts — a faded photograph, a mysterious coordinate, a vintage ticket stub. In 30 minutes, they collaboratively piece together a compelling and logical literary narrative.",
        highlights: ["Clue Synthesis", "Plot Architecture", "Team Brainstorming"]
      },
      {
        id: "act-2025-3",
        title: "Short Film Creation",
        category: "Cinematic Media • 2025",
        icon: "fa-clapperboard",
        accent: "#FFB800",
        shortDesc: "Script, shoot, direct, sound-engineer, and edit an original student short film from scratch.",
        longDesc: "Student creators take full directorial control. From scriptwriting and framing composition to sound scoring and post-production color grading, this challenge unleashes cinematic vision on campus.",
        highlights: ["Screenplay Writing", "Camera & Lighting", "Cinematic Post-Production"]
      },
      {
        id: "act-2025-4",
        title: "AI Story-to-Comic",
        category: "AI & Visual Media • 2025",
        icon: "fa-robot",
        accent: "#EC4899",
        shortDesc: "Blend narrative writing and generative AI tools to transform written stories into multi-panel visual comic strips.",
        longDesc: "Participants craft an original short script and engineer generative AI prompts to produce stylized comic book panels, bridging classical writing with digital graphics.",
        highlights: ["Visual Storyboards", "AI Image Generation", "Digital Storytelling"]
      },
      {
        id: "act-2025-5",
        title: "PixelCraft Design Labs",
        category: "Visual Communication • 2025",
        icon: "fa-bezier-curve",
        accent: "#38BDF8",
        shortDesc: "Hands-on masterclasses in poster architecture, branding guidelines, and visual typography balance.",
        longDesc: "Mastering the rules of visual hierarchy, contrast, color theory, and typographic balance. Members craft promotional posters and digital art assets for department fests and creative campaigns.",
        highlights: ["Typography Mastery", "Visual Hierarchy", "Editorial Design"]
      }
    ]
  },

  // ==========================================
  // 5. GALLERY ARCHIVES (2025 & 2026)
  // ==========================================
  gallery: {
    // 2026 Archive — Real Photographs from Pass the Plot & Beyond the Mark
    year2026: [
      {
        id: "g2026-1",
        src: "images/gallery/2026/pass-the-plot-1st-prize.jpg",
        title: "Pass the Plot: First Prize Ceremony",
        category: "events",
        tag: "Award Ceremony",
        year: "2026",
        caption: "First Prize Winners G.R.N.S. Nikhil & S. Rishika (2nd Year CSD) receiving awards from Faculty Coordinator Mrs. Mohammad Hafeena."
      },
      {
        id: "g2026-2",
        src: "images/gallery/2026/beyond-the-mark-1st-prize.jpg",
        title: "Beyond the Mark: First Prize Ceremony",
        category: "events",
        tag: "Award Ceremony",
        year: "2026",
        caption: "First Prize Winner M. Sonu (4th Year CSD) receiving the top award for reimagining brand identities for 2050 using AI tools."
      },
      {
        id: "g2026-3",
        src: "images/gallery/2026/pass-the-plot-2nd-prize.jpg",
        title: "Pass the Plot: Second Prize Ceremony",
        category: "events",
        tag: "Award Ceremony",
        year: "2026",
        caption: "Second Prize Winners M. Harshal & K. Upendra (3rd Year CSM) honored for exceptional story continuation and twists."
      },
      {
        id: "g2026-4",
        src: "images/gallery/2026/beyond-the-mark-2nd-prize.jpg",
        title: "Beyond the Mark: Second Prize Ceremony",
        category: "events",
        tag: "Award Ceremony",
        year: "2026",
        caption: "Second Prize Winner J. Jaswanth (3rd Year CSD) felicitated for futuristic brand design concepts."
      },
      {
        id: "g2026-5",
        src: "images/events_2026/pass-the-plot-3rd-prize.jpg",
        title: "Pass the Plot: Third Prize Ceremony",
        category: "events",
        tag: "Award Ceremony",
        year: "2026",
        caption: "Third Prize Winners C. Taraka Ranga Raveendra & N. Karthikeya (4th Year CSM) receiving certificates."
      },
      {
        id: "g2026-6",
        src: "images/gallery/2026/beyond-the-mark-3rd-prize.jpg",
        title: "Beyond the Mark: Third Prize Ceremony",
        category: "events",
        tag: "Award Ceremony",
        year: "2026",
        caption: "Third Prize Winner K. Upendra (3rd Year CSM) recognized for his creative AI-driven concept."
      },
      {
        id: "g2026-7",
        src: "images/gallery/2026/pass-the-plot-session-hall.jpg",
        title: "Pass the Plot: 76 Participants in Action",
        category: "events",
        tag: "Competition",
        year: "2026",
        caption: "Over 76 students participating in the intense story relay challenge in Room No. 247."
      },
      {
        id: "g2026-8",
        src: "images/gallery/2026/beyond-the-mark-session-hall.jpg",
        title: "Beyond the Mark: Design Lab Session",
        category: "creatives",
        tag: "AI Lab",
        year: "2026",
        caption: "Students researching brand archetypes and executing AI image generation for future 2050 campaigns."
      },
      {
        id: "g2026-9",
        src: "images/gallery/2026/pass-the-plot-team-brainstorming.jpg",
        title: "Pass the Plot: Collaborative Drafting",
        category: "behind-the-scenes",
        tag: "Teamwork",
        year: "2026",
        caption: "Two-member teams synchronizing narratives under tight time constraints during the relay."
      },
      {
        id: "g2026-10",
        src: "images/gallery/2026/beyond-the-mark-ai-designing.jpg",
        title: "Beyond the Mark: AI Visual Synthesis",
        category: "creatives",
        tag: "AI Tech Art",
        year: "2026",
        caption: "Students formulating prompts and creating futuristic logo identities using generative AI tools."
      },
      {
        id: "g2026-11",
        src: "images/gallery/2026/pass-the-plot-faculty-address.jpg",
        title: "Event Keynote & Reflections",
        category: "events",
        tag: "Faculty Address",
        year: "2026",
        caption: "Faculty members appreciating student ingenuity, wit, and expressive excellence."
      },
      {
        id: "g2026-12",
        src: "images/gallery/2026/pass-the-plot-poster.png",
        title: "Pass the Plot — Official Event Poster",
        category: "posters",
        tag: "Official Poster",
        year: "2026",
        caption: "Official promotional artwork for Pass the Plot — The Story Relay Challenge held on 22 August 2026."
      },
      {
        id: "g2026-13",
        src: "images/gallery/2026/beyond-the-mark-poster.jpg",
        title: "Beyond the Mark — Official Event Poster",
        category: "posters",
        tag: "Official Poster",
        year: "2026",
        caption: "Official promotional artwork for Beyond the Mark — Design the Future. Redefine the Brand."
      }
    ],

    // 2025 Archive — Preserved event photos & posters from repo
    year2025: [
      {
        id: "g2025-1",
        src: "images/gallery/2025/event1.png",
        title: "Creative Club Inaugural Assembly",
        category: "events",
        tag: "Inauguration",
        year: "2025",
        caption: "Commencement of the Creative Club session with passionate students across CSM & CSD departments."
      },
      {
        id: "g2025-2",
        src: "images/gallery/2025/event2.png",
        title: "On-the-Spot Expressive Round",
        category: "events",
        tag: "Stage Performance",
        year: "2025",
        caption: "Participants taking the stage to articulate spontaneous narratives under high-energy impromptu prompts."
      },
      {
        id: "g2025-3",
        src: "images/gallery/2025/event3.png",
        title: "Creative Dialogue & Collaboration",
        category: "events",
        tag: "Brainstorming",
        year: "2025",
        caption: "Cross-departmental brainstorming sessions fostering collaboration between coders, writers, and visual artists."
      },
      {
        id: "g2025-4",
        src: "images/gallery/2025/event4.png",
        title: "Story Fragment Challenge Session",
        category: "events",
        tag: "Story Workshop",
        year: "2025",
        caption: "Teams dissecting narrative puzzle pieces to assemble full literary storylines under countdown pressure."
      },
      {
        id: "g2025-5",
        src: "images/gallery/2025/event5.png",
        title: "Filmmaking & Visual Framing Workshop",
        category: "events",
        tag: "Cinematography",
        year: "2025",
        caption: "Mastering visual grammar, shot framing, and lighting setups during our hands-on short film workshop."
      },
      {
        id: "g2025-6",
        src: "images/gallery/2025/event6.png",
        title: "Storyboard Design & Project Pitch",
        category: "events",
        tag: "Storyboards",
        year: "2025",
        caption: "Student directors showcasing character design boards, plot twists, and comic panel outlines to jury members."
      },
      {
        id: "g2025-7",
        src: "images/gallery/2025/event7.png",
        title: "Faculty Mentorship & Guidance",
        category: "events",
        tag: "Mentorship",
        year: "2025",
        caption: "Faculty Advisor Mrs. Hafeena Mohammed interacting with club leads and inspiring originality."
      },
      {
        id: "g2025-8",
        src: "images/gallery/2025/event8.png",
        title: "Prize Distribution & Accolades",
        category: "events",
        tag: "Celebration",
        year: "2025",
        caption: "Honoring outstanding performers and innovative storytellers with certificates and club honors."
      },
      {
        id: "g2025-9",
        src: "images/gallery/2025/event9.png",
        title: "Creative Club Team & Participants",
        category: "events",
        tag: "Community",
        year: "2025",
        caption: "The entire student creative collective gathered together after an exhilarating semester finale."
      },
      {
        id: "g2025-10",
        src: "images/gallery/2025/post1.png",
        title: "Where Soul Meets Screen Campaign",
        category: "posters",
        tag: "Poster Design",
        year: "2025",
        caption: "Official promotional campaign visual celebrating the fusion of traditional prose and digital pixel art."
      },
      {
        id: "g2025-11",
        src: "images/gallery/2025/post2.png",
        title: "Creative Club Launch Poster",
        category: "posters",
        tag: "Poster Design",
        year: "2025",
        caption: "Campus-wide announcement artwork for Creative Club membership drive and inaugural fests."
      }
    ]
  },

  // ==========================================
  // 6. CREATIVE SHOWCASE / OUR WORK
  // ==========================================
  showcase: [
    {
      id: "work-1",
      title: "Soul Meets Screen Identity Poster",
      category: "Posters",
      medium: "Digital Poster & Typography",
      image: "images/gallery/2025/post1.png",
      desc: "An editorial artwork blending physical typewriter aesthetics with glowing neon cyan pixels."
    },
    {
      id: "work-2",
      title: "Beyond the Mark — Official Poster",
      category: "Posters",
      medium: "Official Event Campaign Poster",
      image: "images/events_2026/beyond-the-mark-poster.jpg",
      desc: "Official promotional campaign artwork for Beyond the Mark — Design the Future. Redefine the Brand (2026)."
    },
    {
      id: "work-3",
      title: "Creative Club Official Emblem & Keynote",
      category: "Branding",
      medium: "Brand Identity & Visual Frame",
      image: "images/branding/header.png",
      desc: "Official brand visual illustrating the harmonious convergence of imagination and technological media."
    },
    {
      id: "work-4",
      title: "Pass the Plot — Official Poster",
      category: "Posters",
      medium: "Official Event Campaign Poster",
      image: "images/events_2026/pass-the-plot-poster.png",
      desc: "Official promotional campaign artwork for Pass the Plot — The Story Relay Challenge (2026)."
    },
    {
      id: "work-5",
      title: "Club Launch Campaign Artwork",
      category: "Posters",
      medium: "Graphic Design & Print Media",
      image: "images/gallery/2025/post2.png",
      desc: "Promotional campus visual setting the collegiate tone for creative writing and artistic workshops."
    },
    {
      id: "work-6",
      title: "Cinematic Storyboard Concept Cards",
      category: "Digital Art",
      medium: "Visual Storyboards",
      image: "images/gallery/2025/event6.png",
      desc: "Hand-sketched and digitally enhanced shot-by-shot storyboards for student short film pre-production."
    }
  ]
};
