import * as T from '@/types'
import * as Fa from "react-icons/fa";
import * as Io5 from "react-icons/io5";
import * as Pi from "react-icons/pi";
import * as Hi from "react-icons/hi2";
import * as Fa6 from "react-icons/fa6";
import * as Gi from "react-icons/gi";
import * as Gr from "react-icons/gr";
import * as Tb from "react-icons/tb";
import * as Md from "react-icons/md";
import * as Si from "react-icons/si";
import * as Io from "react-icons/io";


export const serviceDetailCard: T.ServiceDetailCard[] = [
  {
    page: 'mobile-development',
    heading: `Our Mobile Apps Are Engineered To Be Secure, Fast & User Friendly`,
    description: `Tkxel offers full-service mobile app development. Whether you need design, coding, management, or integration services, we'll build your product from scratch into a fully functioning application that meets your expectations.

      We start with the end in mind. We dig deep to make sure we understand your industry, user, and value proposition. Then we define the metrics and KPIs that guide our success. We help you create a product that delights your users. And we help you develop a brand strategy based on extensive user research, usability testing, and competitive analysis.`,
    cardsData: [
      {
        bg: true,
        heading: 'Our Mobile App Development Services',
        description: 'Delight your customers with feature-rich, expressive apps that are native to their devices.',
        data: [
          {
            Icon: Io5.IoPhonePortraitOutline,
            title: `Native Mobile App Development`,
            description: 'Our native mobile app developers can build apps that fit all your needs, from security to design'
          },
          {
            Icon: Fa.FaCode,
            title: `Hybrid Mobile App Development`,
            description: 'We help you develop apps that are fully functional on different devices, leveraging a unique blend of technologies.'
          },
          {
            Icon: Pi.PiProjectorScreenLight,
            title: `Wearables and Embedded software`,
            description: 'We can create companion apps for a number of wearable devices, integrate with smart devices or proprietary peripherals.'
          },
        ]
      },
      {
        bg: false,
        heading: `How Can We Help You?`,
        description: `Providing Innovative App Development with Enhance User Experience.`,
        data: [
          {
            Icon: Hi.HiOutlineCodeBracketSquare,
            title: `Android App Development`,
            description: `We use the latest technology to help businesses establish their presence on any android device and platform.`
          },
          {
            Icon: Io5.IoPhonePortraitOutline,
            title: `iOS App Development`,
            description: 'We have all the expertise and latest technologies you need to produce feature-rich, scalable IOS apps.'
          }
        ]
      },

    ]
  },
  {
    page: 'qa-testing',
    heading: `Raising The Bar For Software Reliability`,
    description: `Did you know that 96% of users will not return to your website if they have a bad experience? You don’t have to worry about product quality anymore. You’ll know in advance if your product meets requirements and can help prevent PR debacles.

      Build trust and credibility with your customers by going live with a fully tested version of your product.Our enterprise-class quality assurance services enable you to deliver a robust, user-friendly product to market.`,
    cardsData: [
      {
        bg: true,
        heading: 'Our Services',
        description: '',
        data: [
          {
            Icon: Fa6.FaUsersGear,
            title: `Functional Testing`,
            description: `Evaluate the software's functionality, usability, and compatibility.`
          },
          {
            Icon: Gi.GiTribalGear,
            title: `Non-Functional Testing`,
            description: `Evaluate the software's performance, security, and other non-functional aspects.`
          },
          {
            Icon: Fa6.FaUnity,
            title: `Unit Testing`,
            description: `Test individual units and components such as functions and methods.`
          },
        ]
      },
      {
        bg: false,
        heading: `How Can We Help You?`,
        description: `Providing Innovative Development with Enhance User Experience.`,
        data: [
          {
            Icon: Gr.GrIntegration,
            title: `Integration Testing`,
            description: `Verify that software components are integrated as specified`
          },
          {
            Icon: Tb.TbTestPipeOff,
            title: `System Testing`,
            description: `Verify that the entire software system meets specified requirements`
          }
        ]
      },

    ]
  },
  {
    page: 'ui-ux-design',
    heading: `Tkxel Pivots On A Solid Foundation, One That Is Built On Your Vision & Our Expertise.`,
    description: `We apply collaborative, human-centered design thinking to even the toughest of business challenges. With a relentless commitment to innovation and world-class craftsmanship, we deliver the most beautiful, meaningful and impactful experiences for your customers.`,
    cardsData: [
      {
        bg: true,
        heading: 'Our Services',
        description: '',
        data: [
          {
            Icon: Fa.FaAirFreshener ,
            title: `User Research`,
            description: `We conduct research on target users to understand their needs, behaviors, and preferences.`
          },
          {
            Icon: Md.MdOutlineDesignServices,
            title: `Interface Design`,
            description: `We design the visual elements of a product and create wireframes and mockups.`
          },
          {
            Icon: Si.SiMaterialdesignicons,
            title: `Interaction Design`,
            description: `We design the interactions and user flows within a product, such as navigation, buttons, and gestures.`
          },
        ]
      },
      {
        bg: false,
        heading: `How Can We Help You?`,
        description: `Providing Innovative Development with Enhance User Experience.`,
        data: [
          {
            Icon: Tb.TbAdjustmentsHorizontal,
            title: `Usability Testing`,
            description: `We test a product with users to see how easily they can accomplish tasks and identify any problems or areas for improvement.`
          },
          {
            Icon: Si.SiProtonmail,
            title: `Prototyping`,
            description: `We create a working model of the product, which can be used for testing and demonstration purposes.`
          }
        ]
      },

    ]
  },
  {
    page: 'dev-ops',
    heading: `Achieve High-Velocity Operational Efficiency`,
    description: `DevOps implementation is a complicated process that requires a well-thought-out strategy and a carefully planned approach. By implementing DevOps, your company can streamline development and release processes. As a result, you avoid errors, increase productivity, and improve customer satisfaction.`,
    cardsData: [
      {
        bg: true,
        heading: 'Custom DevOps Solutions',
        description: 'Accelerating software delivery with DevOps expertise',
        data: [
          {
            Icon: Fa.FaHeadSideVirus,
            title: `DevOps Assessment`,
            description: `Our DevOps engineers analyze the key points of your deployment processes and recommend tools and processes that help you increase efficiency.`
          },
          {
            Icon: Gi.GiInfinity,
            title: `DevOps Automation`,
            description: `We automate the end to end delivery cycle, decreasing deployment and rollback times, minimizing risk and boosting productivity.`
          },
          {
            Icon: Io5.IoCodeSlash,
            title: `DevOps Management`,
            description: `We'll help you to integrate your delivery pipeline automation cycle with the rest of your development process.`
          },
        ]
      },
      {
        bg: false,
        heading: `Our DevOps Services`,
        description: ``,
        data: [
          {
            Icon: Io.IoLogoCodepen,
            title: `Infrastructure Automation`,
            description: `Develop and manage infrastructure as code to automate the provisioning, scaling, and management of IT resources.`
          },
          {
            Icon: Io5.IoBarcodeSharp,
            title: `Continuous Integration and Deployment (CI/CD)`,
            description: `Automate the building, testing, and deployment of software, using tools like Jenkins, Travis CI, and CircleCI.`
          }
        ]
      },

    ]
  },
  {
    page: 'custom-software-development',
    heading: `Your Custom Software Development Partner`,
    description: `tkxel is a digital innovation hub that can bring your world-changing ideas to life. With us on your side, you get access to the best of both worlds: top 2% talent on one side, and an innovative value-driven approach on the other.

    We’ve got hundreds of emerging tools and technologies that can rocket-launch your product into the marketplace.`,
    cardsData: [
      {
        bg: true,
        heading: 'Innovative Solutions',
        description: 'For Reliable Growth',
        data: [
          {
            Icon: Md.MdScreenShare,
            title: `Web App Development`,
            description: `We will help you develop interactive and intuitive web applications that are ready to handle millions of users daily`
          },
          {
            Icon: Fa6.FaMobileScreenButton,
            title: `Mobile App Development`,
            description: `Our experts can adapt to any industry and develop world-class mobile apps that can be synchronized across multiple platforms.`
          },
          {
            Icon: Io5.IoRocket,
            title: `Startups`,
            description: `MVP for quick launch to market, Fixed price estimates for clear budgeting, Agile practices to accelerate project delivery`
          },
        ]
      },
      {
        bg: false,
        heading: `Custom Software Solutions For Business Of Any Size`,
        description: ``,
        data: [
          {
            Icon: Fa6.FaBuildingWheat,
            title: `SMBs`,
            description: `Flexible engagement models
            In-depth domain expertise & industry knowledge
            Tried-and-tested environment optimization methods`
          },
          {
            Icon: Gi.GiShop,
            title: `Enterprises`,
            description: `Consultancy to chalk out a future roadmap, Compliance with industry standards and regulations, Leverage emerging technologies`
          }
        ]
      },

    ]
  },
  {
    page: 'embedded-software-development',
    heading: `We Help You Build Embedded Systems From The Ground Up, Working With You Every Step Of The Way.`,
    description: `tkxel builds secure, scalable multi-technology network solutions that connect user devices, business units and industrial systems.

    As an embedded software development company, we have a proven track record of delivering high-quality software solutions for a wide range of embedded systems and applications.`,
    cardsData: [
      {
        bg: true,
        heading: 'Our Services',
        description: '',
        data: [
          {
            Icon: Fa6.FaMicrochip,
            title: `Embedded Software Development`,
            description: `Develop custom software for embedded systems, such as microcontrollers, single-board computers, and IoT devices.`
          },
          {
            Icon: Fa.FaMicrochip,
            title: `Firmware Development`,
            description: `Create firmware, which is low-level software that controls the basic functionality of an embedded system.`
          },
          {
            Icon: Gi.GiCheckboxTree,
            title: `Board Support Package (BSP) Development`,
            description: `Develop BSPs, which are software packages that provide a bridge between the hardware of an embedded system and the operating system or other software running on it.`
          },
        ]
      },
      {
        bg: false,
        heading: `How Can We Help You?`,
        description: ``,
        data: [
          {
            Icon: Gi.GiPsychicWaves,
            title: `Device Driver Development`,
            description: `Create device drivers, which are software interfaces that allow the operating system or other software to communicate with specific hardware devices.`
          },
          {
            Icon: Si.SiSystem76,
            title: `Systems Integration`,
            description: `Integrate different software and hardware components to create a complete embedded system.`
          }
        ]
      },

    ]
  },
  {
    page: 'web-app-development',
    heading: `High-Performance, Fault-Tolerant & Scalable Web Applications.`,
    description: `Tkxel helps you go beyond your current application landscape and embrace a dynamic, fast-paced approach to IT. By offering a full suite of web application development, modernization and management services, we can help you through each stage of your application lifecycle.`,
    cardsData: [
      {
        bg: true,
        heading: 'Our Services',
        description: '',
        data: [
          {
            Icon: Fa6.FaMicrochip,
            title: `Experience Design`,
            description: `Our extensive expertise in UI/UX design and front-end development allows us to create delightful user experiences.`
          },
          {
            Icon: Fa.FaMicrochip,
            title: `Frontend Development`,
            description: `We offer full-stack front-end expertise to create innovative, human-centric and goal-oriented web & mobile solutions.`
          },
          {
            Icon: Gi.GiCheckboxTree,
            title: `Backend Development`,
            description: `We build back-end solutions that are extensible, scalable, and easy to maintain.`
          },
        ]
      },
      {
        bg: false,
        heading: `How Can We Help You?`,
        description: ``,
        data: [
          {
            Icon: Gi.GiPsychicWaves,
            title: `Full Stack
            Development`,
            description: `We provide full-spectrum software engineering for the simple to high-performing backend.`
          },
          {
            Icon: Si.SiSystem76,
            title: `E-Commerce Web
            Development`,
            description: `Tkxel can build web apps for e-commerce businesses, including online stores, shopping carts, and payment gateway integration.`
          }
        ]
      },

    ]
  },

]