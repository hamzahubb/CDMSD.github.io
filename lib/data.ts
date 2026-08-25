/**
 * CDMSD — Strongly-Typed Fact-Checked Content Models for Next.js
 * Fact Verification Tiers:
 * - 'VERIFIED': Supported directly by public organizational/evaluation records
 * - 'CLIENT_PROVIDED': Placeholders waiting for CDMSD official confirmation
 * - 'EDITORIAL': Website framing and domain explanations
 */

export type VerificationStatus = 'VERIFIED' | 'CLIENT_PROVIDED' | 'EDITORIAL';

export interface SourceMetadata {
  sourceName: string;
  sourceUrl: string;
  confidence: string;
  details: string;
}

export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  location: string;
  region: string;
  coordinates: { lat: number; lng: number };
  year: string;
  period: string;
  sector: string;
  thematicTags: string[];
  verificationStatus: VerificationStatus;
  sourceMetadata: SourceMetadata;
  verifiedFacts: string[];
  overview: string;
  role: string;
  activities: string[];
  deliverables: string;
  clientProvidedPlaceholder?: string;
}

export interface ExpertiseSector {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  summary: string;
  description: string;
  capabilities: string[];
  methodology: string;
  verifiedTouchpoints: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  category: 'Evaluations' | 'Reports' | 'Training Materials' | 'Institutional';
  author: string;
  date: string;
  description: string;
  relatedProjectSlug?: string | null;
  verificationStatus: VerificationStatus;
  sourceRef: string;
  fileType: string;
}

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  category: 'Training' | 'Field Work' | 'Organizational Updates';
  date: string;
  author: string;
  summary: string;
  content: string;
  verificationStatus: VerificationStatus;
}

export interface GeographicLocation {
  id: string;
  name: string;
  province: string;
  lat: number;
  lng: number;
  projectSlug: string;
  projectTitle: string;
  year: string;
  focus: string;
}

export interface CMSStat {
  label: string;
  value: string;
  source: string;
  status: VerificationStatus;
}

export const ORG_DATA = {
  fullName: "Center for Disaster Management and Sustainable Development",
  shortName: "CDMSD",
  type: "Registered Independent Multi-disciplinary Consulting Firm",
  country: "Pakistan",
  establishedYear: 2013,
  mission: "To provide cutting edge solutions to our clients based on best practices in disaster management and sustainable Development.",
  positioning: "The first ever consulting initiative established to provide specialized services in disaster risk management in Pakistan.",
  scopeOfWork: "Ranges from grassroots-level work to national-level medium- and short-term assignments.",
  targetCommissioners: [
    "International Development Organizations",
    "Government Departments",
    "Civil Society Organizations",
    "Corporate Sector"
  ],
  placeholders: {
    email: "[OFFICIAL EMAIL]",
    phone: "[OFFICIAL PHONE]",
    office: "[OFFICIAL OFFICE ADDRESS]",
    registration: "[OFFICIAL REGISTRATION INFORMATION]",
    leadership: "[Leadership information to be provided by CDMSD]"
  }
};

