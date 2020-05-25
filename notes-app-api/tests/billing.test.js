import {calculateCost} from "../helpers/billing";

test("Zero", () => {
    const storage = 0;
    const expectedCost = 0;

    const cost = calculateCost(storage);

    expect(cost).toEqual(expectedCost);
});

test("Low tier", () => {
    const storage = 8;
    const expectedCost = storage * 4 * 100;

    const cost = calculateCost(storage);

    expect(cost).toEqual(expectedCost);
});

test("Low tier edge", () => {
    const storage = 10;
    const expectedCost = storage * 4 * 100;

    const cost = calculateCost(storage);

    expect(cost).toEqual(expectedCost);
});

test("High tier", () => {
    const storage = 11;
    const expectedCost = storage * 2 * 100;

    const cost = calculateCost(storage);

    expect(cost).toEqual(expectedCost);
});
