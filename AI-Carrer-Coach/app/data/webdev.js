const questions = [
    {
        id:1,
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "HighText Machine Language", "HyperText Machine Language", "Hyperlink and Text Markup Language"],
        answer: "HyperText Markup Language",
        correct: 0
    },
    {
        id:2,
        question: "Which tag is used to define an internal style sheet?",
        options: ["<style>", "<css>", "<script>", "<styles>"],
        answer: "<style>",
        correct: 0
    },
    {
        id:3,
        question: "What is the purpose of the <head> tag in HTML?",
        options: ["To contain meta-information", "To define the body of the document", "To create links to external files", "To display the main content"],
        answer: "To contain meta-information",
        correct: 0
    },
    {
        id:4,
        question: "What is the correct syntax for referring to an external script called 'script.js'?",
        options: ["<script href='script.js'>", "<script src='script.js'>", "<script name='script.js'>", "<script file='script.js'>"],
        answer: "<script src='script.js'>",
        correct: 1
    },
    {
        id:5,
        question: "Which CSS property controls the text size?",
        options: ["font-size", "text-size", "font-style", "text-style"],
        answer: "font-size",
        correct: 0
    },
    {
        id:6,
        question: "What does CSS stand for?",
        options: ["Colorful Style Sheets", "Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets"],
        answer: "Cascading Style Sheets",
        correct: 2
    },
    {
        id:7,
        question: "Which HTML attribute is used to define the inline styles?",
        options: ["styles", "style", "class", "font"],
        answer: "style",
        correct: 1
    },
    {
        id:8,
        question: "How can you add a comment in a CSS file?",
        options: ["// this is a comment", "<!-- this is a comment -->", "/* this is a comment */", "# this is a comment"],
        answer: "/* this is a comment */",
        correct: 2
    },
    {
        id:9,
        question: "Which HTML tag is used to define an unordered list?",
        options: ["<ol>", "<ul>", "<list>", "<li>"],
        answer: "<ul>",
        correct: 1
    },
    {
        id:10,
        question: "What is the default value of the position property in CSS?",
        options: ["relative", "absolute", "fixed", "static"],
        answer: "static",
        correct: 3
    },
    {
        id:11,
        question: "Which method is used to access an HTML element by its ID in JavaScript?",
        options: ["getElementById()", "getElementsById()", "querySelector()", "querySelect()"],
        answer: "getElementById()",
        correct: 0
    },
    {
        id:12,
        question: "Which of the following is a valid way to create a function in JavaScript?",
        options: ["function myFunction()", "function:myFunction()", "create myFunction()", "myFunction() = function()"],
        answer: "function myFunction()",
        correct: 0
    },
    {
        id:13,
        question: "What is the purpose of the 'return' statement in a function?",
        options: ["To exit a function", "To return a value from a function", "Both A and B", "None of the above"],
        answer: "Both A and B",
        correct: 2
    },
    {
        id:14,
        question: "What does JSON stand for?",
        options: ["JavaScript Object Notation", "JavaScript Online Notation", "JavaScript Object Notation Syntax", "JavaScript Object Network"],
        answer: "JavaScript Object Notation",
        correct: 0
    },
    {
        id:15,
        question: "Which HTML element is used to define a footer for a document or section?",
        options: ["<footer>", "<bottom>", "<section>", "<aside>"],
        answer: "<footer>",
        correct: 0
    },
    {
        id:16,
        question: "Which method can be used to convert a JSON string into a JavaScript object?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.object()"],
        answer: "JSON.parse()",
        correct: 0
    },
    {
        id:17,
        question: "How do you create a new array in JavaScript?",
        options: ["var arr = [];", "var arr = new Array();", "Both A and B", "var arr = array();"],
        answer: "Both A and B",
        correct: 2
    },
    {
        id:18,
        question: "Which event occurs when the user clicks on an HTML element?",
        options: ["onclick", "onchange", "onmouseover", "onhover"],
        answer: "onclick",
        correct: 0
    },
    {
        id:19,
        question: "What does AJAX stand for?",
        options: ["Asynchronous JavaScript and XML", "Asynchronous JavaScript and XHTML", "Advanced JavaScript and XML", "Advanced JavaScript and XHTML"],
        answer: "Asynchronous JavaScript and XML",
        correct: 0
    },
    {
        id:20,
        question: "What is the main purpose of the <meta> tag?",
        options: ["To provide metadata about the HTML document", "To link external CSS files", "To create navigation links", "To define the content type"],
        answer: "To provide metadata about the HTML document",
        correct: 0
    },
    {
        id:21,
        question: "Which of the following is NOT a valid CSS selector?",
        options: ["#id", ".class", "element", "[attribute=value]", "element.class#id"],
        answer: "element.class#id",
        correct: 4
    },
    {
        id:22,
        question: "How do you select an element with a specific class name in CSS?",
        options: [".classname", "#classname", "classname", "<classname>"],
        answer: ".classname",
        correct: 0
    },
    {
        id:23,
        question: "Which CSS property controls the layout of a flex container?",
        options: ["flex-direction", "align-items", "justify-content", "display"],
        answer: "display",
        correct: 3
    },
    {
        id:24,
        question: "What does the 'this' keyword refer to in JavaScript?",
        options: ["The current object", "The global object", "The previous object", "None of the above"],
        answer: "The current object",
        correct: 0
    },
    {
        id:25,
        question: "What is a closure in JavaScript?",
        options: ["A function within another function", "An object with private variables", "A way to manage asynchronous code", "None of the above"],
        answer: "A function within another function",
        correct: 0
    },
    {
        id:26,
        question: "What is the purpose of the 'DOMContentLoaded' event?",
        options: ["To indicate that the HTML document has been fully loaded and parsed", "To indicate that all resources are fully loaded", "To indicate a new document has been created", "None of the above"],
        answer: "To indicate that the HTML document has been fully loaded and parsed",
        correct: 0
    },
    {
        id:27,
        question: "Which of the following is a JavaScript framework?",
        options: ["React", "HTML", "CSS", "XML"],
        answer: "React",
        correct: 0
    },
    {
        id:28,
        question: "What is the primary function of a web server?",
        options: ["To serve web pages", "To store databases", "To process requests", "Both A and C"],
        answer: "Both A and C",
        correct: 3
    },
    {
        id:29,
        question: "Which HTTP method is used to update a resource?",
        options: ["GET", "POST", "PUT", "DELETE"],
        answer: "PUT",
        correct: 2
    },
    {
        id:30,
        question: "What is the difference between '=='' and '===' in JavaScript?",
        options: ["'==' checks value only, '===' checks value and type", "'==' checks type only, '===' checks value", "There is no difference", "'==' is slower than '==='"],
        answer: "'==' checks value only, '===' checks value and type",
        correct: 0
    },
    {
        id:31,
        question: "What is CORS?",
        options: ["Cross-Origin Resource Sharing", "Cross-Origin Request Security", "Cross-Origin Request Sharing", "Cross-Origin Resource Security"],
        answer: "Cross-Origin Resource Sharing",
        correct: 0
    },
    {
        id:32,
        question: "How do you define a variable in JavaScript?",
        options: ["var myVariable;", "variable myVariable;", "def myVariable;", "myVariable = variable;"],
        answer: "var myVariable;",
        correct: 0
    },
    {
        id:33,
        question: "What is a CDN?",
        options: ["Content Delivery Network", "Central Data Network", "Content Distribution Node", "Central Domain Name"],
        answer: "Content Delivery Network",
        correct: 0
    }
];
export default questions;