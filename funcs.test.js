import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./funcs";

test('capitalize', () => {
    expect(capitalize('hello')).toMatch('Hello');
});

test('string reverse', () => {
    expect(reverseString('hello')).toMatch('olleh');
});

test('calculator functionalities', () => {
    expect(calculator.add(0.3, 0.2)).toBeCloseTo(0.5);
    expect(calculator.subtract(5, 3.2)).toBeCloseTo(1.8);
    expect(calculator.divide(4, 2)).toBeCloseTo(2);
    expect(calculator.multiply(10, 2)).toBeCloseTo(20);
});

test('caesar cipher', () => {
    expect(caesarCipher("a", 1)).toBe("b");
});

test('analyze array', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toMatchObject({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});