const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://cruz724.github.io/cleanfolio',
  title: 'SB.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Shubham Bhandari',
  role: 'Full-Stack Developer (MERN) • ML Enthusiast',
  description:
    'Efficient, goal-oriented full‑stack developer with MERN expertise, hands-on ML experience, and strong DSA in Java. I enjoy building clean, user-focused apps and collaborating in agile teams to ship real value.',
  // Put a direct link to your resume PDF (e.g., a file in /public or a Drive link)
  resume: 'https://drive.google.com/file/d/1oTxt8Ec4hRBaAnLKA3xhJgqC0Dpj-5s6/view?usp=sharing',
  social: {
    linkedin: 'https://linkedin.com/in/shubham724/',
    github: 'https://github.com/cruz724',
  },
}

const projects = [
  // projects can be added and removed
  // if there are no projects, Projects section won't show up
  {
    name: 'FitFusion – AI-Powered Fitness Tracker',
    description:
      'Real-time fitness tracker using webcam-based pose estimation. Tracks squats, toe touches, and hammer curls with live feedback and smooth UI using MoveNet + p5.js.',
    stack: ['HTML', 'CSS', 'JavaScript', 'TensorFlow', 'p5.js'],
    sourceCode: 'https://github.com/cruz724/FitFusion',
    livePreview: 'https://github.com/cruz724/FitFusion',
  },
  {
    name: 'Chikitsa – AI Medical Report Assistant',
    description:
      'Analyzes uploaded medical reports with OCR + LLMs to extract metrics, highlight abnormalities, suggest medicines from a structured dataset, and respond in multiple languages.',
    stack: ['Python', 'EasyOCR', 'LangChain', 'Gemini/Mistral API', 'Streamlit'],
    sourceCode: 'https://github.com/cruz724/chikitsa-ai',
    livePreview: 'https://github.com/cruz724/chikitsa-ai',
  },
  {
    name: 'Finora – Loan Approval Prediction',
    description:
      'Predicts loan approval status with ML models and provides interpretability using SHAP. Built with an intuitive UI for quick, explainable decisions (Ossome Hack by GitHub).',
    stack: ['Python', 'Flask', 'Scikit-learn', 'SHAP', 'HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/cruz724/finora-loan-approval',
    livePreview: 'https://github.com/cruz724/finora-loan-approval',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React.js',
  'Node.js',
  'Express.js',
  'SQL',
  'Java',
  'Git',
  'GitHub',
  'Bootstrap',
  'Tailwind CSS',
  'MERN Stack',
  'Machine Learning',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'sb1324@srmist.edu.in',
}

export { header, about, projects, skills, contact }
