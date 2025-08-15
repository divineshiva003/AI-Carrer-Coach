const questions = [
    // Logical Reasoning
    {
        id: 1,
        question: "If A is the brother of B, and B is the sister of C, how is C related to A?",
        options: ["Brother", "Sister", "Can't be determined", "Cousin"],
        answer: "Can't be determined",
        correct: 2
    },
    {
        id: 2,
        question: "Pointing to a man, Ravi said, 'He is the son of my grandfather’s only son.' Who is the man to Ravi?",
        options: ["Brother", "Cousin", "Uncle", "Father"],
        answer: "Brother",
        correct: 0
    },
    {
        id: 3,
        question: "A man walks 3 km north, then 4 km east. How far is he from his starting point?",
        options: ["5 km", "7 km", "1 km", "6 km"],
        answer: "5 km",
        correct: 0
    },
    {
        id: 4,
        question: "Find the missing number in the series: 2, 6, 12, 20, ?",
        options: ["28", "30", "32", "36"],
        answer: "30",
        correct: 1
    },
    {
        id: 5,
        question: "In a certain code, 'CAT' is written as 'DBU'. How is 'DOG' written?",
        options: ["EPH", "EPG", "EOG", "EQH"],
        answer: "EPH",
        correct: 0
    },

    // Verbal Reasoning
    {
        id: 6,
        question: "Which of the following is the odd one out: Apple, Mango, Banana, Carrot?",
        options: ["Apple", "Mango", "Banana", "Carrot"],
        answer: "Carrot",
        correct: 3
    },
    {
        id: 7,
        question: "Complete the analogy: Bird : Nest :: Bee : ?",
        options: ["Hive", "Honey", "Flower", "Insect"],
        answer: "Hive",
        correct: 0
    },
    {
        id: 8,
        question: "Arrange the words in a logical sequence: 1. Seed 2. Plant 3. Flower 4. Fruit",
        options: ["1-2-3-4", "1-3-2-4", "2-1-3-4", "1-2-4-3"],
        answer: "1-2-3-4",
        correct: 0
    },
    {
        id: 9,
        question: "If in a certain language, 'DOG' = 26, 'CAT' = 24, then 'BAT' = ?",
        options: ["23", "22", "21", "20"],
        answer: "23",
        correct: 0
    },
    {
        id: 10,
        question: "Which day will it be 15 days after Wednesday?",
        options: ["Thursday", "Friday", "Saturday", "Sunday"],
        answer: "Thursday",
        correct: 0
    },

    // Syllogisms
    {
        id: 11,
        question: "Statements: All roses are flowers. Some flowers are yellow. Conclusion: Some roses are yellow.",
        options: ["True", "False", "Uncertain", "None of these"],
        answer: "Uncertain",
        correct: 2
    },
    {
        id: 12,
        question: "Statements: Some cats are dogs. All dogs are animals. Conclusion: All cats are animals.",
        options: ["True", "False", "Uncertain", "None of these"],
        answer: "Uncertain",
        correct: 2
    },

    // Data Sufficiency
    {
        id: 13,
        question: "What is the age of John? Statement 1: John is older than Peter. Statement 2: Peter is 25 years old.",
        options: ["Only 1 is sufficient", "Only 2 is sufficient", "Both together are sufficient", "Neither is sufficient"],
        answer: "Neither is sufficient",
        correct: 3
    },

    // Non-Verbal Reasoning
    {
        id: 14,
        question: "Which shape will come next in the sequence of patterns?",
        options: ["Circle", "Square", "Triangle", "Hexagon"],
        answer: "Triangle",
        correct: 2
    },
    {
        id: 15,
        question: "Which of the following cube faces can be opposite each other if 1 is opposite 6?",
        options: ["2 and 5", "3 and 4", "2 and 4", "None of these"],
        answer: "3 and 4",
        correct: 1
    },

    // More Logical Reasoning
    {
        id: 16,
        question: "If all Bloops are Razzies, and all Razzies are Lazzies, then all Bloops are definitely Lazzies?",
        options: ["Yes", "No", "Can't say", "Only some"],
        answer: "Yes",
        correct: 0
    },
    {
        id: 17,
        question: "Find the odd one out: 36, 49, 64, 81",
        options: ["36", "49", "64", "81"],
        answer: "36",
        correct: 0
    },
    {
        id: 18,
        question: "If MONKEY is coded as 576345, what is TIGER?",
        options: ["49215", "49125", "49251", "49521"],
        answer: "49215",
        correct: 0
    },
    {
        id: 19,
        question: "Which diagram represents Teachers, Women, Mothers?",
        options: ["Venn diagram with intersection", "Separate circles", "One inside the other", "Overlapping partially"],
        answer: "Overlapping partially",
        correct: 3
    },
    {
        id: 20,
        question: "If it was Monday on Jan 1, what day was Jan 26 of the same year?",
        options: ["Friday", "Thursday", "Saturday", "Sunday"],
        answer: "Friday",
        correct: 0
    },

    // Non-Verbal Visual Patterns
    {
        id: 21,
        question: "Which figure will complete the pattern?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option B",
        correct: 1
    },
    {
        id: 22,
        question: "Which water image matches the given figure?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option C",
        correct: 2
    },

    // Puzzle
    {
        id: 23,
        question: "A, B, C, and D are sitting in a line. A is to the left of B, C is to the right of D. Who is in the middle?",
        options: ["A", "B", "C", "D"],
        answer: "B",
        correct: 1
    },

    // Order & Ranking
    {
        id: 24,
        question: "In a race of 10 people, Ravi finished before John but after Peter. Who came first among them?",
        options: ["Ravi", "John", "Peter", "Can't be determined"],
        answer: "Peter",
        correct: 2
    },

    // Input-Output
    {
        id: 25,
        question: "If input is: 'CAT 9 DOG 4 RAT 2', and output is '2 CAT 4 DOG 9 RAT', what is the logic?",
        options: ["Numbers arranged ascending", "Words arranged descending", "Alternate sorting", "None of these"],
        answer: "Numbers arranged ascending",
        correct: 0
    },

    // Cause & Effect
    {
        id: 26,
        question: "Cause: Heavy rainfall in the city. Effect: Flooding in low-lying areas. Is this a valid cause-effect pair?",
        options: ["Yes", "No", "Can't say", "Partially"],
        answer: "Yes",
        correct: 0
    },

    // Course of Action
    {
        id: 27,
        question: "Problem: Increasing road accidents. Course of Action: 1. Enforce traffic rules strictly. 2. Remove vehicles from roads. Which is correct?",
        options: ["Only 1", "Only 2", "Both", "None"],
        answer: "Only 1",
        correct: 0
    },

    // Calendar Problem
    {
        id: 28,
        question: "What day was 1 Jan 2000?",
        options: ["Saturday", "Sunday", "Friday", "Monday"],
        answer: "Saturday",
        correct: 0
    },

    // Clock Problem
    {
        id: 29,
        question: "At what time between 3 and 4 will the hands of a clock be together?",
        options: ["3:15", "3:16", "3:17", "3:18"],
        answer: "3:16",
        correct: 1
    },

    // Misc
    {
        id: 30,
        question: "If 3 cats catch 3 mice in 3 minutes, how many cats are needed to catch 100 mice in 100 minutes?",
        options: ["3", "9", "33", "100"],
        answer: "3",
        correct: 0
    }
];
  
 export default questions;