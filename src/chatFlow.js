export const chatFlow = [
  {
    id: "welcome",
    message: "How would you like to continue today?",
    options: [
      {
        label: "Resume Learning",
        nextStepId: "resume-learning",
        followUp: "Fantastic! Let's pick up right where you left off and keep that momentum going.",
        continueUrl: "https://qa.numeracyforlife.com/dashboard"
      },
      {
        label: "Explore the System",
        nextStepId: "explore-system",
        followUp: "It's great to explore! Let me walk you through the system starting from the home screen.",
        continueUrl: "https://qa.numeracyforlife.com/numeracyforlife_home"
      },
      {
        label: "Select a Course",
        nextStepId: "select-course",
        followUp: "Awesome! Let's help you find a new course to dive into.",
        // continueUrl: "https://qa.numeracyforlife.com/login"
      },
      {
        label: "Numbers gym",
        nextStepId: "numbers-gym",
        followUp: "You're going to love this! Numbers Gym - Fun game to sharpen your number skills. Let's jump in!",
        continueUrl: "https://qa.numeracyforlife.com/static/enumeracy_theme1/numeracyforlife_numbergym/index.html?source=home"
      }
    ]
  },
  {
    id: "select-course",
    message: "Which area do you want to explore?",
    options: [
      { label: "Simply Life", nextStepId: "confirm-life", followUp: "Great! Let's explore Simply Life.\n Day-to-day scenarios that you may encounter which require you to manipulate numbers." },
      { label: "Simply Work", nextStepId: "confirm-work", followUp: "Fantastic! Let's check out Simply Work.\n  Real-life numeracy situations that you might face whilst at work or on an apprenticeship. " },
      { label: "Simply Study", nextStepId: "confirm-study", followUp: "Awesome! Let's begin Simply Study.\n Numeracy to help you gain qualifications / pass exams." }
    ]
  },
  // Confirmation nodes for each area
  {
    id: "confirm-life",
    message: "You selected Simply Life. Ready to continue?",
    options: [
      { label: "Continue", nextStepId: "sector-life" }
    ]
  },
  {
    id: "confirm-work",
    message: "You selected Simply Work. Ready to continue?",
    options: [
      { label: "Continue", nextStepId: "sector-work" }
    ]
  },
  {
    id: "confirm-study",
    message: "You selected Simply Study. Ready to continue?",
    options: [
      { label: "Continue", nextStepId: "sector-study" }
    ]
  },

  // --- SIMPLY LIFE ---
  {
    id: "sector-life",
    message: "Which sector in Simply Life would you like to start?",
    options: [
      { label: "Money", nextStepId: "sector-life-money", followUp: "Great! Let's explore the Money sector." },
      { label: "Time", nextStepId: "sector-life-time", followUp: "Great! Let's explore the Time sector." },
      { label: "Data", nextStepId: "sector-life-data", followUp: "Great! Let's explore the Data sector." }
    ]
  },
  // Discounts Course
  {
    id: "sector-life-money",
    message: "Which course in Money?",
    options: [
      { label: "Discounts", nextStepId: "course-life-money-discounts", followUp: "Let's dive into Discounts." },
      { label: "Bills", nextStepId: "course-life-money-bills", followUp: "Let's dive into Bills." },
      { label: "Household Finances", nextStepId: "course-life-money-household-finances", followUp: "Let's dive into Household Finances." }
    ]
  },
  // Discounts Course
  {
    id: "course-life-money-discounts",
    message: "Which module in Discounts?",
    options: [
      { label: " Daily Life", nextStepId: "module-life-money-discounts-1", followUp: "Let's explore Daily Life." },
      { label: " Large Purchases", nextStepId: "module-life-money-discounts-2", followUp: "Let's explore Large Purchases." }
    ]
  },
  {
    id: "module-life-money-discounts-1",
    message: "Pick a lesson in Daily Life:",
    options: [
      { label: " Sale on Food", nextStepId: null, followUp: "Let's check out Sale on Food." },
      { label: " Sale on Clothes", nextStepId: null, followUp: "Let's check out Sale on Clothes." }
    ]
  },
  {
    id: "module-life-money-discounts-2",
    message: "Pick a lesson in Large Purchases:",
    options: [
      { label: " Discount on gadgets", nextStepId: null, followUp: "Let's check out Discount on gadgets." },
      { label: " Quantity Discounts", nextStepId: null, followUp: "Let's check out Quantity Discounts." }
    ]
  },
  // Bills Course
  {
    id: "course-life-money-bills",
    message: "Which module in Bills?",
    options: [
      { label: " Restaurant Cafe", nextStepId: "module-life-money-bills-1", followUp: "Let's explore Restaurant Cafe." },
      { label: " Credits & Coupons", nextStepId: "module-life-money-bills-2", followUp: "Let's explore Credits & Coupons." }
    ]
  },
  {
    id: "module-life-money-bills-1",
    message: "Pick a lesson in Restaurant Cafe:",
    options: [
      { label: " Splitting", nextStepId: null, followUp: "Let's check out Splitting." },
      { label: " Adding a tip", nextStepId: null, followUp: "Let's check out Adding a tip." }
    ]
  },
  {
    id: "module-life-money-bills-2",
    message: "Pick a lesson in Credits & Coupons:",
    options: [
      { label: " Loyalty Points", nextStepId: null, followUp: "Let's check out Loyalty Points." },
      { label: " Coupons", nextStepId: null, followUp: "Let's check out Coupons." }
    ]
  },
  // Household Finances Course
  {
    id: "course-life-money-household-finances",
    message: "Which module in Household Finances?",
    options: [
      { label: " Expenses", nextStepId: "module-life-money-household-finances-1", followUp: "Let's explore Expenses." },
      { label: " Savings", nextStepId: "module-life-money-household-finances-2", followUp: "Let's explore Savings." }
    ]
  },
  {
    id: "module-life-money-household-finances-1",
    message: "Pick a lesson in Expenses:",
    options: [
      { label: " Debts", nextStepId: null, followUp: "Let's check out Debts." },
      { label: " Utilities", nextStepId: null, followUp: "Let's check out Utilities." },
      { label: " Recreation", nextStepId: null, followUp: "Let's check out Recreation." }
    ]
  },
  {
    id: "module-life-money-household-finances-2",
    message: "Pick a lesson in Savings:",
    options: [
      { label: " Investments", nextStepId: null, followUp: "Let's check out Investments." },
      { label: " Saving for large expenses", nextStepId: null, followUp: "Let's check out Saving for large expenses." }
    ]
  },

  // --- SIMPLY LIFE: TIME SECTOR ---
  {
    id: "sector-life-time",
    message: "Which course in Time?",
    options: [
      { label: "Knowing Your Time (12-Hour Format)", nextStepId: "course-life-time-knowing", followUp: "Let's dive into Knowing Your Time (12-Hour Format)." },
      { label: "Exploring the AM-PM cycle", nextStepId: "course-life-time-am-pm", followUp: "Let's dive into Exploring the AM-PM cycle." }
    ]
  },
  // Knowing Your Time (12-Hour Format) Course
  {
    id: "course-life-time-knowing",
    message: "Which module in Knowing Your Time?",
    options: [
      { label: " Introduction to the 12-Hour Format", nextStepId: "module-life-time-knowing-1", followUp: "Let's explore Introduction to the 12-Hour Format." },
      { label: " Working with the 12-Hour Format", nextStepId: "module-life-time-knowing-2", followUp: "Let's explore Working with the 12-Hour Format." }
    ]
  },
  {
    id: "module-life-time-knowing-1",
    message: "Pick a lesson in Introduction to the 12-Hour Format:",
    options: [
      { label: " Notes on Time", nextStepId: null, followUp: "Let's check out Notes on Time." },
      { label: " Introduction to AM/PM", nextStepId: null, followUp: "Let's check out Introduction to AM/PM." }
    ]
  },
  {
    id: "module-life-time-knowing-2",
    message: "Pick a lesson in Working with the 12-Hour Format:",
    options: [
      { label: " AM or PM?", nextStepId: null, followUp: "Let's check out AM or PM?" },
      { label: " Early or Late?", nextStepId: null, followUp: "Let's check out Early or Late?" }
    ]
  },
  // Exploring the AM-PM cycle Course
  {
    id: "course-life-time-am-pm",
    message: "Which module in Exploring the AM-PM cycle?",
    options: [
      { label: " Working within the AM-PM period", nextStepId: "module-life-time-am-pm-1", followUp: "Let's explore Working within the AM-PM period." },
      { label: " AM/PM Transitions", nextStepId: "module-life-time-am-pm-2", followUp: "Let's explore AM/PM Transitions." }
    ]
  },
  {
    id: "module-life-time-am-pm-1",
    message: "Pick a lesson in Working within the AM-PM period:",
    options: [
      { label: " Routine Events", nextStepId: null, followUp: "Let's check out Routine Events." },
      { label: " Occasional Events", nextStepId: null, followUp: "Let's check out Occasional Events." }
    ]
  },
  {
    id: "module-life-time-am-pm-2",
    message: "Pick a lesson in AM/PM Transitions:",
    options: [
      { label: " Understanding the transition", nextStepId: null, followUp: "Let's check out Understanding the transition." },
      { label: " Working with the transition", nextStepId: null, followUp: "Let's check out Working with the transition." }
    ]
  },

  // --- SIMPLY LIFE: DATA SECTOR ---
  {
    id: "sector-life-data",
    message: "Which course in Data?",
    options: [
      { label: "Reading and Understanding Data", nextStepId: "course-life-data-reading", followUp: "Let's dive into Reading and Understanding Data." }
    ]
  },
  // Reading and Understanding Data Course
  {
    id: "course-life-data-reading",
    message: "Which module in Reading and Understanding Data?",
    options: [
      { label: " Introduction to Data", nextStepId: "module-life-data-reading-1", followUp: "Let's explore Introduction to Data." },
      { label: " Data Representation", nextStepId: "module-life-data-reading-2", followUp: "Let's explore Data Representation." },
      { label: " Working with Data", nextStepId: "module-life-data-reading-3", followUp: "Let's explore Working with Data." }
    ]
  },
  {
    id: "module-life-data-reading-1",
    message: "Pick a lesson in Introduction to Data:",
    options: [
      { label: " Understanding Data", nextStepId: null, followUp: "Let's check out Understanding Data." },
      { label: " Data around us", nextStepId: null, followUp: "Let's check out Data around us." }
    ]
  },
  {
    id: "module-life-data-reading-2",
    message: "Pick a lesson in Data Representation:",
    options: [
      { label: " Introduction to Data Representation", nextStepId: null, followUp: "Let's check out Introduction to Data Representation." },
      { label: " Types of Data Representation (Part 1)", nextStepId: null, followUp: "Let's check out Types of Data Representation (Part 1)." },
      { label: " Types of Data Representation (Part 2)", nextStepId: null, followUp: "Let's check out Types of Data Representation (Part 2)." }
    ]
  },
  {
    id: "module-life-data-reading-3",
    message: "Pick a lesson in Working with Data:",
    options: [
      { label: " Organising & Comparing Data", nextStepId: null, followUp: "Let's check out Organising & Comparing Data." },
      { label: " Trends & Decision-making", nextStepId: null, followUp: "Let's check out Trends & Decision-making." }
    ]
  },

  // --- SIMPLY WORK ---
  {
    id: "sector-work",
    message: "Which sector in Simply Work would you like to start?",
    options: [
      { label: "Healthcare", nextStepId: "sector-work-healthcare", followUp: "Great! Let's explore Healthcare." },
      { label: "Retail", nextStepId: "sector-work-retail", followUp: "Great! Let's explore Retail." },
      { label: "Construction", nextStepId: "sector-work-construction", followUp: "Great! Let's explore Construction." },
      { label: "Auto Mechanics", nextStepId: "sector-work-auto-mechanics", followUp: "Great! Let's explore Auto Mechanics." },
      { label: "Hospitality", nextStepId: "sector-work-hospitality", followUp: "Great! Let's explore Hospitality." },
      { label: "E-commerce", nextStepId: "sector-work-ecommerce", followUp: "Great! Let's explore E-commerce." },
      { label: "Fashion", nextStepId: "sector-work-fashion", followUp: "Great! Let's explore Fashion." },
      { label: "Fitness & Sports", nextStepId: "sector-work-fitness-sports", followUp: "Great! Let's explore Fitness & Sports." },
      { label: "Transport Logistics", nextStepId: "sector-work-transport-logistics", followUp: "Great! Let's explore Transport Logistics." }
    ]
  },

  // --- HEALTHCARE ---
  {
    id: "sector-work-healthcare",
    message: "Which course in Healthcare?",
    options: [
      { label: "Nursing", nextStepId: "course-work-healthcare-nursing", followUp: "Let's dive into Nursing." }
    ]
  },
  {
    id: "course-work-healthcare-nursing",
    message: "Which module in Nursing?",
    options: [
      { label: " Medical Data", nextStepId: "module-work-healthcare-nursing-1", followUp: "Let's explore Medical Data." },
      { label: " Dosages", nextStepId: "module-work-healthcare-nursing-2", followUp: "Let's explore Dosages." }
    ]
  },
  {
    id: "module-work-healthcare-nursing-1",
    message: "Pick a lesson in Medical Data:",
    options: [
      { label: " Readings", nextStepId: null, followUp: "Let's check out Readings." },
      { label: " Tests", nextStepId: null, followUp: "Let's check out Tests." }
    ]
  },
  {
    id: "module-work-healthcare-nursing-2",
    message: "Pick a lesson in Dosages:",
    options: [
      { label: " Calculating Doses", nextStepId: null, followUp: "Let's check out Calculating Doses." },
      { label: " IV Fluids", nextStepId: null, followUp: "Let's check out IV Fluids." }
    ]
  },

  // --- RETAIL ---
  {
    id: "sector-work-retail",
    message: "Which course in Retail?",
    options: [
      { label: "Sales", nextStepId: "course-work-retail-sales", followUp: "Let's dive into Sales." }
    ]
  },
  {
    id: "course-work-retail-sales",
    message: "Which module in Sales?",
    options: [
      { label: " Sales Associate", nextStepId: "module-work-retail-sales-1", followUp: "Let's explore Sales Associate." },
      { label: " Sales Representative", nextStepId: "module-work-retail-sales-2", followUp: "Let's explore Sales Representative." }
    ]
  },
  {
    id: "module-work-retail-sales-1",
    message: "Pick a lesson in Sales Associate:",
    options: [
      { label: " Customer Assistance", nextStepId: null, followUp: "Let's check out Customer Assistance." },
      { label: " Handling Transactions", nextStepId: null, followUp: "Let's check out Handling Transactions." }
    ]
  },
  {
    id: "module-work-retail-sales-2",
    message: "Pick a lesson in Sales Representative:",
    options: [
      { label: " Meeting Targets", nextStepId: null, followUp: "Let's check out Meeting Targets." },
      { label: " Commissions & Bonuses", nextStepId: null, followUp: "Let's check out Commissions & Bonuses." }
    ]
  },

  // --- CONSTRUCTION ---
  {
    id: "sector-work-construction",
    message: "Which course in Construction?",
    options: [
      { label: "Carpentry", nextStepId: "course-work-construction-carpentry", followUp: "Let's dive into Carpentry." }
    ]
  },
  {
    id: "course-work-construction-carpentry",
    message: "Which module in Carpentry?",
    options: [
      { label: " Understanding Measurements", nextStepId: "module-work-construction-carpentry-1", followUp: "Let's explore Understanding Measurements." },
      { label: " Logistics", nextStepId: "module-work-construction-carpentry-2", followUp: "Let's explore Logistics." }
    ]
  },
  {
    id: "module-work-construction-carpentry-1",
    message: "Pick a lesson in Understanding Measurements:",
    options: [
      { label: " Measures & Units", nextStepId: null, followUp: "Let's check out Measures & Units." },
      { label: " Working with Areas", nextStepId: null, followUp: "Let's check out Working with Areas." }
    ]
  },
  {
    id: "module-work-construction-carpentry-2",
    message: "Pick a lesson in Logistics:",
    options: [
      { label: " Material & Costs", nextStepId: null, followUp: "Let's check out Material & Costs." },
      { label: " Labour & Wages", nextStepId: null, followUp: "Let's check out Labour & Wages." }
    ]
  },

  // --- AUTO MECHANICS ---
  {
    id: "sector-work-auto-mechanics",
    message: "Which course in Auto Mechanics?",
    options: [
      { label: "Auto-Body Repair", nextStepId: "course-work-auto-mechanics-auto-body-repair", followUp: "Let's dive into Auto-Body Repair." }
    ]
  },
  {
    id: "course-work-auto-mechanics-auto-body-repair",
    message: "Which module in Auto-Body Repair?",
    options: [
      { label: " Measurement", nextStepId: "module-work-auto-mechanics-auto-body-repair-1", followUp: "Let's explore Measurement." },
      { label: " Vehicle Systems", nextStepId: "module-work-auto-mechanics-auto-body-repair-2", followUp: "Let's explore Vehicle Systems." }
    ]
  },
  {
    id: "module-work-auto-mechanics-auto-body-repair-1",
    message: "Pick a lesson in Measurement:",
    options: [
      { label: " Length", nextStepId: null, followUp: "Let's check out Length." },
      { label: " Surface Area", nextStepId: null, followUp: "Let's check out Surface Area." }
    ]
  },
  {
    id: "module-work-auto-mechanics-auto-body-repair-2",
    message: "Pick a lesson in Vehicle Systems:",
    options: [
      { label: " Engine Basics", nextStepId: null, followUp: "Let's check out Engine Basics." },
      { label: " Tyre Maintenance", nextStepId: null, followUp: "Let's check out Tyre Maintenance." }
    ]
  },

  // --- HOSPITALITY ---
  {
    id: "sector-work-hospitality",
    message: "Which course in Hospitality?",
    options: [
      { label: "Accommodation Services", nextStepId: "course-work-hospitality-accommodation-services", followUp: "Let's dive into Accommodation Services." },
      { label: "Restaurant Management", nextStepId: "course-work-hospitality-restaurant-management", followUp: "Let's dive into Restaurant Management." }
    ]
  },
  {
    id: "course-work-hospitality-accommodation-services",
    message: "Which module in Accommodation Services?",
    options: [
      { label: " Guest Support", nextStepId: "module-work-hospitality-accommodation-services-1", followUp: "Let's explore Guest Support." },
      { label: " Dosages", nextStepId: "module-work-hospitality-accommodation-services-2", followUp: "Let's explore Dosages." }
    ]
  },
  {
    id: "module-work-hospitality-accommodation-services-1",
    message: "Pick a lesson in Guest Support:",
    options: [
      { label: " Bookings", nextStepId: null, followUp: "Let's check out Bookings." },
      { label: " Amenities", nextStepId: null, followUp: "Let's check out Amenities." }
    ]
  },
  {
    id: "module-work-hospitality-accommodation-services-2",
    message: "Pick a lesson in Dosages:",
    options: [
      { label: " Inventory", nextStepId: null, followUp: "Let's check out Inventory." },
      { label: " Budgeting", nextStepId: null, followUp: "Let's check out Budgeting." }
    ]
  },
  {
    id: "course-work-hospitality-restaurant-management",
    message: "Which module in Restaurant Management?",
    options: [
      { label: " Front-of-House", nextStepId: "module-work-hospitality-restaurant-management-1", followUp: "Let's explore Front-of-House." },
      { label: " Back-of-House", nextStepId: "module-work-hospitality-restaurant-management-2", followUp: "Let's explore Back-of-House." }
    ]
  },
  {
    id: "module-work-hospitality-restaurant-management-1",
    message: "Pick a lesson in Front-of-House:",
    options: [
      { label: " Customer Service", nextStepId: null, followUp: "Let's check out Customer Service." },
      { label: " Cash Handling", nextStepId: null, followUp: "Let's check out Cash Handling." }
    ]
  },
  {
    id: "module-work-hospitality-restaurant-management-2",
    message: "Pick a lesson in Back-of-House:",
    options: [
      { label: " Food prep", nextStepId: null, followUp: "Let's check out Food prep." },
      { label: " Inventory & Storage", nextStepId: null, followUp: "Let's check out Inventory & Storage." }
    ]
  },

  // --- E-COMMERCE ---
  {
    id: "sector-work-ecommerce",
    message: "Which course in E-commerce?",
    options: [
      { label: "Online Retail", nextStepId: "course-work-ecommerce-online-retail", followUp: "Let's dive into Online Retail." }
    ]
  },
  {
    id: "course-work-ecommerce-online-retail",
    message: "Which module in Online Retail?",
    options: [
      { label: " Sales Planning", nextStepId: "module-work-ecommerce-online-retail-1", followUp: "Let's explore Sales Planning." },
      { label: " Warehouse", nextStepId: "module-work-ecommerce-online-retail-2", followUp: "Let's explore Warehouse." }
    ]
  },
  {
    id: "module-work-ecommerce-online-retail-1",
    message: "Pick a lesson in Sales Planning:",
    options: [
      { label: " Pricing", nextStepId: null, followUp: "Let's check out Pricing." },
      { label: " Inventory", nextStepId: null, followUp: "Let's check out Inventory." }
    ]
  },
  {
    id: "module-work-ecommerce-online-retail-2",
    message: "Pick a lesson in Warehouse:",
    options: [
      { label: " Storage", nextStepId: null, followUp: "Let's check out Storage." },
      { label: " Shipping", nextStepId: null, followUp: "Let's check out Shipping." }
    ]
  },

  // --- FASHION ---
  {
    id: "sector-work-fashion",
    message: "Which course in Fashion?",
    options: [
      { label: "Design", nextStepId: "course-work-fashion-design", followUp: "Let's dive into Design." }
    ]
  },
  {
    id: "course-work-fashion-design",
    message: "Which module in Design?",
    options: [
      { label: " Measurement & Sizing", nextStepId: "module-work-fashion-design-1", followUp: "Let's explore Measurement & Sizing." },
      { label: " Warehouse", nextStepId: "module-work-fashion-design-2", followUp: "Let's explore Warehouse." }
    ]
  },
  {
    id: "module-work-fashion-design-1",
    message: "Pick a lesson in Measurement & Sizing:",
    options: [
      { label: " Apparel", nextStepId: null, followUp: "Let's check out Apparel." },
      { label: " Accessories & Footwear", nextStepId: null, followUp: "Let's check out Accessories & Footwear." }
    ]
  },
  {
    id: "module-work-fashion-design-2",
    message: "Pick a lesson in Warehouse:",
    options: [
      { label: " Material & Acquiring Costs", nextStepId: null, followUp: "Let's check out Material & Acquiring Costs." },
      { label: " Labour & Other Costs", nextStepId: null, followUp: "Let's check out Labour & Other Costs." }
    ]
  },

  // --- FITNESS & SPORTS ---
  {
    id: "sector-work-fitness-sports",
    message: "Which course in Fitness & Sports?",
    options: [
      { label: "Personal Training", nextStepId: "course-work-fitness-sports-personal-training", followUp: "Let's dive into Personal Training." }
    ]
  },
  {
    id: "course-work-fitness-sports-personal-training",
    message: "Which module in Personal Training?",
    options: [
      { label: " Client Assessment", nextStepId: "module-work-fitness-sports-personal-training-1", followUp: "Let's explore Client Assessment." },
      { label: " Diet & Hydration", nextStepId: "module-work-fitness-sports-personal-training-2", followUp: "Let's explore Diet & Hydration." }
    ]
  },
  {
    id: "module-work-fitness-sports-personal-training-1",
    message: "Pick a lesson in Client Assessment:",
    options: [
      { label: " Fitness Evaluation", nextStepId: null, followUp: "Let's check out Fitness Evaluation." },
      { label: " Progress Tracking", nextStepId: null, followUp: "Let's check out Progress Tracking." }
    ]
  },
  {
    id: "module-work-fitness-sports-personal-training-2",
    message: "Pick a lesson in Diet & Hydration:",
    options: [
      { label: " Nutrition Planning", nextStepId: null, followUp: "Let's check out Nutrition Planning." },
      { label: " Hydration Strategies", nextStepId: null, followUp: "Let's check out Hydration Strategies." }
    ]
  },

  // --- TRANSPORT LOGISTICS ---
  {
    id: "sector-work-transport-logistics",
    message: "Which course in Transport Logistics?",
    options: [
      { label: "Delivery Transportation", nextStepId: "course-work-transport-logistics-delivery-transportation", followUp: "Let's dive into Delivery Transportation." }
    ]
  },
  {
    id: "course-work-transport-logistics-delivery-transportation",
    message: "Which module in Delivery Transportation?",
    options: [
      { label: " Planning & Schedule", nextStepId: "module-work-transport-logistics-delivery-transportation-1", followUp: "Let's explore Planning & Schedule." },
      { label: " Weights & Costs", nextStepId: "module-work-transport-logistics-delivery-transportation-2", followUp: "Let's explore Weights & Costs." }
    ]
  },
  {
    id: "module-work-transport-logistics-delivery-transportation-1",
    message: "Pick a lesson in Planning & Schedule:",
    options: [
      { label: " Distance", nextStepId: null, followUp: "Let's check out Distance." },
      { label: " Time Management", nextStepId: null, followUp: "Let's check out Time Management." }
    ]
  },
  {
    id: "module-work-transport-logistics-delivery-transportation-2",
    message: "Pick a lesson in Weights & Costs:",
    options: [
      { label: " Load Calculation", nextStepId: null, followUp: "Let's check out Load Calculation." },
      { label: " Fuel usage & costs", nextStepId: null, followUp: "Let's check out Fuel usage & costs." }
    ]
  },

  // --- SIMPLY STUDY ---
  {
    id: "sector-study",
    message: "Which Sector in Simply Study would you like to start?",
    options: [
      { label: "Reading", nextStepId: "module-study-reading", followUp: "Great choice! Let's dive into Reading." },
      { label: "Memory", nextStepId: "module-study-memory", followUp: "Great choice! Let's dive into Memory." },
      { label: "Practice", nextStepId: "module-study-practice", followUp: "Great choice! Let's dive into Practice." }
    ]
  },
  // Reading branch
  {
    id: "module-study-reading",
    message: "Which topic in 'Reading'?",
    options: [
      { label: "Skimming", nextStepId: "topic-study-reading-skimming", followUp: "Awesome! Let's learn about Skimming." },
      { label: "Scanning", nextStepId: "topic-study-reading-scanning", followUp: "Awesome! Let's learn about Scanning." }
    ]
  },
  {
    id: "topic-study-reading-skimming",
    message: "Pick a subtopic for Skimming:",
    options: [
      { label: "Fast reading", nextStepId: "subtopic-study-reading-skimming-fast", followUp: "Let's dive into Fast reading." },
      { label: "Focused reading", nextStepId: "subtopic-study-reading-skimming-focused", followUp: "Let's dive into Focused reading." }
    ]
  },
  {
    id: "subtopic-study-reading-skimming-fast",
    message: "Pick a scenario for Fast reading:",
    options: [
      { label: "Reading a book", nextStepId: "scenario-study-reading-skimming-fast-book", followUp: "Let's check out Reading a book." },
      { label: "Reading a news article", nextStepId: "scenario-study-reading-skimming-fast-news", followUp: "Let's check out Reading a news article." }
    ]
  },
  {
    id: "scenario-study-reading-skimming-fast-book",
    message: "Let's understand Skimming with Fast reading and Reading a book.",
    options: [
      { label: "Continue", nextStepId: null, followUp: "Great! You chose Reading a book." }
    ]
  },
  {
    id: "scenario-study-reading-skimming-fast-news",
    message: "Let's understand Skimming with Fast reading and Reading a news article.",
    options: [
      { label: "Continue", nextStepId: null, followUp: "Great! You chose Reading a news article." }
    ]
  },
  {
    id: "subtopic-study-reading-skimming-focused",
    message: "Pick a scenario for Focused reading:",
    options: [
      { label: "Reading a technical document", nextStepId: "scenario-study-reading-skimming-focused-technical", followUp: "Let's check out Reading a technical document." },
      { label: "Reading a novel", nextStepId: "scenario-study-reading-skimming-focused-novel", followUp: "Let's check out Reading a novel." }
    ]
  },
  {
    id: "scenario-study-reading-skimming-focused-technical",
    message: "Let's understand Skimming with Focused reading and Reading a technical document.",
    options: [
      { label: "Continue", nextStepId: null, followUp: "Great! You chose Reading a technical document." }
    ]
  },
  {
    id: "scenario-study-reading-skimming-focused-novel",
    message: "Let's understand Skimming with Focused reading and Reading a novel.",
    options: [
      { label: "Continue", nextStepId: null, followUp: "Great! You chose Reading a novel." }
    ]
  },
  {
    id: "topic-study-reading-scanning",
    message: "Pick a subtopic for Scanning:",
    options: [
      { label: "Visual scanning", nextStepId: "subtopic-study-reading-scanning-visual", followUp: "Let's dive into Visual scanning." },
      { label: "Keyword scanning", nextStepId: "subtopic-study-reading-scanning-keyword", followUp: "Let's dive into Keyword scanning." }
    ]
  },
  {
    id: "subtopic-study-reading-scanning-visual",
    message: "Pick a scenario for Visual scanning:",
    options: [
      { label: "Reading a map", nextStepId: "scenario-study-reading-scanning-visual-map", followUp: "Let's check out Reading a map." },
      { label: "Reading a chart", nextStepId: "scenario-study-reading-scanning-visual-chart", followUp: "Let's check out Reading a chart." }
    ]
  },
  {
    id: "scenario-study-reading-scanning-visual-map",
    message: "Let's understand Scanning with Visual scanning and Reading a map.",
    options: [
      { label: "Continue", nextStepId: null, followUp: "Great! You chose Reading a map." }
    ]
  },
  {
    id: "scenario-study-reading-scanning-visual-chart",
    message: "Let's understand Scanning with Visual scanning and Reading a chart.",
    options: [
      { label: "Continue", nextStepId: null, followUp: "Great! You chose Reading a chart." }
    ]
  },
  {
    id: "subtopic-study-reading-scanning-keyword",
    message: "Pick a scenario for Keyword scanning:",
    options: [
      { label: "Reading a headline", nextStepId: "scenario-study-reading-scanning-keyword-headline", followUp: "Let's check out Reading a headline." },
      { label: "Reading a paragraph", nextStepId: "scenario-study-reading-scanning-keyword-paragraph", followUp: "Let's check out Reading a paragraph." }
    ]
  },
  {
    id: "scenario-study-reading-scanning-keyword-headline",
    message: "Let's understand Scanning with Keyword scanning and Reading a headline.",
    options: [
      { label: "Continue", nextStepId: null, followUp: "Great! You chose Reading a headline." }
    ]
  },
  {
    id: "scenario-study-reading-scanning-keyword-paragraph",
    message: "Let's understand Scanning with Keyword scanning and Reading a paragraph.",
    options: [
      { label: "Continue", nextStepId: null, followUp: "Great! You chose Reading a paragraph." }
    ]
  },
  // Memory branch
  {
    id: "module-study-memory",
    message: "Which topic in 'Memory'?",
    options: [
      { label: "Mnemonics", nextStepId: "topic-study-memory-mnemonics", followUp: "Awesome! Let's learn about Mnemonics." },
      { label: "Spaced Repetition", nextStepId: "topic-study-memory-spaced-repetition", followUp: "Awesome! Let's learn about Spaced Repetition." }
    ]
  },
  {
    id: "topic-study-memory-mnemonics",
    message: "Pick a subtopic for Mnemonics:",
    options: [
      { label: "Visual mnemonics", nextStepId: "subtopic-study-memory-mnemonics-visual", followUp: "Let's dive into Visual mnemonics." },
      { label: "Acoustic mnemonics", nextStepId: "subtopic-study-memory-mnemonics-acoustic", followUp: "Let's dive into Acoustic mnemonics." }
    ]
  },
  {
    id: "subtopic-study-memory-mnemonics-visual",
    message: "Pick a scenario for Visual mnemonics:",
    options: [
      { label: "Visualizing a word", nextStepId: "scenario-study-memory-mnemonics-visual-word", followUp: "Let's check out Visualizing a word." },
      { label: "Visualizing a number", nextStepId: "scenario-study-memory-mnemonics-visual-number", followUp: "Let's check out Visualizing a number." }
    ]
  },
  {
    id: "scenario-study-memory-mnemonics-visual-word",
    message: "Let's understand Mnemonics with Visual mnemonics and Visualizing a word.",
    options: [
      { label: "Continue", nextStepId: null, followUp: "Great! You chose Visualizing a word." }
    ]
  },
  {
    id: "scenario-study-memory-mnemonics-visual-number",
    message: "Let's understand Mnemonics with Visual mnemonics and Visualizing a number.",
    options: [
      { label: "Continue", nextStepId: null, followUp: "Great! You chose Visualizing a number." }
    ]
  },
  {
    id: "subtopic-study-memory-mnemonics-acoustic",
    message: "Pick a scenario for Acoustic mnemonics:",
    options: [
      { label: "Reciting a poem", nextStepId: "scenario-study-memory-mnemonics-acoustic-poem", followUp: "Let's check out Reciting a poem." },
      { label: "Reciting a phone number", nextStepId: "scenario-study-memory-mnemonics-acoustic-phone", followUp: "Let's check out Reciting a phone number." }
    ]
  },
  {
    id: "scenario-study-memory-mnemonics-acoustic-poem",
    message: "Let's understand Mnemonics with Acoustic mnemonics and Reciting a poem.",
    options: [
      { label: "Continue", nextStepId: null, followUp: "Great! You chose Reciting a poem." }
    ]
  },
  {
    id: "scenario-study-memory-mnemonics-acoustic-phone",
    message: "Let's understand Mnemonics with Acoustic mnemonics and Reciting a phone number.",
    options: [
      { label: "Continue", nextStepId: null, followUp: "Great! You chose Reciting a phone number." }
    ]
  },
  {
    id: "topic-study-memory-spaced-repetition",
    message: "Pick a subtopic for Spaced Repetition:",
    options: [
      { label: "Basic repetition", nextStepId: "subtopic-study-memory-spaced-repetition-basic", followUp: "Let's dive into Basic repetition." },
      { label: "Advanced repetition", nextStepId: "subtopic-study-memory-spaced-repetition-advanced", followUp: "Let's dive into Advanced repetition." }
    ]
  },
  {
    id: "subtopic-study-memory-spaced-repetition-basic",
    message: "Pick a scenario for Basic repetition:",
    options: [
      { label: "Reciting a list", nextStepId: "scenario-study-memory-spaced-repetition-basic-list", followUp: "Let's check out Reciting a list." },
      { label: "Reading a sentence", nextStepId: "scenario-study-memory-spaced-repetition-basic-sentence", followUp: "Let's check out Reading a sentence." }
    ]
  },
  {
    id: "scenario-study-memory-spaced-repetition-basic-list",
    message: "Let's understand Spaced Repetition with Basic repetition and Reciting a list.",
    options: [
      { label: "Continue", nextStepId: null, followUp: "Great! You chose Reciting a list." }
    ]
  },
  {
    id: "scenario-study-memory-spaced-repetition-basic-sentence",
    message: "Let's understand Spaced Repetition with Basic repetition and Reading a sentence.",
    options: [
      { label: "Continue", nextStepId: null, followUp: "Great! You chose Reading a sentence." }
    ]
  },
  {
    id: "subtopic-study-memory-spaced-repetition-advanced",
    message: "Pick a scenario for Advanced repetition:",
    options: [
      { label: "Complex math problems", nextStepId: "scenario-study-memory-spaced-repetition-advanced-math", followUp: "Let's check out Complex math problems." },
      { label: "Historical dates", nextStepId: "scenario-study-memory-spaced-repetition-advanced-dates", followUp: "Let's check out Historical dates." }
    ]
  },
  {
    id: "scenario-study-memory-spaced-repetition-advanced-math",
    message: "Let's understand Spaced Repetition with Advanced repetition and Complex math problems.",
    options: [
      { label: "Continue", nextStepId: null, followUp: "Great! You chose Complex math problems." }
    ]
  },
  {
    id: "scenario-study-memory-spaced-repetition-advanced-dates",
    message: "Let's understand Spaced Repetition with Advanced repetition and Historical dates.",
    options: [
      { label: "Continue", nextStepId: null, followUp: "Great! You chose Historical dates." }
    ]
  },
  // Practice branch
  {
    id: "module-study-practice",
    message: "Which topic in 'Practice'?",
    options: [
      { label: "Mock Tests", nextStepId: "topic-study-practice-mock-tests", followUp: "Awesome! Let's learn about Mock Tests." }
    ]
  },
  {
    id: "topic-study-practice-mock-tests",
    message: "Pick a subtopic for Mock Tests:",
    options: [
      { label: "Practice tests", nextStepId: "subtopic-study-practice-mock-tests-practice", followUp: "Let's dive into Practice tests." },
      { label: "Analyze results", nextStepId: "subtopic-study-practice-mock-tests-analyze", followUp: "Let's dive into Analyze results." }
    ]
  },
  {
    id: "subtopic-study-practice-mock-tests-practice",
    message: "Pick a scenario for Practice tests:",
    options: [
      { label: "Practice a subject", nextStepId: "scenario-study-practice-mock-tests-practice-subject", followUp: "Let's check out Practice a subject." },
      { label: "Practice a skill", nextStepId: "scenario-study-practice-mock-tests-practice-skill", followUp: "Let's check out Practice a skill." }
    ]
  },
  {
    id: "scenario-study-practice-mock-tests-practice-subject",
    message: "Let's understand Mock Tests with Practice tests and Practice a subject.",
    options: [
      { label: "Continue", nextStepId: null, followUp: "Great! You chose Practice a subject." }
    ]
  },
  {
    id: "scenario-study-practice-mock-tests-practice-skill",
    message: "Let's understand Mock Tests with Practice tests and Practice a skill.",
    options: [
      { label: "Continue", nextStepId: null, followUp: "Great! You chose Practice a skill." }
    ]
  },
  {
    id: "subtopic-study-practice-mock-tests-analyze",
    message: "Pick a scenario for Analyze results:",
    options: [
      { label: "Review mistakes", nextStepId: "scenario-study-practice-mock-tests-analyze-mistakes", followUp: "Let's check out Review mistakes." },
      { label: "Improve strategies", nextStepId: "scenario-study-practice-mock-tests-analyze-strategies", followUp: "Let's check out Improve strategies." }
    ]
  },
  {
    id: "scenario-study-practice-mock-tests-analyze-mistakes",
    message: "Let's understand Mock Tests with Analyze results and Review mistakes.",
    options: [
      { label: "Continue", nextStepId: null, followUp: "Great! You chose Review mistakes." }
    ]
  },
  {
    id: "scenario-study-practice-mock-tests-analyze-strategies",
    message: "Let's understand Mock Tests with Analyze results and Improve strategies.",
    options: [
      { label: "Continue", nextStepId: null, followUp: "Great! You chose Improve strategies." }
    ]
  },

  // At the very end of each path, add a node for navigation:
  {
    id: "life-end",
    message: "Ready to start your learning journey in Simply Life?",
    options: [
      { label: "Continue", nextStepId: null, followUp: "Redirecting...", continueUrl: "https://qa.numeracyforlife.com/login" }
    ]
  },
  {
    id: "work-end",
    message: "Ready to start your learning journey in Simply Work?",
    options: [
      { label: "Continue", nextStepId: null, followUp: "Redirecting...", continueUrl: "https://qa.numeracyforlife.com/login" }
    ]
  },
  {
    id: "study-end",
    message: "Ready to start your learning journey in Simply Study?",
    options: [
      { label: "Continue", nextStepId: null, followUp: "Redirecting...", continueUrl: "https://qa.numeracyforlife.com/login" }
    ]
  }
]; 