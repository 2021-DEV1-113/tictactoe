
import { calculateWinner } from "../src/helpers/logicHelpers";

describe('Calculate winner test', ()=>{
	test('when x is the winner', ()=>{

		const gridResult = ['x', 'x', 'o', 'o', 'x', 'x', 'o', 'x', 'o'];

		expect(calculateWinner(gridResult)).toBe('x');
	}) 
	test('when the grid has no winner', ()=>{

		const gridResult = ['x', 'x', 'o', 'o', 'x', 'x', 'x', 'o', 'o'];

		expect(calculateWinner(gridResult)).toBeNull();
	}) 
})