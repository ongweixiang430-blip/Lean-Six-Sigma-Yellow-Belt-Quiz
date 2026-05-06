/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Which of the following tools should be used when a team is prioritizing a list of projects and timelines for the year?",
    options: ["Brainstorming", "Affinity diagrams", "Prioritization Matrix", "5 whys"],
    correctAnswer: "Prioritization Matrix",
    explanation: "A Prioritization Matrix is explicitly designed to rank options (like projects) against a weighted set of criteria, making it ideal for strategic planning."
  },
  {
    id: 2,
    question: "The Fishbone diagram is another name for:",
    options: ["SPC Chart", "Multi-vari Chart", "Cause and Effect diagram", "Run Chart"],
    correctAnswer: "Cause and Effect diagram",
    explanation: "The Fishbone diagram, also known as the Ishikawa diagram, is used to visualize potential causes of a specific problem, hence 'Cause and Effect'."
  },
  {
    id: 3,
    question: "Which of the following activities is value-add?",
    options: ["Prep", "Process", "Storage", "Inspection"],
    correctAnswer: "Process",
    explanation: "Value-add activities are those that transform the product or service in a way the customer is willing to pay for. 'Processing' directly changes the output."
  },
  {
    id: 4,
    question: "Which of the following is defined as continuous, incremental improvement?",
    options: ["Kanban", "Kaizen", "Just-in-time", "Jidoka"],
    correctAnswer: "Kaizen",
    explanation: "Kaizen is a Japanese term meaning 'change for better' and refers to activities that continuously improve all functions and involve all employees."
  },
  {
    id: 5,
    question: "Which of the following performance measures is most appropriate for evaluating the tangible effects of a Lean Six Sigma project?",
    options: ["Cycle time", "Team member absentee rate", "Employee morale", "Unsolicited compliments from customers"],
    correctAnswer: "Cycle time",
    explanation: "Cycle time is a direct, measurable metric of process efficiency and speed, which is a core focus of Lean Six Sigma improvements."
  },
  {
    id: 6,
    question: "Typically, which of the following activities is done earliest in the formation of a project team?",
    options: ["Select the team", "Identify the objective", "Identify the sponsor", "Allocate the resources"],
    correctAnswer: "Identify the objective",
    explanation: "Before selecting a team or allocating resources, you must define what the project is trying to achieve (Identify the objective)."
  },
  {
    id: 7,
    question: "A system that delivers products or services at the correct time and in the correct quantities is referred to as:",
    options: ["takt time", "kaizen", "just-in-time", "single-piece flow"],
    correctAnswer: "just-in-time",
    explanation: "Just-In-Time (JIT) is a production strategy that strives to improve a business's ROI by reducing in-process inventory and associated carrying costs."
  },
  {
    id: 8,
    question: "Error Proofing is best defined as:",
    options: ["improving machine efficiency", "reducing field failures to virtually zero", "capturing the voice of the customer", "preventing controllable defects"],
    correctAnswer: "preventing controllable defects",
    explanation: "Error Proofing (Poka-Yoke) is a technique for avoiding simple human errors by designing a process so that errors are impossible to make or are easily detected."
  },
  {
    id: 9,
    question: "Which of the following tools can be used to identify waste or non-value-added activities and redundancies in a process?",
    options: ["Force field analysis", "Pareto analysis", "Scatter diagram", "Process map"],
    correctAnswer: "Process map",
    explanation: "A process map provides a visual step-by-step view of how a process works, making it easy to spot delays, waste, and unnecessary steps."
  },
  {
    id: 10,
    question: "Which of the following is used to map a process and displays the flow between multiple departments or functions?",
    options: ["Flowchart", "Swim Lane Process Map", "Track Lane Process Map", "Detailed Process Map"],
    correctAnswer: "Swim Lane Process Map",
    explanation: "Swim Lane maps use metaphorical 'lanes' to distinguish which department or individual is responsible for specific steps in a cross-functional process."
  },
  {
    id: 11,
    question: "A Fishbone diagram can be used to do which of the following?",
    options: ["Allow a team to identify root causes even when no credible data exist", "Show a causality relationship", "Present data from a check sheet", "Reveal the true level of a problem’s complexity"],
    correctAnswer: "Show a causality relationship",
    explanation: "Fishbone diagrams are specifically used to brainstorm and visualize the relationship between potential causes and a single effect."
  },
  {
    id: 12,
    question: "Which of the following is a component of a visual management?",
    options: ["Product specifications", "Zero defect policies", "Just-in-time policies", "Travel lanes"],
    correctAnswer: "Travel lanes",
    explanation: "Travel lanes (marked paths on the floor) are a physical, visual indicator of where people and materials should move, which is core to visual management."
  },
  {
    id: 13,
    question: "A company has installed a system that prevents orders with incorrect information from being forwarded to production scheduling. This is an example of which of the following lean tools?",
    options: ["Standard work", "Kanban", "Error Proofing", "Visual factory"],
    correctAnswer: "Error Proofing",
    explanation: "This is a classic 'Poka-Yoke' or Error Proofing instance where the system is designed to prevent a mistake from progressing further in the process."
  },
  {
    id: 14,
    question: "A Lean Six Sigma team has been formed to improve an existing process, Which of the following tools should the team use first to gain a clear understanding of the current process?",
    options: ["Process Map", "Pareto chart", "Process FMEA", "Latin square DOE"],
    correctAnswer: "Process Map",
    explanation: "You cannot improve what you do not understand. A Process Map is the foundational tool for visualizing the current state."
  },
  {
    id: 15,
    question: "Over-production, inventory, and motion are all examples of:",
    options: ["Waste", "5S target areas", "Noise", "Value-added activities"],
    correctAnswer: "Waste",
    explanation: "These are part of the '8 Wastes' (muda) in Lean that consume resources without adding value for the customer."
  },
  {
    id: 16,
    question: "A store uses signs at specific points in its storage area to indicate when products need to be ordered. This is an example of:",
    options: ["Kanban", "Poka-yoke", "Checkpoints", "Hoshin"],
    correctAnswer: "Kanban",
    explanation: "A Kanban is a visual signal (like a sign or card) that triggers an action to pull materials or products through a process."
  },
  {
    id: 17,
    question: "The primary reason that most companies implement Lean Six Sigma is to:",
    options: ["reduce defects", "improve processes", "improve profit", "increase customer satisfaction"],
    correctAnswer: "improve profit",
    explanation: "While reducing defects and increasing satisfaction are important, they are ultimately means to the end of improving the organization's profitability."
  },
  {
    id: 18,
    question: "For consumer products, an increase in the percentage of returned goods most likely equates to:",
    options: ["product not meeting specifications", "end-user dissatisfaction", "internal reject rates", "nonconforming material costs"],
    correctAnswer: "end-user dissatisfaction",
    explanation: "Returns are a direct measure of 'Voice of the Customer' indicating that the product failed to meet their needs or expectations."
  },
  {
    id: 19,
    question: "According to Lean Six Sigma, anyone is a customer of a product or service if that person:",
    options: ["purchases it", "uses it", "is affected by it", "produces it"],
    correctAnswer: "is affected by it",
    explanation: "Lean Six Sigma takes a broad view of customers, including 'internal' customers who receive the output of a previous process step."
  },
  {
    id: 20,
    question: "“Forming, Storming, Norming, and Performing” describe:",
    options: ["process variation reduction phases", "root cause identification steps", "stages of team development", "steps of the brainstorming process"],
    correctAnswer: "stages of team development",
    explanation: "Tuckman's stages of group development (Forming-Storming-Norming-Performing) are critical for understanding how teams evolve."
  },
  {
    id: 21,
    question: "A change agent is responsible for helping the organization do which of the following?",
    options: ["Overcome fear of change", "Reorganize departments", "Determine performance criteria", "Identify group failures"],
    correctAnswer: "Overcome fear of change",
    explanation: "A primary role of a Lean Six Sigma belt as a change agent is managing the 'people' side of change and reducing resistance."
  },
  {
    id: 22,
    question: "The process of having a Lean Six Sigma team develop a problem statement helps the team:",
    options: ["Agree on key dates", "Achieve consensus and ownership of the process", "Determine solutions", "Determine meeting frequency"],
    correctAnswer: "Achieve consensus and ownership of the process",
    explanation: "Co-authoring the problem statement ensures everyone is on the same page and committed to the same objective."
  },
  {
    id: 23,
    question: "Which of the following is one of the 3 main elements of standard work?",
    options: ["Standard time", "Product cost", "Product value", "Maximum inventory"],
    correctAnswer: "Standard time",
    explanation: "Standard work consists of Takt time (standard time), the specific work sequence, and the standard inventory required."
  },
  {
    id: 24,
    question: "Which of the following is an acronym used to identify a Six Sigma problem solving structure?",
    options: ["DMAIC", "Kano model", "Hypothesis testing", "PDCA"],
    correctAnswer: "DMAIC",
    explanation: "DMAIC (Define, Measure, Analyze, Improve, Control) is the standard structured approach for Six Sigma projects."
  },
  {
    id: 25,
    question: "In order for a problem to be solved correctly, which of the following must occur first?",
    options: ["The problem must be defined.", "Relevant data must be gathered.", "The measurement system must be validated.", "The process must be mapped."],
    correctAnswer: "The problem must be defined.",
    explanation: "As the saying goes, 'a problem well-defined is half-solved'. Clear definition is the absolute first step in DMAIC."
  },
  {
    id: 26,
    question: "Which of the following best describes a team that has members with different skills or roles from different areas within the organization?",
    options: ["Self-directed", "Cross-functional", "Parallel", "Process"],
    correctAnswer: "Cross-functional",
    explanation: "A cross-functional team brings together diverse perspectives to solve complex problems that span multiple departments."
  },
  {
    id: 27,
    question: "Which of the following methods is used to develop an exhaustive list of ideas about a subject?",
    options: ["Benchmarking", "Brainstorming", "Goal-setting", "Problem-solving"],
    correctAnswer: "Brainstorming",
    explanation: "Brainstorming is a group creativity technique used to find a conclusion for a specific problem by gathering a list of ideas spontaneously."
  },
  {
    id: 28,
    question: "Which of the following techniques would help increase process stability when the cause of variation is a cluttered work station?",
    options: ["5S", "SMED", "Preventive maintenance", "Visual factory"],
    correctAnswer: "5S",
    explanation: "5S is a workplace organization method that uses a list of five Japanese words: seiri, seiton, seiso, seiketsu, and shitsuke (Sort, Set in Order, Shine, Standardize, Sustain)."
  },
  {
    id: 29,
    question: "Benchmarking is difficult to perform on processes that:",
    options: ["Can be identified easily", "Are practiced in many industries", "Have major success impact", "Have not been documented"],
    correctAnswer: "Have not been documented",
    explanation: "You cannot compare your performance against others (benchmarking) accurately if you haven't first documented your own process."
  },
  {
    id: 30,
    question: "Which of the following is an important responsibility of a project champion?",
    options: ["Leading the team", "Documenting progress", "Allocating resources to support the team", "Coaching the DMAIC process"],
    correctAnswer: "Allocating resources to support the team",
    explanation: "The Champion is a senior leader who removes roadblocks and provides the necessary resources (budget, time, people) for the team."
  },
  {
    id: 31,
    question: "What is the first S in 5S?",
    options: ["Shine", "Sort", "Set-in-Order", "Sustain", "Standardize"],
    correctAnswer: "Sort",
    explanation: "SEIRI (Sort) involves going through all tools, materials, etc., in the work area and keeping only essential items."
  },
  {
    id: 32,
    question: "What is the second S in 5S?",
    options: ["Shine", "Sort", "Set-in-Order", "Sustain", "Standardize"],
    correctAnswer: "Set-in-Order",
    explanation: "SEITON (Set in Order) focuses on the need for a functional storage system, where everything has a place and is in its place."
  },
  {
    id: 33,
    question: "What is the third S in 5S?",
    options: ["Shine", "Sort", "Set-in-Order", "Sustain", "Standardize"],
    correctAnswer: "Shine",
    explanation: "SEISO (Shine) means thorough cleaning of the work area, tools, and machines on a regular basis."
  },
  {
    id: 34,
    question: "What is the fourth S in 5S?",
    options: ["Shine", "Sort", "Set-in-Order", "Sustain", "Standardize"],
    correctAnswer: "Standardize",
    explanation: "SEIKETSU (Standardize) is about creating consistent ways to perform the first three S's so they become a habit."
  },
  {
    id: 35,
    question: "What is the fifth S in 5S?",
    options: ["Shine", "Sort", "Set-in-Order", "Sustain", "Standardize"],
    correctAnswer: "Sustain",
    explanation: "SHITSUKE (Sustain) is the most difficult stage, which involves maintaining the 5S system through discipline and audits."
  },
  {
    id: 36,
    question: "What does the D in DOWNTIME stand for?",
    options: ["Damage", "Defective", "Defects", "Delivery"],
    correctAnswer: "Defects",
    explanation: "Defects are products or services that don't meet specifications, requiring rework or disposal."
  },
  {
    id: 37,
    question: "What does the O in DOWNTIME stand for?",
    options: ["Opportunity", "Overdone", "Overextend", "Overproduction"],
    correctAnswer: "Overproduction",
    explanation: "Overproduction is making more than is needed or making it before it is needed."
  },
  {
    id: 38,
    question: "What does the W in DOWNTIME stand for?",
    options: ["Waste", "Waiting", "Watching", "Walking"],
    correctAnswer: "Waiting",
    explanation: "Waiting refers to idle time created when people, information, or equipment aren't ready."
  },
  {
    id: 39,
    question: "What does the N in DOWNTIME stand for?",
    options: ["Non Value Add", "Nothing", "Non-Utilized Skill", "Nonsense"],
    correctAnswer: "Non-Utilized Skill",
    explanation: "Non-Utilized Talent/Skill occurs when the knowledge and skills of employees are not being used to their full potential."
  },
  {
    id: 40,
    question: "What does the T in DOWNTIME stand for?",
    options: ["Training", "Talking", "Transportation", "Trial and Error"],
    correctAnswer: "Transportation",
    explanation: "Transportation is the unnecessary movement of products or materials between processes."
  },
  {
    id: 41,
    question: "What does the I in DOWNTIME stand for?",
    options: ["Inventory", "Inventiveness", "Intimidation", "Insidious"],
    correctAnswer: "Inventory",
    explanation: "Inventory is having more raw materials, work-in-progress, or finished goods than required."
  },
  {
    id: 42,
    question: "What does the M in DOWNTIME stand for?",
    options: ["More Junk", "Motion", "Motivation", "Melancholy"],
    correctAnswer: "Motion",
    explanation: "Motion refers to unnecessary movement of people (e.g., walking, reaching, bending) within a process."
  },
  {
    id: 43,
    question: "What does the E in DOWNTIME stand for?",
    options: ["Excessiveness", "Extra Production", "Extra Processing", "Extremely Overwhelmed"],
    correctAnswer: "Extra Processing",
    explanation: "Extra Processing is performing more work, or higher quality work, than the customer requires."
  },
  {
    id: 44,
    question: "What is the document used to summarize a project’s results and share lessons learned called?",
    options: ["A3", "Project Charter", "Kaizen Charter", "Standard Work Instruction"],
    correctAnswer: "A3",
    explanation: "An A3 report is a structured problem-solving and continuous-improvement approach, first employed at Toyota, usually fitting on a single sheet of A3 paper."
  },
  {
    id: 45,
    question: "What does the D in DMAIC stand for?",
    options: ["Define", "Definition", "Debate", "Determine"],
    correctAnswer: "Define",
    explanation: "Define is the first phase where the project goals and customer (internal and external) deliverables are identified."
  },
  {
    id: 46,
    question: "What does the M in DMAIC stand for?",
    options: ["Measure", "Material", "Mastery", "Make"],
    correctAnswer: "Measure",
    explanation: "Measure is the phase where the current process performance is documented and validated using data."
  },
  {
    id: 47,
    question: "What does the A in DMAIC stand for?",
    options: ["Analyze", "A3", "ANOVA", "Advance"],
    correctAnswer: "Analyze",
    explanation: "Analyze is the phase where the data is examined to determine the root causes of defects or variations."
  },
  {
    id: 48,
    question: "What does the I in DMAIC stand for?",
    options: ["Implement", "Institute", "Improve", "Identify"],
    correctAnswer: "Improve",
    explanation: "Improve is the phase where solutions are developed, tested, and implemented to address the root causes."
  },
  {
    id: 49,
    question: "What does the C in DMAIC stand for?",
    options: ["Contain", "Control", "Complete", "Check"],
    correctAnswer: "Control",
    explanation: "Control is the final phase where the new process is monitored and sustained to ensure the gains are maintained."
  },
  {
    id: 50,
    question: "The main focus of Lean is:",
    options: ["The elimination of waste", "The reduction of variation", "The running of problem solving events", "The implementation of 5S"],
    correctAnswer: "The elimination of waste",
    explanation: "Lean philosophy focuses on maximizing customer value while minimizing waste."
  },
  {
    id: 51,
    question: "The main focus of Six Sigma is:",
    options: ["The elimination of waste", "The reduction of variation", "The running of problem solving events", "The implementation of 5S"],
    correctAnswer: "The reduction of variation",
    explanation: "Six Sigma is a disciplined, data-driven approach and methodology for eliminating defects and reducing variation."
  },
  {
    id: 52,
    question: "Find the Mean of 1, 3, 5, 7, 9, 11, 13, 15, 17, 19.",
    options: ["8", "9", "10", "11"],
    correctAnswer: "10",
    explanation: "Sum of values (100) / count of values (10) = 10."
  },
  {
    id: 53,
    question: "Find the median of the data set: 32, 6, 21, 10, 8, 11, 12, 36, 17, 16, 15, 18, 40, 24, 21, 23, 24, 24, 29, 16, 32, 31, 10, 30, 35, 32, 18, 39, 12, 20.",
    options: ["21", "17", "31", "24"],
    correctAnswer: "21",
    explanation: "Ordering the data and finding the middle value gives 21."
  },
  {
    id: 54,
    question: "Identify the mode for the following data set: 21, 19, 62, 21, 66, 28, 66, 48, 79, 59, 28, 62, 63, 63, 48, 66, 59, 66, 94, 79, 19, 94",
    options: ["66", "63", "49", "79"],
    correctAnswer: "66",
    explanation: "The mode is the number that appears most frequently in a data set. 66 appears 4 times."
  },
  {
    id: 55,
    question: "What is the acronym RCA short for?",
    options: ["Rapid Consistent Analysis", "Root Cause Analysis", "Real Corrective Action", "Ready Complete Analysis"],
    correctAnswer: "Root Cause Analysis",
    explanation: "Root Cause Analysis (RCA) is a systematic process for identifying root causes of problems or events and an approach for responding to them."
  },
  {
    id: 56,
    question: "What is the E in 5ME?",
    options: ["Environment", "Employees", "Extra Data", "Education"],
    correctAnswer: "Environment",
    explanation: "5M+E stands for Man, Machine, Material, Method, Measurement + Environment - the categories used in Fishbone diagrams."
  },
  {
    id: 57,
    question: "Which tool uses 5ME?",
    options: ["Fishbone Diagram", "Heijunka", "5S", "Kanban board"],
    correctAnswer: "Fishbone Diagram",
    explanation: "The 5M+E categories are the standard 'branches' of a Fishbone diagram used to brainstorm root causes."
  },
  {
    id: 58,
    question: "Where do 85% of problems come from?",
    options: ["People", "Processes", "Laziness", "Staffing issues"],
    correctAnswer: "Processes",
    explanation: "Edward Deming famously stated that 85% of problems are process-related, whereas only 15% are people-related."
  },
  {
    id: 59,
    question: "We define Lean as Respect + Continuous Improvement, what do we mean by Respect?",
    options: ["Respect for beliefs", "Setting boundaries", "Listening to others and helping them succeed", "Making it easier to go home early"],
    correctAnswer: "Listening to others and helping them succeed",
    explanation: "In Lean, respect means creating an environment where every employee's input is valued and they are empowered to improve their work."
  },
  {
    id: 60,
    question: "What is another name for the 80/20 rule?",
    options: ["Pareto Principle", "Pavlov Principle", "Primary Principle", "Population Principle"],
    correctAnswer: "Pareto Principle",
    explanation: "The Pareto Principle states that for many events, roughly 80% of the effects come from 20% of the causes."
  },
  {
    id: 61,
    question: "What does VOC stand for?",
    options: ["Voice of the Customer", "Voice of the Competition", "Voice of the Company", "Voice of the Captain"],
    correctAnswer: "Voice of the Customer",
    explanation: "Voice of the Customer (VOC) captures the needs, wants, and expectations of the customer."
  },
  {
    id: 62,
    question: "Six Sigma is…",
    options: ["A measurement", "A methodology", "A process", "A tool"],
    correctAnswer: "A measurement",
    explanation: "While it's a methodology too, 'Six Sigma' literally refers to a measurement of quality (3.4 defects per million opportunities)."
  },
  {
    id: 63,
    question: "Lean focuses on…",
    options: ["Reducing Waste", "Reducing Variation", "Statistical Analysis", "Standard Deviation"],
    correctAnswer: "Reducing Waste",
    explanation: "Lean's primary objective is the identification and elimination of waste (muda)."
  },
  {
    id: 64,
    question: "Six Sigma focuses on…",
    options: ["Reducing Waste", "Reducing Variation", "5S", "Standard Work"],
    correctAnswer: "Reducing Variation",
    explanation: "Six Sigma specifically targets the reduction of variation in processes to ensure consistent quality."
  },
  {
    id: 65,
    question: "Activities that are unnecessary in a process are classified as:",
    options: ["Non-Value Add", "Value Add", "Business Non-Value Add"],
    correctAnswer: "Non-Value Add",
    explanation: "Non-Value Add (NVA) activities are pure waste that should be eliminated."
  },
  {
    id: 66,
    question: "Activities that the customer is willing to pay for are classified as:",
    options: ["Non-Value Add", "Value Add", "Business Non-Value Add"],
    correctAnswer: "Value Add",
    explanation: "Value Add (VA) activities transform products or services into something the customer values."
  },
  {
    id: 67,
    question: "Activities that are operationally necessary but don’t add value for the customer are classified as:",
    options: ["Non-Value Add", "Value Add", "Business Non-Value Add"],
    correctAnswer: "Business Non-Value Add",
    explanation: "Business Non-Value Add (BNVA) are activities required by regulation or business necessity (like accounting) but not valued by the end customer."
  },
  {
    id: 68,
    question: "Approximately what percent of culture is visible?",
    options: ["80%", "50%", "75%", "20%"],
    correctAnswer: "20%",
    explanation: "The 'Iceberg Model' of culture suggests that only about 20% is visible (behaviors), while 80% is hidden (beliefs, values)."
  },
  {
    id: 69,
    question: "The 8 wastes identify approximately what percentage of waste in processes?",
    options: ["50%", "60%", "80%", "90%"],
    correctAnswer: "90%",
    explanation: "In traditional processes, it is often found that up to 90% of activities are non-value adding."
  },
  {
    id: 70,
    question: "The phrase “Don’t boil the ocean” means:",
    options: ["Don’t try to take on everything at once, tackle one part at a time", "Don’t face big problems", "Don’t forget to use a pot", "Don’t put tea water in anything large"],
    correctAnswer: "Don’t try to take on everything at once, tackle one part at a time",
    explanation: "This is a common project management phrase advising to keep projects focused and manageable."
  },
  {
    id: 71,
    question: "How many Pillars and Elements are there in the OSE model?",
    options: ["1 pillar, 4 elements", "4 pillars, 4 elements", "4 pillars, 12 elements", "1 pillar, 12 elements"],
    correctAnswer: "4 pillars, 12 elements",
    explanation: "The Operational Success Essentials (OSE) model is structured around 4 key pillars and 12 supporting elements."
  },
  {
    id: 72,
    question: "Which element describes walking the grounds to observe and understand processes, identify areas of improvement, and engage employees to drive positive change and promote a culture of continuous improvement?",
    options: ["E6 Performance Tracking", "E7 Gemba Walk", "E9 Regular Performance Review", "E10 Continuous Improvement"],
    correctAnswer: "E7 Gemba Walk",
    explanation: "Gemba (Japanese for 'the real place') walks are where leaders observe the actual work processes."
  },
  {
    id: 73,
    question: "What is the key benefit of having clear work instructions?",
    options: ["Improve safety", "Consistency in quality", "Reduce errors", "All of the above"],
    correctAnswer: "All of the above",
    explanation: "Standardized work instructions improve safety, quality, efficiency, and reduce errors simultaneously."
  },
  {
    id: 74,
    question: "Which of the following is NOT a pillar of OSE?",
    options: ["Plan to Deliver", "DMAIC", "Check Progress", "Adjust: Recognize Performance"],
    correctAnswer: "DMAIC",
    explanation: "DMAIC is a Six Sigma methodology, while OSE pillars are organizational management frameworks."
  },
  {
    id: 75,
    question: "Which of the following is NOT a focus area of Gemba Walks?",
    options: ["Continuous improvement", "Waste reduction", "Audit of work processes", "5S and housekeeping"],
    correctAnswer: "Audit of work processes",
    explanation: "Gemba walks are for observation and engagement (improvement), not for formal auditing or punishment."
  }
];
