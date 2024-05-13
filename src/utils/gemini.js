import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key as an environment variable (see "Set up your API key" above)
// eslint-disable-next-line no-undef
const genAI = new GoogleGenerativeAI(import.meta.env.REACT_APP_API_KEY);

// ...

export default genAI;