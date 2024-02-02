import { Client, Account, Databases } from 'appwrite';

export const API_ENDPOINT = import.meta.env.VITE_APPWRITE_URL
export const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID
export const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID
export const COLLECTION_ID_MESSAGES = import.meta.env.VITE_APPWRITE_COLLECTION_ID_MESSAGES

const client = new Client()
    .setEndpoint(API_ENDPOINT) 
    .setProject(PROJECT_ID);    

export const account = new Account(client);
export const databases = new Databases(client)

export default client;