const oscarData = {
  "ceremony": "Oscars 2026",
  "categories": [
    {
      "category": "Actor in a Supporting Role",
      "nominees": [
        {"name": "Benicio Del Toro", "film": "One Battle after Another"},
        {"name": "Jacob Elordi", "film": "Frankenstein"},
        {"name": "Delroy Lindo", "film": "Sinners"},
        {"name": "Sean Penn", "film": "One Battle after Another"},
        {"name": "Stellan Skarsgård", "film": "Sentimental Value"}
      ]
    },
    {
      "category": "Animated Feature Film",
      "nominees": [
        {"title": "Arco"},
        {"title": "Elio"},
        {"title": "KPop Demon Hunters"},
        {"title": "Little Amélie or the Character of Rain"},
        {"title": "Zootopia 2"}
      ]
    },
    {
      "category": "Animated Short Film",
      "nominees": [
        {"title": "Butterfly"},
        {"title": "Forevergreen"},
        {"title": "The Girl Who Cried Pearls"},
        {"title": "Retirement Plan"},
        {"title": "The Three Sisters"}
      ]
    },
    {
      "category": "Costume Design",
      "nominees": [
        {"film": "Avatar: Fire and Ash", "name": "Deborah L. Scott"},
        {"film": "Frankenstein", "name": "Kate Hawley"},
        {"film": "Hamnet", "name": "Malgosia Turzanska"},
        {"film": "Marty Supreme", "name": "Miyako Bellizzi"},
        {"film": "Sinners", "name": "Ruth E. Carter"}
      ]
    },
    {
      "category": "Original Screenplay",
      "nominees": [
        {"film": "Blue Moon", "writer": "Robert Kaplow"},
        {"film": "It Was Just an Accident", "writer": "Jafar Panahi"},
        {"film": "Marty Supreme", "writer": "Ronald Bronstein & Josh Safdie"},
        {"film": "Sentimental Value", "writer": "Eskil Vogt & Joachim Trier"},
        {"film": "Sinners", "writer": "Ryan Coogler"}
      ]
    },
    {
      "category": "Adapted Screenplay",
      "nominees": [
        {"film": "Bugonia", "writer": "Will Tracy"},
        {"film": "Frankenstein", "writer": "Guillermo del Toro"},
        {"film": "Hamnet", "writer": "Chloé Zhao & Maggie O'Farrell"},
        {"film": "One Battle after Another", "writer": "Paul Thomas Anderson"},
        {"film": "Train Dreams", "writer": "Clint Bentley & Greg Kwedar"}
      ]
    },
    {
      "category": "Makeup and Hairstyling",
      "nominees": [
        {"film": "Frankenstein"},
        {"film": "Kokuho"},
        {"film": "Sinners"},
        {"film": "The Smashing Machine"},
        {"film": "The Ugly Stepsister"}
      ]
    },
    {
      "category": "Film Editing",
      "nominees": [
        {"film": "F1"},
        {"film": "Marty Supreme"},
        {"film": "One Battle after Another"},
        {"film": "Sentimental Value"},
        {"film": "Sinners"}
      ]
    },
    {
      "category": "Actress in a Supporting Role",
      "nominees": [
        {"name": "Elle Fanning", "film": "Sentimental Value"},
        {"name": "Inga Ibsdotter Lilleaas", "film": "Sentimental Value"},
        {"name": "Amy Madigan", "film": "Weapons"},
        {"name": "Wunmi Mosaku", "film": "Sinners"},
        {"name": "Teyana Taylor", "film": "One Battle after Another"}
      ]
    },
    {
      "category": "Sound",
      "nominees": [
        {"film": "F1"},
        {"film": "Frankenstein"},
        {"film": "One Battle after Another"},
        {"film": "Sinners"},
        {"film": "Sirāt"}
      ]
    },
    {
      "category": "Original Song",
      "nominees": [
        {"song": "Dear Me", "film": "Diane Warren: Relentless"},
        {"song": "Golden", "film": "KPop Demon Hunters"},
        {"song": "I Lied To You", "film": "Sinners"},
        {"song": "Sweet Dreams Of Joy", "film": "Viva Verdi!"},
        {"song": "Train Dreams", "film": "Train Dreams"}
      ]
    },
    {
      "category": "Documentary Short Film",
      "nominees": [
        {"title": "All the Empty Rooms"},
        {"title": "Armed Only with a Camera: The Life and Death of Brent Renaud"},
        {"title": "Children No More: 'Were and Are Gone'"},
        {"title": "The Devil Is Busy"},
        {"title": "Perfectly a Strangeness"}
      ]
    },
    {
      "category": "Documentary Feature Film",
      "nominees": [
        {"title": "The Alabama Solution"},
        {"title": "Come See Me in the Good Light"},
        {"title": "Cutting through Rocks"},
        {"title": "Mr. Nobody against Putin"},
        {"title": "The Perfect Neighbor"}
      ]
    },
    {
      "category": "Production Design",
      "nominees": [
        {"film": "Frankenstein"},
        {"film": "Hamnet"},
        {"film": "Marty Supreme"},
        {"film": "One Battle after Another"},
        {"film": "Sinners"}
      ]
    },
    {
      "category": "Visual Effects",
      "nominees": [
        {"film": "Avatar: Fire and Ash"},
        {"film": "F1"},
        {"film": "Jurassic World Rebirth"},
        {"film": "The Lost Bus"},
        {"film": "Sinners"}
      ]
    },
    {
      "category": "International Feature Film",
      "nominees": [
        {"country": "Brazil", "film": "The Secret Agent"},
        {"country": "France", "film": "It Was Just an Accident"},
        {"country": "Norway", "film": "Sentimental Value"},
        {"country": "Spain", "film": "Sirāt"},
        {"country": "Tunisia", "film": "The Voice of Hind Rajab"}
      ]
    },
    {
      "category": "Live Action Short Film",
      "nominees": [
        {"title": "Butcher's Stain"},
        {"title": "A Friend of Dorothy"},
        {"title": "Jane Austen's Period Drama"},
        {"title": "The Singers"},
        {"title": "Two People Exchanging Saliva"}
      ]
    },
    {
      "category": "Cinematography",
      "nominees": [
        {"film": "Frankenstein"},
        {"film": "Marty Supreme"},
        {"film": "One Battle after Another"},
        {"film": "Sinners"},
        {"film": "Train Dreams"}
      ]
    },
    {
      "category": "Original Score",
      "nominees": [
        {"film": "Bugonia", "composer": "Jerskin Fendrix"},
        {"film": "Frankenstein", "composer": "Alexandre Desplat"},
        {"film": "Hamnet", "composer": "Max Richter"},
        {"film": "One Battle after Another", "composer": "Jonny Greenwood"},
        {"film": "Sinners", "composer": "Ludwig Göransson"}
      ]
    },
    {
      "category": "Actor in a Leading Role",
      "nominees": [
        {"name": "Timothée Chalamet", "film": "Marty Supreme"},
        {"name": "Leonardo DiCaprio", "film": "One Battle after Another"},
        {"name": "Ethan Hawke", "film": "Blue Moon"},
        {"name": "Michael B. Jordan", "film": "Sinners"},
        {"name": "Wagner Moura", "film": "The Secret Agent"}
      ]
    },
    {
      "category": "Directing",
      "nominees": [
        {"name": "Chloé Zhao", "film": "Hamnet"},
        {"name": "Josh Safdie", "film": "Marty Supreme"},
        {"name": "Paul Thomas Anderson", "film": "One Battle after Another"},
        {"name": "Joachim Trier", "film": "Sentimental Value"},
        {"name": "Ryan Coogler", "film": "Sinners"}
      ]
    },
    {
      "category": "Actress in a Leading Role",
      "nominees": [
        {"name": "Jessie Buckley", "film": "Hamnet"},
        {"name": "Rose Byrne", "film": "If I Had Legs I'd Kick You"},
        {"name": "Kate Hudson", "film": "Song Sung Blue"},
        {"name": "Renate Reinsve", "film": "Sentimental Value"},
        {"name": "Emma Stone", "film": "Bugonia"},
        {"name": "Karla Sofia Gascon", "film": "Emilia Perez"}
      ]
    },
    {
      "category": "Best Picture",
      "nominees": [
        {"film": "Bugonia"},
        {"film": "F1"},
        {"film": "Frankenstein"},
        {"film": "Hamnet"},
        {"film": "Marty Supreme"},
        {"film": "One Battle after Another"},
        {"film": "The Secret Agent"},
        {"film": "Sentimental Value"},
        {"film": "Sinners"},
        {"film": "Train Dreams"}
      ]
    }
  ]
};

