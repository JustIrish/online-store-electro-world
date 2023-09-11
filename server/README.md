# electro-world-back

Тут зберігається back-end для Online store Electro world website.
Він надає API для зберігання даних користувача та інформаціі про всіх користувачів.

## Features

- Add a new user
- Fetch users

## Installation

Before running the app, you'll need to have Node.js installed. You can download Node.js [here](https://nodejs.org/).

After Node.js is installed, clone this repository to your local machine:

```bash
git clone https://github.com/JustIrish/online-store-electro-world/tree/main/server
```

Navigate to the project directory:

```bash
cd /online-store-electro-world/server
```

Install project dependencies:

```bash
npm install
```

## Configuration

The app uses two environment variables: `DB_HOST` and `PORT`. These can be set in a `.env` file in the `config` directory.

Here is an example `.env` file:

```plaintext
DB_HOST=mongodb://localhost:27017/mydatabase
PORT=8000
```

Please replace the values above with your own MongoDB URL and the port number you want the server to listen on.

## Usage

You can start the server using the following command:

```bash
npm start
```

The server will start in production mode.

For development mode, use:

```bash
npm run start:dev
```

## Endpoints

Here is a list of available endpoints:

- `GET /api/user`: Fetch all users
- `POST /api/user`: Add a new user
