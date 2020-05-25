// https://stripe.com/docs/testing#cards
export function calculateCost(storage) {
    const rate = storage > 10 ? 2 : 4;

    return rate * storage * 100;
}
