/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Which of the following tools should be used when a team is prioritizing a list of projects and timelines for the year?",
    options: ["Brainstorming", "Affinity diagrams", "Prioritization Matrix", "5 whys"],
    correctAnswer: "Prioritization Matrix"
  },
  {
    id: 2,
    question: "The Fishbone diagram is another name for:",
    options: ["SPC Chart", "Multi-vari Chart", "Cause and Effect diagram", "Run Chart"],
    correctAnswer: "Cause and Effect diagram"
  },
  {
    id: 3,
    question: "Which of the following activities is value-add?",
    options: ["Prep", "Process", "Storage", "Inspection"],
    correctAnswer: "Process"
  },
  {
    id: 4,
    question: "Which of the following is defined as continuous, incremental improvement?",
    options: ["Kanban", "Kaizen", "JIT", "Jidoka"],
    correctAnswer: "Kaizen"
  },
  {
    id: 5,
    question: "Which of the following performance measures is most appropriate for evaluating the tangible effects of a Lean Six Sigma project?",
    options: ["Cycle time", "Team member absentee rate", "Employee morale", "Unsolicited compliments from customers"],
    correctAnswer: "Cycle time"
  },
  {
    id: 6,
    question: "Typically, which of the following activities is done earliest in the formation of a project team?",
    options: ["Select the team", "Identify the objective", "Identify the sponsor", "Allocate the resources"],
    correctAnswer: "Identify the objective"
  },
  {
    id: 7,
    question: "A system that delivers products or services at the correct time and in the correct quantities is referred to as:",
    options: ["takt time", "kaizen", "just-in-time", "single-piece flow"],
    correctAnswer: "just-in-time"
  },
  {
    id: 8,
    question: "Error Proofing is best defined as:",
    options: ["improving machine efficiency", "reducing field failures to virtually zero", "capturing the voice of the customer", "preventing controllable defects"],
    correctAnswer: "preventing controllable defects"
  },
  {
    id: 9,
    question: "Which of the following tools can be used to identify waste or non-value-added activities and redundancies in a process?",
    options: ["Force field analysis", "Pareto analysis", "Scatter diagram", "Process map"],
    correctAnswer: "Process map"
  },
  {
    id: 10,
    question: "Which of the following is used to map a process and displays the flow between multiple departments or functions?",
    options: ["Flowchart", "Swim Lane Process Map", "Track Lane Process Map", "Detailed Process Map"],
    correctAnswer: "Swim Lane Process Map"
  },
  {
    id: 11,
    question: "A Fishbone diagram can be used to do which of the following?",
    options: ["Allow a team to identify root causes even when no credible data exist", "Show a causality relationship", "Present data from a check sheet", "Reveal the true level of a problem’s complexity"],
    correctAnswer: "Show a causality relationship"
  },
  {
    id: 12,
    question: "Which of the following is a component of a visual management?",
    options: ["Product specifications", "Zero defect policies", "Just-in-time policies", "Travel lanes"],
    correctAnswer: "Travel lanes"
  },
  {
    id: 13,
    question: "A company has installed a system that prevents orders with incorrect information from being forwarded to production scheduling. This is an example of which of the following lean tools?",
    options: ["Standard work", "Kanban", "Error Proofing", "Visual factory"],
    correctAnswer: "Error Proofing"
  },
  {
    id: 14,
    question: "A Lean Six Sigma team has been formed to improve an existing process, Which of the following tools should the team use first to gain a clear understanding of the current process?",
    options: ["Process Map", "Pareto chart", "Process FMEA", "Latin square DOE"],
    correctAnswer: "Process Map"
  },
  {
    id: 15,
    question: "Over-production, inventory, and motion are all examples of:",
    options: ["Waste", "5S target areas", "Noise", "Value-added activities"],
    correctAnswer: "Waste"
  },
  {
    id: 16,
    question: "A store uses signs at specific points in its storage area to indicate when products need to be ordered. This is an example of:",
    options: ["Kanban", "Poka-yoke", "Checkpoints", "Hoshin"],
    correctAnswer: "Kanban"
  },
  {
    id: 17,
    question: "The primary reason that most companies implement Lean Six Sigma is to:",
    options: ["reduce defects", "improve processes", "improve profit", "increase customer satisfaction"],
    correctAnswer: "improve profit"
  },
  {
    id: 18,
    question: "For consumer products, an increase in the percentage of returned goods most likely equates to:",
    options: ["product not meeting specifications", "end-user dissatisfaction", "internal reject rates", "nonconforming material costs"],
    correctAnswer: "end-user dissatisfaction"
  },
  {
    id: 19,
    question: "According to Lean Six Sigma, anyone is a customer of a product or service if that person:",
    options: ["purchases it", "uses it", "is affected by it", "produces it"],
    correctAnswer: "is affected by it"
  },
  {
    id: 20,
    question: "“Forming, Storming, Norming, and Performing” describe:",
    options: ["process variation reduction phases", "root cause identification steps", "stages of team development", "steps of the brainstorming process"],
    correctAnswer: "stages of team development"
  },
  {
    id: 21,
    question: "A change agent is responsible for helping the organization do which of the following?",
    options: ["Overcome fear of change", "Reorganize departments", "Determine performance criteria", "Identify group failures"],
    correctAnswer: "Overcome fear of change"
  },
  {
    id: 22,
    question: "The process of having a Lean Six Sigma team develop a problem statement helps the team:",
    options: ["Agree on key dates", "Achieve consensus and ownership of the process", "Determine solutions", "Determine meeting frequency"],
    correctAnswer: "Achieve consensus and ownership of the process"
  },
  {
    id: 23,
    question: "Which of the following is one of the 3 main elements of standard work?",
    options: ["Standard time", "Product cost", "Product value", "Maximum inventory"],
    correctAnswer: "Standard time"
  },
  {
    id: 24,
    question: "Which of the following is an acronym used to identify a Six Sigma problem solving structure?",
    options: ["DMAIC", "Kano model", "Hypothesis testing", "PDCA"],
    correctAnswer: "DMAIC"
  },
  {
    id: 25,
    question: "In order for a problem to be solved correctly, which of the following must occur first?",
    options: ["The problem must be defined.", "Relevant data must be gathered.", "The measurement system must be validated.", "The process must be mapped."],
    correctAnswer: "The problem must be defined."
  },
  {
    id: 26,
    question: "Which of the following best describes a team that has members with different skills or roles from different areas within the organization?",
    options: ["Self-directed", "Cross-functional", "Parallel", "Process"],
    correctAnswer: "Cross-functional"
  },
  {
    id: 27,
    question: "Which of the following methods is used to develop an exhaustive list of ideas about a subject?",
    options: ["Benchmarking", "Brainstorming", "Goal-setting", "Problem-solving"],
    correctAnswer: "Brainstorming"
  },
  {
    id: 28,
    question: "Which of the following techniques would help increase process stability when the cause of variation is a cluttered work station?",
    options: ["5S", "SMED", "Preventive maintenance", "Visual factory"],
    correctAnswer: "5S"
  },
  {
    id: 29,
    question: "Benchmarking is difficult to perform on processes that:",
    options: ["Can be identified easily", "Are practiced in many industries", "Have major success impact", "Have not been documented"],
    correctAnswer: "Have not been documented"
  },
  {
    id: 30,
    question: "Which of the following is an important responsibility of a project champion?",
    options: ["Leading the team", "Documenting progress", "Allocating resources to support the team", "Coaching the DMAIC process"],
    correctAnswer: "Allocating resources to support the team"
  },
  {
    id: 31,
    question: "What is the first S in 5S?",
    options: ["Shine", "Sort", "Set-in-Order", "Sustain", "Standardize"],
    correctAnswer: "Sort"
  },
  {
    id: 32,
    question: "What is the second S in 5S?",
    options: ["Shine", "Sort", "Set-in-Order", "Sustain", "Standardize"],
    correctAnswer: "Set-in-Order"
  },
  {
    id: 33,
    question: "What is the third S in 5S?",
    options: ["Shine", "Sort", "Set-in-Order", "Sustain", "Standardize"],
    correctAnswer: "Shine"
  },
  {
    id: 34,
    question: "What is the fourth S in 5S?",
    options: ["Shine", "Sort", "Set-in-Order", "Sustain", "Standardize"],
    correctAnswer: "Standardize"
  },
  {
    id: 35,
    question: "What is the fifth S in 5S?",
    options: ["Shine", "Sort", "Set-in-Order", "Sustain", "Standardize"],
    correctAnswer: "Sustain"
  },
  {
    id: 36,
    question: "What does the D in DOWNTIME stand for?",
    options: ["Damage", "Defective", "Defects", "Delivery"],
    correctAnswer: "Defects"
  },
  {
    id: 37,
    question: "What does the O in DOWNTIME stand for?",
    options: ["Opportunity", "Overdone", "Overextend", "Overproduction"],
    correctAnswer: "Overproduction"
  },
  {
    id: 38,
    question: "What does the W in DOWNTIME stand for?",
    options: ["Waste", "Waiting", "Watching", "Walking"],
    correctAnswer: "Waiting"
  },
  {
    id: 39,
    question: "What does the N in DOWNTIME stand for?",
    options: ["Non Value Add", "Nothing", "Non-Utilized Skill", "Nonsense"],
    correctAnswer: "Non-Utilized Skill"
  },
  {
    id: 40,
    question: "What does the T in DOWNTIME stand for?",
    options: ["Training", "Talking", "Transportation", "Trial and Error"],
    correctAnswer: "Transportation"
  },
  {
    id: 41,
    question: "What does the I in DOWNTIME stand for?",
    options: ["Inventory", "Inventiveness", "Intimidation", "Insidious"],
    correctAnswer: "Inventory"
  },
  {
    id: 42,
    question: "What does the M in DOWNTIME stand for?",
    options: ["More Junk", "Motion", "Motivation", "Melancholy"],
    correctAnswer: "Motion"
  },
  {
    id: 43,
    question: "What does the E in DOWNTIME stand for?",
    options: ["Excessiveness", "Extra Production", "Extra Processing", "Extremely Overwhelmed"],
    correctAnswer: "Extra Processing"
  },
  {
    id: 44,
    question: "What is the document used to summarize a project’s results and share lessons learned called?",
    options: ["A3", "Project Charter", "Kaizen Charter", "Standard Work Instruction"],
    correctAnswer: "A3"
  },
  {
    id: 45,
    question: "What does the D in DMAIC stand for?",
    options: ["Define", "Definition", "Debate", "Determine"],
    correctAnswer: "Define"
  },
  {
    id: 46,
    question: "What does the M in DMAIC stand for?",
    options: ["Measure", "Material", "Mastery", "Make"],
    correctAnswer: "Measure"
  },
  {
    id: 47,
    question: "What does the A in DMAIC stand for?",
    options: ["Analyze", "A3", "ANOVA", "Advance"],
    correctAnswer: "Analyze"
  },
  {
    id: 48,
    question: "What does the I in DMAIC stand for?",
    options: ["Implement", "Institute", "Improve", "Identify"],
    correctAnswer: "Improve"
  },
  {
    id: 49,
    question: "What does the C in DMAIC stand for?",
    options: ["Contain", "Control", "Complete", "Check"],
    correctAnswer: "Control"
  },
  {
    id: 50,
    question: "The main focus of Lean is:",
    options: ["The elimination of waste", "The reduction of variation", "The running of problem solving events", "The implementation of 5S"],
    correctAnswer: "The elimination of waste"
  },
  {
    id: 51,
    question: "The main focus of Six Sigma is:",
    options: ["The elimination of waste", "The reduction of variation", "The running of problem solving events", "The implementation of 5S"],
    correctAnswer: "The reduction of variation"
  },
  {
    id: 52,
    question: "Find the Mean of 1, 3, 5, 7, 9, 11, 13, 15, 17, 19.",
    options: ["8", "9", "10", "11"],
    correctAnswer: "10"
  },
  {
    id: 53,
    question: "Find the median of the data set: 32, 6, 21, 10, 8, 11, 12, 36, 17, 16, 15, 18, 40, 24, 21, 23, 24, 24, 29, 16, 32, 31, 10, 30, 35, 32, 18, 39, 12, 20.",
    options: ["21", "17", "31", "24"],
    correctAnswer: "21"
  },
  {
    id: 54,
    question: "Identify the mode for the following data set: 21, 19, 62, 21, 66, 28, 66, 48, 79, 59, 28, 62, 63, 63, 48, 66, 59, 66, 94, 79, 19, 94",
    options: ["66", "63", "49", "79"],
    correctAnswer: "66"
  },
  {
    id: 55,
    question: "What is the acronym RCA short for?",
    options: ["Rapid Consistent Analysis", "Root Cause Analysis", "Real Corrective Action", "Ready Complete Analysis"],
    correctAnswer: "Root Cause Analysis"
  },
  {
    id: 56,
    question: "What is the E in 5ME?",
    options: ["Environment", "Employees", "Extra Data", "Education"],
    correctAnswer: "Environment"
  },
  {
    id: 57,
    question: "Which tool uses 5ME?",
    options: ["Fishbone Diagram", "Kanban board", "Heijunka", "5S"],
    correctAnswer: "Fishbone Diagram"
  },
  {
    id: 58,
    question: "Where do 85% of problems come from?",
    options: ["People", "Processes", "Laziness", "Staffing issues"],
    correctAnswer: "Processes"
  },
  {
    id: 59,
    question: "We define Lean as Respect + Continuous Improvement, what do we mean by Respect?",
    options: ["Respect for beliefs", "Setting boundaries", "Listening to others and helping them succeed", "Making it easier to go home early"],
    correctAnswer: "Listening to others and helping them succeed"
  },
  {
    id: 60,
    question: "What is another name for the 80/20 rule?",
    options: ["Pareto Principle", "Pavlov Principle", "Primary Principle", "Population Principle"],
    correctAnswer: "Pareto Principle"
  },
  {
    id: 61,
    question: "What does VOC stand for?",
    options: ["Voice of the Customer", "Voice of the Competition", "Voice of the Company", "Voice of the Captain"],
    correctAnswer: "Voice of the Customer"
  },
  {
    id: 62,
    question: "Six Sigma is…",
    options: ["A measurement", "A methodology", "A process", "A tool"],
    correctAnswer: "A measurement"
  },
  {
    id: 63,
    question: "Lean focuses on…",
    options: ["Reducing Waste", "Reducing Variation", "Statistical Analysis", "Standard Deviation"],
    correctAnswer: "Reducing Waste"
  },
  {
    id: 64,
    question: "Six Sigma focuses on…",
    options: ["Reducing Waste", "Reducing Variation", "5S", "Standard Work"],
    correctAnswer: "Reducing Variation"
  },
  {
    id: 65,
    question: "Activities that are unnecessary in a process are classified as:",
    options: ["Non-Value Add", "Value Add", "Business Non-Value Add"],
    correctAnswer: "Non-Value Add"
  },
  {
    id: 66,
    question: "Activities that the customer is willing to pay for are classified as:",
    options: ["Non-Value Add", "Value Add", "Business Non-Value Add"],
    correctAnswer: "Value Add"
  },
  {
    id: 67,
    question: "Activities that are operationally necessary but don’t add value for the customer are classified as:",
    options: ["Non-Value Add", "Value Add", "Business Non-Value Add"],
    correctAnswer: "Business Non-Value Add"
  },
  {
    id: 68,
    question: "Approximately what percent of culture is visible?",
    options: ["80%", "50%", "75%", "20%"],
    correctAnswer: "20%"
  },
  {
    id: 69,
    question: "The 8 wastes identify approximately what percentage of waste in processes?",
    options: ["50%", "60%", "80%", "90%"],
    correctAnswer: "90%"
  },
  {
    id: 70,
    question: "The phrase “Don’t boil the ocean” means:",
    options: ["Don’t try to take on everything at once, tackle one part at a time", "Don’t face big problems", "Don’t forget to use a pot", "Don’t put tea water in anything large"],
    correctAnswer: "Don’t try to take on everything at once, tackle one part at a time"
  },
  {
    id: 71,
    question: "How many Pillars and Elements are there in the OSE model?",
    options: ["1 pillar, 4 elements", "4 pillars, 4 elements", "4 pillars, 12 elements", "1 pillar, 12 elements"],
    correctAnswer: "4 pillars, 12 elements"
  },
  {
    id: 72,
    question: "Which element describes walking the grounds to observe and understand processes, identify areas of improvement, and engage employees to drive positive change and promote a culture of continuous improvement?",
    options: ["E6 Performance Tracking", "E7 Gemba Walk", "E9 Regular Performance Review", "E10 Continuous Improvement"],
    correctAnswer: "E7 Gemba Walk"
  },
  {
    id: 73,
    question: "What is the key benefit of having clear work instructions?",
    options: ["Improve safety", "Consistency in quality", "Reduce errors", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    id: 74,
    question: "Which of the following is NOT a pillar of OSE?",
    options: ["Plan to Deliver", "DMAIC", "Check Progress", "Adjust: Recognize Performance"],
    correctAnswer: "DMAIC"
  },
  {
    id: 75,
    question: "Which of the following is NOT a focus area of Gemba Walks?",
    options: ["Continuous improvement", "Waste reduction", "Audit of work processes", "5S and housekeeping"],
    correctAnswer: "Audit of work processes"
  }
];