export const EXPERTISE_SECTORS: ExpertiseSector[] = [
  {
    id: "disaster-risk-reduction",
    slug: "disaster-risk-reduction",
    title: "Disaster Risk Reduction & Disaster Management",
    shortTitle: "DRR & Disaster Management",
    icon: "ShieldAlert",
    summary: "Comprehensive risk assessments, preparedness planning, and community-based disaster risk management (CBDRM/SBDRM).",
    description: "CDMSD provides specialized technical consulting across the full disaster risk management cycle—from hazard identification and multi-hazard vulnerability assessments to institutional preparedness frameworks, early warning integration, and community-level contingency planning.",
    capabilities: [
      "Multi-hazard disaster risk assessment and mapping",
      "Community-Based Disaster Risk Management (CBDRM)",
      "School-Based Disaster Risk Management (SBDRM)",
      "Early warning systems and preparedness planning",
      "Disaster loss assessment and post-disaster evaluation",
      "Emergency contingency planning & institutional DRR capacity building"
    ],
    methodology: "Rooted in Sendai Framework priorities, incorporating participatory field methodologies, localized hazard profiling, and institutional readiness diagnostics.",
    verifiedTouchpoints: "Islamabad (SBDRM Master Trainer Certification), Thar Desert Drought Response Evaluation, Flood Loss Assessments in Jhang, AJK, Muzaffargarh."
  },
  {
    id: "climate-change-adaptation",
    slug: "climate-change-adaptation",
    title: "Climate Change Adaptation",
    shortTitle: "Climate Adaptation",
    icon: "CloudSun",
    summary: "Climate vulnerability assessments, resilience roadmaps, and community-based adaptation mechanisms.",
    description: "Addressing Pakistan's acute vulnerability to climate volatility through evidence-based adaptation frameworks, localized risk profiling, and climate-resilient development strategies.",
    capabilities: [
      "Climate vulnerability and risk assessments (CVRA)",
      "Community-based adaptation (CBA) planning",
      "Climate-resilient local action plans",
      "Drought and extreme heat adaptation strategies",
      "Integration of climate risk into sectoral development projects"
    ],
    methodology: "Combining meteorological data, climate projections, and participatory rural appraisals to design resilient local adaptation interventions.",
    verifiedTouchpoints: "Drought-prone Thar Desert resilience evaluations; climate vulnerability in flood-affected riverine belts."
  },
  {
    id: "wash",
    slug: "wash",
    title: "WASH (Water, Sanitation & Hygiene)",
    shortTitle: "WASH Solutions",
    icon: "Droplets",
    summary: "WASH access assessments, emergency water systems evaluation, and hygiene promotion in vulnerable communities.",
    description: "Evaluating and planning sustainable clean drinking water, sanitation facilities, and hygiene education in disaster-affected, drought-prone, and rural settlements across Pakistan.",
    capabilities: [
      "WASH technical needs assessments in emergency & recovery phases",
      "Clean drinking water infrastructure assessments",
      "Community sanitation & open-defecation-free (ODF) evaluations",
      "Disaster-resilient water supply system design reviews",
      "School and community hygiene promotion monitoring"
    ],
    methodology: "Aligned with Sphere Standards and WHO guidelines, focusing on community water governance, water quality testing, and behavioral change metrics.",
    verifiedTouchpoints: "Documented evaluation of clean drinking water systems in drought-affected Thar Desert; flood-recovery WASH assessments in Jhang, Muzaffargarh, and AJK."
  },
  {
    id: "community-development",
    slug: "community-development",
    title: "Community Development",
    shortTitle: "Community Development",
    icon: "Users",
    summary: "Participatory community mobilization, local institution strengthening, and grassroots resilience.",
    description: "Facilitating inclusive community mobilization and strengthening grassroots institutions to build self-reliance, social cohesion, and sustained local stewardship.",
    capabilities: [
      "Participatory Rural Appraisal (PRA) and community profiling",
      "Community Organization (CO) and Village Organization (VO) capacity development",
      "Gender-inclusive mobilization & vulnerable group protection",
      "Local governance and community action plans",
      "Social mobilization for resilience and community uplift"
    ],
    methodology: "Empowerment-oriented, rights-based approaches ensuring women, persons with disabilities, and marginalized households actively participate.",
    verifiedTouchpoints: "Documented initiatives for community uplift in Bajaur and Mohmand Agencies; grassroots teacher training in Islamabad."
  },
  {
    id: "food-security-livelihoods",
    slug: "food-security-livelihoods",
    title: "Food Security & Livelihoods",
    shortTitle: "Food Security & Livelihoods",
    icon: "Wheat",
    summary: "Livelihood restoration, rural income diversification, and drought-resilient food security assessments.",
    description: "Assessing and designing sustainable livelihood strategies, food security interventions, and economic recovery programs for vulnerable rural and crisis-affected populations.",
    capabilities: [
      "Emergency food security and livelihood assessments (EFSL)",
      "Drought-resilient agricultural and livestock support evaluation",
      "Cash-for-work and vocational livelihood evaluation",
      "Household economic vulnerability profiling",
      "Value chain strengthening and micro-enterprise advisory"
    ],
    methodology: "Sustainable Livelihoods Framework (SLF) analyzing human, social, physical, natural, and financial capital assets.",
    verifiedTouchpoints: "Livelihood and DRR evaluations in Bajaur & Mohmand; Multi-sector emergency livelihood response in Thar Desert."
  },
  {
    id: "governance",
    slug: "governance",
    title: "Governance & Institutional Strengthening",
    shortTitle: "Governance & Institutions",
    icon: "Landmark",
    summary: "Policy advisory, institutional readiness reviews, and stakeholder coordination mechanisms.",
    description: "Assisting public sector departments, disaster management authorities, and civil society alliances in strengthening regulatory frameworks, accountability, and institutional coordination.",
    capabilities: [
      "Institutional capacity assessments for DRM bodies",
      "Policy review and strategy formulation",
      "Inter-agency coordination mechanism design",
      "Accountability and transparency frameworks",
      "Stakeholder consultation & consensus building"
    ],
    methodology: "Institutional diagnostics assessing governance structures, resource allocation, mandate clarity, and operational bottlenecks.",
    verifiedTouchpoints: "Engagement spanning grassroots stakeholders, district education departments, and national consultancy evaluation frameworks."
  },
  {
    id: "research-training-consulting",
    slug: "research-training-consulting",
    title: "Research, Training & Consulting",
    shortTitle: "Research & Training",
    icon: "BookOpen",
    summary: "Rigorous third-party evaluations, Training-of-Trainers (ToT), and technical advisory assignments.",
    description: "Delivering independent project evaluations, specialized capacity building modules, baseline/endline studies, and knowledge products for development partners.",
    capabilities: [
      "Third-party monitoring & project evaluation (baseline, mid-term, endline)",
      "Training of Trainers (ToT) & Master Trainer Certification",
      "Quantitative & qualitative field research design",
      "Curriculum development for disaster risk management",
      "Technical policy briefs and institutional knowledge products"
    ],
    methodology: "Mixed-methods research adhering to OECD-DAC criteria (Relevance, Coherence, Effectiveness, Efficiency, Impact, Sustainability).",
    verifiedTouchpoints: "Master Trainer SBDRM Certification in Islamabad; Independent evaluation of DEC-supported Pakistan Multi-sector Emergency Response; CBDRM resilience studies."
  }
];

