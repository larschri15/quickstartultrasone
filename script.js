let currentMission = 1;

function nextMission(forcedMission) {
    if (forcedMission) {
        currentMission = forcedMission;
    } else {
        currentMission++;
    }
    updateUI();
}

function updateUI() {
    document.querySelectorAll('.mission').forEach(el => el.classList.add('hidden'));
    document.getElementById(`mission${currentMission}`).classList.remove('hidden');
    document.getElementById('progress').style.width = `${currentMission * 16.67}%`;
    if (currentMission === 6) {
        document.getElementById('nextButton').style.display = 'none';
    }
}

function checkAnswer(quizNumber) {
    const correctAnswers = ['b', 'c', 'a', 'b', 'c', 'c'];
    const answer = document.querySelector(`input[name="q${quizNumber}"]:checked`);
    if (answer && answer.value === correctAnswers[quizNumber - 1]) {
        alert('🎉 Wauw! Je hebt het helemaal goed! Je bent een echte ultrasone held! 🦸‍♂️');
        if (quizNumber < 6) {
            nextMission(quizNumber + 1);
        }
    } else {
        alert('Oeps! Dat is niet helemaal juist. Maar geen zorgen, zelfs Einstein maakte weleens een foutje! Probeer nog eens! 🧠💡');
    }
}

function checkFinalChallenge() {
    const idea = document.getElementById('final-challenge').value;
    if (idea.length > 10) {
        alert('🌟 Wow! Wat een briljant idee! Je bent echt een ultrasone genie! 🧠✨ Je zou inderdaad meerdere metingen kunnen doen en de verandering in afstand over tijd kunnen berekenen om de snelheid te bepalen. Wie weet win jij ooit de Nobelprijs voor Ultrasone Fysica!');
    } else {
        alert('Kom op, junior uitvinder! 🚀 Ik weet dat je brein boordevol coole ideeën zit! Denk nog eens na over hoe je afstand en tijd zou kunnen combineren om snelheid te meten. Je staat op het punt een doorbraak te hebben!');
    }
}