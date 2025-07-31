import conf from "../conf/conf";
import { Client, Account, ID } from 'appwrite';

class AuthClass {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.VITE_APPWRITE_ENDPOINT)
            .setProject(conf.VITE_APPWRITE_PROJECT_ID);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            if (userAccount) {
                // 🔐 Clear existing session if any
                try {
                    await this.account.deleteSession('current');
                } catch (sessionError) {
                    console.warn("No session to delete or already logged out:", sessionError.message);
                }

                // 🔐 Now login the new user
                return await this.login({ email, password });
            } else {
                return null;
            }
        } catch (error) {
            console.error("Error creating account:", error);
            throw error;
        }
    }

    async loginWithGoogle() {
        try {
            await this.account.createOAuth2Session(
                'google',
                `${window.location.origin}/`,         // Success Redirect
                `${window.location.origin}/login`     // Failure Redirect
            );
        } catch (error) {
            console.error("OAuth login error:", error);
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password)

        } catch (error) {
            console.log(error)
            throw error
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            console.log(error)
            // throw error
        }
        return null;
    }

    async logout() {
        // eslint-disable-next-line no-useless-catch
        try {
            await this.account.deleteSessions('')

        } catch (error) {
            throw error
        }
    }
}

const AuthClassObject = new AuthClass();
export default AuthClassObject;