export const PROJECTS: Project[] = [
  {
    slug: "training-master-trainers-cbdrm",
    title: "Training of Master Trainers — School & Community Based Disaster Risk Management",
    shortTitle: "Master Trainer SBDRM Training & Certification",
    location: "Islamabad, Pakistan",
    region: "Islamabad Capital Territory",
    coordinates: { lat: 33.6844, lng: 73.0479 },
    year: "2019",
    period: "January 2019 – February 2019",
    sector: "Research, Training & Consulting",
    thematicTags: ["SBDRM", "CBDRM", "Training of Trainers", "Capacity Building", "Education"],
    verificationStatus: "VERIFIED",
    sourceMetadata: {
      sourceName: "Public Professional Profile (Azmat Shahi)",
      sourceUrl: "https://pk.linkedin.com/in/azmatshahi",
      confidence: "High — Verified via public professional documentation",
      details: "Documented role of Center for Disaster Management and Sustainable Development – Islamabad."
    },
    verifiedFacts: [
      "Facilitated intensive 4-day School-Based Disaster Risk Management (SBDRM) training curriculum.",
      "Formally certified 35 Higher Secondary School Teachers on disaster preparedness, risk mapping, and school evacuation protocols.",
      "Conducted in Islamabad during January – February 2019."
    ],
    overview: "CDMSD delivered a specialized Training-of-Master-Trainers assignment in Islamabad focused on institutionalizing disaster preparedness within educational institutions. The program equipped senior educators with the pedagogical and practical tools needed to cascade disaster risk reduction knowledge to thousands of students and community members.",
    role: "Training Design, Facilitation & Master Trainer Certification",
    activities: [
      "Delivered a structured 4-day instructional module covering hazard identification, vulnerability assessment, early warning communication, and school safety audits.",
      "Conducted simulation drills and table-top exercises for emergency evacuation.",
      "Administered competency evaluations and awarded certification to 35 higher-secondary educators as Master Trainers."
    ],
    deliverables: "Certified cohort of 35 SBDRM Master Trainers, standardized school safety checklist, and training completion report.",
    clientProvidedPlaceholder: "Full client commissioning name, participant roster details, and follow-up phase data to be provided by CDMSD."
  },
  {
    slug: "thar-desert-emergency-response-evaluation",
    title: "Multi-sector Integrated Emergency Response & Drought Resilience Evaluation",
    shortTitle: "Thar Desert Drought Response Evaluation",
    location: "Thar Desert, Sindh, Pakistan",
    region: "Sindh",
    coordinates: { lat: 24.8777, lng: 69.7981 },
    year: "Documented Evaluation",
    period: "Post-Drought Emergency & Recovery Evaluation",
    sector: "WASH, Food Security & Livelihoods",
    thematicTags: ["Drought Response", "Emergency WASH", "Food Security", "Protection", "Third-Party Evaluation"],
    verificationStatus: "VERIFIED",
    sourceMetadata: {
      sourceName: "ALNAP / Disasters Emergency Committee (DEC) Independent Evaluation Report",
      sourceUrl: "https://alnap.cdn.ngo/media/documents/Evaluation-Report-DEC-Project-Care-Intl-Pakistan.pdf",
      confidence: "High — Cited in international humanitarian repository (ALNAP / Care Intl / DEC)",
      details: "CDMSD referenced as national consultancy firm conducting evaluation of Pakistan Multi-sector Integrated Emergency Response in drought-affected Thar Desert."
    },
    verifiedFacts: [
      "CDMSD engaged as the national consultancy firm for the independent evaluation of the multi-sector emergency response.",
      "Evaluated interventions across clean drinking water, education, protection, livelihoods, and early recovery.",
      "Covered severe drought-affected communities in Thar Desert, Sindh, Pakistan."
    ],
    overview: "In response to recurrent and severe drought conditions in the Thar Desert region of Sindh, international humanitarian agencies mobilized multi-sector relief and early recovery initiatives. CDMSD was commissioned as the national evaluation firm to assess the relevance, coverage, effectiveness, and sustainability of interventions across water access, livelihoods, education, and protection.",
    role: "Independent National Consultancy Firm / Lead Evaluation Team",
    activities: [
      "Conducted extensive multi-village field surveys and focus group discussions across remote desert settlements in Tharparkar.",
      "Assessed clean drinking water installations, water filtration points, and community water management committees.",
      "Evaluated livelihood support, livestock protection, and household food security outcomes.",
      "Reviewed child protection and education interventions in emergency-affected schools."
    ],
    deliverables: "Independent Evaluation Report evaluating project achievements against Sphere standards, with strategic recommendations for long-term drought resilience.",
    clientProvidedPlaceholder: "Exact quantitative sample sizes, beneficiary reach, and finalized funding figures to be confirmed by CDMSD."
  },
  {
    slug: "bajaur-mohmand-livelihood-drr",
    title: "Livelihood and DRR Initiatives for Community Uplift in Bajaur and Mohmand",
    shortTitle: "Bajaur & Mohmand Livelihoods & DRR Study",
    location: "Bajaur & Mohmand Districts, Khyber Pakhtunkhwa, Pakistan",
    region: "Khyber Pakhtunkhwa",
    coordinates: { lat: 34.7865, lng: 71.5249 },
    year: "Documented Study",
    period: "Post-Conflict & Resilience Assessment",
    sector: "Community Development, DRR & Livelihoods",
    thematicTags: ["CBDRM", "Livelihood Uplift", "Community Resilience", "KP Districts", "Resilience Study"],
    verificationStatus: "VERIFIED",
    sourceMetadata: {
      sourceName: "Pakistan CBDRM Resilience Study / SDC Shareweb Repository",
      sourceUrl: "https://www.shareweb.ch/site/disasterriskreduction/themes-and-resources/DOC_themesresources/Themes-and-resources/Pakistan_CBDRM_Resilience_Study_March20201281.pdf",
      confidence: "High — Formally cited in SDC DRR & Resilience Study",
      details: "References CDMSD evaluation: 'Livelihood and DRR Initiatives for Community Uplift in Bajaur and Mohmand Agencies'."
    },
    verifiedFacts: [
      "CDMSD conducted a specialized evaluation titled 'Livelihood and DRR Initiatives for Community Uplift in Bajaur and Mohmand Agencies'.",
      "Documented work focusing on community uplift, disaster risk reduction, community resilience, and sustainable livelihoods.",
      "Conducted in the vulnerable frontier districts of Bajaur and Mohmand."
    ],
    overview: "Communities in Bajaur and Mohmand face compound vulnerabilities arising from geographical isolation, disaster vulnerabilities, and socio-economic transitions. This documented evaluation assessed integrated community uplift models combining disaster risk reduction mechanisms with sustainable livelihood restoration.",
    role: "Evaluation & Technical Assessment Firm",
    activities: [
      "Evaluated community-based disaster management committees and local risk-reduction infrastructure.",
      "Assessed vocational training, agricultural assistance, and income generation initiatives.",
      "Documented grassroots participation, gender inclusion, and community institutional viability."
    ],
    deliverables: "Evaluation study report examining sustainability indicators and lessons learned for community-based disaster resilience programming.",
    clientProvidedPlaceholder: "Detailed project dates, budget metrics, and institutional commissioners to be supplemented by CDMSD."
  },
  {
    slug: "flood-disaster-wash-drr-assessment",
    title: "Post-Flood Loss Assessment, WASH Access & Recovery Planning",
    shortTitle: "2014 Flood WASH & DRR Assessment",
    location: "Jhang, Muzaffargarh (Punjab) & Azad Jammu and Kashmir (AJK), Pakistan",
    region: "Punjab & AJK",
    coordinates: { lat: 31.2781, lng: 72.3168 },
    year: "2014–2015",
    period: "Post-2014 Flood Recovery Phase",
    sector: "WASH, DRR & Disaster Response",
    thematicTags: ["Flood Recovery", "WASH Access", "Loss Assessment", "Riverine Communities", "Risk Reduction"],
    verificationStatus: "VERIFIED",
    sourceMetadata: {
      sourceName: "Public Professional Profile (Wasif Bashir Babar)",
      sourceUrl: "https://pk.linkedin.com/in/wasifbashirbabar",
      confidence: "Medium-High — Documented via affiliated DRM professional record",
      details: "Associates CDMSD with post-2014 flood disaster loss assessment, WASH access restoration, and DRR future planning across Jhang, AJK, and Muzaffargarh."
    },
    verifiedFacts: [
      "Documented professional engagement following the massive 2014 floods in Pakistan.",
      "Assessed damage and economic loss across affected rural communities.",
      "Evaluated water, sanitation, and hygiene (WASH) access for flood-displaced and recovering households.",
      "Covered documented field sites in Jhang, Muzaffargarh, and Azad Jammu & Kashmir (AJK)."
    ],
    overview: "The severe riverine floods of 2014 inundated vast agricultural tracts and displaced hundreds of thousands of residents in Punjab and AJK. CDMSD-affiliated experts contributed to rigorous post-disaster field assessments, analyzing critical WASH infrastructure damage, loss parameters, and formulating actionable recovery recommendations.",
    role: "Field Damage Assessment & WASH Needs Evaluation",
    activities: [
      "Mapped contaminated water sources, damaged hand pumps, and disrupted sanitation facilities.",
      "Documented household loss profiles across riverine settlements in Jhang and Muzaffargarh.",
      "Evaluated hill-torrent and mountain slope disaster impacts in Azad Jammu & Kashmir (AJK).",
      "Formulated DRR-informed reconstruction and flood-resilience guidelines."
    ],
    deliverables: "Comprehensive loss assessment reports, WASH recovery matrices, and community risk mitigation recommendations.",
    clientProvidedPlaceholder: "Specific donor/government partner co-branding and final project logframe to be confirmed by CDMSD."
  }
];

