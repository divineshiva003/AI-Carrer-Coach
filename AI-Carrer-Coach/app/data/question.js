// // const questions = [
// //   {
// //     id: 1,
// //     question: "What is React?",
// //     answer: "React is a JavaScript library for building user interfaces."
// //   },
// //   {
// //     id: 2,
// //     question: "What is Next.js?",
// //     answer: "Next.js is a React framework for server-side rendering."
// //   },
// //   {
// //     id: 3,
// //     question: "What is MongoDB?",
// //     answer: "MongoDB is a NoSQL document-based database."
// //   }
// // ];
// const questions = [
//     {   id:0,
//         question: "What is the size of an int variable in C++?",
//         options: ["2 bytes", "4 bytes", "8 bytes", "Depends on the system"],
//         answer: "Depends on the system",
//         correct: 3
//     },
//     {
//         id:1,
//         question: "Which of the following is a valid declaration of a pointer in C++?",
//         options: ["int *ptr;", "int ptr*;", "int &ptr;", "ptr int;"],
//         answer: "int *ptr;",
//         correct: 0
//     },
//     {
//         id:2,
//         question: "What is the output of the following code: cout << (5 + 10) * 2;",
//         options: ["30", "25", "20", "15"],
//         answer: "30",
//         correct: 0
//     },
//     {
//         id:3,
//         question: "What does 'cin' stand for in C++?",
//         options: ["Console Input", "Character Input", "Console Integer", "Character Integer"],
//         answer: "Console Input",
//         correct: 0
//     },
//     {
//         id:4,
//         question: "Which of the following is not a valid C++ data type?",
//         options: ["int", "float", "string", "real"],
//         answer: "real",
//         correct: 3
//     },
//     {
//         id:5,
//         question: "What is the purpose of a constructor in C++?",
//         options: ["To initialize objects", "To destroy objects", "To declare variables", "To create templates"],
//         answer: "To initialize objects",
//         correct: 0
//     },
//     {
//         id:6,
//         question: "What will happen if you don't provide a return statement in a non-void function?",
//         options: ["Compiler error", "Undefined behavior", "Default return 0", "Nothing happens"],
//         answer: "Undefined behavior",
//         correct: 1
//     },
//     {
//         id:7,
//         question: "Which of the following is a feature of C++?",
//         options: ["Object-Oriented Programming", "Procedure-Oriented Programming", "Functional Programming", "All of the above"],
//         answer: "Object-Oriented Programming",
//         correct: 0
//     },
//     {
//         question: "What is polymorphism in C++?",
//         options: ["Multiple forms of a function", "Multiple classes", "Multiple inheritance", "None of the above"],
//         answer: "Multiple forms of a function",
//         correct: 0
//     },
//     {
//         question: "Which operator is used to access members of a class in C++?",
//         options: ["->", ".", "&", "::"],
//         answer: ".",
//         correct: 1
//     },
//     {
//         question: "What does the keyword 'virtual' indicate in C++?",
//         options: ["Inheritance", "Polymorphism", "Static binding", "Dynamic binding"],
//         answer: "Dynamic binding",
//         correct: 3
//     },
//     {
//         question: "What is the correct way to declare a constant in C++?",
//         options: ["const int x;", "int const x;", "const x int;", "Both A and B"],
//         answer: "Both A and B",
//         correct: 3
//     },
//     {
//         question: "What is the purpose of the 'new' operator in C++?",
//         options: ["To allocate memory", "To create objects", "Both A and B", "To delete objects"],
//         answer: "Both A and B",
//         correct: 2
//     },
//     {
//         question: "What does STL stand for in C++?",
//         options: ["Standard Template Library", "Standard Type Library", "Standard Template Language", "Standard Type Language"],
//         answer: "Standard Template Library",
//         correct: 0
//     },
//     {
//         question: "What is the default access modifier for class members in C++?",
//         options: ["public", "private", "protected", "none"],
//         answer: "private",
//         correct: 1
//     },
//     {
//         question: "Which of the following is used to handle exceptions in C++?",
//         options: ["try-catch", "if-else", "switch-case", "throw-catch"],
//         answer: "try-catch",
//         correct: 0
//     },
//     {
//         question: "What is the output of the following code: cout << (2 + 3) * (4 + 1);",
//         options: ["25", "20", "15", "30"],
//         answer: "25",
//         correct: 0
//     },
//     {
//         question: "Which keyword is used to inherit a class in C++?",
//         options: ["extends", "inherits", "implements", "public"],
//         answer: "public",
//         correct: 3
//     },
//     {
//         question: "What is a destructor in C++?",
//         options: ["A function called when an object is created", "A function called when an object is destroyed", "A function to allocate memory", "None of the above"],
//         answer: "A function called when an object is destroyed",
//         correct: 1
//     },
//     {
//         question: "What is the purpose of the 'sizeof' operator in C++?",
//         options: ["To return the size of a variable", "To return the size of a data type", "Both A and B", "To return the size of an array"],
//         answer: "Both A and B",
//         correct: 2
//     },
//     {
//         question: "What is the difference between 'struct' and 'class' in C++?",
//         options: ["No difference", "Struct members are public by default, class members are private", "Class members are public by default, struct members are private", "Structs can have methods, classes cannot"],
//         answer: "Struct members are public by default, class members are private",
//         correct: 1
//     },
//     {
//         question: "Which of the following is not a valid loop in C++?",
//         options: ["for loop", "while loop", "do-while loop", "loop-while"],
//         answer: "loop-while",
//         correct: 3
//     },
//     {
//         question: "What is an abstract class in C++?",
//         options: ["A class without a constructor", "A class with only pure virtual functions", "A class that cannot be instantiated", "Both B and C"],
//         answer: "Both B and C",
//         correct: 3
//     },
//     {
//         question: "What does 'friend' keyword do in C++?",
//         options: ["Makes a function a member of a class", "Allows access to private members", "Defines a global function", "None of the above"],
//         answer: "Allows access to private members",
//         correct: 1
//     },
//     {
//         question: "What is the purpose of the 'const' keyword?",
//         options: ["To define a constant value", "To define a constant variable", "Both A and B", "None of the above"],
//         answer: "Both A and B",
//         correct: 2
//     },
//     {
//         question: "What is the output of the following code: cout << 10 / 3;",
//         options: ["3.33", "3", "3.0", "4"],
//         answer: "3",
//         correct: 1
//     },
//     {
//         question: "What is a template in C++?",
//         options: ["A blueprint for creating classes", "A way to create generic functions", "Both A and B", "None of the above"],
//         answer: "Both A and B",
//         correct: 2
//     },
//     {
//         question: "What is the main function in a C++ program?",
//         options: ["void main()", "int main()", "main()", "Both A and B"],
//         answer: "int main()",
//         correct: 1
//     }
// ];

