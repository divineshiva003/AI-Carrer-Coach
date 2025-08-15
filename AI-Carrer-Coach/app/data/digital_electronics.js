const questions = [
    {
        id:1,
        "question": "What is a digital signal?",
        "options": ["A signal that varies continuously", "A signal that has discrete values", "A signal that has no noise", "A signal that varies with time"],
        "answer": "A signal that has discrete values",
        "correct": 1
    },
    {
         id:2,
        "question": "What does TTL stand for?",
        "options": ["Transistor-Transistor Logic", "Transistor-Transformer Logic", "Transistor-Transfer Logic", "Transistor-Transmission Logic"],
        "answer": "Transistor-Transistor Logic",
        "correct": 0
    },
    {
         id:3,
        "question": "What is the purpose of a flip-flop?",
        "options": ["To store a single bit of data", "To amplify signals", "To convert AC to DC", "To filter signals"],
        "answer": "To store a single bit of data",
        "correct": 0
    },
    {
         id:4,
        "question": "What is a truth table?",
        "options": ["A table that shows all possible input combinations", "A table that shows voltage levels", "A table that shows current levels", "A table that shows power levels"],
        "answer": "A table that shows all possible input combinations",
        "correct": 0
    },
    {
         id:5,
        "question": "What is the binary equivalent of the decimal number 5?",
        "options": ["101", "110", "111", "100"],
        "answer": "101",
        "correct": 0
    },
    {
         id:6,
        "question": "What is the function of a multiplexer?",
        "options": ["To select one of many inputs", "To store data", "To amplify signals", "To convert analog signals to digital"],
        "answer": "To select one of many inputs",
        "correct": 0
    },
    {
         id:7,
        "question": "What is a combinational circuit?",
        "options": ["A circuit whose output depends on current input", "A circuit whose output depends on previous inputs", "A circuit that has feedback", "A circuit that processes analog signals"],
        "answer": "A circuit whose output depends on current input",
        "correct": 0
    },
    {
         id:8,
        "question": "What does D/A stand for?",
        "options": ["Digital to Analog", "Direct to Analog", "Data to Analog", "Digital to Analog Converter"],
        "answer": "Digital to Analog",
        "correct": 0
    },
    {
         id:9,
        "question": "What is the main advantage of using CMOS technology?",
        "options": ["Low power consumption", "High speed", "High noise immunity", "Low cost"],
        "answer": "Low power consumption",
        "correct": 0
    },
    {
         id:10,
        "question": "What is a register?",
        "options": ["A small amount of storage in a processor", "A type of flip-flop", "A combinational circuit", "An analog component"],
        "answer": "A small amount of storage in a processor",
        "correct": 0
    },
    { 
         id:11,
        "question": "What is the function of a demultiplexer?",
        "options": ["To split a single input into multiple outputs", "To combine multiple inputs into one output", "To store data", "To amplify signals"],
        "answer": "To split a single input into multiple outputs",
        "correct": 0
    },
    {
         id:12,
        "question": "What is a sequential circuit?",
        "options": ["A circuit whose output depends on past inputs", "A circuit that has no feedback", "A circuit that processes analog signals", "A circuit with only one state"],
        "answer": "A circuit whose output depends on past inputs",
        "correct": 0
    },
    {
         id:13,
        "question": "What is the main function of an ALU?",
        "options": ["Arithmetic and Logic Unit", "Analog and Logic Unit", "Analog Logic Unit", "Arithmetic Logic Utility"],
        "answer": "Arithmetic and Logic Unit",
        "correct": 0
    },
    {
         id:14,
        "question": "What does FPGA stand for?",
        "options": ["Field Programmable Gate Array", "Field Programmable General Array", "Field Programmable Graph Array", "Field Programmable Gate Architecture"],
        "answer": "Field Programmable Gate Array",
        "correct": 0
    },
    {
         id:15,
        "question": "What is the significance of a clock signal?",
        "options": ["To synchronize operations in digital circuits", "To increase voltage", "To decrease power consumption", "To amplify signals"],
        "answer": "To synchronize operations in digital circuits",
        "correct": 0
    },
    {
         id:16,
        "question": "What are Karnaugh maps used for?",
        "options": ["To simplify Boolean expressions", "To design circuits", "To analyze signals", "To measure voltage"],
        "answer": "To simplify Boolean expressions",
        "correct": 0
    },
    {
         id:17,
        "question": "What is the primary purpose of a shift register?",
        "options": ["To store multiple bits of data", "To convert parallel data to serial data", "To filter signals", "To amplify signals"],
        "answer": "To convert parallel data to serial data",
        "correct": 1
    },
    {
         id:18,
        "question": "What is the difference between a latch and a flip-flop?",
        "options": ["Latch is level-triggered; flip-flop is edge-triggered", "Latch is edge-triggered; flip-flop is level-triggered", "Both are the same", "Both are combinational circuits"],
        "answer": "Latch is level-triggered; flip-flop is edge-triggered",
        "correct": 0
    },
    {
         id:19,
        "question": "What is the minimum number of flip-flops needed to build a counter that counts from 0 to 15?",
        "options": ["4", "3", "2", "5"],
        "answer": "4",
        "correct": 0
    },
    {
         id:20,
        "question": "What is the purpose of a logic gate?",
        "options": ["To perform a specific logical function", "To store data", "To amplify signals", "To convert analog signals to digital"],
        "answer": "To perform a specific logical function",
        "correct": 0
    },
    {
         id:21,
        "question": "What are the two types of digital logic levels?",
        "options": ["High and Low", "On and Off", "1 and 0", "Both High/Low and On/Off"],
        "answer": "Both High/Low and On/Off",
        "correct": 3
    },
    {
         id:22,
        "question": "What is an asynchronous counter?",
        "options": ["A counter that does not require a clock signal", "A counter that counts without synchronization", "A counter that counts at a fixed rate", "A counter that counts based on input signals"],
        "answer": "A counter that counts without synchronization",
        "correct": 1
    },
    {
         id:23,
        "question": "What is a synchronous counter?",
        "options": ["A counter that counts based on input signals", "A counter that counts without synchronization", "A counter that does not require a clock signal", "A counter that counts at a fixed rate"],
        "answer": "A counter that counts at a fixed rate",
        "correct": 3
    },
    {
         id:24,
        "question": "What is the primary use of an ADC?",
        "options": ["To convert analog signals to digital", "To convert digital signals to analog", "To amplify signals", "To store data"],
        "answer": "To convert analog signals to digital",
        "correct": 0
    },
    {
         id:25,
        "question": "What is the primary use of a DAC?",
        "options": ["To convert digital signals to analog", "To convert analog signals to digital", "To amplify signals", "To store data"],
        "answer": "To convert digital signals to analog",
        "correct": 0
    },
    {
         id:26,
        "question": "What is the main characteristic of a CMOS inverter?",
        "options": ["Low power consumption", "High speed", "High noise immunity", "Both A and C"],
        "answer": "Both A and C",
        "correct": 3
    },
    {
         id:27,
        "question": "What is the purpose of an oscillator?",
        "options": ["To generate clock signals", "To amplify signals", "To store data", "To filter signals"],
        "answer": "To generate clock signals",
        "correct": 0
    }
];
export default questions;