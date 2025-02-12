import { Client, Databases } from 'appwrite';

const client = new Client();
client
    .setEndpoint('YOUR_APPWRITE_ENDPOINT') // Your Appwrite Endpoint
    .setProject('YOUR_PROJECT_ID'); // Your project ID

const databases = new Databases(client);

export const createUser = async (userData: { name: string, email: string, phone: string }) => {
    try {
        const response = await databases.createDocument('YOUR_DATABASE_ID', 'YOUR_COLLECTION_ID', 'unique()', userData);
        return response;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};