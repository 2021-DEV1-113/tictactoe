
import { calculateWinner } from "../src/helpers/logicHelpers";

const cases = [
	[['x', 'x', 'o', 'o', 'x', 'x', 'o', 'x', 'o'], 'x'],
	[['x', 'x', null, 'o', 'x', 'x', 'o', 'x', 'o'], 'x'],
	[['x', 'x', 'o', 'o', 'x', 'x', 'x', 'o', 'o'], null],
	[['x', 'x', 'o', 'o', 'x', 'x', 'x', 'o', null], null],
	[['x', 'x', 'o', 'o', 'x', null, 'o', 'o', 'o'], 'o'],
];

describe('Calculate winner test', ()=>{
	test.each(cases)(
		`given %p as board, returns %p`,
		(board, winner) => {
				expect(
						calculateWinner(board)
				).toEqual(winner);
		}
);
})