# Express Content API

This project sets up an Express application that serves content from various APIs. It includes functionality to fetch and translate content.

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
