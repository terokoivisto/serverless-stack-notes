import stripePackage from "stripe";
import handler from "./helpers/handler";
import {calculateCost} from "./helpers/billing";

export const main = handler(async (event, context) => {
    const {storage, source} = JSON.parse(event.body);
    const amount = calculateCost(storage);
    const description = "Scratch charge";

    const stripe = stripePackage(process.env.stripeSecretKey);

    await stripe.charges.create({
        source,
        amount,
        description,
        currency: "eur"
    });

    return {status: true};
});
