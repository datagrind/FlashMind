declare module 'openai' {
    export class Configuration {
      constructor(params: { apiKey: string });
    }
  
    export class OpenAIApi {
      constructor(configuration: Configuration);
  
      createCompletion(params: {
        model: string;
        prompt: string;
        max_tokens?: number;
      }): Promise<{ data: { choices: { text: string }[] } }>;
    }
  }
  