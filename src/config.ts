/**
 * ============================================================================
 *  PORTFOLIO CONTENT — SINGLE SOURCE OF TRUTH
 * ============================================================================
 *  This is the ONLY file you need to edit to update your portfolio content.
 *
 *  Rules that keep this file easy to maintain:
 *   1. Every section below is OPTIONAL. Delete an array (or empty it) and that
 *      whole section disappears from the site, including its navigation link.
 *   2. Keep the shape of each object exactly as shown.
 *   3. After editing, run `npm run dev` to preview and `npm run build` to
 *      verify it compiles before you push.
 *
 *  See AGENTS.md for a step-by-step "how do I add a new project?" guide.
 *
 *  STILL OPEN (as of this edit — nothing here is invented, so gaps stay gaps):
 *   - resumeUrl is "" (button hidden) until the real CV PDF replaces the
 *     placeholder in public/resume.pdf — see section 2.
 *   - No awards/scholarships yet, so that array is commented out — section 6.
 *   - Bullets and project descriptions carry no numbers yet, because the CV
 *     does not have any. Add real metrics as soon as the CV update is ready.
 * ============================================================================
 */

export const siteConfig = {
  // --------------------------------------------------------------------------
  // 1. IDENTITY
  // --------------------------------------------------------------------------
  name: "Nguyen Huu Minh Trang",
  title: "AI Software Developer · Computer Vision & Generative AI",
  description:
    "Portfolio of Nguyen Huu Minh Trang — AI engineering, computer vision, and explainable AI for medical imaging.",

  /** Accent color used site-wide (heading rules, links, badges, highlights). */
  accentColor: "#1d4ed8",

  // --------------------------------------------------------------------------
  // 2. RESUME / CV
  // --------------------------------------------------------------------------
  /**
   * Put your CV PDF in the `public/` folder and reference it as "/resume.pdf".
   * A full external link (Google Drive, Dropbox) works too — use the whole
   * "https://..." URL.
   * Set this to "" (empty string) to hide the Download CV button entirely.
   *
   * TEMPORARILY HIDDEN: `public/resume.pdf` is still the 1.2 KB template
   * placeholder, so a recruiter clicking the button would download a blank PDF.
   * Once your real CV is ready, either:
   *   1. copy the PDF over `public/resume.pdf` (keep that exact filename), then
   *   2. change the line below back to  resumeUrl: "/resume.pdf",
   * For a Google Drive link, put the full "https://..." URL there instead.
   */
  resumeUrl: "",

  // --------------------------------------------------------------------------
  // 3. CONTACT LINKS — every field is optional; remove one to hide its icon.
  // --------------------------------------------------------------------------
  social: {
    email: "ngminhtrang1999@gmail.com",
    linkedin: "https://www.linkedin.com/in/trang-minh-082bb5175/",
    github: "https://github.com/ngminhtrang1999-eng",
  },

  // --------------------------------------------------------------------------
  // 4. ABOUT — 2 to 4 sentences. Lead with what you build and what you want.
  // --------------------------------------------------------------------------
  aboutMe:
    "I am an AI software developer and a master's student in Computer Science, specialising in computer vision and generative AI. At Aimesoft I build 2D AutoCAD automation tools and computer-vision models for identification, re-identification, and multi-object tracking; before that I worked on RAG pipelines at FPT AI Center and on explainable AI for lung-image classification at COTAI. I care about models that are both explainable and deployable, and I am looking for research and engineering work where machine learning reaches real users.",

  /** Short skill pills shown under the About text. Keep to ~10-14 items. */
  skills: [
    "Python",
    "C/C++",
    "PyTorch",
    "TensorFlow",
    "Scikit-learn",
    "OpenCV",
    "Docker",
    "Git",
    "MongoDB",
    "AutoHotKey",
    "Computer Vision",
    "Deep Learning",
    "LLMs & RAG",
    "Graph Neural Networks",
  ],

  // --------------------------------------------------------------------------
  // 5. PROJECTS — your strongest evidence. Aim for 3-5 focused entries.
  // --------------------------------------------------------------------------
  /**
   * Writing tips (the description matters more than the code):
   *  - one sentence on WHAT it does, one on the RESULT or scale
   *  - state your specific role if it was a team project
   *  - `skills` should list the concrete tools you actually used
   *  - `link` is optional; remove the line and the card becomes plain text
   *
   * The client work below (ArtFreak, Nishio) is under NDA: the source lives in
   * private GitLab repositories, so **do not add a `link`** and keep the wording
   * to the technologies used and a rough description of what the system does.
   * No internal hostnames, credentials, client folders or metrics.
   *
   * TODO (you): none of these have published metrics yet, so the descriptions
   * state the technology and what it is applied to. Add real numbers (accuracy,
   * throughput, time saved, number of patients screened…) when they exist.
   */
  projects: [
    {
      name: "ArtFreak — AI People Counting & Zone Analytics",
      description:
        "Multi-camera people-counting system built for a Japanese space-production client, turning event and showroom camera footage into hourly visitor metrics. I built the computer-vision core — YOLOX detection, FastReID/Swin-Base re-identification that separates staff from visitors, and ByteTrack/Kalman multi-object tracking — running as Dockerised GPU workers that read operator-drawn zones and store the resulting occupancy, line-in/line-out, rotation and dwell-time metrics in MySQL and S3.",
      skills: [
        "Python",
        "PyTorch",
        "YOLOX",
        "FastReID",
        "ByteTrack",
        "OpenCV",
        "FastAPI",
        "Docker",
        "MySQL",
        "AWS S3",
      ],
    },
    {
      name: "Nishio — AutoCAD DXF/DWG Drawing Generation Service",
      description:
        "Drawing-automation service built for a Japanese furniture client: a FastAPI + ezdxf backend turns room geometry and furniture data into complete interior drawing sets for its presentation (A3), planning (A1) and standard-frame (A2) phases. I built the generation pipeline (cutting rooms from AutoCAD templates, placing and scaling catalogue furniture, wall snapping, grouping and auto-dimensioning), the DXF/DWG export through the ODA File Converter, the preview/review API with Docker and GitLab CI packaging, and the vision experiments for entity and elevation placement (classical CV benchmarks, then GPT-4o and gpt-image-2 prototypes).",
      skills: [
        "Python",
        "ezdxf",
        "DXF/DWG",
        "ODA File Converter",
        "FastAPI",
        "Docker",
        "GitLab CI",
        "pytest",
        "OpenCV",
        "GPT-4o vision",
      ],
    },
    {
      name: "EyeDr — Medical AI Screening Workflows",
      description:
        "Community-based AI screening for glaucoma and diabetic retinopathy, built with a medical-AI research collaboration. As an AI project contributor I support data preprocessing, validation and labelling, test the models in real-world clinic settings, and collect the field feedback used to refine them.",
      skills: [
        "Computer Vision",
        "Medical Imaging",
        "Python",
        "Data Validation",
        "Model Testing",
      ],
    },
    {
      name: "Split or Steal — AI Automation Tool",
      description:
        "A visual recognition system built with Python and OpenCV that reads a game's interface in real time, with AutoHotKey macros making decisions from the detected UI state. Built Aug–Nov 2020.",
      skills: ["Python", "OpenCV", "AutoHotKey"],
    },
    {
      name: "AI Popularisation Tutor & Career Mentor",
      description:
        "Volunteer career-orientation and introductory AI sessions for high school students at Lê Hồng Phong High School, including hands-on AI mini-projects designed to spark early interest in computer science. Running since 2023.",
      skills: ["Teaching", "Public Speaking", "AI Literacy"],
    },
  ],

  // --------------------------------------------------------------------------
  // 6. AWARDS & COMPETITIONS — olympiads, hackathons, scholarships, honors.
  //    Removed: the CV lists no awards yet. Add this array back (shape below)
  //    and the section plus its navigation link reappear automatically.
  // --------------------------------------------------------------------------
  // awards: [
  //   {
  //     title: "Award or Competition Name",
  //     issuer: "Organizing body or sponsor",
  //     date: "2025",
  //     description:
  //       "What the competition was, how many people or teams took part, and the result you achieved (prize, rank, percentile).",
  //     // link: "https://competition-website.example.com",
  //   },
  // ],

  // --------------------------------------------------------------------------
  // 7. EXPERIENCE — internships, part-time work, research, teaching.
  //    Delete this whole array if you have none yet; the section will hide.
  // --------------------------------------------------------------------------
  experience: [
    {
      company: "Aimesoft",
      title: "AI Software Developer — AutoCAD, Computer Vision, Docker",
      dateRange: "Oct 2025 - Present",
      bullets: [
        "Build the Nishio drawing-generation service: FastAPI + ezdxf automation that produces the client's presentation, planning and standard-frame DXF/DWG drawing sets.",
        "Build the ArtFreak people-counting system: YOLOX detection, FastReID/Swin-Base re-identification and ByteTrack/Kalman multi-object tracking, deployed as Dockerised GPU workers.",
      ],
    },
    {
      company: "FPT AI Center",
      title: "Intern — Generative AI, LLMs",
      dateRange: "Oct 2024 - Jan 2025",
      bullets: [
        "Built RAG pipelines on top of Claude Haiku 3.5 for question-answering systems.",
        "Researched contradiction resolution in Japanese–English translation with LLMs.",
      ],
    },
    {
      company: "COTAI — Center of Talent in AI",
      title: "AI Trainee — Machine Learning & Computer Vision",
      dateRange: "Jul 2022 - Dec 2022",
      bullets: [
        "Applied GradCAM to make lung-image classification models interpretable.",
        "Trained CNN models and presented findings on explainable AI in healthcare.",
        "Ran experiments on diffusion models with Transformer-based backbones.",
      ],
    },
    {
      company: "Netcompany — Fun Quiz Team",
      title: "DevOps Intern — Docker Web Deployment",
      dateRange: "Oct 2021 - Jun 2022",
      bullets: [
        "Containerised React and C-based applications with Docker and deployed them behind Nginx on Ubuntu.",
        "Built automation workflows for local deployment and environment setup.",
      ],
    },
  ],

  // --------------------------------------------------------------------------
  // 8. EDUCATION — newest first.
  // --------------------------------------------------------------------------
  education: [
    {
      school: "VNUHCM — University of Information Technology (UIT)",
      degree: "Master's Student — Computer Science (AI & Computer Vision)",
      dateRange: "Aug 2023 - Present",
      achievements: [
        "Specialisation: Artificial Intelligence and Computer Vision.",
        "Research interests: YOLOv11 optimisation for real-time detection (pruning, quantisation), explainable AI in medical imaging, and diffusion models with Transformer-based backbones.",
      ],
    },
    {
      school:
        "VNUHCM — University of Science × Auckland University of Technology",
      degree: "B.A., Computer & Information Science",
      dateRange: "2018 - 2022",
      achievements: [
        "GPA: 3.94 / 4.0 in a joint international bachelor's programme.",
        "Joint programme delivered with Auckland University of Technology (New Zealand).",
      ],
    },
  ],

  // --------------------------------------------------------------------------
  // 9. COURSES & CERTIFICATIONS — online courses, certificates, languages.
  //    Delete this array to hide the section.
  // --------------------------------------------------------------------------
  certifications: [
    {
      name: "Master of Fundamentals of AI & Machine Learning",
      issuer: "LinkedIn Learning",
      date: "", // Year unknown — check LinkedIn → Licenses & certifications.
      // An empty date simply renders as nothing; it does not break the row.
    },
    {
      name: "IELTS 6.5 — English proficiency",
      issuer: "IELTS",
      date: "2019",
    },
    {
      name: "VSTEP Level B2 — English proficiency",
      issuer: "VSTEP",
      date: "2024",
    },
  ],
};
