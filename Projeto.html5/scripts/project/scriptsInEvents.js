

const scriptsInEvents = {

	async FolhaDeEventos1_Event15_Act4(runtime, localVars)
	{
		
		runtime.globalVars.Pontuacao += 1;
		runtime.callFunction("AtualizarPontuacao");globalThis.score = (globalThis.score || 0) + 1;
		runtime.callFunction("AtualizarTextoPontuacao", globalThis.score.toString());
	},

	async FolhaDeEventos1_Event22(runtime, localVars)
	{
		
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
