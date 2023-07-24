import { OpenAI } from "langchain/llms/openai";

const llm = new OpenAI({
    openAIApiKey: process.env.OPENAI_KEY
})