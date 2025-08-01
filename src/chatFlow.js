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
    message: "Which topic in Simply Study would you like to start?",
    options: [
      { label: "Percentages", nextStepId: "study-topic-percentages", followUp: "Great choice! Let's dive into Percentages." },
      { label: "Ratio and Proportion", nextStepId: "study-topic-ratio-proportion", followUp: "Great choice! Let's dive into Ratio and Proportion." },
      { label: "Numbers", nextStepId: "study-topic-numbers", followUp: "Great choice! Let's dive into Numbers." }
    ]
  },
  // --- Percentages ---
  {
    id: "study-topic-percentages",
    message: "Choose a section in Percentages:",
    options: [
      { label: "Learning", nextStepId: "study-percentages-learning", followUp: "Let's start learning Percentages." },
      { label: "Practice", nextStepId: "study-percentages-practice", followUp: "Let's practice Percentages." },
      { label: "Review", nextStepId: "study-percentages-review", followUp: "Let's review Percentages." }
    ]
  },
  // Learning - Percentages
  {
    id: "study-percentages-learning",
    message: "Select a module in Learning Percentages:",
    options: [
      { label: " Understanding Percentages", nextStepId: "study-percentages-learning-module1" },
      { label: " Key Values of Percentages", nextStepId: "study-percentages-learning-module2" },
      { label: " Interrelation of Numbers and Percentages", nextStepId: "study-percentages-learning-module3" },
      { label: " Formula to Calculate Percentage, N% of X", nextStepId: "study-percentages-learning-module4" },
      { label: " Link Between Percentages, Fractions, Decimals", nextStepId: "study-percentages-learning-module5" },
      { label: " Inter-conversion of Fractions, Decimals, Percentages", nextStepId: "study-percentages-learning-module6" }
    ]
  },
  { id: "study-percentages-learning-module1", message: " Understanding Percentages", options: [ { label: "Lesson 1", nextStepId: null, followUp: "Let's start Lesson 1 of Module 1." }, { label: "Quiz", nextStepId: null, followUp: "Let's take the Quiz for Module 1." } ] },
  { id: "study-percentages-learning-module2", message: " Key Values of Percentages", options: [ { label: "Lesson 1", nextStepId: null, followUp: "Let's start Lesson 1 of Module 2." }, { label: "Lesson 2", nextStepId: null, followUp: "Let's start Lesson 2 of Module 2." }, { label: "Quiz", nextStepId: null, followUp: "Let's take the Quiz for Module 2." } ] },
  { id: "study-percentages-learning-module3", message: " Interrelation of Numbers and Percentages", options: [ { label: "Lesson 1", nextStepId: null, followUp: "Let's start Lesson 1 of Module 3." }, { label: "Lesson 2", nextStepId: null, followUp: "Let's start Lesson 2 of Module 3." }, { label: "Quiz", nextStepId: null, followUp: "Let's take the Quiz for Module 3." } ] },
  { id: "study-percentages-learning-module4", message: " Formula to Calculate Percentage, N% of X", options: [ { label: "Lesson 1", nextStepId: null, followUp: "Let's start Lesson 1 of Module 4." }, { label: "Quiz", nextStepId: null, followUp: "Let's take the Quiz for Module 4." } ] },
  { id: "study-percentages-learning-module5", message: " Link Between Percentages, Fractions, Decimals", options: [ { label: "Lesson 1", nextStepId: null, followUp: "Let's start Lesson 1 of Module 5." }, { label: "Quiz", nextStepId: null, followUp: "Let's take the Quiz for Module 5." } ] },
  { id: "study-percentages-learning-module6", message: " Inter-conversion of Fractions, Decimals, Percentages", options: [ { label: "Lesson 1", nextStepId: null, followUp: "Let's start Lesson 1 of Module 6." }, { label: "Quiz", nextStepId: null, followUp: "Let's take the Quiz for Module 6." } ] },
  // Practice - Percentages
  { id: "study-percentages-practice", message: "Select an exercise in Practice Percentages:", options: [ { label: "Exercise 1: Activity Based", nextStepId: null, followUp: "Let's do Activity Based Exercise 1." }, { label: "Exercise 2: Error Search", nextStepId: null, followUp: "Let's do Error Search Exercise 2." }, { label: "Exercise 3: Exam Based", nextStepId: null, followUp: "Let's do Exam Based Exercise 3." }, { label: "Exercise 4: Exam Based", nextStepId: null, followUp: "Let's do Exam Based Exercise 4." } ] },
  // Review - Percentages
  { id: "study-percentages-review", message: "Select a quiz in Review Percentages:", options: [ { label: "Quiz 1", nextStepId: null, followUp: "Let's take Quiz 1 for Review." }, { label: "Quiz 2", nextStepId: null, followUp: "Let's take Quiz 2 for Review." } ] },
  // --- Ratio and Proportion ---
  {
    id: "study-topic-ratio-proportion",
    message: "Choose a section in Ratio and Proportion:",
    options: [
      { label: "Learning", nextStepId: "study-ratio-learning", followUp: "Let's start learning Ratio and Proportion." },
      { label: "Practice", nextStepId: "study-ratio-practice", followUp: "Let's practice Ratio and Proportion." },
      { label: "Review", nextStepId: "study-ratio-review", followUp: "Let's review Ratio and Proportion." }
    ]
  },
  // Learning - Ratio and Proportion
  {
    id: "study-ratio-learning",
    message: "Select a module in Learning Ratio and Proportion:",
    options: [
      { label: " Introduction to Ratio", nextStepId: "study-ratio-learning-module1" },
      { label: " Difference between Fractions and Ratio", nextStepId: "study-ratio-learning-module2" },
      { label: " Introduction to Proportion", nextStepId: "study-ratio-learning-module3" },
      { label: " Equal and Unequal Sharing", nextStepId: "study-ratio-learning-module4" },
      { label: " Link between Ratio and Percentages", nextStepId: "study-ratio-learning-module5" }
    ]
  },
  { id: "study-ratio-learning-module1", message: " Introduction to Ratio", options: [ { label: "Lesson 1", nextStepId: null, followUp: "Let's start Lesson 1 of Module 1." }, { label: "Quiz", nextStepId: null, followUp: "Let's take the Quiz for Module 1." } ] },
  { id: "study-ratio-learning-module2", message: " Difference between Fractions and Ratio", options: [ { label: "Lesson 1", nextStepId: null, followUp: "Let's start Lesson 1 of Module 2." }, { label: "Quiz", nextStepId: null, followUp: "Let's take the Quiz for Module 2." } ] },
  { id: "study-ratio-learning-module3", message: " Introduction to Proportion", options: [ { label: "Lesson 1", nextStepId: null, followUp: "Let's start Lesson 1 of Module 3." }, { label: "Quiz", nextStepId: null, followUp: "Let's take the Quiz for Module 3." } ] },
  { id: "study-ratio-learning-module4", message: " Equal and Unequal Sharing", options: [ { label: "Lesson 1", nextStepId: null, followUp: "Let's start Lesson 1 of Module 4." }, { label: "Quiz", nextStepId: null, followUp: "Let's take the Quiz for Module 4." } ] },
  { id: "study-ratio-learning-module5", message: " Link between Ratio and Percentages", options: [ { label: "Lesson 1", nextStepId: null, followUp: "Let's start Lesson 1 of Module 5." }, { label: "Quiz", nextStepId: null, followUp: "Let's take the Quiz for Module 5." } ] },
  // Practice - Ratio and Proportion
  { id: "study-ratio-practice", message: "Select an exercise in Practice Ratio and Proportion:", options: [ { label: "Exercise 1: Activity Based", nextStepId: null, followUp: "Let's do Activity Based Exercise 1." }, { label: "Exercise 2: Error Search", nextStepId: null, followUp: "Let's do Error Search Exercise 2." }, { label: "Exercise 3: Exam Based", nextStepId: null, followUp: "Let's do Exam Based Exercise 3." }, { label: "Exercise 4: Exam Based", nextStepId: null, followUp: "Let's do Exam Based Exercise 4." } ] },
  // Review - Ratio and Proportion
  { id: "study-ratio-review", message: "Select a quiz in Review Ratio and Proportion:", options: [ { label: "Quiz 1", nextStepId: null, followUp: "Let's take Quiz 1 for Review." }, { label: "Quiz 2", nextStepId: null, followUp: "Let's take Quiz 2 for Review." } ] },
  // --- Numbers ---
  {
    id: "study-topic-numbers",
    message: "Choose a section in Numbers:",
    options: [
      { label: "Learning", nextStepId: "study-numbers-learning", followUp: "Let's start learning Numbers." },
      { label: "Practice", nextStepId: "study-numbers-practice", followUp: "Let's practice Numbers." },
      { label: "Review", nextStepId: "study-numbers-review", followUp: "Let's review Numbers." }
    ]
  },
  // Learning - Numbers
  {
    id: "study-numbers-learning",
    message: "Select a module in Learning Numbers:",
    options: [
      { label: " Estimation and Rounding", nextStepId: "study-numbers-learning-module1" },
      { label: " Fractions", nextStepId: "study-numbers-learning-module2" },
      { label: " Decimals", nextStepId: "study-numbers-learning-module3" },
      { label: " Link between Fractions and Decimals", nextStepId: "study-numbers-learning-module4" }
    ]
  },
  { id: "study-numbers-learning-module1", message: " Estimation and Rounding", options: [ { label: "Lesson 1", nextStepId: null, followUp: "Let's start Lesson 1 of Module 1." }, { label: "Quiz 1", nextStepId: null, followUp: "Let's take Quiz 1 for Module 1." } ] },
  { id: "study-numbers-learning-module2", message: " Fractions", options: [ { label: "Lesson 1", nextStepId: null, followUp: "Let's start Lesson 1 of Module 2." }, { label: "Lesson 2", nextStepId: null, followUp: "Let's start Lesson 2 of Module 2." }, { label: "Quiz", nextStepId: null, followUp: "Let's take the Quiz for Module 2." } ] },
  { id: "study-numbers-learning-module3", message: " Decimals", options: [ { label: "Lesson 1", nextStepId: null, followUp: "Let's start Lesson 1 of Module 3." }, { label: "Quiz", nextStepId: null, followUp: "Let's take the Quiz for Module 3." } ] },
  { id: "study-numbers-learning-module4", message: " Link between Fractions and Decimals", options: [ { label: "Lesson 1", nextStepId: null, followUp: "Let's start Lesson 1 of Module 4." }, { label: "Quiz", nextStepId: null, followUp: "Let's take the Quiz for Module 4." } ] },
  // Practice - Numbers
  { id: "study-numbers-practice", message: "Select an exercise in Practice Numbers:", options: [ { label: "Exercise 1: Activity Based", nextStepId: null, followUp: "Let's do Activity Based Exercise 1." }, { label: "Exercise 2: Error Search", nextStepId: null, followUp: "Let's do Error Search Exercise 2." }, { label: "Exercise 3: Exam Based", nextStepId: null, followUp: "Let's do Exam Based Exercise 3." }, { label: "Exercise 4: Exam Based", nextStepId: null, followUp: "Let's do Exam Based Exercise 4." } ] },
  // Review - Numbers
  { id: "study-numbers-review", message: "Select a quiz in Review Numbers:", options: [ { label: "Quiz 1", nextStepId: null, followUp: "Let's take Quiz 1 for Review." }, { label: "Quiz 2", nextStepId: null, followUp: "Let's take Quiz 2 for Review." } ] },

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