// export default questions;
// questions.js
const questions = [

 {   id:1,
        question: "What is the size of an int variable in C++?",
        options: ["2 bytes", "4 bytes", "8 bytes", "Depends on the system"],
        answer: "Depends on the system",
         correctAnswer: "8 bytes"
    },
    {
        id:2,
        question: "Which of the following is a valid declaration of a pointer in C++?",
        options: ["int *ptr;", "int ptr*;", "int &ptr;", "ptr int;"],
        answer: "int *ptr;",
        correctAnswer: "int *ptr;"
    },
    {
        id:3,
        question: "What is the output of the following code: cout << (5 + 10) * 2;",
        options: ["30", "25", "20", "15"],
        answer: "30",
       correctAnswer: "30"
    },
    {
        id:4,
        question: "What does 'cin' stand for in C++?",
        options: ["Console Input", "Character Input", "Console Integer", "Character Integer"],
        answer: "Console Input",
        correct: 0
    },
    {
        id:5,
        question: "Which of the following is not a valid C++ data type?",
        options: ["int", "float", "string", "real"],
        answer: "real",
        correct: 3
    },
    {
        id:6,
        question: "What is the purpose of a constructor in C++?",
        options: ["To initialize objects", "To destroy objects", "To declare variables", "To create templates"],
        answer: "To initialize objects",
        correct: 0
    },
    {
        id:7,
        question: "What will happen if you don't provide a return statement in a non-void function?",
        options: ["Compiler error", "Undefined behavior", "Default return 0", "Nothing happens"],
        answer: "Undefined behavior",
        correct: 1
    },
    {
        id:8,
        question: "Which of the following is a feature of C++?",
        options: ["Object-Oriented Programming", "Procedure-Oriented Programming", "Functional Programming", "All of the above"],
        answer: "Object-Oriented Programming",
        correct: 0
    },
    {
        id:9,
        question: "What is polymorphism in C++?",
        options: ["Multiple forms of a function", "Multiple classes", "Multiple inheritance", "None of the above"],
        answer: "Multiple forms of a function",
        correct: 0
    },
    {
        id:10,
        question: "Which operator is used to access members of a class in C++?",
        options: ["->", ".", "&", "::"],
        answer: ".",
        correct: 1
    },
    {
        id:11,
        question: "What does the keyword 'virtual' indicate in C++?",
        options: ["Inheritance", "Polymorphism", "Static binding", "Dynamic binding"],
        answer: "Dynamic binding",
        correct: 3
    },
    {
        id:12,
        question: "What is the correct way to declare a constant in C++?",
        options: ["const int x;", "int const x;", "const x int;", "Both A and B"],
        answer: "Both A and B",
        correct: 3
    },
    {
        id:13,
        question: "What is the purpose of the 'new' operator in C++?",
        options: ["To allocate memory", "To create objects", "Both A and B", "To delete objects"],
        answer: "Both A and B",
        correct: 2
    },
    {
        id:14,
        question: "What does STL stand for in C++?",
        options: ["Standard Template Library", "Standard Type Library", "Standard Template Language", "Standard Type Language"],
        answer: "Standard Template Library",
        correct: 0
    },
    {
        id:15,
        question: "What is the default access modifier for class members in C++?",
        options: ["public", "private", "protected", "none"],
        answer: "private",
        correct: 1
    },
    {
        id:16,
        question: "Which of the following is used to handle exceptions in C++?",
        options: ["try-catch", "if-else", "switch-case", "throw-catch"],
        answer: "try-catch",
        correct: 0
    },
    {
        id:17,
        question: "What is the output of the following code: cout << (2 + 3) * (4 + 1);",
        options: ["25", "20", "15", "30"],
        answer: "25",
        correct: 0
    },
    {
        id:18,
        question: "Which keyword is used to inherit a class in C++?",
        options: ["extends", "inherits", "implements", "public"],
        answer: "public",
        correct: 3
    },
    {
        id:19,
        question: "What is a destructor in C++?",
        options: ["A function called when an object is created", "A function called when an object is destroyed", "A function to allocate memory", "None of the above"],
        answer: "A function called when an object is destroyed",
        correct: 1
    },
    {
        id:20,
        question: "What is the purpose of the 'sizeof' operator in C++?",
        options: ["To return the size of a variable", "To return the size of a data type", "Both A and B", "To return the size of an array"],
        answer: "Both A and B",
        correct: 2
    },
    {
        id:21,
        question: "What is the difference between 'struct' and 'class' in C++?",
        options: ["No difference", "Struct members are public by default, class members are private", "Class members are public by default, struct members are private", "Structs can have methods, classes cannot"],
        answer: "Struct members are public by default, class members are private",
        correct: 1
    },
    {
        id:22,
        question: "Which of the following is not a valid loop in C++?",
        options: ["for loop", "while loop", "do-while loop", "loop-while"],
        answer: "loop-while",
        correct: 3
    },
    {
        id:23,
        question: "What is an abstract class in C++?",
        options: ["A class without a constructor", "A class with only pure virtual functions", "A class that cannot be instantiated", "Both B and C"],
        answer: "Both B and C",
        correct: 3
    },
    {
        id:24,
        question: "What does 'friend' keyword do in C++?",
        options: ["Makes a function a member of a class", "Allows access to private members", "Defines a global function", "None of the above"],
        answer: "Allows access to private members",
        correct: 1
    },
    {
        id:25,
        question: "What is the purpose of the 'const' keyword?",
        options: ["To define a constant value", "To define a constant variable", "Both A and B", "None of the above"],
        answer: "Both A and B",
        correct: 2
    },
    {
        id:26,
        question: "What is the output of the following code: cout << 10 / 3;",
        options: ["3.33", "3", "3.0", "4"],
        answer: "3",
        correct: 1
    },
    {
        id:27,
        question: "What is a template in C++?",
        options: ["A blueprint for creating classes", "A way to create generic functions", "Both A and B", "None of the above"],
        answer: "Both A and B",
        correct: 2
    },
    {
        id:28,
        question: "What is the main function in a C++ program?",
        options: ["void main()", "int main()", "main()", "Both A and B"],
        answer: "int main()",
        correct: 1
}
];

export default questions;

