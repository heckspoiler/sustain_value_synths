import Commerce from "@chec/commerce.js";

const commerce = new Commerce(process.env.NEXT_PUBLIC_CHEC_PUBLIC_API_KEY);

console.log("commerce from commerce.js", commerce);

export default commerce;
