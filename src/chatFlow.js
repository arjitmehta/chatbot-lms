export const chatFlow = [
  {
    id: "welcome",
    message: "How would you like to continue today?",
    options: [
      {
        label: "Resume Learning",
        nextStepId: "resume-learning",
        followUp: "Fantastic! Let's pick up right where you left off and keep that momentum going."
      },
      {
        label: "Explore the System",
        nextStepId: "explore-system",
        followUp: "It's great to explore! Let me walk you through the system starting from the home screen."
      },
      {
        label: "Select a Course",
        nextStepId: "select-course",
        followUp: "Awesome! Let's help you find a new course to dive into."
      },
      {
        label: "Numbers gym",
        nextStepId: "numbers-gym",
        followUp: "You're going to love this! Numbers Gym - Fun game to sharpen your number skills. Let's jump in!"
      }
    ]
  },
  {
    id: "select-course",
    message: "Which stream do you want to dive into?",
    options: [
      { label: "Simply Life", nextStepId: "course-life", followUp: `Great! Let's explore Simply Life.\n Day-to-day scenarios that you may encounter which require you to manipulate numbers.` },
      { label: "Simply Work", nextStepId: "course-work", followUp: `Fantastic! Let's check out Simply Work.\n Numeracy to help you gain qualifications / pass exams.` },
      { label: "Simply Study", nextStepId: "course-study", followUp: `Awesome! Let's begin Simply Study.\n Real-life numeracy situations that you might face whilst at work or on an apprenticeship.` }
    ]
  },
  ...["life", "work", "study"].flatMap(domain => {
    const moduleLabels = {
      life: ["Money", "Time", "Data"],
      work: ["Productivity", "Communication", "Tools"],
      study: ["Reading", "Memory", "Practice"]
    }[domain];

    const topicMap = {
      life: {
        Money: ["Discount", "Household", "Finance"],
        Time: ["12-hour Format", "AM-PM Cycle"],
        Data: ["Understanding Data"]
      },
      work: {
        Productivity: ["Time Blocking", "Prioritization"],
        Communication: ["Email", "Meetings"],
        Tools: ["Spreadsheets"]
      },
      study: {
        Reading: ["Skimming", "Scanning"],
        Memory: ["Mnemonics", "Spaced Repetition"],
        Practice: ["Mock Tests"]
      }
    };

    return [
      {
        id: `course-${domain}`,
        message: `Which category in Simply ${domain.charAt(0).toUpperCase() + domain.slice(1)} would you like to start?`,
        options: moduleLabels.map(module => ({
          label: module,
          nextStepId: `module-${domain}-${module.toLowerCase().replace(/ /g, '-')}`,
          followUp: `Great choice! Let's dive into ${module}.`
        }))
      },
      ...moduleLabels.map(module => {
        const moduleKey = module.toLowerCase().replace(/ /g, '-');
        const topics = topicMap[domain][module] || [];
        return {
          id: `module-${domain}-${moduleKey}`,
          message: `Which course would you like to explore in '${module}'?`,
          options: topics.map(topic => ({
            label: topic,
            nextStepId: `topic-${domain}-${topic.toLowerCase().replace(/ /g, '-')}`,
            followUp: `Awesome! Let's learn about ${topic}.`
          }))
        };
      }),
      ...Object.entries(topicMap[domain]).flatMap(([module, topics]) =>
        topics.map(topic => {
          const topicId = topic.toLowerCase().replace(/ /g, '-');
          return {
            id: `topic-${domain}-${topicId}`,
            message: `Pick a topic for ${topic}:`,
            options: [
              { label: `${topicId}_Scenario1`, nextStepId: null, followUp: `Let's understand ${topic} with ${topicId}_Scenario1.` },
              { label: `${topicId}_Scenario2`, nextStepId: null, followUp: `Let's understand ${topic} with ${topicId}_Scenario2.` }
            ]
          };
        })
      )
    ];
  })
]; 