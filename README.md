# Mega Blog App

A modern, full-featured blog application built with **React** and **Vite**, leveraging **Appwrite** as the backend service. The project is designed for scalability and maintainability, using both **Redux Toolkit** and the **React Context API** for state management.

## Features

- ⚡️ **React 19 + Vite** for fast development and hot module replacement
- 🗄️ **Appwrite** as a backend for authentication, database, storage, and more
- 🛠️ **Redux Toolkit** for scalable global state management (planned/used)
- 🌐 **React Context API** for lightweight state sharing (planned/used)
- 📝 **Rich text editing** with TinyMCE
- 🧩 **React Router v7** for client-side routing
- ✅ **React Hook Form** for form management and validation
- 🧹 **ESLint** for code quality

## Getting Started

### Prerequisites

- **Node.js** (v18+ recommended)
- **Appwrite** instance (self-hosted or cloud)

### Installation

```bash
git clone https://github.com/yourusername/mega-blog-app.git
cd mega-blog-app
npm install
```

### Environment Setup

Create a `.env` file in the root with your Appwrite credentials:

```
VITE_APP_APPWRITE_URL=your-appwrite-endpoint
VITE_APPWRITE_PROJECT_ID=your-project-id
VITE_APPWRITE_DATABASE_ID=your-database-id
VITE_APPWRITE_COLLECTION_ID=your-collection-id
VITE_APPWRITE_BUCKET_ID=your-bucket-id
```

### Running the App

```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

## Project Structure

```
src/
  App.jsx            # Main app component
  main.jsx           # Entry point
  conf/              # Appwrite config
  assets/            # Static assets
  ...
```

## State Management

- **Redux Toolkit** will be used for global state (e.g., user, posts).
- **React Context API** will be used for lightweight or cross-cutting concerns (e.g., theme, auth context).

## Backend

- **Appwrite** handles authentication, database, storage, and more.
- All backend configuration is managed in `src/conf/conf.js`.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)
