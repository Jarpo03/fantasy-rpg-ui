// GET MODULE FUNCTIONS
import { MODULE } from './_module.mjs';

// GET CORE MODULE
import { default as CORE } from './module.mjs';

// GET MIGRATION
import './_migration.mjs';

/* ─────────────── ⋆⋅☆⋅⋆ ─────────────── */
// socketlib HOOKS -> socketlib.ready
/* ─────────────── ⋆⋅☆⋅⋆ ─────────────── */
Hooks.once('socketlib.ready', () => {
	MODULE.debug('SOCKETLIB Ready - SOCKET'); // WONT REGISTER CAUSE CALL HAPPENS WAY TO EARLY
	//CORE.registerSocketLib();
});

/* ─────────────── ⋆⋅☆⋅⋆ ─────────────── */
// 🧙 DEVELOPER MODE HOOKS -> devModeReady
/* ─────────────── ⋆⋅☆⋅⋆ ─────────────── */
Hooks.once('devModeReady', ({ registerPackageDebugFlag }) => {
    registerPackageDebugFlag(MODULE.ID, 'level', {
		choiceLabelOverrides: {
			0: 'NONE',
			1: 'ERROR',
			2: 'WARN',
			3: 'DEBUG',
			4: 'INFO',
			5: 'ALL'
		}
	});
});

/* ─────────────── ⋆⋅☆⋅⋆ ─────────────── */
// libThemer HOOKS -> lib-themer.Ready
/* ─────────────── ⋆⋅☆⋅⋆ ─────────────── */
Hooks.once('lib-themer.Ready', (API) => {
	API.register(CORE.THEME);
});

/* ─────────────── ⋆⋅☆⋅⋆ ─────────────── */
// FOUNDRY HOOKS -> READY
/* ─────────────── ⋆⋅☆⋅⋆ ─────────────── */
Hooks.once('init', async () => {
	CORE.init();
});
Hooks.once('ready', async () => {
	
});

/* ─────────────── ⋆⋅☆⋅⋆ ─────────────── */
// FOUNDRY HOOKS -> MODULE FUNCTIONS
/* ─────────────── ⋆⋅☆⋅⋆ ─────────────── */