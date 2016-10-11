
var mon_contexte = new window.AudioContext();
var oscillator = mon_contexte.createOscillator();

oscillator.type = 'square';
oscillator.frequency.value = 3000; // value in hertz

var gainNode = mon_contexte.createGain();

//connect oscillator to gain node to speakers

oscillator.connect(gainNode);
gainNode.connect(mon_contexte.destination);


oscillator.start();
