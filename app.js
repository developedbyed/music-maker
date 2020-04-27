// Added new tones i.e. clap-analog , cowbell-808 , crash-808 , hihat-digital , openhat-808 , tom-808
//I am a fan / follower / student of your my name is vivek find me at viveksonybcd@gmail.com

function sequencer() {
	const kick = new Tone.Player("./drums/kick-electro01.wav").toMaster();
	const snare = new Tone.Player("./drums/snare-lofi02.wav").toMaster();
	const clap = new Tone.Player("./drums/clap-analog.wav").toMaster();
	const crash = new Tone.Player("./drums/crash-808.wav").toMaster();
	const tom = new Tone.Player("./drums/tom-808.wav").toMaster();
	const openhat = new Tone.Player("./drums/openhat-808.wav").toMaster();
	const cowbell = new Tone.Player("./drums/cowbell-808.wav").toMaster();
	const hihat = new Tone.Player("./drums/hihat-digital.wav").toMaster();

	let index = 0;

	Tone.Transport.scheduleRepeat(repeat, "8n");
	Tone.Transport.start();

	function repeat() {
		let step = index % 8;
		let kickInputs = document.querySelector(
			`.kick .pad:nth-child(${step + 1}) input` //changed the format a bit to access the nth pad and then the input checkbox inside the nth pad
		);
		let snareInputs = document.querySelector(
			`.snare .pad:nth-child(${step + 1}) input`
		);
		let clapInputs = document.querySelector(
			`.clap .pad:nth-child(${step + 1}) input`
		);
		let crashInputs = document.querySelector(
			`.crash .pad:nth-child(${step + 1}) input`
		);
		let tomInputs = document.querySelector(`
        .tom .pad:nth-child(${step + 1}) input`);
		let openhatInputs = document.querySelector(
			`.openhat .pad:nth-child(${step + 1}) input`
		);
		let cowbellInputs = document.querySelector(
			`.cowbell .pad:nth-child(${step + 1}) input`
		);
		let hihatInputs = document.querySelector(
			`.hihat .pad:nth-child(${step + 1}) input`
		);
		if (kickInputs.checked) {
			kick.start();
		}
		if (snareInputs.checked) {
			snare.start();
		}
		if (clapInputs.checked) {
			clap.start();
		}
		if (crashInputs.checked) {
			crash.start();
		}
		if (tomInputs.checked) {
			tom.start();
		}
		if (openhatInputs.checked) {
			openhat.start();
		}
		if (cowbellInputs.checked) {
			cowbell.start();
		}
		if (hihatInputs.checked) {
			hihat.start();
		}
		index++;
	}
}

sequencer();

let colorPallet = [
	{
		key: "kick",
		offValue: "#001eff",
		onValue: "#4f63ff",
	},
	{
		key: "snare",
		offValue: "#ff9900",
		onValue: "#ffcb7c",
	},
	{
		key: "clap",
		offValue: "#f000ff",
		onValue: "#f67bff",
	},
	{
		key: "crash",
		offValue: "#ffe700",
		onValue: "#fff27c",
	},
	{
		key: "tom",
		offValue: "#4deeea",
		onValue: "#b6fffe",
	},
	{
		key: "openhat",
		offValue: "#0066ff",
		onValue: "#5796f5",
	},
	{
		key: "cowbell",
		offValue: "#39c0ff",
		onValue: "#9de0ff",
	},
	{
		key: "hihat",
		offValue: "#74ee15",
		onValue: "#b2f181",
	},
];

let changeColor = (beat, index) => {
	let pad = document.querySelector(`.${beat} .pad:nth-child(${index}) input`);
	if (pad.checked === true) {
	} else {
	}
};
