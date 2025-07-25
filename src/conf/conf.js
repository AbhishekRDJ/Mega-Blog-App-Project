const conf = {
    VITE_APPWRITE_ENDPOINT: String(import.meta.env.VITE_APPWRITE_ENDPOINT),
    VITE_APPWRITE_PROJECT_ID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    VITE_APPWRITE_DATABASE_ID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    VITE_APPWRITE_COLLECTION_ID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    VITE_APPWRITE_BUCKET_ID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
};

export default conf;
