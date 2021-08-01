import { capitalize } from './capitalize';

test('capitalize is a function', () => {
  expect(typeof capitalize).toEqual('function');
});

test('capitalizes the first letter of every word in a sentence', () => {
  expect(capitalize('tacos are amazing, really')).toEqual(
    'Tacos Are Amazing, Really'
  );
});

test('capitalizes the first letter', () => {
  expect(capitalize('i love avacados and fried eggs')).toEqual(
    'I Love Avacados and Fried Eggs'
  );
});