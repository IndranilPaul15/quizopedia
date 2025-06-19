const questions = {
  general: {
    easy: [
      {
        question: "What is the capital of India?",
        options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
        answer: "New Delhi",
      },
      {
        question: "How many continents are there?",
        options: ["5", "6", "7", "8"],
        answer: "7",
      },
      {
        question: "What is the national currency of India?",
        options: ["Dollar", "Euro", "Rupee", "Dinar"],
        answer: "Rupee",
      },
      {
        question: "What color is the Indian flag's middle band?",
        options: ["Orange", "Green", "White", "Blue"],
        answer: "White",
      },
      {
        question: "Which side of the road do Indians drive on?",
        options: ["Left", "Right", "Both", "None"],
        answer: "Left",
      },
    ],
    medium: [
      {
        question: "Who wrote the Indian National Anthem?",
        options: ["Rabindranath Tagore", "Bankim Chandra", "Gandhi", "Nehru"],
        answer: "Rabindranath Tagore",
      },
      {
        question: "In which year did India gain independence?",
        options: ["1945", "1946", "1947", "1950"],
        answer: "1947",
      },
      {
        question: "What is the longest river in India?",
        options: ["Ganga", "Yamuna", "Brahmaputra", "Godavari"],
        answer: "Ganga",
      },
      {
        question: "Which Indian city is known as the 'City of Joy'?",
        options: ["Kolkata", "Mumbai", "Chennai", "Delhi"],
        answer: "Kolkata",
      },
      {
        question: "Which Indian state has the most number of districts?",
        options: ["Uttar Pradesh", "Maharashtra", "Rajasthan", "Tamil Nadu"],
        answer: "Uttar Pradesh",
      },
    ],
    hard: [
      {
        question: "Which article of the Indian Constitution deals with fundamental duties?",
        options: ["Article 32", "Article 51A", "Article 21", "Article 370"],
        answer: "Article 51A",
      },
      {
        question: "Who was the first President of India?",
        options: ["Rajendra Prasad", "Sarvepalli Radhakrishnan", "APJ Abdul Kalam", "Zakir Husain"],
        answer: "Rajendra Prasad",
      },
      {
        question: "Where is the headquarters of the ISRO?",
        options: ["Hyderabad", "New Delhi", "Bengaluru", "Mumbai"],
        answer: "Bengaluru",
      },
      {
        question: "Which Indian state has the highest literacy rate?",
        options: ["Kerala", "Goa", "Punjab", "Maharashtra"],
        answer: "Kerala",
      },
      {
        question: "How many Lok Sabha seats are there in total?",
        options: ["512", "545", "543", "500"],
        answer: "543",
      },
    ]
  },

  science: {
    easy: [
      {
        question: "What planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Saturn"],
        answer: "Mars",
      },
      {
        question: "What is H2O?",
        options: ["Oxygen", "Hydrogen", "Water", "Carbon"],
        answer: "Water",
      },
      {
        question: "How many legs does an insect have?",
        options: ["4", "6", "8", "10"],
        answer: "6",
      },
      {
        question: "Which gas do humans need to breathe?",
        options: ["Carbon", "Nitrogen", "Oxygen", "Helium"],
        answer: "Oxygen",
      },
      {
        question: "What is the freezing point of water?",
        options: ["0°C", "10°C", "100°C", "50°C"],
        answer: "0°C",
      },
    ],
    medium: [
      {
        question: "What gas do plants absorb?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
        answer: "Carbon Dioxide",
      },
      {
        question: "What is the speed of light?",
        options: ["3x10^8 m/s", "3x10^6 m/s", "3x10^5 km/s", "1x10^8 m/s"],
        answer: "3x10^8 m/s",
      },
      {
        question: "What is the hardest substance found in nature?",
        options: ["Diamond", "Iron", "Steel", "Graphite"],
        answer: "Diamond",
      },
      {
        question: "Which part of the plant conducts photosynthesis?",
        options: ["Root", "Stem", "Leaf", "Flower"],
        answer: "Leaf",
      },
      {
        question: "Which part of the brain controls thinking?",
        options: ["Cerebellum", "Medulla", "Cerebrum", "Brainstem"],
        answer: "Cerebrum",
      },
    ],
    hard: [
      {
        question: "What is the chemical symbol for gold?",
        options: ["Ag", "Au", "Gd", "Go"],
        answer: "Au",
      },
      {
        question: "Newton's second law is?",
        options: ["F=ma", "E=mc^2", "a=v/t", "F=mv"],
        answer: "F=ma",
      },
      {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi body"],
        answer: "Mitochondria",
      },
      {
        question: "Which vitamin is produced when skin is exposed to sunlight?",
        options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        answer: "Vitamin D",
      },
      {
        question: "What is the SI unit of force?",
        options: ["Joule", "Pascal", "Newton", "Watt"],
        answer: "Newton",
      },
    ]
  }
  ,

  sports: {
    easy: [
      {
        question: "How many players are on a football team?",
        options: ["9", "10", "11", "12"],
        answer: "11",
      },
      {
        question: "Which sport is associated with Wimbledon?",
        options: ["Cricket", "Tennis", "Football", "Golf"],
        answer: "Tennis",
      },
      {
        question: "How many rings are there in the Olympic logo?",
        options: ["4", "5", "6", "7"],
        answer: "5",
      },
      {
        question: "Which country is famous for cricket?",
        options: ["USA", "Brazil", "India", "Japan"],
        answer: "India",
      },
      {
        question: "Which sport uses a bat and ball?",
        options: ["Hockey", "Football", "Basketball", "Cricket"],
        answer: "Cricket",
      },
    ],
    medium: [
      {
        question: "Who is known as the 'God of Cricket'?",
        options: ["Virat Kohli", "MS Dhoni", "Ricky Ponting", "Sachin Tendulkar"],
        answer: "Sachin Tendulkar",
      },
      {
        question: "How long is an Olympic swimming pool?",
        options: ["25m", "50m", "100m", "75m"],
        answer: "50m",
      },
      {
        question: "What is the maximum number of sets in men's Grand Slam tennis?",
        options: ["3", "4", "5", "6"],
        answer: "5",
      },
      {
        question: "Which country hosted the FIFA World Cup 2022?",
        options: ["Qatar", "Russia", "USA", "France"],
        answer: "Qatar",
      },
      {
        question: "In which sport would you perform a slam dunk?",
        options: ["Tennis", "Basketball", "Badminton", "Football"],
        answer: "Basketball",
      },
    ],
    hard: [
      {
        question: "Which country won the first FIFA World Cup?",
        options: ["Brazil", "Germany", "Uruguay", "Argentina"],
        answer: "Uruguay",
      },
      {
        question: "Which Indian won the first Olympic individual gold medal?",
        options: ["Abhinav Bindra", "Milkha Singh", "Leander Paes", "Vijender Singh"],
        answer: "Abhinav Bindra",
      },
      {
        question: "What year did Roger Federer win his first Wimbledon title?",
        options: ["2001", "2003", "2005", "2007"],
        answer: "2003",
      },
      {
        question: "How many times has India won the Cricket World Cup (as of 2024)?",
        options: ["1", "2", "3", "4"],
        answer: "2",
      },
      {
        question: "Which country has won the most Olympic gold medals in history?",
        options: ["Russia", "China", "Germany", "USA"],
        answer: "USA",
      },
    ]
  }
  ,

  movies: {
    easy: [
      {
        question: "Who plays Iron Man in the Marvel movies?",
        options: ["Chris Hemsworth", "Chris Evans", "Robert Downey Jr.", "Mark Ruffalo"],
        answer: "Robert Downey Jr.",
      },
      {
        question: "Which movie features the song 'Naatu Naatu'?",
        options: ["RRR", "Pushpa", "Bahubali", "Jawan"],
        answer: "RRR",
      },
      {
        question: "Which superhero is known as the 'friendly neighborhood'?",
        options: ["Iron Man", "Hulk", "Captain America", "Spider-Man"],
        answer: "Spider-Man",
      },
      {
        question: "Who is known as the King of Bollywood?",
        options: ["Salman Khan", "Aamir Khan", "Shah Rukh Khan", "Ranveer Singh"],
        answer: "Shah Rukh Khan",
      },
      {
        question: "Which Marvel character wields a hammer?",
        options: ["Hulk", "Thor", "Loki", "Ant-Man"],
        answer: "Thor",
      },
    ],
    medium: [
      {
        question: "In which movie did Spider-Man first appear in the MCU?",
        options: ["Spider-Man: Homecoming", "Avengers: Age of Ultron", "Captain America: Civil War", "Iron Man 3"],
        answer: "Captain America: Civil War",
      },
      {
        question: "Which 2023 movie stars Shah Rukh Khan as a vigilante soldier?",
        options: ["Pathaan", "Jawan", "Dunki", "Raees"],
        answer: "Jawan",
      },
      {
        question: "What is the name of the Marvel villain who wiped out half of all life?",
        options: ["Ultron", "Thanos", "Loki", "Kang"],
        answer: "Thanos",
      },
      {
        question: "Which movie won Best Original Song at the Oscars 2023?",
        options: ["Jawan", "Brahmastra", "RRR", "Pathaan"],
        answer: "RRR",
      },
      {
        question: "Who directed the Bollywood movie 'Brahmastra: Part One'?",
        options: ["Karan Johar", "Ayan Mukerji", "Rohit Shetty", "Zoya Akhtar"],
        answer: "Ayan Mukerji",
      },
    ],
    hard: [
      {
        question: "Which Marvel film first introduced the multiverse?",
        options: [
          "Avengers: Endgame",
          "Spider-Man: No Way Home",
          "Doctor Strange: Multiverse of Madness",
          "Ant-Man and the Wasp"
        ],
        answer: "Spider-Man: No Way Home",
      },
      {
        question: "Who played the role of Rani Mukerji’s husband in 'Mrs. Chatterjee vs Norway'?",
        options: ["Anirban Bhattacharya", "Pankaj Tripathi", "Rajkummar Rao", "Vicky Kaushal"],
        answer: "Anirban Bhattacharya",
      },
      {
        question: "Which 2022 Marvel series features Oscar Isaac as a split-personality hero?",
        options: ["Loki", "Moon Knight", "WandaVision", "Hawkeye"],
        answer: "Moon Knight",
      },
      {
        question: "What is the name of the AI voiced by Paul Bettany in the Iron Man series?",
        options: ["Ultron", "Jarvis", "Vision", "Edith"],
        answer: "Jarvis",
      },
      {
        question: "Who played the role of Bhairava in 'Kalki 2898 AD'?",
        options: ["Prabhas", "Yash", "Jr NTR", "Allu Arjun"],
        answer: "Prabhas",
      },
    ],
  }

};

export default questions;