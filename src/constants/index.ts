import * as T from '@/types'
import * as Yup from 'yup';
import { Input } from "@/components/ui/input"
import { TbBrandMinecraft } from "react-icons/tb";
import { PiHandshakeThin } from "react-icons/pi";
import { PiClubFill } from "react-icons/pi";
import { Textarea } from "@/components/ui/textarea"
import {
  FaLinkedinIn, FaFacebookF, FaInstagram, FaSearchengin, FaAws, FaSalesforce,
  FaYoutube, FaArrowRight, FaUser, FaHome,FaShopify,FaRobot
} from "react-icons/fa";
import { FaXTwitter, FaBattleNet, FaQuoteLeft, FaLightbulb, FaMobileScreenButton, FaUserGroup, FaServicestack } from "react-icons/fa6";
import { LuPenTool } from "react-icons/lu";
import { BsPersonFillGear, BsClipboard2Data } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GiBigGear, GiVrHeadset,GiGiftOfKnowledge } from "react-icons/gi";
import { SiMulesoft, SiBlockchaindotcom, SiInternetcomputer, SiSinglestore ,SiCyberdefenders, SiBugcrowd,SiMixcloud,SiPowerbi    } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { GrIntegration } from "react-icons/gr";
import { MdOutlineHealthAndSafety } from "react-icons/md";



export const companyName: string = 'Tech Flow LLc'



export const navLinks: T.NavLink[] = [
  { title: "home", link: "/", menu: false },
  { title: "Services", link: "/services", menu: [{ title: 'comming soon', link: '/some' }] },
  { title: "company", link: "/company", menu: false },
  { title: "careers", link: "/careers", menu: false },
  { title: "work", link: "/our-work", menu: false },
];


export const socialLinks: T.SocialLinks[] = [
  { Icon: FaLinkedinIn, url: 'https://www.some.com/' },
  { Icon: FaXTwitter, url: 'https://www.some.com/' },
  { Icon: FaFacebookF, url: 'https://www.some.com/' },
  { Icon: FaInstagram, url: 'https://www.some.com/' },
  { Icon: FaYoutube, url: 'https://www.some.com/' },

]


export const formValidation: T.FormValidation = {
  fullName: Yup.string()
    .required("Full name is Required")
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name cannot exceed 50 characters"),
  email: Yup.string().required("Email is Required").email("Invalid email address"),
  phone: Yup.string()
    .matches(/^\+0 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, 'Invalid phone number')
    .required('Phone number is required'),
  organization: Yup.string().required("Organization is Required").min(3, "Message must be at least 3 characters").max(200, "Message cannot exceed 200 characters"),
  message: Yup.string().required("Message is Required").min(10, "Message must be at least 10 characters").max(200, "Message cannot exceed 200 characters"),
};


export const formInputs: T.FormInputs[] = [
  { label: 'Your Name', type: 'text', name: 'fullName', field: Input },
  { label: 'Your Email', type: 'email', name: 'email', field: Input },
  { label: 'Your Number', type: 'tel', name: 'phone', field: Input },
  { label: 'Your Organization', type: 'text', name: 'organization', field: Input },
  { label: 'Your message...', type: '', name: 'message', field: Textarea },
]


export const formInfo: T.FormInfo = {
  image: '/form-info.jpg',
  title: 'qasim shamim',
  heading: 'Business Expert Manager',
  email: 'qasimshamim9@gmail.com',
  phone: '571 549 8430',
  link: {
    Icon: FaLinkedinIn,
    url: 'https://linkedin.com/in/qasim-shamim'
  }
}


export const companyCard: T.CompanyCard[] = [
  {
    Icon: PiHandshakeThin,
    heading: 'building partnerships that last',
    description: 'we nurture long-term relationships by creating value for our clients in all industries.'
  },
  {
    Icon: TbBrandMinecraft,
    heading: 'creating value',
    description: 'our world-class team of engineers is ready to take on diverse and challenging projects to create real value.'
  },
  {
    Icon: FaBattleNet,
    heading: 'proven capability',
    description: 'give us a problem and we will engineer a solution! we build enterprise and analytical software for every industry.'
  }
]


