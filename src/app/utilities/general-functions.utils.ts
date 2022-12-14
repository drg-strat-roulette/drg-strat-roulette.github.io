import { cloneDeep } from 'lodash-es';

/**
 * @param min - Lower bound of range
 * @param max - Upper bound of range
 * @returns A random number in the range [min, max)
 */
export function getRandomNumber(min: number, max: number) {
	if (min > max) {
		throw 'Invalid range';
	}
	return Math.random() * (max - min) + min;
}

/**
 * @param min - Lower bound of range
 * @param max - Upper bound of range
 * @returns A random integer in the range [min, max]
 */
export function getRandomInt(min: number, max: number) {
	min = Math.ceil(min);
	max = Math.floor(max);
	if (min > max) {
		throw 'Invalid range';
	}
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Samples multiple distinct items from a list
 * @param sourceList - List to select items from
 * @param num - Number of items to be selected
 * @returns - A list of the selected items
 */
export function sampleMultipleDistinct<T>(sourceList: T[], num: number): T[] {
	if (sourceList.length < num) {
		throw 'Cannot select more items than are in the source list';
	}
	const list = cloneDeep(sourceList);
	const results: T[] = [];
	for (let i = 0; i < num; i++) {
		results.push(list.splice(getRandomInt(0, list.length - 1), 1)[0]);
	}
	return results;
}

/**
 * Samples a random item from a list, using a second list as the weightings for each item in the first list
 * @param sourceList - List to select item from
 * @param weights - Weights to be applied to the items in sourceList
 * @returns - The selected item
 */
export function sampleWithWeights<T>(sourceList: T[], weights: number[]): T | undefined {
	if (sourceList.length === 0) {
		return;
	}
	if (sourceList.length != weights.length) {
		throw 'Source list and weights must be of equal lengths';
	}
	const totalWeight = weights.reduce((a, b) => a + b, 0);
	let random = getRandomNumber(0, totalWeight);
	for (let [idx, weight] of weights.entries()) {
		random -= weight;
		if (random < 0) {
			return sourceList[idx];
		}
	}
	throw 'Failed to select item with weights';
}

/**
 * Takes an array of sub-arrays and returns every possible combination of 1 element chosen from each sub-array
 * @param lists - Array of sub-arrays to be selected from
 */
export function getAllCombinations<T>(lists: T[][]): T[][] {
	return lists.reduce((a, b) =>
		a.reduce((r, v) => r.concat(b.map((w) => [].concat(v as any, w as any)) as any), [])
	) as any;
}

/**
 * Clamps a number to fall within a specified range
 * @param num - Number to be clamped
 * @param min - Minimum value for resulting number
 * @param max - Maximum value for resulting number
 * @returns The resulting number after the clamp has been applied to the input
 */
export function clamp(num: number, min: number, max: number): number {
	return Math.min(Math.max(num, min), max);
}
