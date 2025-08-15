
const questions = [
    {
      id:1,
      question: "What will be the output of the following Python code snippet? <br> print(2 * 3 ** 3 / 4 + 5)",
      options: ["10.5", "18.0", "31.5", "46.0"],
      answer: "18.0",
      correct: 1
    },
    {
        id:2,
      question: "Which of the following statements creates a dictionary in Python?",
      options: ["dict = {}", "dict = {1:'one', 2:'two'}", "dict = {1,2}", "dict = ()"],
      answer: "dict = {1:'one', 2:'two'}",
      correct: 1
    },
    {
        id:3,
      question: "What will be the output of the following Python code snippet? <br> a = [1, 2, 3, 4]<br>print(a[-3:])",
      options: ["[1, 2]", "[2, 3, 4]", "[2, 3]", "[1, 2, 3, 4]"],
      answer: "[2, 3]",
      correct: 2
    },
    {
        id:4,
      question: "Which of the following is a correct way to open a file data.txt in Python?",
      options: ["file = open('data.txt')", "file = open('data.txt', 'r')", "file = open('data.txt', mode='r')", "All of the above"],
      answer: "All of the above",
      correct: 3
    },
    {
        id:5,
      question: "What will be the output of the following Python code snippet?<br>a = [1, 2, 3]<br>b = a<br>b[0] = 5<br>print(a)",
      options: ["[1, 2, 3]", "[5, 2, 3]", "[5, 2, 3, 5]", "[5, 2, 3, 1]"],
      answer: "[5, 2, 3]",
      correct: 1
    },
    {
        id:6,
      question: "What does the pass statement do in Python?",
      options: ["It terminates the program", "It skips to the next iteration of a loop", "It raises an exception", "It does nothing; it's a null operation"],
      answer: "It does nothing; it's a null operation",
      correct: 3
    },
    {
        id:7,
      question: "Which of the following statements is true about Python?",
      options: ["It must be compiled before execution", "It is both interpreted and compiled", "It is purely compiled", "It is purely interpreted"],
      answer: "It is both interpreted and compiled",
      correct: 1
    },
    {
        id:8,
      question: "What is the output of the following Python code?<br>print('abc'.replace('a', 'z'))",
      options: ["'abc'", "'zbc'", "'abz'", "'zabc'"],
      answer: "'zbc'",
      correct: 1
    },
    {
        id:9,
      question: "Which of the following functions returns the length of a list in Python?",
      options: ["length(list)", "list.length()", "len(list)", "list.len()"],
      answer: "len(list)",
      correct: 2
    },
    {
        id:10,
      question: "What will be the value of x after execution of the following code? image 1",
      options: ["5", "6", "10", "15"],
      answer: "6",
      correct: 1
    },
    {
        id:11,
      question: "What will be the output of the following Python code? <br> a = [1, 2, 3]<br>b = a[:]<br>b[0] = 5<br>print(a)",
      options: ["[1, 2, 3]", "[5, 2, 3]", "[5, 2, 3, 1]", "[1, 2, 3, 5]"],
      answer: "[1, 2, 3]",
      correct: 0
    },
    {
        id:12,
      question: "In Python, which keyword is used to define a function?",
      options: ["func", "define", "def", "function"],
      answer: "def",
      correct: 2
    },
    {
        id:13,
      question: "What will be the output of the following Python code? a = {1, 2, 3} <br> b = {3, 4, 5} <br> print(a & b)",
      options: ["{1, 2}", "{3}", "{3, 4, 5}", "Error: sets do not support '&' operator"],
      answer: "{3}",
      correct: 1
    },
    {
        id:14,
      question: "Which of the following is used to generate a random number in Python?",
      options: ["random.random()", "rand.randint()", "random.randint()", "rand.random()"],
      answer: "random.random()",
      correct: 0
    },
    {
        id:15,
      question: "What will be the output of the following Python code? <br> a = 5 <br> b = 2 <br> print(a // b)",
      options: ["2.5", "2", "2.0", "2.2"],
      answer: "2",
      correct: 1
    },
    {
        id:16,
      question: "In Python, which of the following is NOT a valid data type?",
      options: ["int", "double", "list", "tuple"],
      answer: "double",
      correct: 1
    },
    {
        id:17,
      question: "What will be the output of the following Python code? <br> a = 'Hello' <br> b = 'World' <br> print(a + ' ' + b)",
      options: ["HelloWorld", "Hello World", "Hello+World", "Error: cannot concatenate str and int objects"],
      answer: "Hello World",
      correct: 1
    },
    {
        id:18,
      question: "What will the print function in Python 3.x print?",
      options: ["The values passed to it", "The sum of the values passed to it", "The expression evaluated", "The result of the last expression evaluated"],
      answer: "The values passed to it",
      correct: 0
    },
    {
        id:19,
      question: "Which of the following is used to read user input in Python?",
      options: ["input()", "read()", "getInput()", "userInput()"],
      answer: "input()",
      correct: 0
    },
    {
        id:20,
      question: "What will be the output of the following Python code? <br> a = [1, 2, 3]<br> b = a <br> b.append(4)<br> print(a)",
      options: ["[1, 2, 3]", "[1, 2, 3, 4]", "[1, 2, 3, 1, 2, 3, 4]", "Error: lists do not support 'append()' method"],
      answer: "[1, 2, 3, 4]",
      correct: 1
    },
    {
        id:21,
      question: "What will be the output of the following Python code? <br> a = (1, 2, 3)<br> b = (4, 5)<br> print(a + b)",
      options: ["(1, 2, 3, 4, 5)", "(5, 7, 8)", "(1, 2, 3, 5, 4)", "Error: tuples do not support '+' operator"],
      answer: "(1, 2, 3, 4, 5)",
      correct: 0
    },
    {
        id:22,
      question: "What is the output of the following code? <br> x = 5 <br> y = 10 <br> print(x if x > y else y)",
      options: ["5", "10", "Error", "None"],
      answer: "10",
      correct: 1
    },
    {
        id:23,
      question: "Which of the following is the correct way to define a function in Python?",
      options: ["func x: print('Hello')", "def func(x): print('Hello')", "func(x) = print('Hello')", "function x() { print('Hello') }"],
      answer: "def func(x): print('Hello')",
      correct: 1
    },
    {
        id:24,
      question: "What is the data type of a variable declared with name = 'John'?",
      options: ["Integer", "Float", "String", "Boolean"],
      answer: "String",
      correct: 2
    },
    {
        id:25,
      question: "What is the purpose of the in keyword in Python?",
      options: ["To perform arithmetic operations", "To check if a value exists in a sequence", "To define a loop", "None"],
      answer: "To check if a value exists in a sequence",
      correct: 1
    }
  ]
  export default questions;