export const jobsCard: T.JobsCard[] = [
  {
    heading: 'Artificial Intelligence',
    Icon: FaArrowRight,
    location: 'new york,us',
    url: '/Artificial Intelligence'
  },
  {
    heading: 'Internet of Things (IoT)',
    Icon: FaArrowRight,
    location: 'new york,us',
    url: '/Internet of Things (IoT)'
  },
  {
    heading: 'Data & Analytics',
    Icon: FaArrowRight,
    location: 'new york,us',
    url: '/Data & Analytics'
  },
  {
    heading: 'Blockchain',
    Icon: FaArrowRight,
    location: 'new york,us',
    url: '/Blockchain'
  },
  {
    heading: 'Application Security Services',
    Icon: FaArrowRight,
    location: 'new york,us',
    url: '/Application Security Services'
  },
  {
    heading: 'System Integration',
    Icon: FaArrowRight,
    location: 'new york,us',
    url: '/System Integration'
  },
]


export const ourPeople: T.OurPeople = {
  image: '/ourWork.webp',
  heading: 'Meet Our Exceptional Team at Tech Flow LLC',
  description: `At Tech Flow LLC, we're powered by a diverse team of over 50 professionals across two global offices. With 150+ successful projects under our belt and a stellar rating of 4.9, we're renowned for our dedication to excellence. Our team brings together expertise from various backgrounds, united by a shared commitment to driving innovation and exceeding client expectations. Behind every success story is a talented individual, and at Tech Flow LLC, our team is the driving force behind our achievements. Join us on our journey of innovation and excellence.`,
  btn: 'learn more',
  url: '/company',
}


export const homePartnership: T.HomePartnership = {
  image: '/worker.png',
  heading: 'Our Technology Partnerships',
  description:`Tech Flow LLC fosters strategic alliances with leading technology providers to elevate our solutions to new heights. These partnerships enable us to access cutting-edge tools, platforms, and resources, empowering our team to deliver innovative solutions that exceed client expectations. By staying closely aligned with industry leaders, we ensure that our offerings are always at the forefront of technological advancements, driving superior results and value for our clients.`
}


export const homePartnership2: T.HomePartnership2 = {
  image: '/Illustration2.webp',
  heading: 'Decades of Partnership Excellence',
  description: `Tech Flow LLC takes immense pride in the enduring relationships we've cultivated over decades of partnership with industry leaders. These long-standing collaborations signify our commitment to excellence and continuous innovation. Through mutual trust and shared goals, we've navigated technological shifts and market trends, consistently delivering exceptional solutions to our clients. Our enduring partnerships serve as a testament to our reliability, adaptability, and unwavering dedication to driving success for all stakeholders involved.`,
  btn: 'view our technical skill set',
  url: '/our-work'
}


export const testimonial: T.Testimonial[] = [
  {
    heading: 'Amazing Service!',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    Icon: FaQuoteLeft,
    tagLine: 'John Doe, CEO at XYZ Company',
    image: 'https://avatars.mds.yandex.net/i?id=f73d2032ea7a3adc6dae74dc073b5bb54f353205-10806524-images-thumbs&n=13',
  },
  {
    heading: 'Great Experience!',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    Icon: FaQuoteLeft,
    tagLine: 'Jane Smith, Founder of ABC Inc.',
    image: 'https://avatars.mds.yandex.net/i?id=f73d2032ea7a3adc6dae74dc073b5bb54f353205-10806524-images-thumbs&n=13',
  },
];


export const journey: T.Journey[] = [
  {
    count: 50,
    p: 'people onboard',
    plus: true,
    Icon: FaUser
  },
  {
    count: 2,
    p: 'global offices',
    plus: false,
    Icon: FaHome
  },
  {
    count: 150,
    p: 'projects completed',
    plus: true,
    Icon: FaLightbulb
  },
  {
    count: 4.9,
    p: 'clutch rating',
    plus: false,
    Icon: PiClubFill
  },
]

