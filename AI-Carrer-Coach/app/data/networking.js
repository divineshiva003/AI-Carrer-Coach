
const questions = [
    {
        id:1,
      question: "What is the size of the int data type in Java?",
      options: ["4 bytes", "2 bytes", "8 bytes", "1 byte"],
      answer: "4 bytes",
      correct: 0
    },
    {
        id:2,
      question: "Which of the following is a reserved keyword in Java?",
      options: ["run", "goto", "catcher", "hello"],
      answer: "goto",
      correct: 1
    },
    {
        id:3,
      question: "Which method is used to start a thread in Java?",
      options: ["init()", "run()", "start()", "begin()"],
      answer: "start()",
      correct: 2
    },
    {
        id:4,
      question: "Which of the following is not a primitive data type in Java?",
      options: ["int", "float", "String", "boolean"],
      answer: "String",
      correct: 2
    },
    {
        id:5,
      question: "Which of these access specifiers can be used for a class in Java?",
      options: ["protected", "private", "public", "transient"],
      answer: "public",
      correct: 2
    },
    {
        id:6,
      question: "Which of the following is the correct way to declare an array in Java?",
      options: [
        "int arr[] = new int[5];",
        "int arr = new int[5];",
        "int arr[5] = new int[];",
        "int arr() = new int[5];"
      ],
      answer: "int arr[] = new int[5];",
      correct: 0
    },
    {
        id:7,
      question: "Which of the following is not a Java feature?",
      options: ["Object-oriented", "Portable", "Dynamic", "Use of pointers"],
      answer: "Use of pointers",
      correct: 3
    },
    {
        id:8,
      question: "What is the default value of a boolean variable in Java?",
      options: ["true", "false", "1", "0"],
      answer: "false",
      correct: 1
    },
    {
        id:9,
      question: "Which of these is a superclass of all classes in Java?",
      options: ["java.util", "java.lang.String", "java.lang.Object", "java.awt"],
      answer: "java.lang.Object",
      correct: 2
    },
    {
        id:10,
      question: "Which of the following loops will execute at least once?",
      options: ["for", "while", "do-while", "foreach"],
      answer: "do-while",
      correct: 2
    },
    {
        id:11,
      question: "Which of the following statements is true about a constructor?",
      options: [
        "A constructor must have a return type.",
        "A constructor is called only once during an object's lifetime.",
        "A constructor can be inherited.",
        "A constructor cannot have the same name as the class."
      ],
      answer: "A constructor is called only once during an object's lifetime.",
      correct: 1
    },
    {
        id:12,
      question: "What is the output of the following code?<br>System.out.println(5 + 3 + `Hello`);",
      options: ["Hello8", "8Hello", "53Hello", "Hello53"],
      answer: "8Hello",
      correct: 1
    },
    {
        id:13,
      question: "Which keyword is used to prevent a class from being subclassed?",
      options: ["final", "static", "protected", "transient"],
      answer: "final",
      correct: 0
    },
    {
        id:14,
      question: "How can you make a class immutable in Java?",
      options: [
        "By declaring all fields as final.",
        "By providing only getter methods and no setter methods.",
        "By making the class final.",
        "All of the above"
      ],
      answer: "All of the above",
      correct: 3
    },
    {
        id:15,
      question: "Which of the following can be used to create an instance of an abstract class?",
      options: [
        "Direct instantiation",
        "Anonymous inner class",
        "Using new keyword",
        "None of the above"
      ],
      answer: "Anonymous inner class",
      correct: 1
    },
    {
        id:16,
      question: "Which method is used to find the length of a string in Java?",
      options: ["length()", "size()", "getSize()", "count()"],
      answer: "length()",
      correct: 0
    },
    {
        id:17,
      question: "What will be the result of the following code? <br> String str = `Hello`; <br> String newStr = str.concat(`World`); <br> System.out.println(str);",
      options: ["HelloWorld", "World", "Hello", "Hello World"],
      answer: "Hello",
      correct: 2
    },
    {
        id:18,
      question: "Which exception is thrown when an array is accessed with an illegal index?",
      options: [
        "ArrayStoreException",
        "NullPointerException",
        "ArrayIndexOutOfBoundsException",
        "IllegalArgumentException"
      ],
      answer: "ArrayIndexOutOfBoundsException",
      correct: 2
    },
    {
        id:19,
      question: "Which of the following is not a valid way to create a thread in Java?",
      options: [
        "Extending the Thread class",
        "Implementing the Runnable interface",
        "Implementing the Callable interface",
        "Using the Thread interface"
      ],
      answer: "Using the Thread interface",
      correct: 3
    },
    {
        id:20,
      question: "What is the output of the following code? <br> int x = 5; <br> int y = 10; <br> System.out.println(x > y ? x : y);",
      options: ["5", "10", "x", "y"],
      answer: "10",
      correct: 1
    },
    {
        id:21,
      question: "What is the purpose of the transient keyword?",
      options: [
        "To mark a variable as volatile",
        "To prevent a variable from being serialized",
        "To declare a method as synchronized",
        "To make a variable threadsafe"
      ],
      answer: "To prevent a variable from being serialized",
      correct: 1
    },
    {
        id:22,
      question: "Which of the following correctly declares a generic class in Java?",
      options: [
        "class MyClass<> {}",
        "class MyClass<T> {}",
        "class MyClass<T, U> {}",
        "Both B and C"
      ],
      answer: "Both B and C",
      correct: 3
    },
    {
        id:23,
      question: "What will be the output of the following code? <br> List<Integer> list = Arrays.asList(1, 2, 3); <br> for (int i : list) { <br> System.out.print(i + ` `); <br> }",
      options: ["123", "1 2 3", "3 2 1", "1, 2, 3"],
      answer: "1 2 3",
      correct: 1
    },
    {
        id:24,
      question: "What does the hashCode() method do in Java?",
      options: [
        "Returns a unique integer for each object",
        "Converts an object into a string",
        "Returns an integer representation of the object",
        "Compares two objects for equality"
      ],
      answer: "Returns an integer representation of the object",
      correct: 2
    },
    {
        id:25,
      question: "What is the time complexity of inserting an element into a HashMap in Java?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      answer: "O(1)",
      correct: 0
    },
    {
        id:26,
      question: "Which of the following is not a part of Java's memory management model?",
      options: ["Stack", "Queue", "Heap", "Garbage Collection"],
      answer: "Queue",
      correct: 1
    },

    {
        id:27,
      question: "Which of these is a valid lambda expression in Java?",
      options: [
        "()>System.out.println(`Hello`)",
        "System.out.println(`Hello`)",
        "()>{return `Hello`;}",
        "String s = ()>`Hello`"
      ],
      answer: "()>System.out.println(`Hello`)",
      correct: 0
    },
    {
        id:28,
      question: "What is the result of 10 >> 2 in Java?",
      options: ["20", "5", "2", "40"],
      answer: "2",
      correct: 2
    },
    {
        id:29,
      question: "Which method is called by the garbage collector before an object is destroyed?",
      options: ["dispose()", "delete()", "finalize()", "destroy()"],
      answer: "finalize()",
      correct: 2
    },
    {
        id:30,
      question: "Which of the following can be used to create a synchronized block of code?",
      options: [
        "synchronized(this){}",
        "synchronized(class){}",
        "synchronized(Object o){}",
        "All of the above"
      ],
      answer: "synchronized(this){}",
      correct: 0
    }
  ]
  export default questions;