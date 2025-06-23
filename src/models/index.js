// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Property, Item, Person, Business } = initSchema(schema);

export {
  User,
  Property,
  Item,
  Person,
  Business
};