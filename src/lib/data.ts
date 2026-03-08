// Shared data for services, authorities, projects, etc.

export const SERVICES = [
  {
    id: 'architectural-design',
    slug: 'architectural-design',
    icon: '🏛️',
    title: 'Architectural Design & Interior Solutions',
    shortDesc: 'Bespoke architectural and interior design concepts crafted to reflect your vision with precision and elegance.',
    fullDesc: 'At Al Tamdeen Construction, we believe that architecture is more than just building structures — it’s about shaping experiences, enhancing lifestyles, and reflecting individuality. Our Architectural Design & Interior Solutions are crafted to merge creativity, functionality, and sustainability, delivering spaces that are visually captivating, highly functional, and aligned with your vision.\n\nWhether it’s a residential villa, commercial office, retail space, or hospitality project, we tailor every design to reflect the client’s brand identity, lifestyle, and operational needs. Our team balances innovative aesthetics with practical engineering, ensuring that every element—from layout to finishes—enhances the overall experience.',
    services: [], // Kept for backwards compatibility
    detailedServices: [
      {
        title: 'Concept & Detailed Design',
        desc: 'We create customized design solutions starting from conceptual sketches to fully detailed, construction-ready plans. Each concept is developed to meet client objectives while optimizing space, functionality, and aesthetics. Our detailed designs include:',
        items: [
          'Architectural drawings for construction approvals.',
          'Interior layouts tailored to client requirements.',
          'Integration of sustainable and energy-efficient solutions.',
          'Coordination with structural and MEP engineers for feasibility.'
        ]
      },
      {
        title: '3D Visualization & Rendering',
        desc: 'We bring your vision to life through highly realistic 3D visualizations, allowing you to experience the design before construction begins. Our visualizations help clients:',
        items: [
          'Understand spatial layouts and flow.',
          'Visualize materials, finishes, and lighting effects.',
          'Make informed decisions on design changes early in the project.',
          'Present concepts effectively for stakeholder approval.'
        ]
      },
      {
        title: 'Space Planning & Layouts',
        desc: 'Efficient space utilization is a key component of our design philosophy. We focus on:',
        items: [
          'Optimizing functionality while maintaining aesthetics.',
          'Designing layouts that enhance movement, accessibility, and productivity.',
          'Integrating multi-functional spaces to maximize utility.',
          'Ensuring compliance with local building codes and accessibility standards.'
        ]
      },
      {
        title: 'Material Selection & Finishing Concepts',
        desc: 'We guide clients in choosing materials, finishes, and furnishings that are both beautiful and durable. Our expertise ensures:',
        items: [
          'High-quality materials suited to each environment.',
          'Sustainable, eco-friendly options for energy efficiency.',
          'Consistency in textures, colors, and design themes.',
          'Longevity and low-maintenance finishes.'
        ]
      },
      {
        title: 'Value Engineering',
        desc: 'We offer strategic design and cost optimization without compromising quality or aesthetics. Our value engineering services include:',
        items: [
          'Identifying cost-effective construction solutions.',
          'Evaluating alternative materials or methods.',
          'Reducing waste and optimizing resources.',
          'Maintaining high design standards while managing budgets efficiently.'
        ]
      }
    ],
    benefits: [
      'Innovative and Functional Design: Unique spaces that combine beauty and utility.',
      'Seamless Integration: Architecture and interiors work together for a cohesive experience.',
      'Enhanced Comfort and Efficiency: Layouts and systems designed for usability and convenience.',
      'Risk and Cost Management: Careful planning reduces errors, delays, and cost overruns.',
      'Future-Ready Spaces: Sustainable and adaptable designs for long-term usability.'
    ],
    whyChooseUs: [
      'Expert Design Professionals: Our team includes architects, interior designers, and engineers with years of experience across residential, commercial, and hospitality sectors.',
      'End-to-End Service: From conceptualization to handover, we manage every stage of the design and implementation process.',
      'Regulatory Compliance: All designs are fully compliant with local regulations, building codes, and modern design standards.',
      'Collaborative Approach: We work closely with clients, stakeholders, and consultants to ensure every requirement is met.',
      'Attention to Detail: Focus on quality, precision, and finish to create spaces that truly stand out.'
    ],
    customProcess: [
      { step: '01', title: 'Initial Consultation & Requirement Analysis', desc: 'Understanding your vision and objectives.' },
      { step: '02', title: 'Conceptual Design & Mood Boards', desc: 'Developing initial aesthetics and layout concepts.' },
      { step: '03', title: 'Detailed Drawings & Approvals', desc: 'Creating construction-ready plans and handling permits.' },
      { step: '04', title: '3D Renderings & Virtual Walkthroughs', desc: 'Visualizing the final product before execution.' },
      { step: '05', title: 'Material Selection & Finishing', desc: 'Curating the perfect materials for your space.' },
      { step: '06', title: 'Coordination with Construction & MEP', desc: 'Ensuring seamless integration of all systems.' },
      { step: '07', title: 'Project Delivery & Handover', desc: 'Final execution and handover of the completed space.' }
    ],
    image: '/images/services.png',
  },
  {
    id: 'authority-approvals',
    slug: 'authority-approvals',
    icon: '📋',
    title: 'Authority Approval Works',
    shortDesc: 'End-to-end management of permits and approvals across all Dubai regulatory bodies.',
    fullDesc: 'Navigating Dubai’s authority approvals can be complex and time-consuming. At Al Tamdeen Construction, we simplify this process with expert guidance and end-to-end support. Our team has extensive experience with all major Dubai authorities, including Dubai Municipality (DM), Dubai Development Authority (DDA), Trakhees, Dubai Civil Defense (DCD), Roads and Transport Authority (RTA), DEWA, and Developer NOCs (Emaar, Nakheel, DSO, etc.).\n\nWe manage every step of the approval process, from initial design submission to final completion certificates, ensuring that your project progresses smoothly, legally, and efficiently.',
    services: [], // Kept for backwards compatibility
    detailedServices: [
      {
        title: 'Design & Drawing Submissions',
        desc: 'Preparation and coordination of all necessary technical documents:',
        items: [
          'Preparation of detailed architectural, structural, and MEP drawings.',
          'Ensuring all submissions comply with authority-specific standards.',
          'Coordination of revisions and updates during the approval process.'
        ]
      },
      {
        title: 'NOCs, Permits & Approvals',
        desc: 'Securing all required documentation to commence and continue work seamlessly:',
        items: [
          'Obtaining No Objection Certificates (NOCs) for renovations, fit-outs, and new constructions.',
          'Securing all necessary permits for building, electrical, plumbing, and civil works.',
          'Fast-tracking approvals to reduce project delays.'
        ]
      },
      {
        title: 'Inspections & Completion Certificates',
        desc: 'Managing the critical final stages of physical authority sign-off:',
        items: [
          'Coordination with authority inspectors for on-site checks.',
          'Managing final inspections to ensure compliance with all regulations.',
          'Obtaining Completion Certificates (CCs) required for occupancy and utilities.'
        ]
      },
      {
        title: 'Renovation & Fit-Out Permits',
        desc: 'Handling specialized approvals required for interior modifications:',
        items: [
          'Submissions for residential, commercial, and hospitality fit-outs.',
          'Ensuring all changes to existing structures meet authority requirements.',
          'Coordinating approvals for interior modifications, partitions, and systems integration.'
        ]
      },
      {
        title: 'Coordination with All Relevant Authorities',
        desc: 'Acting as your single point of contact across multiple jurisdictions:',
        items: [
          'Liaising with municipal, free zone, and developer authorities.',
          'Managing multi-authority approvals simultaneously.',
          'Ensuring seamless communication between design teams, contractors, and government entities.'
        ]
      }
    ],
    benefits: [
      'Time Efficiency: Reduces delays with fast-tracked submissions and approvals.',
      'Compliance Assurance: All approvals adhere to Dubai regulations and local codes.',
      'Risk Reduction: Avoid fines, penalties, or project halts due to non-compliance.',
      'End-to-End Support: From initial submission to final inspection and certification.',
      'Multi-Authority Expertise: Knowledge of all regulatory requirements across various Dubai zones and jurisdictions.'
    ],
    whyChooseUs: [
      'Extensive Authority Experience: Years of handling approvals with Dubai Municipality, DDA, Trakhees, RTA, DEWA, and developer authorities.',
      'Dedicated Approval Specialists: Team focused on managing documentation, follow-ups, and inspections.',
      'Efficient Multi-Authority Management: Coordination across multiple approvals for a seamless process.',
      'Proven Track Record: Successfully secured approvals for residential, commercial, retail, and industrial projects.',
      'Client-Focused Service: Personalized support and guidance for every project stage.'
    ],
    customProcess: [
      { step: '01', title: 'Initial Consultation & Assessment', desc: 'Evaluating specific authority requirements for your project.' },
      { step: '02', title: 'Drawing & Document Prep', desc: 'Preparing technical submissions to meet exact authority guidelines.' },
      { step: '03', title: 'Authority Submission', desc: 'Filing applications through the respective authority portals.' },
      { step: '04', title: 'Follow-Up & Revisions', desc: 'Handling authority queries and updating designs as requested.' },
      { step: '05', title: 'NOCs & Permit Issuance', desc: 'Securing the physical permits required to commence works.' },
      { step: '06', title: 'Inspection Coordination', desc: 'Scheduling and managing on-site authority inspections.' },
      { step: '07', title: 'Completion Certification', desc: 'Obtaining final CC for occupancy and utility connection.' }
    ],
    image: '/images/services.png',
  },
  {
    id: 'fit-out-works',
    slug: 'fit-out-works',
    icon: '🏗️',
    title: 'Fit-Out Works',
    shortDesc: 'Premium commercial and residential fit-out solutions delivered with meticulous attention to detail.',
    fullDesc: 'At Al Tamdeen Construction, our Fit-Out Works transform interiors into functional, elegant, and brand-aligned spaces. Whether for residential villas, commercial offices, retail outlets, or hospitality projects, we focus on delivering precision, quality, and aesthetic excellence at every stage.\n\nOur turnkey fit-out solutions ensure that every space is tailored to the client’s vision, optimized for functionality, and executed with meticulous attention to detail. We seamlessly integrate architectural elements, interior finishes, and MEP systems to deliver a cohesive and fully operational environment.',
    services: [], // Kept for backwards compatibility
    detailedServices: [
      {
        title: 'Turnkey Interior Fit-Outs',
        desc: 'End-to-end management of interior construction and design realization:',
        items: [
          'Complete interior construction from concept to delivery.',
          'Integration of architectural, interior, and MEP systems.',
          'Single-point responsibility ensuring smooth project execution.'
        ]
      },
      {
        title: 'Ceiling, Flooring & Partition Works',
        desc: 'Foundational interior elements designed for durability and visual appeal:',
        items: [
          'Installation of custom ceilings, high-quality flooring, and partitions.',
          'Use of durable and aesthetic materials to suit the design theme.',
          'Optimized layouts for functionality and visual appeal.'
        ]
      },
      {
        title: 'Joinery & Custom Furniture',
        desc: 'Bespoke woodwork and furnishings crafted to exact specifications:',
        items: [
          'Fabrication and installation of custom-made furniture tailored to space and client requirements.',
          'Precision joinery work for cabinetry, closets, shelving, and decorative elements.',
          'Focus on quality, durability, and finishing excellence.'
        ]
      },
      {
        title: 'Lighting & Finishing Works',
        desc: 'The final touches that bring a space to life:',
        items: [
          'Strategic lighting design to enhance ambiance and functionality.',
          'High-quality finishes, wall treatments, and decorative detailing.',
          'Coordination with interior design themes for a cohesive look.'
        ]
      },
      {
        title: 'Complete MEP Integration',
        desc: 'Invisible systems implemented flawlessly for total operational efficiency:',
        items: [
          'Seamless integration of electrical, plumbing, HVAC, and fire safety systems.',
          'Ensures full functionality without compromising design aesthetics.',
          'Compliance with local building regulations and safety standards.'
        ]
      }
    ],
    benefits: [
      'Turnkey Solutions: Complete project management under a single point of contact.',
      'Custom Designs: Spaces tailored to brand, lifestyle, and operational needs.',
      'High-Quality Execution: Attention to detail in every element, from flooring to furniture.',
      'Efficient Project Delivery: Optimized timelines with coordinated design and construction teams.',
      'Integrated Systems: MEP, lighting, and architectural elements work harmoniously.'
    ],
    whyChooseUs: [
      'Extensive experience in commercial, residential, retail, and hospitality fit-outs.',
      'Professional project management ensuring on-time, on-budget delivery.',
      'Skilled team of interior designers, joiners, electricians, and MEP specialists.',
      'Commitment to quality, aesthetics, and client satisfaction.',
      'Ability to handle complex projects with multiple stakeholders efficiently.'
    ],
    customProcess: [
      { step: '01', title: 'Consultation & Space Assessment', desc: 'Understanding your functional needs and spatial constraints.' },
      { step: '02', title: 'Concept Development & Layout Planning', desc: 'Creating optimal interior flows and design themes.' },
      { step: '03', title: 'Material Selection & Finishing Approval', desc: 'Finalizing textures, colors, and bespoke materials.' },
      { step: '04', title: 'Detailed Execution & On-Site Management', desc: 'Managing specialized teams to build the interior elements.' },
      { step: '05', title: 'Integration of MEP & Systems', desc: 'Installing and concealing all required building systems.' },
      { step: '06', title: 'Quality Assurance & Detail Review', desc: 'Meticulous inspection of every finish and joinery detail.' },
      { step: '07', title: 'Final Handover', desc: 'Delivering the fully fitted space, ready for occupancy.' }
    ],
    image: '/images/retail.png',
  },
  {
    id: 'mep-services',
    slug: 'mep-services',
    icon: '⚡',
    title: 'MEP Services',
    shortDesc: 'Comprehensive Mechanical, Electrical & Plumbing engineering for all building types.',
    fullDesc: 'At Al Tamdeen Construction, our Mechanical, Electrical, and Plumbing (MEP) Services provide comprehensive solutions to ensure that every building system is efficient, safe, and reliable. From design and installation to testing and maintenance, we handle all aspects of MEP to deliver fully functional, compliant, and sustainable systems for residential, commercial, and industrial projects.\n\nOur integrated MEP services are carefully coordinated with architectural and interior works to ensure that systems are seamlessly incorporated without compromising aesthetics or operational efficiency.',
    services: [], // Kept for backwards compatibility
    detailedServices: [
      {
        title: 'HVAC Design & Installation',
        desc: 'Ensuring optimal air quality, flow, and temperature control:',
        items: [
          'Design and installation of heating, ventilation, and air conditioning systems.',
          'Energy-efficient and sustainable solutions to reduce operational costs.',
          'Optimization of airflow and thermal comfort for residential, commercial, and industrial spaces.',
          'Integration with building management systems (BMS) for advanced control.'
        ]
      },
      {
        title: 'Electrical & Lighting Systems',
        desc: 'Providing safe, efficient, and beautifully integrated power and illumination:',
        items: [
          'Complete design and installation of power distribution, lighting, and low-voltage systems.',
          'Energy-efficient lighting solutions tailored to project requirements.',
          'Coordination with interior and architectural layouts for seamless integration.',
          'Compliance with Dubai Electrical and Safety Regulations.'
        ]
      },
      {
        title: 'Plumbing & Drainage Solutions',
        desc: 'Reliable water management from supply to sustainable drainage:',
        items: [
          'Water supply and drainage system design and installation.',
          'Sanitary plumbing, stormwater, and rainwater management solutions.',
          'Water-efficient systems and sustainable practices.',
          'Maintenance, testing, and troubleshooting of plumbing systems.'
        ]
      },
      {
        title: 'Firefighting & Fire Alarm Systems',
        desc: 'Critical systems designed to protect life, property, and ensure total code compliance:',
        items: [
          'Design and installation of fire detection, alarm, and suppression systems.',
          'Compliance with Dubai Civil Defense (DCD) fire safety regulations.',
          'Integration with building systems for automated response and monitoring.',
          'Regular testing, commissioning, and maintenance services.'
        ]
      },
      {
        title: 'Testing, Commissioning & Maintenance',
        desc: 'Ensuring systems operate at peak efficiency from day one and beyond:',
        items: [
          'Verification of MEP system performance and compliance.',
          'Commissioning of all mechanical, electrical, and plumbing installations.',
          'Preventive and corrective maintenance programs for long-term reliability.',
          'Documentation and handover reports for operational transparency.'
        ]
      }
    ],
    benefits: [
      'Efficiency & Sustainability: Energy-efficient systems reduce operational costs.',
      'Safety & Compliance: Full adherence to local regulations and safety standards.',
      'Seamless Integration: Systems are integrated with architectural and interior designs.',
      'Reliability & Longevity: High-quality materials and professional installation ensure long-term performance.',
      'Comprehensive Solutions: End-to-end service from design to maintenance.'
    ],
    whyChooseUs: [
      'Experienced MEP engineers and technicians with expertise across residential, commercial, and industrial projects.',
      'Integrated approach ensuring cohesion with architectural and fit-out works.',
      'Proven success in complex, large-scale MEP installations.',
      'Commitment to quality, safety, and client satisfaction.',
      'Strong focus on energy efficiency, sustainability, and system optimization.'
    ],
    customProcess: [
      { step: '01', title: 'Consultation & Requirement Analysis', desc: 'Evaluating your building\'s specific mechanical and electrical needs.' },
      { step: '02', title: 'Detailed MEP Design & Coordination', desc: 'Creating coordinated 3D models and schematic layouts.' },
      { step: '03', title: 'Installation & Integration', desc: 'Executing on-site works alongside construction and fit-out teams.' },
      { step: '04', title: 'Testing & Commissioning', desc: 'Rigorous testing of every component to ensure peak performance.' },
      { step: '05', title: 'Documentation & Handover', desc: 'Delivering operational manuals, guarantees, and compliance certificates.' },
      { step: '06', title: 'Maintenance & Support Services', desc: 'Providing ongoing care to maximize system lifespan.' }
    ],
    image: '/images/about.png',
  },
  {
    id: 'construction-renovation',
    slug: 'construction-renovation',
    icon: '🏢',
    title: 'Construction & Renovation',
    shortDesc: 'Full-cycle construction and renovation services from groundwork to final delivery.',
    fullDesc: 'At Al Tamdeen Construction, we deliver comprehensive construction and renovation solutions that combine structural integrity, precision, and aesthetics. From ground-up projects to refurbishment and expansion works, we ensure every project is executed with quality, safety, and timely delivery.\n\nWhether it’s a residential villa, commercial building, retail outlet, or industrial facility, our team manages all construction phases — including planning, execution, and supervision — to transform concepts into fully realized, durable structures.',
    services: [], // Kept for backwards compatibility
    detailedServices: [
      {
        title: 'Structural & Civil Works',
        desc: 'Building the fundamental framework for stability and longevity:',
        items: [
          'Foundations, structural frameworks, and reinforced concrete works.',
          'Load-bearing and non-load-bearing wall construction.',
          'Excavation, earthworks, and site preparation.',
          'Compliance with building codes and safety regulations.'
        ]
      },
      {
        title: 'Villa & Building Construction',
        desc: 'Comprehensive ground-up development for major architectural projects:',
        items: [
          'Complete construction of residential villas, apartments, and commercial buildings.',
          'Turnkey project execution from ground-breaking to handover.',
          'Integration of architectural, interior, and MEP designs.',
          'Emphasis on durability, functionality, and aesthetics.'
        ]
      },
      {
        title: 'Extensions & Renovations',
        desc: 'Breathing new life and expanding the potential of existing spaces:',
        items: [
          'Renovation of interiors and exteriors for residential and commercial properties.',
          'Structural modifications, expansion works, and refurbishments.',
          'Adaptive reuse of spaces to meet new operational requirements.',
          'Compliance with municipal and developer regulations.'
        ]
      },
      {
        title: 'Steel & Concrete Works',
        desc: 'Precision engineering for primary structural components:',
        items: [
          'Fabrication and installation of steel structures for durability and design flexibility.',
          'Concrete works for foundations, slabs, beams, and structural elements.',
          'High-precision construction ensuring structural stability and longevity.'
        ]
      },
      {
        title: 'Project Management & Supervision',
        desc: 'Expert oversight ensuring perfect execution from day one:',
        items: [
          'Comprehensive oversight from planning to completion.',
          'Coordination of contractors, suppliers, and subcontractors.',
          'Quality control, timeline management, and budget monitoring.',
          'Risk assessment and mitigation for seamless project delivery.'
        ]
      }
    ],
    benefits: [
      'High-Quality Execution: Durable and robust structures built to last.',
      'Timely Project Delivery: Efficient planning and supervision for on-schedule completion.',
      'Integrated Solutions: Cohesion with architectural, interior, and MEP works.',
      'Customization: Tailored construction solutions to meet client requirements.',
      'Safety & Compliance: Adherence to Dubai building codes and safety regulations.'
    ],
    whyChooseUs: [
      'Experienced Workforce: Skilled engineers, supervisors, and labour with multi-sector experience.',
      'End-to-End Solutions: From concept to completion, every stage is professionally managed.',
      'Attention to Detail: High standards in quality, finishing, and structural integrity.',
      'Client-Focused Approach: Transparent communication, reporting, and collaboration throughout the project.',
      'Proven Track Record: Successfully delivered projects across residential, commercial, hospitality, and industrial sectors.'
    ],
    customProcess: [
      { step: '01', title: 'Consultation & Feasibility', desc: 'Initial site review and project viability assessment.' },
      { step: '02', title: 'Planning & Approvals', desc: 'Design coordination and securing municipal permits.' },
      { step: '03', title: 'Site Preparation', desc: 'Earthworks, excavation, and establishing site infrastructure.' },
      { step: '04', title: 'Structural Construction', desc: 'Executing core steel and concrete frameworks.' },
      { step: '05', title: 'Systems & Finishing', desc: 'Integrating interior spaces and MEP networks.' },
      { step: '06', title: 'Quality Assurance', desc: 'Rigorous supervision and safety standard checks.' },
      { step: '07', title: 'Final Handover', desc: 'Project inspection and delivery of keys to the client.' }
    ],
    image: '/images/hero.png',
  },
];

