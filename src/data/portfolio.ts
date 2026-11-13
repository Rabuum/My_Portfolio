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
  level?: number;
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

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: "Water Resources" | "Concrete & Materials" | "Quality Assurance" | "GIS & Hydrology";
  tags: string[];
  image: string;
  author: string;
  featured?: boolean;
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
      "Born and raised in Nepal, I am a Civil Engineering graduate who has always been drawn to the way water shapes landscapes and communities. From spending hours in the materials lab testing concrete specimens to standing on construction sites watching structures rise from the ground up, every experience has deepened my commitment to building resilient infrastructure for a changing climate. My heart is set on water resources engineering — not just as a career, but as a way to give back to a country where rivers are life.",
    bioLong:
      "I graduated with a B.E. in Civil Engineering from Nepal Engineering College, Pokhara University with a CGPA of 3.41 — a result of years of late nights, lab experiments, and genuine curiosity about how things are built to last. My undergraduate journey took me from mixing concrete specimens with self-healing agents to surveying construction sites in Kathmandu Valley, and every step reinforced the same belief: good engineering can quietly change lives. Now, I am channeling that passion toward water resources — studying river hydraulics, GIS catchment modeling, and preparing a research path toward an M.Sc. in Germany. Nepal has some of the most powerful rivers in the world, and I want to be part of the generation that harnesses them wisely.",
    stats: [
      { label: "B.E. Civil", value: "Pokhara Univ", sub: "CGPA 3.41 / 4.00" },
      { label: "Major Research", value: "3 Thesis Papers", sub: "Empirical & Lab PDFs" },
      { label: "Years Experience", value: "1+", sub: "Site & Lab Research" },
      { label: "Certifications", value: "5+", sub: "CAD, GIS & ETABS" },
      { label: "Civil Tools", value: "15+", sub: "AutoCAD, Civil 3D, GIS" },
    ],
    goals: "To contribute to sustainable infrastructure & climate-resilient water resource management systems.",
    interests: ["Water Resource Engineering", "Hydrology & Hydraulics", "Structural Analysis & ETABS", "GIS Watershed Mapping"],
  },

  nav: [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/about" },
    { id: "education", label: "Education", path: "/education" },
    { id: "projects", label: "Projects", path: "/projects" },
    { id: "skills", label: "Skills", path: "/skills" },
    { id: "blog", label: "Blog", path: "/blog" },
    { id: "contact", label: "Contact", path: "/contact" },
  ],

  education: [
    {
      id: "be-civil",
      institution: "Nepal Engineering College (Pokhara University)",
      degree: "Bachelor of Civil Engineering",
      major: "Civil Engineering (Concentration in Hydrology & Hydraulic Structures)",
      duration: "2021 — 2025",
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
      company: "Building Dreams Consultancy",
      role: "Civil Engineering Site Intern",
      duration: "26th March 2026 – Present",
      location: "New Baneshwor, Kathmandu, Nepal",
      badge: "Site & Technical Intern",
      responsibilities: [
        "Prepared catchment and watershed maps using ArcGIS to support hydrological assessments and water resources planning.",
        "Developed topographic contour maps using Autodesk Civil 3D based on available survey data for engineering planning and design purposes.",
        "Performed hydrological analysis, including streamflow computation and design flood estimation, to support the planning and design of hydropower and water resources infrastructure.",
        "Prepared Bar Bending Schedules (BBS) for structural elements, including reinforcement detailing and quantity estimation based on engineering drawings.",
        "Prepared and revised engineering drawings and technical documents while coordinating with hydropower clients on technical requirements and project-related matters.",
        "Participated in site supervision, construction monitoring, and field inspections to observe construction progress and support compliance with engineering drawings and project specifications.",
      ],
      achievements: [
        "Prepared catchment maps and Civil 3D topographic contours supporting hydropower planning.",
        "Delivered accurate Bar Bending Schedules (BBS) and coordinated engineering drawings with clients.",
      ],
      technologies: ["ArcGIS", "Autodesk Civil 3D", "AutoCAD", "BBS Detailing", "Quantity Estimation", "Hydrological Analysis"],
    },
    {
      id: "exp-researcher",
      company: "Nepal Engineering College Materials Research Lab",
      role: "Undergraduate Lab Researcher",
      duration: "2023 — 2024",
      location: "Changunarayan, Bhaktapur",
      badge: "Laboratory Research",
      responsibilities: [
        "Designed experimental concrete mix batches incorporating chemical autonomous sealing agents: Epoxy, Epoxy resin, Fly ash with coir and Gypsum.",
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
      id: "exp-future-trajectory",
      company: "Graduate Research Preparation Track",
      role: "Master's Scholar Candidate",
      duration: "2027 — Future Trajectory",
      location: "Germany",
      badge: "Future Vision",
      responsibilities: [
        "Preparing research proposals focused on river engineering, open-channel hydraulics, and climate-resilient water infrastructure.",
        "Targeting German Technical Universities for M.Sc. in Water Resources Engineering.",
        "Strengthening HEC-HMS hydrological modeling and GIS spatial catchment analysis skills.",
      ],
      achievements: [
        "Constructed comprehensive academic dossier for German Master's (M.Sc.) admissions.",
      ],
      technologies: ["Water Resource Engineering", "Hydraulic Engineering", "HEC-HMS", "ArcGIS", "Hydrology"],
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
      image: "/pro_photo.png",
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
        "Induced controlled artificial cracks on Day 7 using UTM; evaluated healing & residual strength on Day 28.",
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
      featured: true,
      description:
        "Structured academic research proposal establishing experimental methodologies, sampling protocols, and socio-economic evaluation frameworks to audit commercial cement compliance (OPC 33, 43, and 53 grades) with Nepal Standards (NS: 49:2041).",
      purpose:
        "Lack of transparent quality compliance data between manufacturers and construction contractors creates structural integrity risks. This proposal designed a standardized testing audit to evaluate physical/chemical properties and improve local cement quality.",
      image: "/project1.jpg",
      pdfUrl: "/documents/Proposal_Quality_Assessment_of_Cements_Manufactured_in_Nepal.pdf",
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
        { name: "AutoCAD (2D & 3D)", note: "Drafting, structural layouts & hydraulic section profiles" },
        { name: "Civil 3D", note: "Surface terrain modeling, road corridors & earthwork volumes" },
      ],
    },
    {
      category: "Structural Engineering",
      skills: [
        { name: "ETABS", note: "Multi-storey RC building modeling & seismic analysis" },
      ],
    },
    {
      category: "Water Resources & Hydrology",
      skills: [
        { name: "HEC-HMS", note: "Catchment rainfall-runoff hydrologic simulation" },
      ],
    },
    {
      category: "Project Management & Construction",
      skills: [
        { name: "MS Project", note: "Gantt charts, resource allocation & project tracking" },
        { name: "Quantity Estimation & BOQ", note: "Rate analysis, material costing & site estimation" },
        { name: "MS Excel", note: "Spreadsheets, engineering calculations & Bar Bending Schedules" },
        { name: "MS Word", note: "Technical documentation, report preparation & engineering specifications" },
      ],
    },
    {
      category: "GIS & Spatial Analysis",
      skills: [
        { name: "ArcGIS", note: "DEM watershed delineation & spatial flood analysis" },
        { name: "QGIS", note: "Open-source geospatial mapping & topographic contouring" },
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
      id: "cert-hydraulics",
      name: "River Hydraulic Engineering & Flood Inundation Analysis",
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

  blogPosts: [
    {
      id: "post-why-water-resources",
      slug: "why-i-am-interested-in-water-resources-engineering",
      title: "Why I Am Interested in Water Resources Engineering",
      excerpt:
        "From childhood curiosity playing with water in Melamchi to witnessing devastating floods reshape familiar streets, here is why Water Resources Engineering became my life's calling and research pursuit.",
      date: "April 2025",
      readTime: "5 min read",
      category: "Water Resources",
      tags: ["Water Resources", "Melamchi Flood", "Flood Resilience", "Hydrology", "Himalayan Rivers", "Personal Journey"],
      image: "/melamchi-flood.jpg",
      author: "Rabin Giri",
      featured: true,
      content: `### A Childhood Fascination with Water

My interest in water did not start from an engineering textbook. It started when I was a child.

I am from Melamchi, and since childhood, I have always loved playing with water. I still remember my parents scolding me several times for playing with it. At that time, water was simply something I enjoyed. I never imagined that this simple childhood interest would slowly become something I would become deeply curious about during my engineering studies.

### Choosing Civil Engineering with Purpose

After completing my +2, I chose to study Civil Engineering. I wanted to become an engineer because I wanted to create something useful and contribute to my country. For me, engineering was not only about getting a good job or earning money. I wanted to do meaningful work for Nepal and leave behind a contribution that could benefit people even after I am gone.

As I started studying Civil Engineering, my interest in water slowly changed. I became curious about how water flows, how gravity influences its movement, and how water finds its own path. Subjects such as Fluid Mechanics, Hydrology, Irrigation and Sanitary Engineering became some of the subjects that interested me the most.

During practical classes, I was often one of the students who wanted to be at the front, ask questions and understand why something happened rather than simply complete the practical work. The more I learned, the more I realized that there was much more to water than I had understood as a child.

### From Classrooms to Real Infrastructure

In my sixth semester, a field visit related to Sanitary Engineering gave me an opportunity to see how the things we learned in class were applied in practice. Later, in my seventh semester, I also went on an educational tour to Seti Hydropower. Seeing the canal, weir, reservoir, turbine and other components of the hydropower system in real life made the subject even more interesting to me.

Things that I had previously seen in textbooks, drawings and diagrams were now right in front of me. I started thinking more about how water can be controlled, diverted, stored and used for different purposes. These experiences made me more curious about water and the role engineers play in managing it.

### Witnessing the Power of Water: The Melamchi Experience

But growing up in Melamchi also showed me another side of water—the power of water.

Melamchi is my hometown, and I have spent many years there. I used to go shopping in the same areas and knew many of the places around the town. When the flood came and land, shops and other familiar places were taken away by the river, it affected me differently. These were not just places I had seen in the news; they were places I knew personally.

![Melamchi Flood: Submerged homes, heavy sediment deposits, and the devastating impact of the flooded river in Melamchi](/melamchi-flood.jpg)

That experience made me realize how powerful water can be and how quickly it can change a place that people have known for years. More recently, floods in places such as Rasuwa have reminded me of the same reality.

### Critical Engineering Questions for Resilient Communities

These experiences have made me think beyond simply understanding how water flows:
- **How can we manage water sustainably?**
- **How can we reduce the damage caused by floods?**
- **How can we design infrastructure that works with natural water systems rather than against them?**
- **How can engineering help communities become more resilient to water-related challenges?**

These questions are gradually shaping my interest in Water Resources Engineering.

### A Purposeful Future Ahead

For me, Water Resources Engineering is not simply another field within Civil Engineering. It feels like a continuation of something that started in my childhood, developed through my engineering education, and became more meaningful through what I have seen around me.

I want to understand water more deeply—not only how it moves and behaves, but also the challenges and opportunities it creates for society. Nepal has enormous water resources, but we also face challenges such as floods, urban drainage, wastewater management, groundwater and the need for better water infrastructure.

I hope to develop the knowledge and skills to contribute to practical and sustainable solutions to these challenges. Perhaps the child who was once scolded for playing with water was unknowingly beginning a journey that would eventually lead him toward Water Resources Engineering.`,
    },

    {
      id: "post-kathmandu-urban-flooding",
      slug: "why-does-kathmandu-flood-during-heavy-rain-urban-drainage",
      title: "Why Does Kathmandu Flood During Heavy Rain? Understanding Urban Drainage in Nepal",
      excerpt:
        "Why does a valley surrounded by rivers struggle whenever it rains? A human and engineering perspective on Kathmandu's monsoon inundation, concrete sprawl, and sustainable drainage solutions.",
      date: "March 2025",
      readTime: "7 min read",
      category: "Water Resources",
      tags: ["Urban Drainage", "Kathmandu Floods", "Hydrology", "Stormwater", "Runoff Management", "Civil Engineering"],
      image: "/kathmandu-flood-aerial.jpg",
      author: "Rabin Giri",
      featured: true,
      content: `Whenever heavy monsoon clouds gather over the hills of Kathmandu, everyone who lives here shares a collective anxiety. Within minutes of an intense downpour, roads like Putalisadak, Maitighar, Tripureshwor, and Balkhu turn into murky canals. Motorcyclists fight to keep their engines alive with water past their exhausts, pedestrians balance precariously on shop steps, and public buses crawl through waterlogged lanes.

For most of us living in the Valley, this has simply become an accepted, exhausting ritual of the monsoon season. But have you ever paused to wonder: *Why does a city cradled in a natural bowl, surrounded by hills and crossed by rivers, struggle so violently to manage its own rainwater?*

As a Civil Engineering graduate with a strong focus in Water Resources, I find myself looking at these flooded streets through two lenses: as an everyday commuter who has walked through this muddy water, and as an engineer analyzing catchments, slopes, runoff coefficients, and hydraulic conveyance. Rain is a natural atmospheric process, but urban flooding is almost always a reflection of human choices—how we pave our land, size our culverts, treat our riverbanks, and plan our infrastructure.

In this article, I want to unpack the science and reality behind why Kathmandu drowns during heavy rainfall, and explore the practical engineering solutions that can make our capital truly flood-resilient.

---

### 1. Two Distinct Phenomenon: Street-Level Ponding vs. River Overflow

When people say "Kathmandu is flooded," they are often witnessing one of two distinct hydrological problems—or worse, a dangerous collision of both:

- **Urban Surface-Water Flooding (Pluvial Flooding):** This happens directly on our streets and neighborhood alleys when rain falls faster than the local storm drains can intake or convey it. The water has nowhere to soak into the soil, so it pools across asphalt and concrete, creating localized flash ponds.
- **River Flooding (Fluvial Flooding):** This occurs when major drainage arteries—such as the Bagmati, Bishnumati, Hanumante, Dhobikhola, and Manohara—receive massive runoff volumes from both urban centers and upstream mountain catchments, swelling past their natural banks or concrete training walls into low-lying settlements.

![Kathmandu Street Inundation: Commuters and motorbikes navigating submerged urban roads during monsoon cloudbursts](/kathmandu-flood-street.jpg)

Understanding this difference is fundamental. You cannot fix river flooding simply by making roadside gutters wider, nor can you solve street ponding simply by building river embankments. Both systems must be engineered as an interconnected continuum.

---

### 2. The Concrete Blanket: How Rapid Urbanization Multiplied Surface Runoff

If you examine satellite imagery of Kathmandu Valley over the past three decades, the transformation is staggering. Verdant agricultural fields, household kitchen gardens, permeable earthen courtyards, and natural wetlands have been aggressively replaced by brick buildings, asphalt roads, tiled compounds, and paved parking lots.

In hydrological engineering, we quantify this using the **runoff coefficient ($C$)** in the Rational Equation ($Q = C \\cdot I \\cdot A$):
- In a natural, vegetated environment, a high percentage of precipitation infiltrates deep into the groundwater table or gets detained in depression storage. Only a modest fraction becomes overland surface runoff.
- In dense, paved urban centers, the runoff coefficient can jump from 0.20 to over 0.85.

Essentially, Kathmandu has paved over its natural sponges. Rain that previously took hours to gently percolate or trickle into rivulets now rushes instantly across impermeable concrete surfaces, hitting roadside drains within minutes. Urbanization didn't just change the skyline of Kathmandu—it fundamentally altered the hydrology of the entire watershed.

---

### 3. Are Kathmandu's Drainage Systems Truly Sufficient?

Every monsoon, the immediate blame falls on municipal drains: *"The drains are clogged with plastic and garbage!"*

While solid waste, plastic debris, and construction silt undeniably choke inlet grates and reduce hydraulic efficiency, blaming garbage alone oversimplifies a much deeper structural reality. Even if every drain in Kathmandu were cleaned spotless tomorrow, heavy rains would still cause inundation. Why?

![Aerial View of Kathmandu Intersection Flooding: Severe surface water accumulation overwhelming urban drainage capacity](/kathmandu-flood-aerial.jpg)

Here are the engineering realities our drainage network faces:
- **Underdesigned Return Periods:** Many existing drains and masonry culverts were built decades ago for much lower population densities and historical rainfall intensities. They lack the cross-sectional area to handle contemporary peak discharges.
- **Topographical Bottlenecks & Slope Discontinuities:** Kathmandu's undulating terrain means water rushes rapidly down from elevated ridges and abruptly ponds in localized depressions where drainage gradients flatten out.
- **The Backwater Effect:** When river corridors swell during heavy downpours, the water level in the Bagmati or Dhobikhola rises higher than the outfall pipes of city stormwater drains. Instead of discharging freely, stormwater is backed up into the streets—a phenomenon known as the hydraulic backwater effect.

---

### 4. Squeezing Our Rivers: Floodplains Need Space to Breathe

Rivers are dynamic, living systems. Throughout history, Himalayan rivers have carved out natural floodplains to accommodate seasonal monsoon surges.

In Kathmandu, however, unchecked urban growth has pushed buildings, squatter settlements, and commercial encroachments directly into the river floodplains. River corridors that once possessed wide, braided channels and meandering sandbars have been canalized between rigid concrete retaining walls and gabion embankments.

While flood walls offer localized protection against small-to-moderate events, they dramatically increase flow velocity, prevent natural sediment dispersal, and transfer flood risk downstream. When an extreme cloudburst occurs—such as the catastrophic storms of late September 2024—the river simply reclaims the land that historically belonged to it.

> "A river never forgets its natural path. When we narrow its channel and construct walls on its floodplain, we are not eliminating flood risk—we are merely storing up hydraulic energy for a greater catastrophe."

---

### 5. Catchment Morphology: The Natural Bowl of Kathmandu Valley

Kathmandu's unique geomorphology plays an influential role. The Valley is an ancient paleolake surrounded by steep hills (Shivapuri, Chandragiri, Phulchowki, and Nagarjun).

When a monsoon storm sweeps through, rain doesn't just fall on our city rooftops; torrential rain blankets the forested upper catchments. Steep mountain streams funnel water down into the valley floor within hours, causing rapid hydrological concentration.

If high-intensity rainfall strikes the city center at the exact same moment that upstream mountain runoff converges at the valley floor, the coincidence of peak hydrographs leads to sudden, widespread inundation.

---

### 6. What Can Civil and Water Resources Engineers Do?

There is no single silver bullet that can eliminate all urban flooding overnight. However, modern Water Resources Engineering offers an integrated playbook that combines structural resilience with nature-based planning:

1. **Modernize Stormwater Networks with Catchment-Based Sizing:** Stop sizing drains purely based on street width. Sizing must be backed by accurate rainfall-intensity-duration-frequency (IDF) curves, high-resolution Digital Elevation Models (DEMs), and hydrological runoff modeling (HEC-HMS / SWMM).
2. **Embrace Nature-Based Sponge City Concepts (SUDS):** Introduce permeable pavements in public plazas, roadside bio-swales, rain gardens, and decentralized rainwater harvesting systems in residential building codes to restore localized groundwater infiltration.
3. **Reclaim and Respect River Corridors:** Demarcate and enforce strict no-build buffer zones along riverbanks. Where space permits, construct set-back levees, urban retention wetlands, and flood detention basins that can temporarily absorb peak discharges without drowning human settlements.
4. **Deploy 2D Hydrodynamic Modeling for Early Action:** Using tools like HEC-RAS 2D or TUFLOW, engineers can simulate exact flood hazard maps showing water depth and velocity under 10-year, 50-year, and 100-year return period events, pinpointing evacuation routes and infrastructure vulnerabilities.
5. **Real-Time Hydrometric Monitoring & Early Warning:** Expand automatic rain gauges and ultrasonic water-level sensors across Valley tributaries, delivering automated SMS alerts to low-lying communities before flood peaks crest.

---

### 7. What This Means for Nepal's Urban Future

Kathmandu is not the only city in Nepal grappling with this reality. Emerging urban centers across the Terai and inner valleys—from Biratnagar and Pokhara to Nepalgunj and Dhangadhi—are rapidly paving over natural drainage corridors.

If we continue to view stormwater drainage as an afterthought—installing small concrete pipes only after roads and buildings are already erected—we will perpetually fight a losing battle against water.

Water always finds the path of least resistance. It obeys the laws of gravity and momentum, indifferent to municipal boundaries or property titles.

The goal of civil engineering should not be to fight water into submission, but to **design infrastructure that works with water's natural rhythm**.

---

### Conclusion: Learning to Live with Water

Water Resources Engineering is not just about abstract differential equations or concrete cubic meters. It is about whether an elderly shopkeeper in Putalisadak loses their inventory to floodwaters, whether a child can get safely to school on a rainy morning, and whether our cities can thrive amid a changing climate.

As I continue my journey in Water Resources Engineering, I am convinced that with proper hydrological data, thoughtful urban planning, and dedicated engineering leadership, Nepal can transform its monsoon challenges into sustainable water security.

**The more carefully we understand water, the better we can plan our cities to live with it.**

---

### References and Further Reading

1. **Danegulu, A., et al. (2024).** *Characterizing urban flooding in the Kathmandu Valley, Nepal: The influence of urbanization and river encroachment.* [Natural Hazards Journal](https://ideas.repec.org/a/spr/nathaz/v120y2024i12d10.1007_s11069-024-06650-w.html)
2. **Thapa, B., et al. (2024).** *Sediment Transport and Flood Risk: Impact of Newly Constructed Embankments on River Morphology and Flood Dynamics in Kathmandu, Nepal.* [Water Resources Research](https://doi.org/10.1029/2024WR037742)
3. **Talchabhadel, R., et al. (2025).** *Yesterday’s extremes, today’s new normal: flood risk in the Kathmandu Valley, Nepal.* [Oak Ridge National Laboratory Publication](https://www.ornl.gov/publication/yesterdays-extremes-todays-new-normal-flood-risk-kathmandu-valley-nepal)`,
    },
    {
      id: "post-crack-sealing",
      slug: "crack-sealing-performance-concrete-materials",
      title: "Evaluating Autonomous Crack-Healing Mechanisms in Structural Concrete",
      excerpt:
        "An in-depth review of laboratory methodologies evaluating gelatin-gum arabic microencapsulated epoxy resin and gypsum in OPC concrete, achieving up to 88% compressive strength recovery.",
      date: "March 15, 2025",
      readTime: "6 min read",
      category: "Concrete & Materials",
      tags: ["Concrete Technology", "Self-Healing Agents", "Microencapsulation", "IS 516", "UTM Testing"],
      image: "/concrete-slump-test.jpg",
      author: "Rabin Giri",
      featured: false,
      content: `### Background and Structural Significance
Concrete cracking is an inevitable phenomenon caused by tensile stresses, thermal fluctuations, and drying shrinkage. While micro-cracks (<0.3 mm) are often considered structurally benign initially, they serve as aggressive pathways for water and chloride ingress, rapidly accelerating steel reinforcement corrosion and degrading hydraulic infrastructure.

In our undergraduate laboratory research at Nepal Engineering College (Pokhara University), under the supervision of Assoc. Prof. Ajay Khadka, we investigated autonomous self-healing mechanisms utilizing accessible chemical and mineral agents suited for developing nations like Nepal.

### Experimental Methodology & Agents Tested
Four distinct healing systems were evaluated:
1. **Direct Epoxy Resin Admixture:** High chemical bond strength and impermeable matrix restoration.
2. **Microencapsulated Epoxy (Gelatin & Gum Arabic):** Core-shell microcapsules that rupture under crack stress propagation to release localized sealant.
3. **Gypsum Paste Incorporation:** Rapid volumetric expansion filling crack voids through hydration precipitation.
4. **Fly Ash with Coconut Coir Fiber:** Supplementary pozzolanic matrix reinforced with natural tensile fibers.

### Laboratory Observations & Key Takeaways
- **Compressive Recovery:** Prismatic and cubic specimens subjected to pre-cracking at 7 days exhibited remarkable compressive strength recovery upon 28-day testing using the Universal Testing Machine (UTM).
- **Gypsum Performance:** Gypsum showed the highest visual crack closure (>90%) and approximately 88% compressive strength recovery, demonstrating strong potential for non-load-bearing water retainers.
- **Microencapsulation:** Encapsulated epoxy displayed controlled activation without compromising baseline early-age hydration kinetics, registering a 76.68% strength recovery.

These findings highlight that localized, cost-effective admixtures can dramatically lengthen the maintenance lifecycle of concrete conduits, spillways, and hydraulic retaining walls in Nepal.`,
    },
    {
      id: "post-hydraulic-modeling-himalayan",
      slug: "hydraulic-modeling-2d-mountain-rivers",
      title: "2D Hydraulic Modeling in Steep Himalayan River Basins",
      excerpt:
        "Addressing high-velocity supercritical flows, abrupt channel transitions, and sediment dynamics when simulating flash flood inundation across complex mountain terrain.",
      date: "January 28, 2025",
      readTime: "8 min read",
      category: "Water Resources",
      tags: ["Hydraulic Modeling", "Flood Routing", "Himalayan Rivers", "Hydrodynamics", "River Engineering"],
      image: "/river-dam-nepal.jpg",
      author: "Rabin Giri",
      featured: true,
      content: `### Challenges of Steep Mountain Hydraulics
Hydraulic modeling in the Himalayas presents unique hydrodynamic conditions rarely encountered in lowland river systems. High channel gradients (>2%), intense seasonal monsoon discharge, supercritical flow regimes, and high bedload sediment transport challenge traditional 1D hydrodynamic equations.

### 2D Hydrodynamic Mesh Setup & Stability Considerations
When establishing a 2D flow domain for steep mountain valleys:
- **Mesh Resolution & Orientation:** Computational cell sizes must align with sharp topographic breaks. Aligning mesh faces with embankments, rock cliffs, and training levees prevents artificial water volume loss and boundary dispersion.
- **Manning's Roughness Coefficient ($n$):** High boulder concentration and bed irregularities necessitate composite $n$ values ranging from 0.045 to 0.080, calibrated against measured historical flood water marks.
- **Full Momentum vs. Diffusion Wave Equations:** In high-gradient rivers with transitions between subcritical and supercritical flow (Froude number $Fr > 1$), solving the Full Momentum Shallow Water Equations is vital to capture standing waves, hydraulic jumps, and tailwater backwater effects accurately.

### Practical Applications in Infrastructure Design
Accurate 2D inundation mapping enables:
1. Determining maximum water surface elevation (WSE) for hydropower powerhouse safety clearances.
2. Sizing riprap boulder protections and gabion spurs along bridge approach roads.
3. Establishing early warning flood routing zones for downstream settlements.`,
    },
    {
      id: "post-cement-quality",
      slug: "cement-quality-auditing-standards-nepal",
      title: "Quality Assessment & Fineness Standards of Commercial Cements in Nepal",
      excerpt:
        "Auditing physical consistency, setting kinetics, and 7-day compressive strengths of major 43-Grade OPC manufacturers against Nepal and Indian Bureau of Standards.",
      date: "November 10, 2024",
      readTime: "5 min read",
      category: "Quality Assurance",
      tags: ["Material Testing", "OPC 43 Grade", "Vicat Apparatus", "IS 4031", "Quality Control"],
      image: "/cement-cube-moulds.jpg",
      author: "Rabin Giri",
      featured: false,
      content: `### Post-Earthquake Construction & Cement Reliability
Following Nepal's post-earthquake reconstruction, domestic cement production surged with numerous new clinker facilities. However, variation in clinker chemistry, gypsum proportioning, and grinding fineness directly affects early-age strength development and long-term durability.

### Laboratory Findings Across Five Leading Brands
In our research at Nepal Engineering College, we tested five market-leading 43-Grade Ordinary Portland Cement brands: Shivam, Huaxin, Arghakhanchi, United, and Brij.

Key parameters examined under IS 4031 standards included:
- **Fineness (90μm Sieve Analysis):** Passing rates ranged between 90% and 94% (6% to 10% retained), all complying with the IS 4031 Part 1 threshold of <10% residue.
- **Standard Consistency:** Water requirement ranged between 26% and 31%, heavily correlated with gypsum content and grinding fineness.
- **Setting Time Limits:** Initial setting times spanned 30 to 45 minutes, satisfying the mandatory 30-minute minimum. Final setting times fell safely within 8 to 10 hours.
- **7-Day Compressive Cube Strengths:** M20 concrete cubes (150 mm) prepared with Huaxin cement achieved an average 7-day strength of 17.56 N/mm², while Shivam achieved 11.11 N/mm², reflecting differing early hydration acceleration curves.

### Guidance for Field Engineers
For site engineers in Kathmandu Valley, maintaining on-site batch verification of setting time and 7-day cube testing is essential before casting primary structural frames, ensuring manufactured bags conform to design specifications.`,
    },
    {
      id: "post-gis-watershed",
      slug: "gis-catchment-delineation-mountain-hydrology",
      title: "GIS-Driven Watershed Delineation & Runoff Modeling for Mountain Catchments",
      excerpt:
        "Leveraging high-resolution DEM data and ArcGIS spatial hydrology toolsets to delineate run-of-river catchment zones and estimate peak monsoon discharges.",
      date: "August 22, 2024",
      readTime: "7 min read",
      category: "GIS & Hydrology",
      tags: ["ArcGIS", "DEM Processing", "Catchment Delineation", "Hydrology", "Watershed"],
      image: "/watershed.jpg",
      author: "Rabin Giri",
      featured: false,
      content: `### Digital Elevation Models in Ungauged Mountain Basins
A recurring challenge in Nepal's water resources sector is the scarcity of hydrometric gauging stations across high-altitude river tributaries. Spatial analysis via Geographic Information Systems (GIS) provides a systematic framework for delineating catchments, quantifying hypsometric curves, and calculating runoff coefficients.

### Step-by-Step Processing Workflow
1. **DEM Pre-Processing & Fill Sinks:** Raw ALOS PALSAR (12.5m) or SRTM (30m) DEMs contain spurious digital depressions that disrupt hydrological flow paths. The Fill Sink tool ensures continuous downhill drainage routing.
2. **Flow Direction (D8 Algorithm):** Calculates the direction of steepest descent for each grid cell across the eight neighbor nodes.
3. **Flow Accumulation & Stream Network Extraction:** Cells with cumulative upstream contributors exceeding a defined threshold (e.g., >1,000 cells) delineate permanent and intermittent stream channels.
4. **Pour Point Selection & Watershed Boundary Generation:** Placing the pour point accurately at proposed intake or dam coordinates generates the exact hydrologic contributing boundary.

### Integration with Rainfall-Runoff Models
The delineated drainage area, mean basin slope, and stream length are fed directly into SCS-CN (Soil Conservation Service Curve Number) and HEC-HMS lumped models, allowing civil engineers to estimate 100-year design flood hydrographs essential for spillway sizing.`,
    },
  ] as BlogPost[],
};
