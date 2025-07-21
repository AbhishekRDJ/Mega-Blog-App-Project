
import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from 'appwrite';

export class StorageService {
    client = new Client();
    databases;
    bucket;
    constructor() {
        this.client
            .setEndpoint(conf.VITE_APP_APPWRITE_URL)
            .setProject(conf.VITE_APPWRITE_PROJECT_ID);
        this.databases = new Databases(this.client)
        this.bucket = new this.Storage(this.client)

    }

    async createPost({ title, slug, content, featureImage, status, userId }) {
        try {
            return await this.databases.createDocument(conf.VITE_APPWRITE_DATABASE_ID, conf.VITE_APPWRITE_COLLECTION_ID, slug, {
                title, content, featureImage, status, userId
            })

        } catch (error) {
            console.log(error)
            throw error
        }

    }
    async updatePost(slug, { title, content, featureImage, status }) {
        try {
            return await this.databases.updateDocument(conf.VITE_APPWRITE_DATABASE_ID, conf.VITE_APPWRITE_COLLECTION_ID, slug, {
                title, content, featureImage, status
            })

        } catch (error) {
            console.log(error)
            throw error
        }
    }
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(conf.VITE_APPWRITE_DATABASE_ID, conf.VITE_APPWRITE_COLLECTION_ID, slug)
            console.log("Post Deleted Succesfully ")
            return true;


        } catch (error) {
            console.log(error)
            return false
        }
    }
    async getPost(slug) {
        try {
            return await this.databases.getDocument(conf.VITE_APPWRITE_DATABASE_ID, conf.VITE_APPWRITE_COLLECTION_ID, slug)
        } catch (error) {
            console.log(error)
        }
    }
    async getAllPost({ queries = [
        Query.equal('status', 'active')
    ] }) {
        try {
            return await this.databases.listDocuments(conf.VITE_APPWRITE_DATABASE_ID, conf.VITE_APPWRITE_COLLECTION_ID, queries)


        } catch (error) {
            console.log(error)
            throw error
        }
    }
    async uploadFile(file) {
        try {
            await this.bucket.createFile(conf.VITE_APPWRITE_BUCKET_ID, ID.unique(), file,)
        } catch (error) {
            console.log(error)
            throw error
        }
    }
    async deleteFile(fileID) {
        try {
            await this.bucket.deleteFile(conf.VITE_APPWRITE_BUCKET_ID, fileID)
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    getFilePreview(fileId) {
        try {
            return this.bucket.getFilePreview(conf.VITE_APPWRITE_BUCKET_ID, fileId)
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}
const service = new StorageService()
export default service;