export const AUTHORITIES = [
  {
    id: 'dm',
    name: 'Dubai Municipality',
    abbr: 'DM',
    icon: '🏛️',
    color: '#0a5c7a',
    overview: 'Dubai Municipality (DM) is one of the key authorities overseeing construction, design, and building safety across Dubai. Any project — from a villa renovation to a large commercial development — requires DM approvals to ensure it complies with the city’s building codes, zoning laws, safety regulations, and sustainability standards.\n\nAt Al Tamdeen Construction, we handle the complete DM approval process — from document preparation and design submissions to inspections and completion certificates. Our expert team ensures accurate, fast, and fully compliant approvals for all types of construction and renovation projects.',
    services: [
      'Submission of building and renovation permits',
      'Compliance with planning regulations, building codes, and safety standards',
      'Preparation of architectural, structural, and MEP drawings for approvals',
      'Coordination for inspections and completion certificates'
    ],
    importance: 'We ensure all municipal approvals are processed accurately and without delays, avoiding compliance issues.',
    benefits: 'Experienced in handling complex and multi-stage approvals with direct coordination with Dubai Municipality engineers and reviewers. End-to-end service from application to final completion certificate.',
    detailedApprovals: [
      'Building Permits – For new constructions, extensions, and additions.',
      'Preliminary Approvals – For proposed design concepts, layout, and zoning compliance.',
      'Demolition or Delisting Permits – Permission to demolish or delist buildings, especially those located in historic or protected areas.',
      'Design Approvals for Historic Areas – Approval to design or modify buildings within heritage zones.',
      'Evaluation of Existing Buildings – Assessing compliance with the Dubai Universal Design Code and accessibility standards.',
      'Permits for Modifications or Additions – For structural or aesthetic changes to existing buildings.',
      'Boundary Wall / Fence Permits – Approval for constructing or modifying perimeter walls and gates.',
      'Service Block Design & Permits – For private villas and ancillary structures.',
      'Painting, Maintenance & Renovation Permits – Including facade works and interior refurbishments.',
      'Swimming Pool Approvals – For both public and private pools, including safety and design compliance.',
      'Utility Connection Approvals – Final construction completion and connection to DEWA and drainage networks.',
      'Gate Level Approval – For the main entrance elevation and site alignment.',
      'Temporary Electricity Supply – Provision of site power during construction.',
      'Permit for Construction During Nighttime – To allow work outside standard hours when required.',
      'Sand Supply & Transfer Permits – For sourcing and transporting sand for construction.',
      'Good Drilling NOC – Certificate of no objection for drilling or related activities.',
      'Advertisement Installation Permits – For roof or pole-mounted signage and advertisements.',
      'Infrastructure NOC Certificates – For projects requiring coordination with other government departments.',
      'Sample Testing Approvals – For laboratory testing of construction materials.',
      'Structural Integrity Inspections – To verify the safety and stability of existing structures.',
      'Completion Certificate Approvals – Including cases with technical or ownership disputes.',
      'Renewal and Extension Services – For expiring building permits or drawing validity periods.',
      'Resolution of Technical Disputes – Coordination with DM for clarification and resolution of construction-related issues.',
      'Copy of Approved Drawings – Assistance in retrieving or revalidating approved engineering drawings.'
    ],
    whyChooseUs: [
      'Experienced in handling complex and multi-stage approvals.',
      'Direct coordination with Dubai Municipality engineers and reviewers.',
      'Error-free documentation for faster approvals and inspections.',
      'End-to-end service — from application to final completion certificate.',
      'Expertise in both modern and heritage projects.'
    ]
  },
  {
    id: 'dcd',
    name: 'Dubai Civil Defense',
    abbr: 'DCD',
    icon: '🚒',
    color: '#a01010',
    overview: 'The Dubai Civil Defense (DCD) plays a critical role in ensuring that every building in the Emirate meets fire safety, prevention, and emergency preparedness standards. No construction, renovation, or fit-out work can begin or be occupied without DCD approval.\n\nAt Al Tamdeen Construction, we handle the entire DCD approval process — from design submission and material certification to final inspections and completion certificates. Our expert team coordinates with DCD officers to ensure that every project is fully compliant, safe, and approved on time.',
    services: [
      'Fire safety plan submissions and approval',
      'Coordination for civil Defense inspections',
      'Fire alarm, firefighting, and emergency system compliance',
      'Issuance of final Civil Defense NOC'
    ],
    importance: 'Ensures your building meets strict fire safety regulations, protecting lives and assets.',
    benefits: 'Experienced coordination with licensed fire consultants and contractors. Streamlined submission and follow-up through DCD’s online system.',
    detailedApprovals: [
      'Fire & Life Safety Design Approvals – Review and approval of architectural and MEP drawings for fire safety compliance.',
      'Fire Fighting & Alarm System Layouts – Submission and coordination for sprinkler, hose reel, hydrant, and alarm system layouts.',
      'Material Approval Certificates – Certification for all fire-rated materials such as doors, ceilings, insulation, and cables.',
      'Smoke Management & Evacuation Plans – Design and approval of safe evacuation routes and smoke extraction systems.',
      'Inspection Coordination – Scheduling and supervision of on-site inspections for fire system testing and verification.',
      'Completion & Occupancy Certificates – Final DCD sign-off confirming that the building meets all safety requirements.',
      'Renewals & Modifications – Assistance with system upgrades or modifications requiring DCD re-approval.',
      'Fire Risk Assessments – Evaluation and documentation for existing buildings to ensure ongoing compliance.'
    ],
    whyImportantDetailed: [
      'To ensure the safety of occupants and assets.',
      'To comply with UAE Fire and Life Safety Code of Practice.',
      'To obtain completion certificates and final occupancy approval.',
      'To avoid project delays and penalties for non-compliance.'
    ],
    whyChooseUs: [
      'Experienced coordination with licensed fire consultants and contractors.',
      'In-depth understanding of fire safety design codes and documentation.',
      'Streamlined submission and follow-up through DCD’s online system.',
      'Proven record in achieving fast-track approvals for complex projects.',
      'Comprehensive support — from design stage to inspection clearance.'
    ]
  },
  {
    id: 'dda',
    name: 'Dubai Development Authority',
    abbr: 'DDA',
    icon: '🏙️',
    color: '#0a4a8a',
    overview: 'The Dubai Development Authority (DDA) is one of Dubai’s leading regulatory bodies responsible for overseeing urban planning, design control, construction, and development regulations within designated master-planned communities and free zones such as Dubai Internet City, Dubai Media City, and Dubai Design District (d3).\n\nAt Al Tamdeen Construction, we provide complete assistance in obtaining all DDA-related approvals — ensuring that every stage of your project, from concept design to construction completion, fully complies with DDA’s technical, architectural, and safety standards.\n\nOur team has extensive experience working within DDA’s digital submission systems and procedures, ensuring that your project progresses smoothly, efficiently, and without delays.',
    services: [
      'Submission of architectural and structural designs for approval',
      'Obtaining construction permits and NOCs for development projects',
      'Ensuring compliance with DDA regulations and guidelines'
    ],
    importance: 'Your project moves forward seamlessly in designated development zones.',
    benefits: 'Deep knowledge of DDA design standards, portal systems, and documentation formats. Dedicated in-house experts for architectural, MEP, and HSE submissions.',
    detailedApprovals: [
      'Concept & Design Approvals – Submissions for architectural, structural, and MEP designs to ensure compliance with DDA building regulations.',
      'Fit-Out & Interior Design Approvals – For office, retail, hospitality, and residential spaces requiring interior modifications.',
      'Renovation & Alteration Permits – For changes to existing structures, including facade modifications and internal reconfigurations.',
      'Pre-Construction Approvals – Site access, excavation, and enabling work permits to initiate early-stage construction.',
      'Health, Safety & Environment (HSE) Approvals – Review and clearance of environmental and safety management plans.',
      'Temporary Works Permits – For scaffolding, hoarding, site offices, and temporary utilities.',
      'Building Completion Certificates (BCC) – Coordination for final inspections and issuance of the completion certificate after all construction and safety requirements are met.',
      'Signage & Advertisement Permits – For business, directional, and promotional signs within DDA zones.',
      'Utility & Infrastructure NOCs – Coordination for DEWA, Etisalat, and drainage connections under DDA jurisdiction.',
      'Permit Renewals & Amendments – Extension or modification of previously approved permits and drawings.'
    ],
    whyImportantDetailed: [
      'To ensure your project aligns with Dubai’s master development guidelines and zoning requirements.',
      'To obtain legal permission to build, fit-out, or modify structures within DDA-controlled areas.',
      'To ensure compliance with health, safety, and sustainability codes.',
      'To receive the completion certificate required for occupancy and service connections.'
    ],
    whyChooseUs: [
      'Experienced in handling complete DDA approval workflows, from initial submission to final completion.',
      'Deep knowledge of DDA design standards, portal systems, and documentation formats.',
      'Strong relationships with DDA reviewers, engineers, and inspection teams.',
      'Dedicated in-house experts for architectural, MEP, and HSE submissions.',
      'Proven track record in achieving fast and accurate approvals across commercial and residential sectors.'
    ]
  },
  {
    id: 'trakhees',
    name: 'Trakhees',
    abbr: 'TRK',
    icon: '⚓',
    color: '#005b8a',
    overview: 'Trakhees, the regulatory arm of Ports, Customs, and Free Zone Corporation (PCFC), is responsible for overseeing design, construction, health, safety, and environment (HSE) standards in major development zones and freehold areas such as JAFZA, Palm Jumeirah, Mina Rashid, Dubai Maritime City, and Nakheel projects.\n\nEvery construction or fit-out project under Trakhees jurisdiction must go through a structured approval process to ensure compliance with the Trakhees Code of Construction (TCC) and Dubai’s urban development regulations.\n\nAt Al Tamdeen Construction, we provide end-to-end coordination for all Trakhees approvals — from concept submissions to completion certification — ensuring full regulatory compliance, timely approvals, and smooth project progression.',
    services: [
      'Submission of designs and engineering documents for approval',
      'Civil Defense, environmental, and construction compliance',
      'Coordination for inspections and final clearance'
    ],
    importance: 'We ensure all industrial or port-area projects meet Trakhees’ specialized requirements.',
    benefits: 'Expertise in managing Trakhees Design Department and HSE Department submissions. Long-standing coordination experience with Trakhees inspectors and engineers.',
    detailedApprovals: [
      'Concept & Preliminary Design Approvals – Submission and review of initial design proposals for architectural, structural, and MEP layouts.',
      'Detailed Design Submissions – Full design documentation including civil, architectural, electrical, and mechanical drawings for technical review.',
      'Fit-Out and Interior Decoration Permits – For offices, retail, hospitality, and commercial spaces within Trakhees zones.',
      'Renovation & Modification Approvals – For structural and non-structural alterations to existing buildings.',
      'Health, Safety & Environment (HSE) Approvals – Evaluation of environmental impact, safety compliance, and waste management plans.',
      'Temporary Works & Site Setup Permits – For site offices, hoardings, access roads, and storage areas.',
      'Fire & Life Safety Submissions – Coordination for fire protection system layouts, approvals, and inspections in compliance with DCD and Trakhees standards.',
      'Building Completion Certificates (BCC) – Coordination of final inspections and certification for occupancy.',
      'Utility & Infrastructure NOCs – Liaison for DEWA, Etisalat, and drainage connections.',
      'Permit Renewal & Revalidation – For expired permits or drawings requiring extension.',
      'Advertising & Signage Permits – For external, rooftop, or directional signage within the Trakhees jurisdiction.'
    ],
    whyImportantDetailed: [
      'To ensure all construction activities comply with Trakhees and Dubai’s building codes.',
      'To obtain legal authorization for construction, modification, or occupancy.',
      'To ensure environmental and safety compliance for all project types.',
      'To achieve smooth handovers and timely project completion without regulatory delays.'
    ],
    whyChooseUs: [
      'Expertise in managing Trakhees Design Department and HSE Department submissions.',
      'In-depth knowledge of Trakhees portal systems, forms, and approval pathways.',
      'Long-standing coordination experience with Trakhees inspectors and engineers.',
      'Dedicated specialists for architectural, structural, and MEP documentation.',
      'Proven success in achieving efficient, error-free approvals for complex developments.'
    ]
  },
  {
    id: 'rta',
    name: 'Roads & Transport Authority',
    abbr: 'RTA',
    icon: '🚦',
    color: '#1a7a3a',
    overview: 'The Roads and Transport Authority (RTA) is the governing body responsible for the design, regulation, and maintenance of Dubai’s transport and road infrastructure. Any construction or development project that involves road access, parking layout, traffic flow, or work near public rights-of-way requires RTA approval.\n\nAt Al Tamdeen Construction, we specialize in handling all RTA approval requirements — from road access and parking layout approvals to excavation and right-of-way permits. Our team ensures that your project adheres to all RTA design standards, safety guidelines, and traffic management regulations, facilitating smooth execution and timely approval.',
    services: [
      'Obtaining permits for construction adjacent to roads or ROW areas',
      'Coordination of traffic management and access plans',
      'Submission of designs for RTA review and clearance'
    ],
    importance: 'We handle all road-related compliance to protect your project timeline from traffic authority delays.',
    benefits: 'Prevents project delays due to road-use conflicts or regulatory issues.',
    detailedApprovals: [
      'Access Road Design & Approval – Obtaining permits for creating or modifying vehicle access points connecting to public roads.',
      'Parking Layout Approval – Review and approval of parking configurations to ensure compliance with RTA standards and traffic safety requirements.',
      'Traffic Impact Studies (TIS) – Preparation and coordination of traffic impact analyses for large developments and commercial buildings.',
      'Temporary Road Closure & Diversion Permits – Approval to close or reroute traffic during construction, excavation, or utility works.',
      'Right-of-Way (ROW) NOCs – Permits for working near public roads, sidewalks, or service corridors to ensure safety and minimal disruption.',
      'Signage and Wayfinding Approvals – Approval for the placement of road signs, directional boards, and street name signage.',
      'Pedestrian and Cycling Path Approvals – Coordination for walkway, crossing, and cycling infrastructure near project sites.',
      'Excavation and Reinstatement Permits – For any work involving trenching, utility connections, or reinstatement of road surfaces.',
      'Street Light and Infrastructure NOCs – Approvals for any modification or addition of street lighting and related infrastructure.',
      'Traffic Diversion Plans (TDP) – Submission and approval of site traffic diversion drawings for safe construction management.',
      'Temporary Access Permits – For cranes, equipment delivery, and heavy vehicle movement during construction.',
      'Final Inspection & Completion Clearance – Coordination with RTA for site inspection and clearance after project completion.'
    ],
    whyImportantDetailed: [
      'To ensure public safety and efficient traffic flow during construction and operation.',
      'To obtain legal authorization for any activity affecting public roads, pavements, or transport networks.',
      'To avoid penalties, project delays, or disruption to public infrastructure.',
      'To ensure compliance with RTA’s design, access, and safety codes.'
    ],
    whyChooseUs: [
      'Extensive experience working with RTA’s ROW, Traffic, and Planning departments.',
      'Expertise in traffic engineering documentation and layout design submissions.',
      'Proven track record in obtaining timely NOCs and clearances for construction and infrastructure projects.',
      'Dedicated technical coordination team for road access, excavation, and reinstatement approvals.',
      'Reliable liaison support from submission to inspection and final sign-off.'
    ]
  },
  {
    id: 'rta-row',
    name: 'RTA Right-of-Way',
    abbr: 'ROW',
    icon: '🛣️',
    color: '#2a6a1a',
    overview: 'The Right-of-Way (ROW) division of the Dubai Roads and Transport Authority (RTA) is responsible for regulating and protecting public infrastructure — including roads, sidewalks, service corridors, and utilities — during construction or maintenance activities.\n\nAny project that involves excavation, fencing, scaffolding, hoarding, or temporary access along public roads or within RTA-controlled areas must obtain ROW approval before work begins.\n\nAt Al Tamdeen Construction, we provide expert coordination for all RTA ROW services, ensuring that every activity near roadways or public utilities is safe, compliant, and officially permitted. Our team manages the complete process — from application and design submission to inspection and reinstatement approval — guaranteeing full alignment with RTA regulations.',
    services: [
      'Submission of detailed plans for approval',
      'Coordination with RTA inspectors',
      'Ensuring compliance with ROW regulations to protect infrastructure'
    ],
    importance: 'We manage all ROW documentation and site compliance to keep your underground or road-adjacent works on schedule.',
    benefits: 'Guarantees safe construction practices near public utilities.',
    detailedApprovals: [
      'Excavation Permits – For trenching, utility connections, and foundation works near or under public roads.',
      'Barricading and Hoarding Permits – For temporary barriers, site fencing, and visual screens around construction zones.',
      'Scaffolding & Access NOCs – For installing scaffolding, platforms, or temporary access structures along roadsides.',
      'Temporary Road Access Permits – Allowing the movement of construction vehicles, cranes, or delivery trucks in restricted or high-traffic zones.',
      'Material Loading and Unloading Permits – For logistics activities that temporarily use public or shared access spaces.',
      'Temporary Occupation of Right-of-Way (TOROW) – Authorization for temporary usage of RTA property during construction.',
      'Road Crossing Permits – For utilities, pipelines, or conduits crossing beneath or across public roads.',
      'Street Furniture and Utility Work Approvals – For installing or relocating streetlights, signage, and service connections.',
      'Traffic Management and Diversion Plans (TDP) – Preparation and approval of temporary traffic routes to ensure road safety during works.',
      'Reinstatement Inspections & Clearances – Final site inspection and approval confirming that the road or pavement has been restored to RTA standards.'
    ],
    whyImportantDetailed: [
      'To safeguard public safety and infrastructure integrity during construction.',
      'To ensure legal compliance for any activities affecting roadways, pavements, or utilities.',
      'To prevent project penalties, work stoppages, or reinstatement delays.',
      'To guarantee smooth coordination between contractors, consultants, and RTA inspectors.'
    ],
    whyChooseUs: [
      'Specialized experience in ROW applications, submissions, and reinstatement procedures.',
      'Strong relationships with RTA ROW and Traffic Control departments.',
      'Skilled team familiar with RTA’s GIS mapping, layout drawing standards, and permit systems.',
      'Proven success in obtaining fast-track ROW NOCs for construction, excavation, and fit-out projects.',
      'Comprehensive service — from initial design to final inspection and reinstatement approval.'
    ]
  },
  {
    id: 'dewa',
    name: 'Dubai Electricity & Water Authority',
    abbr: 'DEWA',
    icon: '⚡',
    color: '#006b4a',
    overview: 'The Dubai Electricity and Water Authority (DEWA) is the primary government body responsible for regulating and supplying electricity and water services across Dubai. Every construction or fit-out project — whether residential, commercial, or industrial — must obtain DEWA design approvals and connection permits before execution and occupancy.\n\nAt Al Tamdeen Construction, we provide complete DEWA approval coordination services, covering both electrical and water connections. From technical drawings and load applications to site inspections and final energization, our team ensures that every requirement is accurately prepared, fully compliant, and approved on schedule.\n\nWe understand DEWA’s procedures in depth and have extensive experience dealing with their online submission systems, technical standards, and inspection protocols — enabling a smooth, error-free approval process.',
    services: [
      'Submission for electricity and water connections',
      'Obtaining DEWA NOCs for construction and fit-out projects',
      'Coordination for inspections and commissioning'
    ],
    importance: 'We manage DEWA submissions in parallel with construction progress, ensuring utility connections are ready the moment your building is complete.',
    benefits: 'Ensures smooth utility connections and regulatory compliance for all projects.',
    detailedApprovals: [
      'Electrical Design Approvals – Review and submission of load schedules, single-line diagrams (SLDs), and electrical layouts.',
      'Load Application & Load Increment Requests – Applying for new or increased power requirements based on project needs.',
      'Temporary Power Connection Approvals – For construction site electricity during the building phase.',
      'Permanent Power Supply Approvals – Final connection and energization after construction completion.',
      'Meter Installation & Modification Requests – Coordination for new meters, additional meters, or load separation.',
      'Transformer Installation & Substation Approvals – For high-load projects requiring dedicated transformers.',
      'Solar Power Integration Approvals – Coordination for DEWA’s Shams Dubai initiative and renewable energy compliance.',
      'Testing & Inspection Coordination – Scheduling of DEWA site visits for verification and energization.',
      'Water Design Approvals – Submission and approval of plumbing layouts and water distribution systems.',
      'Temporary Water Connection Permits – Supply authorization for construction and testing activities.',
      'Permanent Water Supply Approvals – For residential and commercial buildings upon completion.',
      'Irrigation & Fire Tank Connection NOCs – For landscaping and firefighting systems requiring DEWA supply.',
      'Meter Installation & Capacity Upgrade – Coordination for water meter setup and adjustments.',
      'Testing & Commissioning Clearances – Final verification and approval before handover.'
    ],
    whyImportantDetailed: [
      'To obtain official authorization for power and water connections.',
      'To ensure technical compliance with Dubai’s energy and utility safety standards.',
      'To avoid delays in project completion and handover due to pending utility connections.',
      'To achieve efficient energy usage and sustainability compliance under DEWA guidelines.'
    ],
    whyChooseUs: [
      'Experienced in managing electrical and plumbing design submissions to DEWA standards.',
      'Skilled coordination team for online portal submissions and field inspections.',
      'Direct communication with DEWA engineers and approval departments.',
      'Proven ability to achieve timely and accurate connections for both temporary and permanent supplies.',
      'Comprehensive service covering design, documentation, testing, and final approval.'
    ]
  },
  {
    id: 'jafza',
    name: 'Jebel Ali Free Zone',
    abbr: 'JFZ',
    icon: '🏭',
    color: '#7a3a00',
    overview: 'The Jebel Ali Free Zone Authority (JAFZA) is one of Dubai’s largest and most strategically important free zones, regulating commercial, industrial, and logistics developments within its jurisdiction. Any construction, fit-out, or modification within JAFZA requires formal approval to ensure compliance with Trakhees regulations, fire and safety codes, and development standards.\n\nAt Al Tamdeen Construction, we provide end-to-end support for all JAFZA approvals — from design submission and technical documentation to inspections and completion certification. Our experienced team ensures smooth processing, regulatory compliance, and timely clearance for projects of all types and scales.',
    services: [
      'Submission of building and fit-out designs',
      'Obtaining construction permits and NOCs',
      'Ensuring compliance with free-zone regulations'
    ],
    importance: 'Our experience with JAFZA\'s specific requirements ensures compliant submissions and strong relationships with the authority\'s team.',
    benefits: 'Facilitates quick project approvals within one of Dubai’s largest free zones.',
    detailedApprovals: [
      'New Construction Approvals – Design submission and technical clearance for warehouses, offices, and factories.',
      'Fit-Out & Interior Design Approvals – Office, showroom, retail, and villa interiors in compliance with safety and fire codes.',
      'Renovation & Modification Permits – Structural or non-structural changes to existing buildings.',
      'Fire & Life Safety Submissions – Coordination with Dubai Civil Defense and Trakhees for fire protection system approvals.',
      'Health, Safety & Environment (HSE) Approvals – Compliance with waste management, environmental, and occupational safety standards.',
      'Temporary Works & Site Access Permits – For site offices, scaffolding, hoardings, and logistics access.',
      'Utility & Infrastructure NOCs – Coordination for DEWA, Etisalat, and drainage connections.',
      'Signage & Advertisement Approvals – For external and internal promotional or directional signs.',
      'Completion Certificates – Final inspection and approval to certify building occupancy and operational readiness.',
      'Permit Renewals & Extensions – For existing permits, approvals, or drawings requiring validity extension.'
    ],
    whyImportantDetailed: [
      'To ensure projects comply with free zone regulations, safety, and environmental standards.',
      'To legally authorize construction, renovation, or fit-out activities.',
      'To obtain completion certificates required for operational and utility connections.',
      'To avoid delays, fines, or regulatory conflicts within the free zone.'
    ],
    whyChooseUs: [
      'Extensive experience in navigating JAFZA submission portals and requirements.',
      'Skilled coordination with Trakhees and JAFZA inspectors for fast-track approvals.',
      'End-to-end management of design, documentation, inspections, and final NOCs.',
      'Expertise across commercial, industrial, and villa projects.',
      'Proven record of delivering timely, fully compliant, and hassle-free approvals.'
    ]
  },
  {
    id: 'dso',
    name: 'Dubai Silicon Oasis',
    abbr: 'DSO',
    icon: '💻',
    color: '#4a0a7a',
    overview: 'Dubai Silicon Oasis (DSO) is a government-owned technology park and free zone that hosts commercial, residential, and industrial developments. All construction, renovation, and fit-out projects within DSO require formal approvals to ensure compliance with DSO’s design, safety, and infrastructure standards.\n\nAt Al Tamdeen Construction, we provide end-to-end DSO approval services, coordinating directly with DSO authorities to manage design submissions, utility connections, inspections, and completion certifications. Our expertise ensures that projects meet all technical and regulatory requirements, enabling smooth execution and timely handover.',
    services: [
      'Submission of architectural, structural, and MEP plans',
      'Coordination for permits and NOCs',
      'Compliance with DSO-specific regulations'
    ],
    importance: 'We navigate DSO\'s unique approval workflows to keep your technology hub or industrial project progressing without delay.',
    benefits: 'Ensures projects in DSO are fully compliant with local free zone requirements.',
    detailedApprovals: [
      'Architectural & Structural Design Approvals – Submission and review of building, interior, and MEP designs.',
      'Fit-Out & Interior Design Approvals – Layout approvals for offices, retail spaces, and residential units.',
      'Renovation & Modification Permits – Approval for structural or non-structural alterations.',
      'Utility Connection NOCs – Coordination for DEWA, Etisalat, and drainage services.',
      'Fire & Life Safety Approvals – Compliance with Dubai Civil Defense (DCD) standards.',
      'Health, Safety & Environment (HSE) Approvals – Assessment and clearance of safety and environmental measures.',
      'Temporary Works & Site Access Permits – Scaffolding, hoardings, and temporary logistics access.',
      'Signage & Advertisement Permits – Internal and external signage approvals within DSO.',
      'Completion Certificates & Occupancy Approvals – Final inspections and issuance of certificates to enable project handover.',
      'Permit Renewals & Extensions – Extension of previously approved drawings or permits.'
    ],
    whyImportantDetailed: [
      'To ensure compliance with DSO’s development, design, and safety standards.',
      'To obtain legal authorization for construction, fit-outs, and modifications.',
      'To avoid project delays or penalties due to unauthorized works.',
      'To secure utility connections and completion certificates for handover.'
    ],
    whyChooseUs: [
      'Extensive experience managing DSO design submissions and approvals.',
      'Skilled in preparing comprehensive documentation for architectural, MEP, and HSE compliance.',
      'Direct coordination with DSO authorities for inspections and approvals.',
      'Proven record in obtaining fast, efficient, and fully compliant approvals for residential, commercial, and industrial projects.',
      'Complete service from design submission to final occupancy clearance, ensuring a hassle-free approval process.'
    ]
  },
  {
    id: 'developer-noc',
    name: 'Developer NOCs',
    abbr: 'NOC',
    icon: '📄',
    color: '#5a5a0a',
    overview: 'In Dubai, any construction, renovation, or fit-out within developer-managed communities requires a No Objection Certificate (NOC) from the respective developer. Prominent developers include Nakheel, Emaar, Meraas, DAMAC, Dubai Properties, and others. These NOCs ensure that your project aligns with the community’s architectural guidelines, safety standards, and operational policies.\n\nAt Al Tamdeen Construction, we handle the entire Developer NOC process, coordinating directly with developer authorities to secure approvals efficiently. Our team ensures that your project complies with all developer regulations, permits, and documentation requirements, allowing you to commence work without delays.',
    services: [
      'Submission of design and renovation plans to developers',
      'Obtaining NOCs for villas, commercial units, and mixed-use developments',
      'Coordination with developer inspections'
    ],
    importance: 'We maintain relationships with all major Dubai developers and manage NOC acquisition as a seamless part of your project journey.',
    benefits: 'Avoids legal or administrative conflicts, allowing projects to proceed smoothly on developer-owned land.',
    detailedApprovals: [
      'Design & Architectural NOCs – Review and approval of interior layouts, elevations, and structural modifications.',
      'Renovation & Fit-Out NOCs – Permissions for villa, apartment, retail, or office renovations and interior fit-outs.',
      'Facade & Exterior Modification Approvals – For balconies, windows, walls, and decorative additions.',
      'Utility & MEP Coordination Approvals – NOCs for DEWA, Etisalat, and other utility connections.',
      'Signage & Advertisement Permissions – For promotional or directional signs within the community.',
      'Temporary Works & Construction Access – Approvals for scaffolding, hoarding, and site logistics.',
      'Swimming Pool & Landscape Approvals – For pools, gardens, and outdoor amenities.',
      'Compliance & Safety Inspections – Coordination of developer-mandated inspections during and after works.',
      'Completion & Handover Certificates – Final sign-off allowing legal occupancy or operational use.',
      'Renewal & Extension Services – Extending previously approved NOCs for ongoing or phased projects.'
    ],
    whyImportantDetailed: [
      'To ensure your project adheres to developer guidelines and community regulations.',
      'To avoid penalties, work stoppages, or delays caused by unauthorized modifications.',
      'To secure completion certificates and handover approvals.',
      'To maintain uniformity, aesthetics, and property value within the community.'
    ],
    whyChooseUs: [
      'Extensive experience liaising with Nakheel, Emaar, Meraas, DAMAC, and other developers.',
      'Skilled in preparing accurate documentation and design submissions to meet developer standards.',
      'End-to-end management of NOC application, inspection coordination, and final approval.',
      'Proven track record in securing fast and hassle-free NOCs for residential, commercial, and villa projects.',
      'Dedicated team ensuring full compliance with all community rules and regulations.'
    ]
  },
  {
    id: 'fitout-approvals',
    name: 'Decoration & Fit-Out Approvals',
    abbr: 'FO',
    icon: '🎨',
    color: '#8a2a5a',
    overview: 'Every commercial or residential space in Dubai — from offices and restaurants to retail outlets and villas — requires official fit-out and decoration approvals before interior works can begin. These approvals ensure that your design, materials, and construction methods meet all safety, structural, and aesthetic standards set by Dubai’s regulatory authorities.\n\nAt Al Tamdeen Construction, we specialize in handling end-to-end decoration and fit-out approvals for projects of all sizes. Our dedicated team manages every stage — from design drawings and authority submissions to inspections and completion certificates — ensuring your project transitions smoothly from concept to completion.',
    services: [
      'Submission of fit-out designs for approval',
      'Compliance with building and fire safety regulations',
      'Coordination for inspections and issuance of completion certificates'
    ],
    importance: 'Tenants and owners must obtain fit-out permits before commencing any interior works. Unauthorized fit-outs can result in fines and forced reinstatements.',
    benefits: 'Enables hassle-free interior renovations without violating regulatory norms.',
    detailedApprovals: [
      'Office Fit-Out Approvals – Interior layouts, partitions, MEP coordination, and finishing materials.',
      'Retail & Showroom Approvals – Design compliance for display areas, lighting, and fire safety.',
      'Restaurant & Café Fit-Out Approvals – Layouts for kitchen, exhaust systems, gas lines, and seating areas.',
      'Warehouse & Storage Fit-Out Approvals – Fire-rated walling, shelving systems, and safety clearances.',
      'Healthcare & Clinic Approvals – Medical facility layouts following DHA and authority standards.',
      'Villa Interior Modifications – Additions, extensions, and decorative enhancements.',
      'Apartment Renovations – Partitioning, flooring, lighting, and ceiling works.',
      'Luxury Interior Designs – High-end finishes, smart home integrations, and custom décor concepts.',
      'MEP Drawings & Coordination – Mechanical, electrical, and plumbing layout submissions for authority review.',
      'Fire & Life Safety Approvals – Compliance with Dubai Civil Defense (DCD) standards for safety systems.',
      'Architectural & Structural NOCs – Liaising with landlords, developers, and master communities.',
      '3D Visualization & Space Planning – Conceptual designs and renders for design review and submission.'
    ],
    whyImportantDetailed: [
      'To ensure compliance with safety, health, and technical standards.',
      'To avoid penalties, project delays, or rework due to unauthorized modifications.',
      'To obtain the completion certificate and handover clearance from authorities.',
      'To maintain property value and long-term safety through approved construction practices.'
    ],
    whyChooseUs: [
      'Extensive experience in fit-out and decoration approvals across Dubai’s commercial and residential sectors.',
      'Strong relationships with developers, consultants, and authority departments.',
      'In-house experts for design, MEP, and documentation to ensure accuracy and speed.',
      'Proven track record in securing fast, efficient, and hassle-free approvals.',
      'One-stop solution for design, authority coordination, and project execution.'
    ]
  }
];