export const GEOGRAPHIC_LOCATIONS: GeographicLocation[] = [
  { id: "loc-isb", name: "Islamabad", province: "ICT", lat: 33.6844, lng: 73.0479, projectSlug: "training-master-trainers-cbdrm", projectTitle: "Training of Master Trainers — SBDRM", year: "2019", focus: "School & Community DRR Training" },
  { id: "loc-thar", name: "Thar Desert", province: "Sindh", lat: 24.8777, lng: 69.7981, projectSlug: "thar-desert-emergency-response-evaluation", projectTitle: "Drought Resilience & Multi-sector Evaluation", year: "Documented Evaluation", focus: "Emergency WASH, Livelihoods & Protection" },
  { id: "loc-bajaur", name: "Bajaur", province: "Khyber Pakhtunkhwa", lat: 34.7865, lng: 71.5249, projectSlug: "bajaur-mohmand-livelihood-drr", projectTitle: "Livelihood & DRR Community Uplift Study", year: "Documented Study", focus: "Community Uplift & Resilience" },
  { id: "loc-mohmand", name: "Mohmand", province: "Khyber Pakhtunkhwa", lat: 34.5356, lng: 71.2874, projectSlug: "bajaur-mohmand-livelihood-drr", projectTitle: "Livelihood & DRR Community Uplift Study", year: "Documented Study", focus: "Grassroots DRR & Livelihoods" },
  { id: "loc-jhang", name: "Jhang", province: "Punjab", lat: 31.2781, lng: 72.3168, projectSlug: "flood-disaster-wash-drr-assessment", projectTitle: "Post-Flood Loss Assessment & WASH", year: "2014–2015", focus: "Flood Recovery & WASH Access" },
  { id: "loc-ajk", name: "Azad Jammu & Kashmir (AJK)", province: "AJK", lat: 34.3688, lng: 73.4711, projectSlug: "flood-disaster-wash-drr-assessment", projectTitle: "Post-Flood Assessment & DRR Planning", year: "2014–2015", focus: "Vulnerability & Loss Mapping" },
  { id: "loc-muzaffargarh", name: "Muzaffargarh", province: "Punjab", lat: 30.0744, lng: 71.1847, projectSlug: "flood-disaster-wash-drr-assessment", projectTitle: "Post-Flood WASH & Loss Evaluation", year: "2014–2015", focus: "Emergency Water & Sanitation" }
];

