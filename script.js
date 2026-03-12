const questionsData = [
    {
        q: "He is the prince of Denmark; thoughtful, conflicted, struggles with revenge and morality:",
        options: ["Claudius", "Laertes", "Hamlet", "Polonius"],
        ans: 2
    },
    {
        q: "He is Gertrude's new husband and King of Denmark; ambitious and deceitful, kills his brother to take the throne:",
        options: ["Hamlet", "Claudius", "Fortinbras", "Horatio"],
        ans: 1
    },
    {
        q: "Queen of Denmark and Hamlet's mother; she marries Claudius quickly after her husband's death:",
        options: ["Ophelia", "Beatrice", "Gertrude", "Desdemona"],
        ans: 2
    },
    {
        q: "She is Hamlet's love interest; gentle and obedient, descends into madness:",
        options: ["Gertrude", "Ophelia", "Cordelia", "Portia"],
        ans: 1
    },
    {
        q: "He is King's advisor and father of Ophelia and Laertes; meddles and spies:",
        options: ["Polonius", "Claudius", "Horatio", "Rosencrantz"],
        ans: 0
    },
    {
        q: "He is the son of Polonius; seeks revenge for his father and sister, he duels Hamlet:",
        options: ["Fortinbras", "Horatio", "Laertes", "Guildenstern"],
        ans: 2
    },
    {
        q: "Hamlet's loyal friend; trustworthy, survives to tell the story:",
        options: ["Laertes", "Horatio", "Polonius", "Claudius"],
        ans: 1
    },
    {
        q: "He is the Prince of Norway; he becomes king after the tragedy:",
        options: ["Hamlet", "Fortinbras", "Claudius", "Laertes"],
        ans: 1
    },
    {
        q: "He reveals the truth about his murder and sparks Hamlet's quest for revenge:",
        options: ["Polonius", "The Ghost of King Hamlet", "Claudius", "Horatio"],
        ans: 1
    },
    {
        q: "The Hamlet is set in:",
        options: ["England", "Norway", "Italy", "Denmark"],
        ans: 3
    },
    {
        q: "A theme in Hamlet where he seeks to avenge his father while questioning morality:",
        options: ["Love and Betrayal", "Revenge and Justice", "Greed and Power", "War and Peace"],
        ans: 1
    },
    {
        q: "A theme in Hamlet where he pretends madness and Ophelia's breakdown reflect the impact of loss and sorrow:",
        options: ["Madness and Grief", "Pride and Ambition", "Duty and Honor", "Fate and Destiny"],
        ans: 0
    },
    {
        q: "A conflict in which Hamlet seeks revenge against Claudius for murdering his father:",
        options: ["Character Vs. Society", "Character Vs. Nature", "Character Vs. Character", "Character Vs. Self"],
        ans: 2
    },
    {
        q: "What point of view is used in the drama Hamlet?",
        options: ["First Person", "Third Person Limited", "Dramatic Point of View", "Omniscient Point of View"],
        ans: 2
    },
    {
        q: "What did Hamlet do to caught Claudius about his crime?",
        options: ["He wrote a letter", "He plotted a play of a murder scene", "He challenged him to a duel", "He told the Queen"],
        ans: 1
    },
    {
        q: "This is an Ancient Indian Epic featuring Gods and warriors:",
        options: ["Ramayana", "Mahabharata", "Vedas", "Upanishads"],
        ans: 1
    },
    {
        q: "Who wrote the Indian Epic Mahabharata?",
        options: ["Valmiki", "Kalidasa", "Vyasa", "Krishna"],
        ans: 2
    },
    {
        q: "Eldest Pandava; wise, just, and devoted to Dharma:",
        options: ["Bhima", "Arjuna", "Yudhishtira", "Nakula"],
        ans: 2
    },
    {
        q: "Second Pandava; extremely strong and courageous, loyal to his family:",
        options: ["Bhima", "Arjuna", "Sahadeva", "Yudhishtira"],
        ans: 0
    },
    {
        q: "Third Pandava; skilled archer; guided by Krishna in duty and strategy:",
        options: ["Nakula", "Bhima", "Sahadeva", "Arjuna"],
        ans: 3
    },
    {
        q: "Fourth Pandava; supports his brothers with wisdom:",
        options: ["Nakula", "Sahadeva", "Yudhishtira", "Arjuna"],
        ans: 0
    },
    {
        q: "Youngest Pandava; thoughtful and helps in decision-making:",
        options: ["Bhima", "Sahadeva", "Nakula", "Yudhishtira"],
        ans: 1
    },
    {
        q: "Wife of all Pandavas; her humiliation sparks conflict and drives the story towards war:",
        options: ["Kunti", "Gandhari", "Draupadi", "Satyavati"],
        ans: 2
    },
    {
        q: "Leader of the Kauravas; ambitious, envious, opposes the Pandavas for the throne:",
        options: ["Karna", "Duryodhana", "Shakuni", "Bhishma"],
        ans: 1
    },
    {
        q: "Warrior allied with the Kauravas; brave but meets a tragic end in battle:",
        options: ["Bhishma", "Drona", "Karna", "Shakuni"],
        ans: 2
    },
    {
        q: "Young Pandava warrior; dies in the Kurukshetra war:",
        options: ["Abhimanyu", "Ghatotkacha", "Iravan", "Babruvahana"],
        ans: 0
    },
    {
        q: "Divine guide; teaches duty, righteousness, and devotion to the Pandavas:",
        options: ["Shiva", "Brahma", "Krishna", "Vishnu"],
        ans: 2
    },
    {
        q: "Duryodhana's uncle; cheats the Pandavas in the dice game:",
        options: ["Shakuni", "Bhishma", "Drona", "Karna"],
        ans: 0
    },
    {
        q: "Father of Bhisma, and the King of Hastinapura:",
        options: ["King Pandu", "King Dhritarashtra", "King Shantanu", "King Bharata"],
        ans: 2
    },
    {
        q: "A goddess of river who killed her sons with King Shantanu:",
        options: ["Saraswati", "Ganga", "Yamuna", "Lakshmi"],
        ans: 1
    },
    {
        q: "A great warrior, and the only living son of Shantanu and Ganga:",
        options: ["Bhishma", "Chitrangada", "Vichitravirya", "Pandu"],
        ans: 0
    },
    {
        q: "The Mahabharata is set around the kingdom of:",
        options: ["Ayodhya", "Hastinapura", "Indraprastha", "Mathura"],
        ans: 1
    },
    {
        q: "A theme in Mahabharata where the characters struggle to follow moral duty, as seen in Arjuna's dilemma and Yudhishtira's choices:",
        options: ["Power and Greed", "Duty and Righteousness", "Love and Sacrifice", "Fate and Luck"],
        ans: 1
    },
    {
        q: "A theme in Mahabharata where Duryodhana's greed and Shakuni's deceit spark conflict that destroys families and kingdoms:",
        options: ["Wisdom and Peace", "Pride and Ambition", "Humility and Service", "Truth and Non-violence"],
        ans: 1
    },
    {
        q: "What is the Point of view used in the Epic play Mahabharata?",
        options: ["First Person", "Second Person", "Third Person Limited", "Third Person Omniscient POV"],
        ans: 3
    }
];