export const PROJECTS = [
  { id: 1, title: 'Executive Waterfront Villa', category: 'Residential Villa', location: 'Palm Jumeirah, Dubai', type: 'Luxury Residential', desc: 'A 7-bedroom ultra-luxury waterfront villa with bespoke interior design and full MEP overhaul, delivered on a 14-month timeline.', image: '/images/villa.png' },
  { id: 2, title: 'Premium Corporate HQ', category: 'Commercial Office', location: 'DIFC, Dubai', type: 'Corporate Fit-Out', desc: 'Complete fit-out of a 4,500 sqm Grade A office space with custom executive suites, board rooms, and DEWA-approved MEP works.', image: '/images/office.png' },
  { id: 3, title: 'High-End Boutique Retail', category: 'Retail Fit-Out', location: 'Dubai Mall, Downtown Dubai', type: 'Retail Fit-Out', desc: 'Luxury brand retail fit-out with custom marble joinery, gold-leaf ceilings, and integrated AV and lighting systems.', image: '/images/retail.png' },
  { id: 4, title: 'Business Bay Tower Floors', category: 'Commercial Office', location: 'Business Bay, Dubai', type: 'Office Fit-Out', desc: 'Multi-floor commercial office fit-out for an international professional services firm with full authority coordination.', image: '/images/about.png' },
  { id: 5, title: 'Arabian Ranches Villa', category: 'Residential Villa', location: 'Arabian Ranches, Dubai', type: 'Residential Renovation', desc: 'Complete structural renovation and luxury interior transformation of a 5-bedroom villa with landscaping and pool.', image: '/images/hero.png' },
  { id: 6, title: 'Industrial Warehouse Complex', category: 'Industrial Building', location: 'JAFZA, Dubai', type: 'Industrial Construction', desc: 'Construction of a 12,000 sqm industrial facility with office block, JAFZA approvals, and full MEP infrastructure.', image: '/images/services.png' },
];

