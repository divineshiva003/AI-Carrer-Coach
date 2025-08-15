const questions = [
    {
        id:1,
      "question": "Choose the correct synonym for 'obstinate'.",
      "options": ["Flexible", "Stubborn", "Submissive", "Gentle"],
      "answer": "Stubborn",
      "correct": 1
    },
    {
        id:2,
      "question": "Identify the antonym of 'abundant'.",
      "options": ["Plentiful", "Sufficient", "Scarce", "Bountiful"],
      "answer": "Scarce",
      "correct": 2
    },
    {
        id:3,
      "question": "Which word is a synonym for 'benevolent'?",
      "options": ["Malevolent", "Cruel", "Kind", "Hostile"],
      "answer": "Kind",
      "correct": 2
    },
    {
        id:4,
      "question": "Choose the correct meaning of the idiom 'bark up the wrong tree'.",
      "options": ["To be mistaken", "To be aggressive", "To be helpful", "To succeed"],
      "answer": "To be mistaken",
      "correct": 0
    },
    {
        id:5,
      "question": "Select the correct spelling.",
      "options": ["Accommodate", "Acommodate", "Acomodate", "Accomodate"],
      "answer": "Accommodate",
      "correct": 0
    },
    {
        id:6,
      "question": "What is the meaning of 'elucidate'?",
      "options": ["Complicate", "Clarify", "Obscure", "Confuse"],
      "answer": "Clarify",
      "correct": 1
    },
    {
        id:7,
      "question": "Choose the correct synonym for 'candid'.",
      "options": ["Secretive", "Honest", "Reserved", "Crafty"],
      "answer": "Honest",
      "correct": 1
    },
    {
        id:8,
      "question": "Identify the antonym of 'brave'.",
      "options": ["Fearful", "Courageous", "Bold", "Valiant"],
      "answer": "Fearful",
      "correct": 0
    },
    {
        id:9,
      "question": "Choose the word that is opposite in meaning to 'exacerbate'.",
      "options": ["Worsen", "Intensify", "Ameliorate", "Aggravate"],
      "answer": "Ameliorate",
      "correct": 2
    },
    {
        id:10,
      "question": "Pick the correct synonym for 'coerce'.",
      "options": ["Convince", "Persuade", "Force", "Encourage"],
      "answer": "Force",
      "correct": 2
    },
    {
        id:11,
      "question": "What is the meaning of the idiom 'once in a blue moon'?",
      "options": ["Very frequently", "Rarely", "Never", "Always"],
      "answer": "Rarely",
      "correct": 1
    },
    {
        id:13,
      "question": "Which word means the opposite of 'diligent'?",
      "options": ["Lazy", "Hardworking", "Determined", "Energetic"],
      "answer": "Lazy",
      "correct": 0
    },
    {
        id:14,
      "question": "Choose the correct synonym for 'incessant'.",
      "options": ["Constant", "Intermittent", "Occasional", "Brief"],
      "answer": "Constant",
      "correct": 0
    },
    {
        id:15,
      "question": "Select the correct spelling.",
      "options": ["Indispensible", "Indispensable", "Indespensible", "Indespensable"],
      "answer": "Indispensable",
      "correct": 1
    },
    {
        id:16,
      "question": "Identify the antonym of 'optimistic'.",
      "options": ["Positive", "Hopeful", "Pessimistic", "Confident"],
      "answer": "Pessimistic",
      "correct": 2
    },
    {
        id:17,
      "question": "What does the phrase 'cut corners' mean?",
      "options": ["Do something thoroughly", "Take shortcuts", "Make improvements", "Waste time"],
      "answer": "Take shortcuts",
      "correct": 1
    },
    {
        id:18,
      "question": "Choose the correct synonym for 'ephemeral'.",
      "options": ["Permanent", "Temporary", "Everlasting", "Unending"],
      "answer": "Temporary",
      "correct": 1
    },
    {
        id:19,
      "question": "Which word is the antonym of 'ambiguous'?",
      "options": ["Vague", "Obscure", "Clear", "Uncertain"],
      "answer": "Clear",
      "correct": 2
    },
    {
        id:20,
      "question": "What is the meaning of 'ubiquitous'?",
      "options": ["Rare", "Unique", "Common", "Present everywhere"],
      "answer": "Present everywhere",
      "correct": 3
    },
    {
        id:21,
      "question": "Choose the correct synonym for 'gregarious'.",
      "options": ["Introverted", "Sociable", "Quiet", "Shy"],
      "answer": "Sociable",
      "correct": 1
    },
    {
        id:22,
      "question": "Identify the antonym of 'adversity'.",
      "options": ["Misfortune", "Prosperity", "Challenge", "Difficulty"],
      "answer": "Prosperity",
      "correct": 1
    },
    {
        id:23,
      "question": "Select the correct meaning of 'hyperbole'.",
      "options": ["Understatement", "Exaggeration", "Comparison", "Simile"],
      "answer": "Exaggeration",
      "correct": 1
    },
    {
        id:24,
      "question": "Which word is a synonym for 'pragmatic'?",
      "options": ["Impractical", "Realistic", "Idealistic", "Emotional"],
      "answer": "Realistic",
      "correct": 1
    },
    {
        id:25,
      "question": "Pick the correct spelling.",
      "options": ["Definately", "Definetely", "Definitely", "Definatly"],
      "answer": "Definitely",
      "correct": 2
    },
    {
        id:26,
      "question": "Identify the antonym of 'fluctuate'.",
      "options": ["Stabilize", "Vary", "Waver", "Swing"],
      "answer": "Stabilize",
      "correct": 0
    },
    {
        id:27,
      "question": "What does 'a blessing in disguise' mean?",
      "options": ["A fortunate turn of events", "A difficult situation", "An obvious advantage", "An unnoticed failure"],
      "answer": "A fortunate turn of events",
      "correct": 0
    },
    {
        id:28,
      "question": "Choose the synonym for 'meticulous'.",
      "options": ["Careless", "Thorough", "Sloppy", "Hasty"],
      "answer": "Thorough",
      "correct": 1
    },
    {
        id:29,
      "question": "Identify the antonym of 'miser'.",
      "options": ["Spender", "Thrifty", "Generous", "Wealthy"],
      "answer": "Generous",
      "correct": 2
    },
    {
        id:30,
      "question": "What is the meaning of 'equivocal'?",
      "options": ["Clear", "Ambiguous", "Definite", "Precise"],
      "answer": "Ambiguous",
      "correct": 1
    },
    {
        id:31,
      "question": "Select the correct synonym for 'dormant'.",
      "options": ["Inactive", "Lively", "Awake", "Energized"],
      "answer": "Inactive",
      "correct": 0
    }
  ]
  export default questions;