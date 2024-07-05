import { OPENAI_API_KEY } from '@env';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function generateFlashCardAnswer(question: string): Promise<string> {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Provide an answer for the following question: ${question}`,
    max_tokens: 100,
  });

  return response.data.choices[0].text.trim();
}
