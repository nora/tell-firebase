//make API-Key file and import @ yir
import { apiKey } from './apiKey';

export const firebaseConfig = {
  apiKey: apiKey,
  authDomain: 'yir-todo.firebaseapp.com',
  databaseURL: 'https://yir-todo.firebaseio.com',
  storageBucket: 'yir-todo.appspot.com'
};
