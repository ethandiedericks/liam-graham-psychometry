export const contactDetails = {
    email: "lgrahampsychometry@outlook.com",
    phone: "+27605196193",
    location: ["279 Cape Road", "Metropolitan Office Park, Block A", "Greenacres, Newton Park", "6055"]
};


export const menuItems = [
    { name: "Home", href: "/" },
  { name: "Sevices", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Payment Terms", href: "/payment" },

];

export const footerLinks = [
    {
        group: 'Quick Links',
        items: [
            {
                title: 'Home',
                href: '/',
            },
            {
                title: 'Services',
                href: '/services',
            },
            {
                title: 'About',
                href: '/about',
            },
            {
                title: 'Contact',
                href: '/contact',
            },
   
        ],
    },
    
    {
        group: "Explore",
        items: [
          { title: "Our Services", href: "/#services" },
          { title: "About Us", href: "/#about" },
          { title: "Testimonials", href: "/#testimonials" },
          { title: "FAQ", href: "/#faq" },
   
        ]
      },
    {
        group: 'Legal',
        items: [
            {
                title: 'Privacy Policy',
                href: '/privacy-policy',
            },
      
        ],
    },
]

// Images
import servicePageImage from "@/assets/images/services-page.jpg"
import aboutPageImage from "@/assets/images/about-page.jpg"
import paymentTermsPageImage from "@/assets/images/payment-terms-page.jpg"
import privacyPolicyPageImage from "@/assets/images/privacy-policy-page.jpg"
import contactPageImage from "@/assets/images/contact-page.jpg"
import aboutFace from "@/assets/images/liam-graham-about.jpeg"

export {servicePageImage, aboutPageImage, paymentTermsPageImage, privacyPolicyPageImage, contactPageImage, aboutFace }


// Services

import {
  ClipboardCheck,
  Brain,
  GraduationCap,
  Focus,
  School,
  Backpack,
  Briefcase,
} from "lucide-react";

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: {
    component: React.FC<{ className?: string }>;
    className?: string;
  };
  longDescription: string;
  benefits: string[];
  process: string[];
  duration: string;
  ideal: string[];
}

