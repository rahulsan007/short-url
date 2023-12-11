# Project Title

Url Shortner web app project using React and Express with Prisma and MongoDB.You can short link with ease and share.

## Authors

- [@rahulsan007](https://github.com/rahulsan007)

## Deployment

To deploy this project you need docker and docker compose install in your device or you can directly run but need to have MongoDB connection.

```bash
  docker-compose up --build
```

And wait for installation.

if you wanted to run without docker, then follow these steps:

```bash
  cd frontend
```

to go inside the frontend folder.

```bash
  npm install
```

to install the modules.

```bash
  npm start
```

to run the project.

```bash
  cd backend
```

to go inside the backend folder.

```bash
  npm install
```

to install the packages

```bash
  npm start
```

to start the project.

### Environment Setup before running project

if you are running project using docker then skip this step. otherwise setup these `.env` file by creating in both frontend and backend folder.

```bash
#.env for backend
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/short-url?retryWrites=true&w=majority"
```

```bash
#.env for frontend
REACT_APP_BASE_URL="http://localhost:3030"
```

## Screenshots

![App Screenshot](SS1.png)

![App Screenshot](SS2.png)