// State Management
let state = {
    currentIndex: 0,
    score: 0,
    predictions: {}, // { categoryIndex: nomineeIndex }
    confirmed: {},   // { categoryIndex: true }
    results: {},     // { categoryIndex: 'correct' | 'wrong' }
    selectionAttempts: {}, // { categoryIndex: count }
};

// DOM Elements
const categoryTitle = document.getElementById('category-title');
const nomineesList = document.getElementById('nominees-list');
const actionArea = document.getElementById('action-area');
const scoreDisplay = document.getElementById('score-display');
const progressIndicator = document.getElementById('progress-indicator');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const jumpSelector = document.getElementById('jump-selector');
const categoryView = document.getElementById('category-view');
const resultsView = document.getElementById('results-view');
const finalScore = document.getElementById('final-score');
const totalCategories = document.getElementById('total-categories');
const accuracyPct = document.getElementById('accuracy-pct');
const rankDisplay = document.getElementById('rank-display');
const ballotReview = document.getElementById('ballot-review');
const shareBtn = document.getElementById('share-btn');
const resetBtn = document.getElementById('reset-btn');
const headerResetBtn = document.getElementById('header-reset-btn');
const messageContainer = document.getElementById('message-container');
const bottomNav = document.getElementById('bottom-nav');

// Initialization
function init() {
    const savedState = localStorage.getItem('oscarBallotState');
    if (savedState) {
        state = { ...state, ...JSON.parse(savedState) };
    }

    // Populate Jump Selector
    oscarData.categories.forEach((cat, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = cat.category;
        jumpSelector.appendChild(option);
    });

    render();
}

