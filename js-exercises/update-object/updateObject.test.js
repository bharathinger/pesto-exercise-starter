import { updateObject } from './updateObject';

describe('updateObject', () => {
  test('should return the correct output', () => {
    expect(updateObject(1, '_', ['a', 'b', 'c'])).toEqual(['a', '_', 'c']);
  });

  test('should return the correct output', () => {
    expect(updateObject(-1, '_', ['a', 'b', 'c'])).toEqual(['a', 'b', '_']);
  });

  test('should return the correct output', () => {
    expect(updateObject(-1, 'a', ['b', 'c'])).toEqual(['b', 'a']);
  });

  test('should return the correct output', () => {
    expect(updateObject(0, 'a', ['b', 'c'])).toEqual(['a', 'c']);
  });

  test('should return the correct output', () => {
    expect(updateObject(1, 'a', ['b', 'c'])).toEqual(['b', 'a']);
  });
});
