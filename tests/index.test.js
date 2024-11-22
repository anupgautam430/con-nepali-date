const { convertToNepali } = require('../src/index');

test('Converts English date to Nepali date', () => {
    const englishDate = new Date(2024, 1, 1); 
    expect(convertToNepali(englishDate)).toBe('2080-9-16'); 
});