function saveState() {
    localStorage.setItem('oscarBallotState', JSON.stringify(state));
}

function render() {
    const total = oscarData.categories.length;
    
    // Check if we should show results
    const allCompleted = Object.keys(state.results).length === total;
    if (allCompleted) {
        showResults();
        return;
    }

    categoryView.classList.remove('hidden');
    resultsView.classList.add('hidden');
    bottomNav.classList.remove('hidden');

    const currentCat = oscarData.categories[state.currentIndex];
    const isConfirmed = state.confirmed[state.currentIndex];
    const hasResult = state.results[state.currentIndex];

    // Update Header & Progress
    scoreDisplay.textContent = `Score: ${state.score}`;
    progressIndicator.textContent = `Category ${state.currentIndex + 1} of ${total}`;
    categoryTitle.textContent = currentCat.category;
    jumpSelector.value = state.currentIndex;

    // Update Nav Buttons
    prevBtn.disabled = state.currentIndex === 0;
    nextBtn.disabled = state.currentIndex === total - 1;

    // Render Nominees
    nomineesList.innerHTML = '';
    currentCat.nominees.forEach((nominee, index) => {
        const btn = document.createElement('button');
        btn.className = 'nominee-btn';
        if (state.predictions[state.currentIndex] === index) {
            btn.classList.add('selected');
        }
        if (isConfirmed) {
            btn.classList.add('confirmed');
        }

        const name = nominee.name || nominee.title || nominee.song || nominee.film;
        const sub = nominee.film && (nominee.name || nominee.song) ? nominee.film : (nominee.writer || nominee.composer || nominee.country || '');

        btn.innerHTML = `
            <span class="font-bold text-lg">${name}</span>
            ${sub ? `<span class="text-sm text-stone-500">${sub}</span>` : ''}
        `;

        btn.onclick = () => selectNominee(index);
        nomineesList.appendChild(btn);
    });

    // Render Action Area
    actionArea.innerHTML = '';
    const selectedIndex = state.predictions[state.currentIndex];

    if (hasResult) {
        const resultText = document.createElement('div');
        resultText.className = `p-4 rounded-xl text-center font-bold uppercase tracking-widest ${state.results[state.currentIndex] === 'correct' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`;
        resultText.textContent = state.results[state.currentIndex] === 'correct' ? 'Result: Correct' : 'Result: Wrong';
        actionArea.appendChild(resultText);
    } else if (isConfirmed) {
        const resultLabel = document.createElement('div');
        resultLabel.className = 'text-center text-sm font-bold text-stone-400 uppercase mb-2';
        resultLabel.textContent = 'Mark Result';
        actionArea.appendChild(resultLabel);

        const btnGroup = document.createElement('div');
        btnGroup.className = 'flex gap-3';

        const correctBtn = document.createElement('button');
        correctBtn.className = 'btn-correct flex-1';
        correctBtn.textContent = 'I Was Correct';
        correctBtn.onclick = () => markResult('correct');

        const wrongBtn = document.createElement('button');
        wrongBtn.className = 'btn-wrong flex-1';
        wrongBtn.textContent = 'I Was Wrong';
        wrongBtn.onclick = () => markResult('wrong');

        btnGroup.appendChild(correctBtn);
        btnGroup.appendChild(wrongBtn);
        actionArea.appendChild(btnGroup);
    } else if (selectedIndex !== undefined) {
        const confirmBtn = document.createElement('button');
        confirmBtn.className = 'btn-confirm';
        confirmBtn.textContent = 'Confirm Prediction';
        confirmBtn.onclick = confirmPrediction;
        actionArea.appendChild(confirmBtn);
    }
}

