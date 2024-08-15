

## Overview
This file sets up an Express application that serves content from various APIs. It imports necessary modules, initializes the Express application, and configures middleware.

## Imports
- `express`: The Express framework for building web applications.
- `fetchContent`: A helper function to fetch content from a specified API.
- `fetchContentAndTranslate`: A helper function to fetch content from a specified API and translate it.

## Variables
- `app`: An instance of the Express application.
- `port`: The port number on which the server will listen. It defaults to `8000` if the `PORT` environment variable is not set.
- `contentApis`: An object that will hold the API URLs and their corresponding ISO 639-2 language codes.

## Middleware
- `app.use(express.json())`: Adds middleware to parse incoming JSON requests.

## Example Usage
To start the server, you would typically run a command like `node index.js` or use a task runner like `nodemon` for development.

## API 

GET /unified-content
Fetches unified content from multiple sources defined in the contentApis array.

GET /lang/:lang
lang (string): The language code ( ISO 639-2 ) to fetch content for.

Endpoint: GET /translate/:lang
lang (string): The language code ( ISO 639-2 ) to fetch and translate content for.


## Prerequisites

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```sh
    cd <project-directory>
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the server:
    ```sh
    npm start
    ```
2. The server will run on the port specified in the `PORT` environment variable or default to `8000`.

## Project Structure

- `index.ts`: The main entry point of the application.
- `helpers/fetchContent.ts`: Helper function to fetch content from a specified API.
- `helpers/fetchContentAndTranslate.ts`: Helper function to fetch content from a specified API and translate it.

## Environment Variables

- `PORT`: The port number on which the server will listen (default is `8000`).

## Example

To start the server, run:
```sh
npm start
