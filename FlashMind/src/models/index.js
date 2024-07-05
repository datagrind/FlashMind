// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { FlashCard, User, UserFlashCard } = initSchema(schema);

export {
  FlashCard,
  User,
  UserFlashCard
};