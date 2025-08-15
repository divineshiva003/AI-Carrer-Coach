const questions = [
    {
        id:1,
        "question": "What is Ohm's Law?",
        "options": ["V = I × R", "V = I / R", "V = R / I", "I = R × V"],
        "answer": "V = I × R",
        "correct": 0
    },
    {
        id:2,
        "question": "What is the unit of capacitance?",
        "options": ["Farad", "Ohm", "Henry", "Volt"],
        "answer": "Farad",
        "correct": 0
    },
    {
        id:3,
        "question": "What is the function of a diode?",
        "options": ["To amplify signals", "To allow current to flow in one direction", "To store energy", "To resist current"],
        "answer": "To allow current to flow in one direction",
        "correct": 1
    },
    {
        id:4,
        "question": "What is a resistor used for?",
        "options": ["To store charge", "To convert AC to DC", "To limit current", "To increase voltage"],
        "answer": "To limit current",
        "correct": 2
    },
    {
        id:5,
        "question": "What does the term 'AC' stand for?",
        "options": ["Alternating Current", "Alternative Current", "Analog Current", "Active Current"],
        "answer": "Alternating Current",
        "correct": 0
    },
    {
        id:6,
        "question": "What is the purpose of a transformer?",
        "options": ["To increase or decrease voltage", "To convert AC to DC", "To store energy", "To regulate current"],
        "answer": "To increase or decrease voltage",
        "correct": 0
    },
    {
        id:7,
        "question": "What is the primary function of a capacitor?",
        "options": ["To resist current", "To store electrical energy", "To allow current flow", "To generate heat"],
        "answer": "To store electrical energy",
        "correct": 1
    },
    {
        id:8,
        "question": "What is the unit of frequency?",
        "options": ["Hertz", "Ohm", "Farad", "Ampere"],
        "answer": "Hertz",
        "correct": 0
    },
    {
        id:9,
        "question": "What type of device is a transistor?",
        "options": ["Active device", "Passive device", "Resistive device", "Inductive device"],
        "answer": "Active device",
        "correct": 0
    },
    {
        id:10,
        "question": "Which of the following is a semiconductor?",
        "options": ["Silicon", "Copper", "Aluminum", "Gold"],
        "answer": "Silicon",
        "correct": 0
    },
    {
        id:11,
        "question": "What is the main function of an inductor?",
        "options": ["To store electrical energy", "To resist current", "To allow current flow", "To store magnetic energy"],
        "answer": "To store magnetic energy",
        "correct": 3
    },
    {
        id:12,
        "question": "What does LED stand for?",
        "options": ["Light Emitting Diode", "Light Energy Diode", "Low Emission Diode", "Light Electronic Diode"],
        "answer": "Light Emitting Diode",
        "correct": 0
    },
    {
        id:13,
        "question": "What is a breadboard used for?",
        "options": ["To build electronic circuits", "To test voltage", "To measure current", "To store components"],
        "answer": "To build electronic circuits",
        "correct": 0
    },
    {
        id:14,
        "question": "What does a multimeter measure?",
        "options": ["Voltage only", "Current only", "Resistance only", "All of the above"],
        "answer": "All of the above",
        "correct": 3
    },
    {
        id:15,
        "question": "What is the function of a fuse?",
        "options": ["To regulate voltage", "To protect circuits from overload", "To amplify signals", "To store energy"],
        "answer": "To protect circuits from overload",
        "correct": 1
    },
    {
        id:16,
        "question": "What does PWM stand for?",
        "options": ["Pulse Width Modulation", "Pulse Wave Modulation", "Pulse Width Measurement", "Pulse Wave Measurement"],
        "answer": "Pulse Width Modulation",
        "correct": 0
    },
    {
        id:17,
        "question": "What is the primary use of an op-amp?",
        "options": ["Amplification", "Filtering", "Oscillation", "None of the above"],
        "answer": "Amplification",
        "correct": 0
    },
    {
        id:18,
        "question": "What is a rectifier?",
        "options": ["A device that converts AC to DC", "A device that converts DC to AC", "A device that stores energy", "A device that measures voltage"],
        "answer": "A device that converts AC to DC",
        "correct": 0
    },
    {
        id:19,
        "question": "What is the function of a relay?",
        "options": ["To store energy", "To amplify signals", "To control a high-power circuit with a low-power signal", "To resist current"],
        "answer": "To control a high-power circuit with a low-power signal",
        "correct": 2
    },
    {
        id:20,
        "question": "What does a capacitor block?",
        "options": ["AC", "DC", "Both AC and DC", "Neither AC nor DC"],
        "answer": "DC",
        "correct": 1
    },
    {
        id:21,
        "question": "What is the purpose of a voltage divider?",
        "options": ["To divide voltage levels", "To increase voltage", "To decrease current", "To store energy"],
        "answer": "To divide voltage levels",
        "correct": 0
    },
    {
         id:22,
        "question": "What is the main characteristic of an ideal voltage source?",
        "options": ["Constant voltage regardless of current", "Constant current regardless of voltage", "Variable voltage with constant current", "None of the above"],
        "answer": "Constant voltage regardless of current",
        "correct": 0
    },
    {
         id:23,
        "question": "What is the role of ground in an electrical circuit?",
        "options": ["To complete the circuit", "To increase voltage", "To reduce current", "To store energy"],
        "answer": "To complete the circuit",
        "correct": 0
    },
    {
         id:24,
        "question": "What is the primary function of a filter circuit?",
        "options": ["To increase voltage", "To remove unwanted frequencies", "To store energy", "To amplify signals"],
        "answer": "To remove unwanted frequencies",
        "correct": 1
    },
    {
         id:25,
        "question": "What is the function of a signal amplifier?",
        "options": ["To increase voltage", "To increase current", "To increase power", "All of the above"],
        "answer": "All of the above",
        "correct": 3
    },
    {
         id:26,
        "question": "What is the principle of operation for a solar cell?",
        "options": ["Photovoltaic effect", "Thermal effect", "Chemical effect", "Mechanical effect"],
        "answer": "Photovoltaic effect",
        "correct": 0
    },
    {
         id:27,
        "question": "What does ESR stand for in capacitors?",
        "options": ["Equivalent Series Resistance", "Effective Series Resistance", "Electrical Series Resistance", "Electromagnetic Series Resistance"],
        "answer": "Equivalent Series Resistance",
        "correct": 0
    }
]
export default questions;