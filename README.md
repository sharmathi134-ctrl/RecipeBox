# RecipeBox MERN App

RecipeBox is a React and Vite frontend with an Express, Mongoose, and MongoDB Atlas backend.

## MongoDB Atlas setup

1. Create a MongoDB Atlas account and a free cluster.
2. In **Database Access**, create a database user with a password.
3. In **Network Access**, add the IP addresses that should access the cluster. For local development, you can temporarily allow `0.0.0.0/0`; replace it with a specific IP before deploying.
4. In **Database > Connect**, choose **Drivers** and copy the Node.js connection string.
5. Copy `backend/.env.example` to `backend/.env`.
6. Replace the placeholders in `backend/.env`:

```env
PORT=5000
MONGO_URI=mongodb+srv://<database-user>:<url-encoded-password>@<cluster-host>/RecipeBox?retryWrites=true&w=majority
```

Use URL-encoded credentials if they contain special characters. MongoDB Atlas does not require you to create the `RecipeBox` database beforehand; Mongoose creates collections after data is inserted.

## Run locally

Install dependencies and start the backend and frontend in separate terminals:

```powershell
npm install
npm run server
npm run dev
```

The backend runs at `http://localhost:5000`, and the frontend uses that address through `src/services/api.js`.
