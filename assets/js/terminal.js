import GlitchedWriter from 'https://cdn.skypack.dev/glitched-writer';
const Writer = new GlitchedWriter('#test', { letterize: true }, logString);

(async  ()=> {
	await wait(1000);
	await Writer.write("my old friend.");
	
	await wait(1200);
	await Writer.write("This is only the beginning.");
	
	await wait(1500);
	await Writer.write("Please, say something...");

  })();
  
  function logString(string) {
	logs.innerHTML += `<p>${string}</p>`;
  }