# Hotel Management API with Node.js, Express.js, and Vanilla JavaScript

This project provides a backend API for a hotel management system built with Node.js, Express.js, and vanilla JavaScript. It offers functionalities to manage room types and rooms, including creating, retrieving, filtering, updating, and deleting them.

## Features
- **Create Room Types:** Define different room categories (e.g., Single, Double, Suite)
- **Manage Rooms:** Add rooms with their type, name, and price
- **Filter Rooms:** Search by room name, filter by room type, and define price range
- **Edit Rooms:** Update existing room details
- **Delete Rooms:** Remove rooms from the system
- **Optional Authentication:** This basic implementation can be extended to include user authentication for secure access control.

## Dependencies
- `express`: Web framework for building Node.js applications ([expressjs.com](https://expressjs.com/))
- `mongodb` (or similar): Database library for data persistence (consider using a package manager like npm to install)

## Database Setup
- Install a database management system like MongoDB ([mongodb.com](https://www.mongodb.com/)).
- Create a database and two collections:
  - `roomTypes`: Stores information about room categories (name)
  - `rooms`: Stores details about individual rooms (name, room type ID, price)

## Running the Application
1. Clone this repository.
2. Install dependencies: `npm install` (assuming you have Node.js and npm installed)
3. Update the connection string in `index.js` with your MongoDB connection details.
4. Start the server: `node index.js`
5. The API endpoints will be available on port 3000 by default (you can modify this in the code).

## API Endpoints

### Room Types:
- `POST /api/v1/rooms-types`: Create a new room type (requires name in request body)
- `GET /api/v1/rooms-types`: Retrieve all room types

### Rooms:
- `POST /api/v1/rooms`: Create a new room (requires name, roomType ID, and price in request body)
- `GET /api/v1/rooms`: Retrieve all rooms with optional filtering based on query parameters:
  - `search`: Filter by room name (case-insensitive search)
  - `roomType`: Filter by room type ID
  - `minPrice`: Minimum price range
  - `maxPrice`: Maximum price range
- `PATCH /api/v1/rooms/:roomId`: Update an existing room (requires room ID in URL and update data in request body)
- `DELETE /api/v1/rooms/:roomId`: Delete a room (requires room ID in URL)

Note: All response codes follow the standard HTTP status codes (e.g., 201 for created, 500 for internal server error).

## Contributing
We welcome contributions to this project! Feel free to open pull requests with improvements or bug fixes.

## License
This project is licensed under the MIT License.