export const marqueeImageLinks: string[] = [
  '/projects/1.png',
  '/projects/2.png',
  '/projects/3.png',
  '/projects/4.png',
  '/projects/5.png',
  '/projects/6.png',
  '/projects/7.png',
  '/projects/8.png',
  '/projects/9.png',
]


export const workCards: T.WorkCards[] = [
  {
    image: "/work-cards/1.png",
    text: "Arbisoft helped edX create apps, courses, and data analytics for 20M+ learners.",
    url: '/some'
  },
  {
    image: "/work-cards/2.png",
    text: "With zero downtime, we have expanded six continents.",
    url: '/some'
  },
  {
    image: "/work-cards/3.png",
    text: "Developing an award-winning app that helped the company expand into Europe & North America.",
    url: '/some'
  },
  {
    image: "/work-cards/4.png",
    text: "Building the world’s leading travel search engine from scratch.",
    url: '/some'
  },
  {
    image: "/work-cards/5.png",
    text: "Reducing crawl time from 168 hours to 4 hours to save millions in revenue.",
    url: '/some'
  },
  {
    image: "/work-cards/6.png",
    text: "Arbisoft and Philanthropy University partnered to create a learning platform that transforms the impact of local organizations.",
    url: '/some'
  }
]


export const teamCards: T.TeamCards[] = [
  {
    image: '/team/1.webp',
    heading: 'Qasim Ali',
    tagline: 'Founder and CEO',
    description: 'Meet Qasim Shahmin, the pioneering CEO and Founder of Tech Flow LLC, leading our dynamic team towards a future of technological brilliance.',
    linkedin:'https://www.linkedin.com/in/qasim-shamim/'
  },
  {
    image: '/team/2.webp',
    heading: 'Muneeb ur Rehman',
    tagline: 'Project Manager',
    description: 'Introducing Muneeb ur Rehman, our dedicated Project Manager at Tech Flow LLC, orchestrating seamless execution and delivery of cutting-edge tech solutions.',
    linkedin:'https://www.linkedin.com/in/muneeb-ur-rehman-929647177/'
  },
  {
    image: '/team/3.webp',
    heading: 'Ahmed Afzal Khan',
    tagline: 'Business Development Officer',
    description: 'Meet Ahmed Afzal Khan, our dynamic Business Development Officer at Tech Flow LLC, driving strategic partnerships and fostering growth opportunities in the ever-evolving tech landscape.',
    linkedin:'https://www.linkedin.com/in/ahmed-afzal-khan-800077140/'
  },
  {
    image: '/team/4.png',
    heading: 'Tahir Hussain',
    tagline: 'Content Manager',
    description: 'Meet Tahir Hussain, our visionary Content Manager at Tech Flow LLC, sculpting narratives that breathe life into our technological journey and connect with our audience on a deeper level.',
    linkedin:'https://www.linkedin.com/in/tahir-hussain-5861b7211/'
  },
]