export const TESTIMONIALS = [
  { name: 'Mohammed Al Rashidi', role: 'CEO, Al Rashidi Group', project: 'Corporate Office Fit-Out — DIFC', text: 'Al Tamdeen exceeded every expectation. The quality of their work and their ability to manage all DM and DCD approvals internally saved us months. A truly professional team.', rating: 5 },
  { name: 'Sarah K.', role: 'Director, Luxury Residences LLC', project: 'Palm Jumeirah Villa', text: 'Our villa project was delivered on time, on budget, and to an exceptional standard. Al Tamdeen\'s team was proactive, transparent, and truly understood the luxury market.', rating: 5 },
  { name: 'James Whitmore', role: 'Head of Real Estate, Meridian Holdings', project: 'Retail Fit-Out — Dubai Mall', text: 'The authority approvals process was seamlessly handled. What would have taken us 6 months to navigate independently was completed in 8 weeks. Highly recommended.', rating: 5 },
  { name: 'Aisha Al Mansoori', role: 'Operations Head, Tech Ventures MENA', project: 'DSO Office Headquarters', text: 'Their knowledge of DSO-specific regulations and relationships with the authority is unmatched. Clean, modern delivery with zero compliance issues.', rating: 5 },
];

export const BLOG_POSTS = [
  { id: 1, title: 'Dubai Construction Market Outlook 2025', category: 'Industry Insights', date: '15 Feb 2025', readTime: '5 min read', excerpt: 'With AED 100 billion in planned infrastructure investment, Dubai\'s construction sector is poised for a landmark growth phase. Here\'s what enterprises need to know.', image: '/images/hero.png' },
  { id: 2, title: 'A Complete Guide to DM Building Permits', category: 'Authority Approvals', date: '02 Feb 2025', readTime: '8 min read', excerpt: 'Navigating Dubai Municipality building permits can be complex. Our step-by-step guide demystifies the process for commercial and residential developers.', image: '/images/services.png' },
  { id: 3, title: 'Interior Design Trends Defining Dubai Offices', category: 'Interior Design', date: '20 Jan 2025', readTime: '4 min read', excerpt: 'Biophilic design, smart office technology, and wellness-first fitouts are reshaping Dubai\'s corporate spaces in 2025.', image: '/images/about.png' },
];
