
# Sadesoda-backend

This is the backend repository for the Sadesoda application, a social media platform for sharing photos and stories. It is built using Node.js, TypeScript, and MongoDB Atlas.

## Prerequisites

Before you can run the Sadesoda-backend, you'll need to have the following software installed on your computer:

-   Node.js
-   npm
-   MongoDB Atlas account

## Installation

To get started, clone this repository to your local machine:


`git  clone  https://github.com/xokacar/sadesoda-backend.git`

Then, install the dependencies:


`npm install`

## Configuration

You'll need to set up a MongoDB Atlas cluster and configure the connection string in the `.env` file. Here's an example `.env` file:


`PORT=3000 MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority`

Replace `<username>`, `<password>`, `<cluster-url>`, and `<database-name>` with your own values.

## Usage

To run the application on your local machine, start the server:


`npm  start`

This will start the server on port 3000 by default.


## Sadesoda-frontend

The frontend for this application is stored in a separate repository called [Sadesoda-frontend](https://github.com/xokacar/sadesoda-frontend). Please refer to that repository for information on the frontend.
