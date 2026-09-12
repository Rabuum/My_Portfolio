export interface Project {
  id: string;
  title: string;
  category: "Concrete & Materials" | "Quality Assurance & Testing" | "Research & Standards Proposal";
  description: string;
  purpose: string;
  image: string;
  technologies: string[];
  features: string[];
  role?: string;
  institution?: string;
  supervisor?: string;
  standards?: string[];
  pdfUrl: string;
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  note?: string;
}

export interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  major: string;
  duration: string;
  gpa: string;
  location: string;
  description: string;
  coursework: string[];
  achievements: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  badge: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  organization: string;
  date: string;
  credentialUrl?: string;
  image?: string;
  badgeText: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Rabin Giri",
    title: "Civil Engineering Graduate",
    subtitle: "Aspiring Water Resources & Hydraulic Engineer",
    location: "Lalitpur, Nepal",
    email: "rabingiri456@gmail.com",
    phone: "+977 · On Request",
    linkedin: "https://www.linkedin.com/in/rabin-giri-076240363/",
    github: "https://github.com/Rabuum",
    resumePdf: "/Rabin_Giri_Resume.pdf",
    image: "/rabin-giri.png",
    bioShort:
      "Born and raised in Nepal, I am a Civil Engineering graduate who has always been drawn to the way water shapes landscapes and communities. From spending hours in the materials lab testing concrete specimens to standing on construction sites watching structures rise from the ground up, every experience has deepened my commitment to building resilient infrastructure for a changing climate. My heart is set on water resources engineering � not just as a career, but as a way to give back to a country where rivers are life.",
    bioLong:
      "I graduated with a B.E. in Civil Engineering from Nepal Engineering College, Pokhara University with a CGPA of 3.41 � a result of years of late nights, lab experiments, and genuine curiosity about how things are built to last. My undergraduate journey took me from mixing concrete specimens with self-healing agents to surveying construction sites in Kathmandu Valley, and every step reinforced the same belief: good engineering can quietly change lives. Now, I am channeling that passion toward water resources � studying HEC-RAS hydraulics, GIS catchment modeling, and preparing a research path toward an M.Sc. in Germany. Nepal has some of the most powerful rivers in the world, and I want to be part of the generation that harnesses them wisely.",
    stats: [
      { label: "B.E. Civil", value: "Pokhara Univ", sub: "CGPA 3.41 / 4.00" },
      { label: "Major Research", value: "3 Thesis Papers", sub: "Empirical & Lab PDFs" },
      { label: "Years Experience", value: "1+", sub: "Site & Lab Research" },
      { label: "Certifications", value: "5+", sub: "CAD, GIS & ETABS" },
      { label: "Civil Tools", value: "15+", sub: "AutoCAD, HEC-RAS, GIS" },
    ],
    goals: "To contribute to sustainable infrastructure & climate-resilient water resource management systems.",
    interests: ["Water Resource Engineering", "Hydrology & HEC-RAS", "Structural Analysis & ETABS", "GIS Watershed Mapping"],
  },

  nav: [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/about" },
    { id: "education", label: "Education", path: "/education" },
    { id: "projects", label: "Projects", path: "/projects" },
    { id: "skills", label: "Skills", path: "/skills" },
    { id: "contact", label: "Contact", path: "/contact" },
  ],

  education: [
    {
      id: "be-civil",
      institution: "Nepal Engineering College (Pokhara University)",
      degree: "Bachelor of Civil Engineering",
      major: "Civil Engineering (Concentration in Hydrology & Hydraulic Structures)",
      duration: "2019 — 2024",
      gpa: "CGPA 3.41 / 4.00",
      location: "Bhaktapur / Pokhara, Nepal",
      description:
        "Comprehensive 4-year degree in Civil Engineering covering structural analysis, fluid mechanics, hydrology, open-channel hydraulics, irrigation engineering, soil mechanics, and transportation design.",
      coursework: [
        "Water Resource Engineering",
        "Hydrology & Meteorology",
        "Hydraulic Structures & Spillways",
        "Structural Analysis & Reinforced Concrete",
        "Surveying & Topography Mapping",
        "Transportation Engineering",
        "Soil Mechanics & Foundation Design",
      ],
      achievements: [
        "Maintained high academic standing with CGPA 3.41 / 4.00",
        "Completed experimental laboratory research thesis on Self-Healing Concrete Agents",
        "Active student member in Nepal Engineering Association Workshops",
      ],
    },
  ] as EducationItem[],

  experience: [
    {
      id: "exp-site-intern",
      company: "Construction & Infrastructure Field Internships",
      role: "Civil Engineering Site Intern",
      duration: "2023 — 2024",
      location: "Kathmandu Valley, Nepal",
      badge: "Site Execution",
      responsibilities: [
        "Supervised structural reinforced concrete pours, column alignment checks, and rebar spacing on commercial construction sites.",
        "Assisted senior engineers in preparing 2D site layouts, structural detail drawings, and quantity estimates using AutoCAD.",
        "Conducted concrete slump testing and aggregate compaction tests for quality assurance.",
        "Prepared daily construction progress logs, material inventory, and safety compliance reports.",
      ],
      achievements: [
        "Ensured strict compliance with structural drawing specifications during foundation pours.",
        "Streamlined site drawing revisions in AutoCAD for site foremen.",
      ],
      technologies: ["AutoCAD", "Quantity Estimation", "Structural Inspection", "Concrete Testing", "Construction Management"],
    },
    {
      id: "exp-researcher",
      company: "Nepal Engineering College Materials Research Lab",
      role: "Undergraduate Lab Researcher",
      duration: "2023 — 2024",
      location: "Changunarayan, Bhaktapur",
      badge: "Laboratory Research",
      responsibilities: [
        "Designed experimental concrete mix batches incorporating chemical autonomous sealing agents.",
        "Evaluated compressive strength recovery using Universal Testing Machine (UTM) at 7, 14, and 28 days.",
        "Measured microscopic crack width reduction and durability parameters.",
        "Authored the final undergraduate thesis dissertation and presented findings to faculty board.",
      ],
      achievements: [
        "Demonstrated significant crack sealing and strength recovery in modified concrete specimens.",
        "Thesis recognized for empirical laboratory rigor and technical precision.",
      ],
      technologies: ["Concrete Technology", "Structural Analysis", "Compressive Strength UTM", "Materials Science", "Thesis Documentation"],
    },
    {
      id: "exp-daad-track",
      company: "Graduate Research Preparation Track",
      role: "Master's Scholar Candidate",
      duration: "2025 — Future Trajectory",
      location: "Germany (DAAD Track)",
      badge: "Future Vision",
      responsibilities: [
        "Preparing research proposals focused on river engineering, HEC-RAS 2D hydraulic modeling, and climate-resilient water infrastructure.",
        "Targeting German Technical Universities for M.Sc. in Water Resources Engineering.",
        "Strengthening HEC-HMS hydrological modeling and GIS spatial catchment analysis skills.",
      ],
      achievements: [
        "Constructed comprehensive academic dossier for DAAD scholarship applications.",
      ],
      technologies: ["Water Resource Engineering", "HEC-RAS", "HEC-HMS", "ArcGIS", "Hydrology"],
    },
  ] as ExperienceItem[],

  projects: [
    {
      id: "proj-crack-sealing-shc",
      title: "Evaluation of Crack Sealing Performance in Concrete with Various Agents",
      category: "Concrete & Materials",
      featured: true,
      description:
        "Experimental research evaluating early-age compressive strength, split tensile recovery, and visual crack sealing efficiency of epoxy resin, encapsulated epoxy (gelatin-gum arabic), gypsum, and fly ash with coconut coir in OPC concrete specimens.",
      purpose:
        "Concrete cracking accelerates steel reinforcement corrosion and reduces structural lifespan. This study investigates affordable, locally accessible self-healing agents in Nepal to autonomously repair micro-cracks and enhance concrete durability.",
      image: "/concrete-slump-test.jpg",
      pdfUrl: "/documents/Evaluation_of_Crack_Sealing_Performance_in_Concrete.pdf",
      technologies: [
        "OPC 43 Grade Cement",
        "Universal Testing Machine (UTM)",
        "Vicat Apparatus",
        "Slump Cone (IS 1199)",
        "Polymer Encapsulation (Gelatin & Gum Arabic)",
        "Fly Ash & Coconut Coir Fibers",
      ],
      features: [
        "Conducted 7-day & 28-day compressive and split tensile testing on 150mm cubes & 150x300mm cylinders as per IS 516.",
        "Induced controlled artificial cracks on Day 16 using UTM; evaluated healing & residual strength on Day 28.",
        "Epoxy resin achieved highest 7-day compressive strength (15.12 MPa, +18.95% over control) & 76.68% strength recovery.",
        "Gypsum demonstrated highest crack healing efficiency (~88% strength recovery) & near-complete surface crack closure.",
        "Fly ash + coconut coir achieved 14.37 MPa 7-day strength and 75.91% strength recovery using local Nepalese materials.",
      ],
      role: "Co-Investigator & Undergraduate Lab Researcher (Madan Sapkota, Rabin Giri, Bishal Panthi)",
      institution: "Nepal Engineering College, Pokhara University",
      supervisor: "Assoc. Prof. Ajay Khadka",
      standards: ["IS 516 (1959)", "IS 1199 (1959)", "IS 456 (2000)", "IS 10262", "ACI 224R"],
    },
    {
      id: "proj-cement-quality-nepal",
      title: "Quality Assessment of Different Cements in Nepal",
      category: "Quality Assurance & Testing",
      featured: true,
      description:
        "Comprehensive laboratory experimentation and field site survey auditing the physical and chemical properties of five major 43-Grade OPC cement brands in Nepal (Shivam, Huaxin, Arghakhanchi, United, and Brij) against Indian and Nepal Bureau of Standards.",
      purpose:
        "Rapid post-earthquake rebuilding in Nepal requires reliable cement quality. Concerns over strength variations and setting times prompted this study to evaluate compliance with standards and assist construction firms in material selection.",
      image: "/cement-cube-moulds.jpg",
      pdfUrl: "/documents/Quality_Assessment_of_Different_Cements_in_Nepal.pdf",
      technologies: [
        "Vicat Apparatus (Setting & Consistency)",
        "Compression Testing Machine (UTM)",
        "Le-Chatelier Flask & Kerosene",
        "Standard 90μm Sieves",
        "Field Questionnaire Survey",
        "IS 4031 / IS 456 Standards",
      ],
      features: [
        "Performed fineness sieve analysis (90μm sieve) showing 90% to 94% passing (6% to 10% retained), meeting IS 4031 Part 1.",
        "Evaluated Vicat consistency (26% to 31%) and initial setting times (30 to 45 mins), complying with IS 4031 Part 5 (>30 mins).",
        "Measured final setting times (8h 55m to 9h 46m) and specific gravity (2.99 to 3.15), satisfying IS 4031 Part 11 limits (3.10 - 3.25).",
        "Tested M20 grade (1:1.5:3) 15cm cube compressive strength at 7 days: Huaxin achieved 17.56 N/mm² and Shivam reached 11.11 N/mm².",
        "Conducted field site surveys across 5 construction locations (Mahalaxmisthan, Tokha, Dhapasi, Mulpani), revealing 70% consumer preference for Shivam cement.",
      ],
      role: "Co-Researcher & Field Surveyor (Preshina Bartaula, Rabin Giri, Rakshya Laxmi Sharma, Ranjan Shrestha)",
      institution: "Nepal Engineering College, Department of Civil Engineering (Pokhara University)",
      supervisor: "Asst. Prof. Tejeshwini Singh & Assoc. Prof. Ramesh Khanal (H.O.D.)",
      standards: ["IS 4031 Part 1", "IS 4031 Part 4", "IS 4031 Part 5", "IS 4031 Part 11", "IS 456:2000"],
    },
    {
      id: "proj-cement-quality-proposal",
      title: "Proposal on Quality Assessment of Cements Manufactured in Nepal",
      category: "Research & Standards Proposal",
      featured: false,
      description:
        "Structured academic research proposal establishing experimental methodologies, sampling protocols, and socio-economic evaluation frameworks to audit commercial cement compliance (OPC 33, 43, and 53 grades) with Nepal Standards (NS: 49:2041).",
      purpose:
        "Lack of transparent quality compliance data between manufacturers and construction contractors creates structural integrity risks. This proposal designed a standardized testing audit to evaluate physical/chemical properties and improve local cement quality.",
      image: "/cement-moulds-proposal.jpg",
      pdfUrl: "",
      technologies: [
        "Research Proposal Methodology",
        "Nepal Standards (NS: 49:2041)",
        "Indian Standards (IS 8112 / IS 12269)",
        "NBSM Compliance Framework",
        "Sampling Protocol Design",
      ],
      features: [
        "Outlined experimental sampling methodology across 5 major Nepalese cement manufacturers (Shivam, Sarbottam, Hongshi, Jagadamba, and Maruti).",
        "Defined laboratory test protocols for fineness (90μm sieve shaking), Vicat consistency (25-35%), initial setting time (<30 mins), and Le-Chatelier soundness expansion (<10mm).",
        "Formulated 28-day compressive strength grading criteria for 33 Grade (33 MPa), 43 Grade (43 MPa), and 53 Grade (53 MPa) cements.",
        "Established environmental control guidelines, safety protocols, and calibration procedures to prevent honeycomb defects during specimen casting.",
      ],
      role: "Co-Author & Proposal Developer (Preshina Bartaula, Rabin Giri, Rakshya Laxmi Sharma, Ranjan Shrestha)",
      institution: "Nepal Engineering College, Department of Civil Engineering (Pokhara University)",
      supervisor: "Assoc. Prof. Dibyashree Lohani",
      standards: ["NS: 49:2041", "IS 269:1989", "IS 8112:1989", "IS 12269:1987", "NBSM Guidelines"],
    },
  ] as Project[],

  skillCategories: [
    {
      category: "Design & Drafting",
      skills: [
        { name: "AutoCAD (2D & 3D)", level: 92, note: "Drafting, structural layouts & hydraulic section profiles" },
        { name: "Civil 3D", level: 86, note: "Surface terrain modeling, road corridors & earthwork volumes" },
        { name: "Revit", level: 80, note: "BIM structural modeling & 3D building framing" },
      ],
    },
    {
      category: "Structural Engineering",
      skills: [
        { name: "ETABS", level: 88, note: "Multi-storey RC building modeling & seismic analysis" },
        { name: "STAAD Pro", level: 80, note: "3D frame structural analysis & concrete design" },
        { name: "SAP2000", level: 78, note: "Finite element structural modeling & load distribution" },
      ],
    },
    {
      category: "Water Resources & Hydrology",
      skills: [
        { name: "HEC-RAS", level: 88, note: "1D/2D river hydraulics & spillway flow modeling" },
        { name: "HEC-HMS", level: 84, note: "Catchment rainfall-runoff hydrologic simulation" },
        { name: "Hydrologic Modeling", level: 90, note: "Hydrograph analysis, peak flow & open channel design" },
      ],
    },
    {
      category: "Project Management & Construction",
      skills: [
        { name: "Primavera P6", level: 78, note: "Project scheduling, WBS & critical path method" },
        { name: "MS Project", level: 82, note: "Gantt charts, resource allocation & project tracking" },
        { name: "Quantity Estimation & BOQ", level: 90, note: "Rate analysis, material costing & site estimation" },
      ],
    },
    {
      category: "GIS & Spatial Analysis",
      skills: [
        { name: "ArcGIS", level: 88, note: "DEM watershed delineation & spatial flood analysis" },
        { name: "QGIS", level: 82, note: "Open-source geospatial mapping & topographic contouring" },
      ],
    },
  ] as SkillCategory[],

  certifications: [
    {
      id: "cert-autocad",
      name: "Advanced AutoCAD 2D & 3D Civil Drafting",
      organization: "Pokhara University Engineering Society",
      date: "2024",
      credentialUrl: "#",
      badgeText: "CAD Specialist",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "cert-arcgis",
      name: "ArcGIS Spatial Analysis & Watershed Delineation",
      organization: "GIS & Spatial Research Institute Nepal",
      date: "2024",
      credentialUrl: "#",
      badgeText: "GIS Analyst",
      image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "cert-etabs",
      name: "Structural Modeling & Seismic Design with ETABS",
      organization: "Nepal Engineering Association Workshop",
      date: "2023",
      credentialUrl: "#",
      badgeText: "Structural Design",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "cert-hec-ras",
      name: "River Hydraulic Modeling & Flood Inundation in HEC-RAS",
      organization: "Water Resources Research Board",
      date: "2024",
      credentialUrl: "#",
      badgeText: "Hydraulics Specialist",
      image: "https://images.unsplash.com/photo-1574482620826-40685ca5ebd2?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "cert-thesis",
      name: "Self-Healing Concrete Experimental Research Excellence",
      organization: "Nepal Engineering College Lab Board",
      date: "2024",
      credentialUrl: "#",
      badgeText: "Research Excellence",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=400&q=80",
    },
  ] as CertificationItem[],
};