export const services: Service[] = [
  {
    id: 1,
    title: "Psychoeducational Assessment",
    description:
      "Comprehensive evaluations for understanding learning challenges and educational accommodations.",
    longDescription:
      "Our psychoeducational assessments provide psychological evaluations to identify learning strengths and challenges. These assessments help determine appropriate educational interventions and accommodations in accordance with professional psychological practice guidelines.",
    icon: {
      component: ClipboardCheck,
      className: "w-8 h-8 text-psycho-blue-600",
    },
    benefits: [
      "Professional documentation for educational institutions",
      "Evidence-based educational recommendations",
      "Understanding of learning profile and needs",
      "Support for appropriate accommodations",
      "Improved educational outcomes through targeted support",
    ],
    process: [
      "Initial consultation to gather background information",
      "Standardized psychological and cognitive assessment",
      "Analysis of educational history and performance",
      "Professional report with findings and recommendations",
      "Feedback session to explain results and interventions",
    ],
    duration: "2-3 sessions (4-6 hours total)",
    ideal: [
      "Students experiencing academic difficulties",
      "Individuals requiring educational accommodations",
      "Learners with suspected learning differences",
      "People seeking to understand their learning profile",
    ],
  },
  {
    id: 2,
    title: "Cognitive Assessment",
    description:
      "Psychological evaluation of cognitive functioning to understand intellectual strengths and challenges.",
    longDescription:
      "Our cognitive assessments involve psychological evaluation of intellectual abilities, memory, attention, and executive functioning. These assessments follow HPCSA guidelines for professional psychological assessment and provide insights for intervention planning.",
    icon: {
      component: Brain,
      className: "w-8 h-8 text-psycho-blue-600",
    },
    benefits: [
      "Professional evaluation of cognitive strengths and challenges",
      "Psychological recommendations for cognitive support",
      "Evidence-based intervention suggestions",
      "Understanding of cognitive functioning",
      "Professional guidance for support strategies",
    ],
    process: [
      "Comprehensive clinical interview",
      "Standardized psychological assessment",
      "Professional analysis and interpretation",
      "Detailed psychological report",
      "Feedback consultation with recommendations",
    ],
    duration: "2-3 sessions (4-5 hours total)",
    ideal: [
      "Individuals with cognitive functioning concerns",
      "People seeking to understand their thinking patterns",
      "Students requiring cognitive profile assessments",
      "Adults with attention or memory difficulties",
    ],
  },
  {
    id: 3,
    title: "Educational Screening",
    description:
      "Psychological assessment of academic skills to identify learning difficulties and inform interventions.",
    longDescription:
      "Our educational screening provides psychological assessment of academic skills and cognitive processes related to learning. This professional evaluation helps identify specific learning challenges and guides educational planning within the scope of psychological practice.",
    icon: {
      component: GraduationCap,
      className: "w-8 h-8 text-psycho-blue-600",
    },
    benefits: [
      "Professional identification of learning challenges",
      "Psychologically-informed educational strategies",
      "Evidence-based intervention recommendations",
      "Understanding of learning processes",
      "Professional guidance for educational support",
    ],
    process: [
      "Background information gathering",
      "Standardized psychological assessment",
      "Analysis of academic functioning",
      "Professional psychological report",
      "Feedback consultation with recommendations",
    ],
    duration: "2-3 sessions (4-6 hours total)",
    ideal: [
      "Students experiencing specific learning difficulties",
      "Individuals with unexplained academic challenges",
      "Parents seeking professional guidance for their child's education",
      "Teachers requiring psychological insights for intervention planning",
    ],
  },
  {
    id: 4,
    title: "Attention Difficulties Assessment",
    description:
      "Psychological evaluation of attention, concentration, and executive functioning to inform intervention.",
    longDescription:
      "Our attention difficulties assessment provides psychological evaluation of attention, concentration, and executive functioning. This assessment follows HPCSA guidelines for professional psychological practice and helps inform appropriate management strategies.",
    icon: {
      component: Focus,
      className: "w-8 h-8 text-psycho-blue-600",
    },
    benefits: [
      "Professional psychological assessment of attention patterns",
      "Evidence-based recommendations for support",
      "Understanding of executive functioning profile",
      "Strategies for managing attention difficulties",
      "Professional guidance for functional improvement",
    ],
    process: [
      "Comprehensive clinical interview",
      "Standardized psychological assessment measures",
      "Collection of contextual information",
      "Professional psychological report",
      "Feedback consultation with recommendations",
    ],
    duration: "3 sessions (5-6 hours total)",
    ideal: [
      "Individuals experiencing attention or concentration difficulties",
      "Students struggling with organization and task completion",
      "Adults with executive functioning concerns",
      "People seeking to understand their attention patterns",
    ],
  },
  {
    id: 5,
    title: "School Placement Assessment",
    description:
      "Psychological evaluation to inform educational placement decisions and learning environment needs.",
    longDescription:
      "Our school placement assessments provide psychological evaluations of cognitive abilities, learning styles, and educational needs. These professional assessments help identify appropriate educational environments in accordance with psychological practice guidelines.",
    icon: {
      component: School,
      className: "w-8 h-8 text-psycho-blue-600",
    },
    benefits: [
      "Professional psychological assessment for educational planning",
      "Evidence-based recommendations for learning environments",
      "Understanding of individual educational needs",
      "Professional documentation for school applications",
      "Psychological insights for educational decision-making",
    ],
    process: [
      "Comprehensive background information gathering",
      "Standardized psychological assessment",
      "Analysis of learning needs and preferences",
      "Professional psychological report",
      "Feedback consultation with recommendations",
    ],
    duration: "3-4 sessions (6-8 hours total)",
    ideal: [
      "Students requiring specialized educational environments",
      "Children with learning or developmental differences",
      "Families considering educational options",
      "Individuals transitioning between educational settings",
    ],
  },
  {
    id: 6,
    title: "Developmental Assessment",
    description:
      "Psychological evaluation of developmental readiness for educational transitions and milestones.",
    longDescription:
      "Our developmental assessments provide psychological evaluation of cognitive, language, and social-emotional development. These professional assessments help determine readiness for educational transitions and inform developmental support strategies.",
    icon: {
      component: Backpack,
      className: "w-8 h-8 text-psycho-blue-600",
    },
    benefits: [
      "Professional evaluation of developmental functioning",
      "Evidence-based recommendations for support",
      "Understanding of developmental strengths and needs",
      "Psychological insights for educational planning",
      "Professional guidance for developmental support",
    ],
    process: [
      "Comprehensive developmental history review",
      "Standardized psychological assessment",
      "Observation of developmental functioning",
      "Professional psychological report",
      "Feedback consultation with recommendations",
    ],
    duration: "2 sessions (3-4 hours total)",
    ideal: [
      "Children approaching developmental transitions",
      "Parents seeking professional guidance on developmental concerns",
      "Families considering educational readiness",
      "Individuals requiring developmental evaluation",
    ],
  },
  {
    id: 7,
    title: "Career Assessment",
    description:
      "Psychological evaluation of aptitudes, interests, and personality to inform educational and career planning.",
    longDescription:
      "Our career assessments provide psychological evaluation of cognitive abilities, occupational interests, and personality factors relevant to career development. These professional assessments help inform educational and career planning within the scope of psychological practice.",
    icon: {
      component: Briefcase,
      className: "w-8 h-8 text-psycho-blue-600",
    },
    benefits: [
      "Professional psychological insights for career planning",
      "Evidence-based recommendations for educational pathways",
      "Understanding of personal strengths and preferences",
      "Psychological guidance for career development",
      "Professional support for career decision-making",
    ],
    process: [
      "Comprehensive background information gathering",
      "Standardized psychological assessment",
      "Analysis of abilities, interests, and personality factors",
      "Professional psychological report",
      "Feedback consultation with recommendations",
    ],
    duration: "2-3 sessions (4-5 hours total)",
    ideal: [
      "Students planning educational pathways",
      "Individuals considering career directions",
      "Adults seeking career transition guidance",
      "People wanting to understand their work preferences",
    ],
  },
];