const question = [
    {
        id:1,
      "question": "A train 120 meters long passes a telegraph post in 10 seconds. What is the speed of the train?",
      "options": ["12 m/s", "15 m/s", "20 m/s", "25 m/s"],
      "answer": "12 m/s",
      "correct": 0
    },
    {
        id:2,
      "question": "Two trains are moving in opposite directions at 60 km/h and 90 km/h respectively. How long will it take for the trains to cross each other completely if their lengths are 120 m and 150 m?",
      "options": ["5 seconds", "6 seconds", "7 seconds", "8 seconds"],
      "answer": "6 seconds",
      "correct": 1
    },
    {
        id:3,
      "question": "A car travels 180 km in 4 hours. What is the speed of the car?",
      "options": ["45 km/h", "50 km/h", "55 km/h", "60 km/h"],
      "answer": "45 km/h",
      "correct": 0
    },
    {
        id:4,
      "question": "A cyclist covers a distance of 72 km in 4 hours. What is his speed in km/h?",
      "options": ["16 km/h", "18 km/h", "20 km/h", "24 km/h"],
      "answer": "18 km/h",
      "correct": 1
    },
    {
        id:5,
      "question": "A train moving at 72 km/h crosses a bridge in 30 seconds. If the length of the train is 150 meters, what is the length of the bridge?",
      "options": ["450 meters", "500 meters", "600 meters", "650 meters"],
      "answer": "450 meters",
      "correct": 0
    },
    {
        id:6,
      "question": "Two trains of equal length are running parallel to each other at speeds of 50 km/h and 70 km/h respectively. If they cross each other in 12 seconds, what is the length of each train?",
      "options": ["100 meters", "120 meters", "140 meters", "150 meters"],
      "answer": "120 meters",
      "correct": 1
    },
    {
        id:7,
      "question": "A boat takes 2 hours to travel 8 km downstream and 4 hours to travel the same distance upstream. What is the speed of the stream?",
      "options": ["1 km/h", "2 km/h", "3 km/h", "4 km/h"],
      "answer": "1 km/h",
      "correct": 0
    },
    {
        id:8,
      "question": "A man can row downstream at 6 km/h and upstream at 4 km/h. How far can he row downstream in 3 hours?",
      "options": ["12 km", "15 km", "18 km", "24 km"],
      "answer": "18 km",
      "correct": 2
    },
    {
        id:9,
      "question": "A train passes a platform 150 meters long in 15 seconds and a man standing on the platform in 10 seconds. What is the length of the train?",
      "options": ["100 meters", "120 meters", "130 meters", "150 meters"],
      "answer": "150 meters",
      "correct": 3
    },
    {
        id:10,
      "question": "A person covers a certain distance at a speed of 45 km/h and returns at 30 km/h. What is his average speed for the whole journey?",
      "options": ["36 km/h", "37.5 km/h", "40 km/h", "42 km/h"],
      "answer": "36 km/h",
      "correct": 0
    },
    {
        id:11,
      "question": "A train 120 meters long is running at a speed of 54 km/h. How much time will it take to pass a platform 180 meters long?",
      "options": ["15 seconds", "18 seconds", "20 seconds", "22 seconds"],
      "answer": "20 seconds",
      "correct": 2
    },

    {
        id:12,
      "question": "Two trains 200 meters and 150 meters long are moving in the same direction at 40 km/h and 60 km/h respectively. How long will it take for the faster train to completely pass the slower one?",
      "options": ["25 seconds", "27 seconds", "30 seconds", "32 seconds"],
      "answer": "30 seconds",
      "correct": 2
    },
    {
        id:13,
      "question": "A car travels a distance of 100 km in 2 hours and 30 minutes. What is its average speed?",
      "options": ["35 km/h", "38 km/h", "40 km/h", "45 km/h"],
      "answer": "40 km/h",
      "correct": 2
    },
    {
        id:14,
      "question": "A train moving at 60 km/h takes 1 minute to pass a man standing on the platform. What is the length of the train?",
      "options": ["500 meters", "600 meters", "700 meters", "800 meters"],
      "answer": "1000 meters",
      "correct": 3
    },
    {
        id:15,
      "question": "A boat can travel with a speed of 13 km/h in still water. If the speed of the stream is 4 km/h, what is the time taken by the boat to go 68 km downstream?",
      "options": ["3 hours", "4 hours", "5 hours", "6 hours"],
      "answer": "4 hours",
      "correct": 1
    },
    {
        id:16,
      "question": "A person takes 4 hours to row a distance of 24 km downstream and 6 hours to row the same distance upstream. What is the speed of the boat in still water?",
      "options": ["4 km/h", "5 km/h", "6 km/h", "7 km/h"],
      "answer": "5 km/h",
      "correct": 1
    },
    {
        id:17,
      "question": "A cyclist covers a distance of 15 km in 45 minutes. What is his speed in km/h?",
      "options": ["18 km/h", "20 km/h", "22 km/h", "24 km/h"],
      "answer": "20 km/h",
      "correct": 1
    },
    {
        id:18,
      "question": "A train crosses another train moving in the opposite direction in 12 seconds. If their lengths are 200 meters and 300 meters respectively and the speed of the first train is 60 km/h, what is the speed of the second train?",
      "options": ["70 km/h", "80 km/h", "90 km/h", "100 km/h"],
      "answer": "80 km/h",
      "correct": 1
    },
    {
        id:19,
      "question": "A man can row 20 km downstream in 2 hours and 12 km upstream in 3 hours. What is the speed of the stream?",
      "options": ["2 km/h", "3 km/h", "4 km/h", "5 km/h"],
      "answer": "2 km/h",
      "correct": 0
    },
    {
        id:20,
      "question": "A train passes a man standing on a platform in 7 seconds and passes the platform in 20 seconds. If the platform is 130 meters long, what is the length of the train?",
      "options": ["70 meters", "90 meters", "100 meters", "110 meters"],
      "answer": "90 meters",
      "correct": 1
    },
    {
        id:21,
      "question": "Two trains 120 meters and 150 meters long are moving in the same direction at 45 km/h and 60 km/h respectively. How long will it take for the faster train to completely pass the slower one?",
      "options": ["18 seconds", "20 seconds", "22 seconds", "25 seconds"],
      "answer": "20 seconds",
      "correct": 1
    },
    {
        id:22,
      "question": "A boat covers 40 km upstream and 60 km downstream in 12 hours. If the speed of the boat in still water is 10 km/h, what is the speed of the stream?",
      "options": ["2 km/h", "3 km/h", "4 km/h", "5 km/h"],
      "answer": "2 km/h",
      "correct": 0
    },
    {
        id:23,
      "question": "A car covers 150 km in 3 hours 20 minutes. What is its average speed?",
      "options": ["40 km/h", "45 km/h", "50 km/h", "55 km/h"],
      "answer": "45 km/h",
      "correct": 1
    },
    {
        id:24,
      "question": "Two trains running in opposite directions cross each other in 15 seconds. The length of the first train is 100 meters and the second train is 150 meters. If the first train runs at a speed of 36 km/h, what is the speed of the second train?",
      "options": ["54 km/h", "60 km/h", "72 km/h", "84 km/h"],
      "answer": "60 km/h",
      "correct": 1
    },
    {
        id:25,
      "question": "A train 110 meters long is running at a speed of 54 km/h. How long will it take to pass a man standing on the platform?",
      "options": ["5 seconds", "6 seconds", "7 seconds", "8 seconds"],
      "answer": "7 seconds",
      "correct": 2
    },
    {
        id:26,
      "question": "A boat can cover 45 km downstream in 3 hours and 30 km upstream in 5 hours. What is the speed of the boat in still water?",
      "options": ["8 km/h", "9 km/h", "10 km/h", "11 km/h"],
      "answer": "9 km/h",
      "correct": 1
    },
    {
        id:27,
      "question": "A car covers 200 km in 4 hours and 300 km in 5 hours. What is its average speed?",
      "options": ["50 km/h", "52 km/h", "55 km/h", "60 km/h"],
      "answer": "55 km/h",
      "correct": 2
    },
    {
        id:28,
      "question": "Two boats are moving in opposite directions. The speed of the first boat is 12 km/h and the speed of the second boat is 8 km/h. How long will it take for them to be 50 km apart?",
      "options": ["2 hours", "2.5 hours", "3 hours", "3.5 hours"],
      "answer": "2.5 hours",
      "correct": 1
    },
  {
    id:29,
    "question": "If the present age of A is twice that of B and the difference between their ages is 12 years, what is the age of B?",
    "options": ["12 years", "24 years", "6 years", "8 years"],
    "answer": "12 years",
    "correct": 0
  },
  {
    id:30,
    "question": "In 5 years, the age of John will be three times the age of his son. If the sum of their current ages is 40, what is John's present age?",
    "options": ["30 years", "25 years", "20 years", "35 years"],
    "answer": "30 years",
    "correct": 0
  },
]
export default questions;