export const serviceCards: T.ServiceCards[] = [
  {
    heading: 'Software Development',
    description: 'Named among top 1% global companies by Clutch, we have the trust of 500+ companies when it comes to bespoke software solutions.',
    bg: false,
    services: [
      {
        Icon: FaSearchengin,
        title: 'q/a testing',
        url: '/some'
      },
      {
        Icon: LuPenTool,
        title: 'ui/ux design',
        url: '/some'
      },
      {
        Icon: SiInternetcomputer,
        title: 'dev ops',
        url: '/some'
      },
      {
        Icon: FaMobileScreenButton,
        title: 'mobile development',
        url: '/some'
      },
      {
        Icon: CgWebsite ,
        title: 'custom software development',
        url: '/some'
      },
      {
        Icon: SiInternetcomputer,
        title: 'embedded software development',
        url: '/some'
      },
      {
        Icon: GrIntegration,
        title: 'web app development',
        url: '/some'
      },
    ]
  },
  {
    heading: 'Consultation Services',
    description: 'We will help you accelerate your digital transformation journey.',
    bg: true,
    services: [
      {
        Icon: FaUserGroup,
        title: 'discovery workshop',
        url: '/some'
      },
      {
        Icon: IoDocumentTextOutline,
        title: 'product strategy',
        url: '/some'
      },
      {
        Icon: BsPersonFillGear,
        title: 'process consulting',
        url: '/some'
      },
      {
        Icon: GiBigGear,
        title: 'poc',
        url: '/some'
      },
    ]
  },
  {
    heading: 'Solution Implementation',
    description: 'As a trusted partner of world’s leading CRM solutions, we can help you customize and implement business solutions 3x faster and smarter.',
    bg: false,
    services: [
      {
        Icon: FaSalesforce,
        title: 'salesforce',
        url: '/some'
      },
      {
        Icon: FaServicestack,
        title: 'services now',
        url: '/some'
      },
      {
        Icon: SiMulesoft,
        title: 'mulesoft',
        url: '/some'
      },
      {
        Icon: FaAws,
        title: 'aws',
        url: '/some'
      },
      {
        Icon: SiCyberdefenders ,
        title: 'cyber security',
        url: '/some'
      },
      {
        Icon:  SiBugcrowd ,
        title: 'bpo',
        url: '/some'
      },
      {
        Icon:SiMixcloud ,
        title: 'cloud migration',
        url: '/some'
      },
      {
        Icon: FaShopify,
        title: 'shopify',
        url: '/some'
      },
      {
        Icon: SiPowerbi ,
        title: 'power bi',
        url: '/some'
      },
    ]
  },
  {
    heading: 'Emerging Technologies',
    description: 'We help companies become an early adopter of emerging technologies to stay ahead of their competitors.',
    bg: true,
    services: [
      {
        Icon: BsClipboard2Data,
        title: 'data science & ai',
        url: '/some'
      },
      {
        Icon: SiBlockchaindotcom,
        title: 'blockchain',
        url: '/some'
      },
      {
        Icon: SiSinglestore,
        title: 'internet of things',
        url: '/some'
      },
      {
        Icon: GiVrHeadset,
        title: 'ar/vr',
        url: '/some'
      },


      {
        Icon: MdOutlineHealthAndSafety,
        title: 'healthcare',
        url: '/some'
      },
      {
        Icon: GiGiftOfKnowledge,
        title: 'e-learning',
        url: '/some'
      },
      {
        Icon:FaRobot,
        title: 'robotic process automation',
        url: '/some'
      },
    ]
  },
]

export const companyAbout: T.CompanyAbout[] = [
  {
    heading: 'our vision',
    description: `Tech Flow LLC Vision: Excelling Today, Innovating Tomorrow
    At Tech Flow LLC, our vision is concise: to excel in the present and innovate for tomorrow. As an IT company, we're committed to leading the industry with cutting-edge solutions. We envision a future where Tech Flow LLC is synonymous with technological prowess, delivering unparalleled excellence in IT services. Our focus on constant innovation ensures that we remain at the forefront of the ever-evolving tech landscape. In essence, Tech Flow LLC is not just an IT company; we are the catalyst for progress, shaping the digital future.`,
    image: '/com.png',
    tagline: `Qasim Shamim - CEO`
  },
  {
    heading: 'our mission',
    description: `Elevate IT Excellence
    Tech Flow LLC is on a mission to redefine IT excellence through innovation, client-centricity, and precision. We provide top-tier services, integrating cutting-edge technologies to empower our clients. Our commitment to execution excellence, agile adaptability, and sustainability sets a new standard in the dynamic IT landscape. In essence, we are shaping the future of IT services with focused, exceptional solutions.`,
    image: '/mission.png',
    tagline: 'project manager'
  },
]