function showMessage(text, type = 'info') {
    const msg = document.createElement('div');
    msg.className = `px-6 py-3 rounded-full shadow-lg font-bold text-white transform transition-all duration-300 translate-y-4 opacity-0 ${type === 'success' ? 'bg-emerald-500' : 'bg-amber-500'}`;
    msg.textContent = text;
    messageContainer.appendChild(msg);
    
    // Trigger animation
    setTimeout(() => {
        msg.classList.remove('translate-y-4', 'opacity-0');
    }, 10);
    
    // Remove after delay
    setTimeout(() => {
        msg.classList.add('translate-y-4', 'opacity-0');
        setTimeout(() => msg.remove(), 300);
    }, 2000);
}

function selectNominee(index) {
    if (state.confirmed[state.currentIndex]) return;

    const currentCat = oscarData.categories[state.currentIndex];
    
    // Always show the user's selection first
    state.predictions[state.currentIndex] = index;
    saveState();
    render();

    // Special logic for Actress in a Leading Role
    if (currentCat.category === "Actress in a Leading Role") {
        const karlaIndex = currentCat.nominees.findIndex(n => n.name === "Karla Sofia Gascon");
        
        if (index !== karlaIndex) {
            state.selectionAttempts[state.currentIndex] = (state.selectionAttempts[state.currentIndex] || 0) + 1;
            
            if (state.selectionAttempts[state.currentIndex] === 5) {
                showMessage("¿Y la magdalena?");
            }

            // If they haven't reached 10 attempts yet, force it back to Karla after a pause
            if (state.selectionAttempts[state.currentIndex] <= 9) {
                setTimeout(() => {
                    // Check if we are still on the same category before switching
                    if (oscarData.categories[state.currentIndex].category === "Actress in a Leading Role") {
                        state.predictions[state.currentIndex] = karlaIndex;
                        saveState();
                        render();
                    }
                }, 100); // 600ms pause
            }
        }
    }
}

function confirmPrediction() {
    state.confirmed[state.currentIndex] = true;
    saveState();
    render();
}

