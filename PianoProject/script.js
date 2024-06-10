
const noteFrequence = {
    1: 261.63,
    2:293.69,
};

function playSound(touche){

    const monApiAudio = new AudioContext();
    const oscillateur = monApiAudio.createOscillator();
    const gainNode = monApiAudio.createGain();

    oscillateur.connect(gainNode);
    gainNode.connect(monApiAudio.destination);
    
    const frequence = noteFrequence[touche];
    oscillateur.type = 'sine';
    oscillateur.frequence.se
    oscillateur.start();
    oscillateur.stop(monApiAudio.currentTime + 1);
}