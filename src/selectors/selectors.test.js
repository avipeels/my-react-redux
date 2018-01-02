import expect from 'expect';
import { authorsFormattedForDropdown } from './selectors';
describe('authors selectors page', () => {
    describe('authors formatted for dropdown', () => {
        it('should return author data formatted for the dropdown', () => {
            const authors = [
                { id: 'cory-house', firstName: 'Cory', lastName: 'House' }
            ];
            const expected = [
                { value: 'cory-house', text: 'Cory House' }
            ]
            expect(authorsFormattedForDropdown(authors)).toEqual(expected);
        });
    });
});