function markResult(result) {
    const currentCat = oscarData.categories[state.currentIndex];
    state.results[state.currentIndex] = result;
    if (result === 'correct') {
        state.score += 1;
        showMessage("BINGO", 'success');
    }
    saveState();
    
    // Auto-advance if not at the end
    if (state.currentIndex < oscarData.categories.length - 1) {
        state.selectionAttempts = {};
        state.currentIndex += 1;
    }
    
    render();
}

function showResults() {
    categoryView.classList.add('hidden');
    resultsView.classList.remove('hidden');
    bottomNav.classList.add('hidden');
    
    const total = oscarData.categories.length;
    const accuracy = Math.round((state.score / total) * 100);
    
    finalScore.textContent = state.score;
    totalCategories.textContent = total;
    accuracyPct.textContent = accuracy + '%';
    
    // Determine Rank
    let rank = "Casual Viewer 🍿";
    if (accuracy >= 90) rank = "Oscar Oracle 🔮";
    else if (accuracy >= 75) rank = "Film Buff 🎬";
    else if (accuracy >= 50) rank = "Movie Critic 📝";
    rankDisplay.textContent = rank;

    // Render Ballot Review
    ballotReview.innerHTML = '';
    oscarData.categories.forEach((cat, idx) => {
        const predictionIdx = state.predictions[idx];
        const nominee = cat.nominees[predictionIdx];
        const name = nominee ? (nominee.name || nominee.title || nominee.song || nominee.film) : 'No Prediction';
        const isCorrect = state.results[idx] === 'correct';

        const item = document.createElement('div');
        item.className = 'bg-white p-4 rounded-xl border border-stone-100 flex justify-between items-center';
        item.innerHTML = `
            <div class="flex-1">
                <div class="text-[10px] uppercase font-bold text-stone-400 mb-1">${cat.category}</div>
                <div class="font-bold text-sm">${name}</div>
            </div>
            <div class="ml-4">
                ${isCorrect ? 
                    '<span class="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-lg">✓</span>' : 
                    '<span class="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-lg">✕</span>'}
            </div>
        `;
        ballotReview.appendChild(item);
    });
    
    // Update header
    scoreDisplay.textContent = `Score: ${state.score}`;
}

shareBtn.onclick = () => {
    const total = oscarData.categories.length;
    const text = `🏆 My Oscars 2026 Ballot Results:\nScore: ${state.score}/${total}\nAccuracy: ${Math.round((state.score / total) * 100)}%\nRank: ${rankDisplay.textContent}\n\nCan you beat my score? #Oscars2026`;
    
    if (navigator.share) {
        navigator.share({
            title: 'My Oscar Ballot',
            text: text,
            url: window.location.href
        }).catch(() => {
            copyToClipboard(text);
        });
    } else {
        copyToClipboard(text);
    }
};

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showMessage("Results copied to clipboard!", 'success');
    });
}

// Event Listeners
prevBtn.onclick = () => {
    if (state.currentIndex > 0) {
        state.selectionAttempts = {};
        state.currentIndex -= 1;
        saveState();
        render();
    }
};

nextBtn.onclick = () => {
    if (state.currentIndex < oscarData.categories.length - 1) {
        state.selectionAttempts = {};
        state.currentIndex += 1;
        saveState();
        render();
    }
};

jumpSelector.onchange = (e) => {
    state.selectionAttempts = {};
    state.currentIndex = parseInt(e.target.value);
    saveState();
    render();
};

const resetAction = () => {
    console.log('Reset action triggered');
    state = {
        currentIndex: 0,
        score: 0,
        predictions: {},
        confirmed: {},
        results: {},
        selectionAttempts: {},
    };
    saveState();
    render();
    showMessage("Ballot Reset", 'info');
};

resetBtn.addEventListener('click', resetAction);
if (headerResetBtn) {
    console.log('Header reset button found, attaching listener');
    headerResetBtn.addEventListener('click', resetAction);
} else {
    console.warn('Header reset button NOT found');
}

init();
