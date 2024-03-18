// apiRouter.js

const express = require("express");
const router = express.Router();
const RoomType = require("./models/roomTypeModel");
const Room = require("./models/roomModel");

// POST endpoint for storing room type
router.post("/api/v1/rooms-types", async (req, res) => {
  try {
    const { name } = req.body;
    const roomType = new RoomType({ name });
    await roomType.save();
    res.status(201).json(roomType);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET endpoint for fetching all room types
router.get("/api/v1/rooms-types", async (req, res) => {
  try {
    const roomTypes = await RoomType.find();
    res.json(roomTypes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// POST endpoint for storing rooms
router.post("/api/v1/rooms", async (req, res) => {
  try {
    const { name, roomType, price } = req.body;
    const room = new Room({ name, roomType, price });
    await room.save();
    res.status(201).json(room);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET endpoint for fetching all rooms with optional filters
router.get("/api/v1/rooms", async (req, res) => {
  try {
    // Implement filtering logic here
    res.json({ message: "GET all rooms endpoint" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// PATCH endpoint for editing a room using its id
router.patch("/api/v1/rooms/:roomId", async (req, res) => {
  try {
    const { roomId } = req.params;
    // Implement update logic here
    res.json({ message: `Update room with id ${roomId}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// DELETE endpoint for deleting a room using its id
router.delete("/api/v1/rooms/:roomId", async (req, res) => {
  try {
    const { roomId } = req.params;
    // Implement delete logic here
    res.json({ message: `Delete room with id ${roomId}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET endpoint for fetching a room using its id
router.get("/api/v1/rooms/:roomId", async (req, res) => {
  try {
    const { roomId } = req.params;
    // Implement fetch room logic here
    res.json({ message: `Fetch room with id ${roomId}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
