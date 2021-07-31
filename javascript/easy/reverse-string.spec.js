
import { reverse } from "./fibonacci";

test('reverse function exsits', () => {
    expect(reverse).toBeDefined();
});

test('reverse() reverses the string -- abcd', () => {
    expect(reverse('abcd')).toEqual('dcba');
});

test('reverse() reverses the string -- abcd (with space)', () => {
    expect(reverse(' abcd')).toEqual('dcba ');
});