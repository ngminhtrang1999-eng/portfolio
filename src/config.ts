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
 * ============================================================================
 */

export const siteConfig = {
  // --------------------------------------------------------------------------
  // 1. IDENTITY
  // --------------------------------------------------------------------------
  name: "Your Name",
  title: "Undergraduate Student · Software Engineering",
  description: "Portfolio of Your Name — projects, competitions, and skills.",

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
   */
  resumeUrl: "/resume.pdf",

  // --------------------------------------------------------------------------
  // 3. CONTACT LINKS — every field is optional; remove one to hide its icon.
  // --------------------------------------------------------------------------
  social: {
    email: "your.email@example.com",
    linkedin: "https://www.linkedin.com/in/your-profile",
    github: "https://github.com/your-username",
    // twitter: "https://x.com/your-handle",
  },

  // --------------------------------------------------------------------------
  // 4. ABOUT — 2 to 4 sentences. Lead with what you build and what you want.
  // --------------------------------------------------------------------------
  aboutMe:
    "I am an undergraduate student who likes building software that solves concrete problems. I work across the stack, from data pipelines to user interfaces, and I learn fastest by shipping real projects and entering competitions. I am currently looking for an internship where I can contribute to a product team and grow into a well-rounded engineer.",

  /** Short skill pills shown under the About text. Keep to ~10-14 items. */
  skills: [
    "Python",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "SQL",
    "Git",
    "Linux",
    "Data Analysis",
    "Machine Learning",
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
   */
  projects: [
    {
      name: "Project One — replace me",
      description:
        "What the project does, who it is for, and the measurable outcome (users, accuracy, time saved, ranking). One or two sentences is enough.",
      link: "https://github.com/your-username/project-one",
      skills: ["Python", "FastAPI", "PostgreSQL"],
    },
    {
      name: "Project Two — replace me",
      description:
        "Describe the problem you set out to solve and the result you achieved. If it was a team effort, say which part you owned.",
      link: "https://github.com/your-username/project-two",
      skills: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      name: "Project Three — replace me",
      description:
        "A project without a public link works too — just remove the `link` line and the card renders as plain text.",
      skills: ["C++", "Algorithms"],
    },
  ],

  // --------------------------------------------------------------------------
  // 6. AWARDS & COMPETITIONS — olympiads, hackathons, scholarships, honors.
  // --------------------------------------------------------------------------
  awards: [
    {
      title: "Award or Competition Name — replace me",
      issuer: "Organizing body or sponsor",
      date: "2025",
      description:
        "What the competition was, how many people or teams took part, and the result you achieved (prize, rank, percentile).",
      // link: "https://competition-website.example.com",
    },
    {
      title: "Scholarship or Honor — replace me",
      issuer: "University or Foundation",
      date: "2024",
      description:
        "Selection criteria and scale — for example how many recipients were chosen out of the applicant pool.",
    },
  ],

  // --------------------------------------------------------------------------
  // 7. EXPERIENCE — internships, part-time work, research, teaching.
  //    Delete this whole array if you have none yet; the section will hide.
  // --------------------------------------------------------------------------
  experience: [
    {
      company: "Organization — replace me",
      title: "Role title",
      dateRange: "Jun 2025 - Sep 2025",
      bullets: [
        "Start each bullet with an action verb and end with a result or a number.",
        "Describe what you owned, not only what the team did.",
        "Three or four bullets is the sweet spot.",
      ],
    },
  ],

  // --------------------------------------------------------------------------
  // 8. EDUCATION
  // --------------------------------------------------------------------------
  education: [
    {
      school: "Your University — replace me",
      degree: "Bachelor of Engineering in Software Engineering",
      dateRange: "2023 - 2027 (expected)",
      achievements: [
        "GPA: 3.6 / 4.0 (or your class ranking)",
        "Relevant coursework: data structures, algorithms, databases, machine learning",
        "Dean's List or academic distinction, if applicable",
      ],
    },
  ],

  // --------------------------------------------------------------------------
  // 9. COURSES & CERTIFICATIONS — online courses, certificates, languages.
  //    Delete this array to hide the section.
  // --------------------------------------------------------------------------
  certifications: [
    {
      name: "Course or Certificate Name — replace me",
      issuer: "Coursera / freeCodeCamp / etc.",
      date: "2025",
      // link: "https://certificate-url.example.com",
    },
  ],
};
