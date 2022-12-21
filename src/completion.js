import { Configuration, OpenAIApi } from 'openai'
import generatePrompt from './prompt'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

export default async function () {
  const prompt = generatePrompt()
  const completion = await openai.createCompletion({
    model: process.env.OPENAI_MODEL,
    temperature: parseFloat(process.env.OPENAI_TEMPERATURE),
    max_tokens: parseInt(process.env.OPENAI_MAX_TOKENS),
    top_p: parseInt(process.env.OPENAI_TOP_P),
    frequency_penalty: parseFloat(process.env.OPENAI_FREQUENCY_PENALTY),
    presence_penalty: parseFloat(process.env.OPENAI_PRESENCE_PENALTY),
    prompt,
  })

  return {
    prompt,
    result: completion.data.choices[0].text,
  }
}