let randomizedQuestions = [];
let index = 0;
let score = 0;

// 2. The Shuffle Function (Fisher-Yates Algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 3. Audio Controller
const playSound = (id) => {
    const audio = document.getElementById(id);
    if(audio) {
        audio.currentTime = 0;
        audio.play().catch(e => console.log("Interaction required for audio"));
    }
};

// 4. Initialize Quiz
function initQuiz() {
    randomizedQuestions = shuffleArray([...questionsData]); // Copy and Shuffle
    index = 0;
    score = 0;
    loadQuestion();
}

function loadQuestion() {
    const current = randomizedQuestions[index];
    const quizCard = document.querySelector('.quiz-card');
    
    // Capture the text of the correct answer BEFORE shuffling the options
    const correctAnswerText = current.options[current.ans];
    
    // Shuffle the options for THIS specific question
    const shuffledOptions = shuffleArray([...current.options]);
    
    // Find where the correct answer ended up after the shuffle
    const newCorrectIndex = shuffledOptions.indexOf(correctAnswerText);

    // Smooth transition
    quizCard.style.opacity = "0";
    
    setTimeout(() => {
        document.getElementById('question').innerText = current.q;
        document.getElementById('q-num').innerText = index + 1;
        
        const container = document.getElementById('options');
        container.innerHTML = '';
        
        shuffledOptions.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerText = opt;
            
            // We pass the newCorrectIndex to the handler
            btn.onclick = () => handleSelection(i, newCorrectIndex, btn);
            container.appendChild(btn);
        });
        
        quizCard.style.opacity = "1";
    }, 150);
}

function handleSelection(userChoice, correctIdx, btn) {
    const allBtns = document.querySelectorAll('.option-btn');
    
    // Disable all buttons immediately to prevent double-clicking
    allBtns.forEach(b => b.style.pointerEvents = 'none');

    if (userChoice === correctIdx) {
        btn.classList.add('is-correct');
        playSound('snd-correct');
        score++;
    } else {
        btn.classList.add('is-wrong');
        document.querySelector('.quiz-card').classList.add('shake');
        playSound('snd-wrong');
        
        // Show the user which one was actually correct
        allBtns[correctIdx].classList.add('is-correct');
        
        setTimeout(() => document.querySelector('.quiz-card').classList.remove('shake'), 500);
    }

    // Move to next question after 1.2 seconds
    setTimeout(() => {
        index++;
        if (index < randomizedQuestions.length) {
            loadQuestion();
        } else {
            finishQuiz();
        }
    }, 1200);
}

function finishQuiz() {
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('score-val').innerText = `${score}/${randomizedQuestions.length}`;

    playSound('snd-tada'); 
    confetti({
        particleCount: 200,
        spread: 90,
        origin: { y: 0.7 },
        colors: ['#7000ff', '#00d4ff', '#00ff88']
    });
}

// Start the sequence

initQuiz();