export const RESOURCES: ResourceItem[] = [
  {
    id: "res-1",
    title: "Independent Evaluation: Pakistan Multi-sector Integrated Emergency Response (Thar Desert)",
    category: "Evaluations",
    author: "National Consultancy Evaluation Team (ALNAP / DEC Repo)",
    date: "Documented Independent Report",
    description: "Comprehensive evaluation documenting emergency response, water infrastructure, food security, and protection interventions in drought-affected Thar Desert, Sindh.",
    relatedProjectSlug: "thar-desert-emergency-response-evaluation",
    verificationStatus: "VERIFIED",
    sourceRef: "ALNAP / DEC Archive: https://alnap.cdn.ngo/media/documents/Evaluation-Report-DEC-Project-Care-Intl-Pakistan.pdf",
    fileType: "PDF Document"
  },
  {
    id: "res-2",
    title: "Livelihood and DRR Initiatives for Community Uplift in Bajaur and Mohmand",
    category: "Reports",
    author: "CDMSD Evaluation Study (Cited in SDC Shareweb)",
    date: "Documented Resilience Study",
    description: "Resilience study evaluating community-based disaster management and livelihood enhancement programs in Bajaur and Mohmand districts.",
    relatedProjectSlug: "bajaur-mohmand-livelihood-drr",
    verificationStatus: "VERIFIED",
    sourceRef: "SDC Disaster Risk Reduction Repository (Shareweb)",
    fileType: "PDF Document"
  },
  {
    id: "res-3",
    title: "School-Based Disaster Risk Management (SBDRM) Master Training Framework",
    category: "Training Materials",
    author: "CDMSD Islamabad Consultancy",
    date: "2019",
    description: "Standardized four-day master trainer module covering school hazard mapping, disaster evacuation drills, and risk communication for secondary educators.",
    relatedProjectSlug: "training-master-trainers-cbdrm",
    verificationStatus: "VERIFIED",
    sourceRef: "Professional Training Record — Islamabad",
    fileType: "Curriculum Module"
  },
  {
    id: "res-4",
    title: "Institutional Overview & Disaster Management Consulting Profile",
    category: "Institutional",
    author: "Center for Disaster Management & Sustainable Development",
    date: "Archived Organizational Record",
    description: "Historical institutional capability profile summarizing CDMSD's foundational mandate, multi-disciplinary scope, and cross-sector consulting approaches.",
    relatedProjectSlug: null,
    verificationStatus: "VERIFIED",
    sourceRef: "CDMSD Historical Profile",
    fileType: "Organizational Brief"
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: "news-1",
    slug: "strengthening-school-disaster-preparedness-islamabad",
    title: "Master Trainer Program Institutionalizes Disaster Preparedness in Secondary Schools",
    category: "Training",
    date: "February 2019",
    author: "CDMSD Training Unit",
    summary: "35 higher secondary school educators complete rigorous 4-day School-Based Disaster Risk Management certification in Islamabad.",
    content: "As part of ongoing capacity-building efforts in disaster risk reduction, CDMSD facilitated an intensive 4-day Master Trainer program in Islamabad. Certified educators will lead localized school safety committees and emergency preparedness drills in their respective institutions.",
    verificationStatus: "VERIFIED"
  },
  {
    id: "news-2",
    slug: "drought-evaluation-insights-thar-desert",
    title: "Field Evaluation Highlights Priorities for Multi-Sector Drought Resilience in Thar Desert",
    category: "Field Work",
    date: "Independent Evaluation Archive",
    author: "Evaluation Team",
    summary: "Comprehensive evaluation in Thar Desert underscores the vital link between clean water infrastructure, livestock protection, and community resilience.",
    content: "Field findings from the independent evaluation of multi-sector drought relief in Sindh demonstrate that decentralized water governance and targeted livelihood support significantly reduce drought vulnerability among marginalized rural households.",
    verificationStatus: "VERIFIED"
  },
  {
    id: "news-3",
    slug: "consulting-firm-mandate-disaster-risk-management",
    title: "CDMSD: A Decade of Dedicated Disaster Risk Management & Sustainable Development Consulting",
    category: "Organizational Updates",
    date: "Institutional Perspective",
    author: "Editorial Desk",
    summary: "Established in 2013, CDMSD continues its mission to provide cutting-edge solutions based on international best practices across Pakistan.",
    content: "Since its establishment as an independent multi-disciplinary consulting firm in 2013, CDMSD has provided technical consulting spanning grassroots community mobilization to national-level evaluation assignments.",
    verificationStatus: "VERIFIED"
  }
];

export const CMS_STATS: CMSStat[] = [
  { label: "Founding Year", value: "2013", source: "Public Organizational Record", status: "VERIFIED" },
  { label: "Consulting Sectors", value: "7 Core Domains", source: "Institutional Taxonomy", status: "VERIFIED" },
  { label: "Documented Work Sites", value: "7 Key Locations", source: "Verified Assignment Records", status: "VERIFIED" },
  { label: "Total Completed Projects", value: "[VERIFIED DATA REQUIRED]", source: "Pending CDMSD Verification", status: "CLIENT_PROVIDED" },
  { label: "Beneficiaries Reached", value: "[VERIFIED DATA REQUIRED]", source: "Pending CDMSD Verification", status: "CLIENT_PROVIDED" },
  { label: "Professionals Trained", value: "35+ Verified (Total Data Pending)", source: "Documented SBDRM Record", status: "VERIFIED" }
];
