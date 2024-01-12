# Local Shelter Donation Inventory

Local Shelter Donation Inventory is a project for managing and tracking donations for local shelters.

## Installation

Before running the server, make sure to follow these steps:

1. **Navigate to the Server Directory**: Open your terminal and navigate to the server directory within the `localShelterDonationInventory` project.

    ```bash
    cd path/to/localShelterDonationInventory/server
    ```

2. **Install Dependencies**: Run the following command to install the project dependencies.

    ```bash
    npm install
    ```

3. **Create an Environment File**: Create a `.env` file in the server directory and add any necessary environment variables. This file may include sensitive information like database connection strings. Example:

    ```
    MONGO_URI = mongodb+srv://<your account>:<your password>@cluster0.dg2czi1.mongodb.net/?retryWrites=true&w=majority
    PORT=3000
    secret = 'heySeattle12'
    ```

   Adjust the variables based on your project's requirements.

4. **Run the Server with Nodemon**: After installing dependencies and setting up the environment file, start the server using nodemon. The server is typically started with the `app.js` file.

    ```bash
    nodemon app.js
    ```

   This command will run the server and automatically restart it whenever changes are made.

5. **Access the Client**: The server includes a client. If the client is in the `client` directory within the `localShelterDonationInventory` project, you can access it through your browser at `http://localhost:3000` (or the specified port).

Feel free to customize the port number, directory paths, and environment variables based on your project configuration.

For any additional information or issues, please refer to the project documentation.
