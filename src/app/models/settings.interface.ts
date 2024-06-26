import { Mission } from './missions.interface';
import { StratTag } from './strat.interface';
import { Dwarf } from './team.interface';

export const settingsVersion = 1;

/** Settings for Strat Roulette */
export interface StratSettings {
	version: number;
	excludedTags: StratTag[];
	dwarves: Dwarf[];
	preChosenMissions: boolean;
	mission: Mission;
}

/** Strategy selection mode (Currently unused) */
export enum SelectionMode {
	normal = 'Normal', // Single strategy rolled at random. Option to roll multiple strats.
	climber = 'Climber', // Multiple strategies are rolled at random. Cumulative difficulty increases after every successful mission.
	multi = 'Multi', // Select a desired difficulty. Multiple strategies are rolled to achieve the selected difficulty.
}
