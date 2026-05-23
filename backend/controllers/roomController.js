import Room from "../models/Room.js";


// CREATE ROOM
export const createRoom = async (req, res) => {
  try {
    const images = req.files.map((file) => ({
      data: file.buffer,
      contentType: file.mimetype,
    }));

    const room = await Room.create({
      ...req.body,
        amenities: JSON.parse(
    req.body.amenities
  ),

      images,
    });

    res.status(201).json({
      success: true,
      message: "Room created successfully",
      room,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// GET ALL ROOMS
export const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find().select("-images.data");

    res.status(200).json({
      success: true,
      rooms,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// GET SINGLE ROOM
export const getSingleRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id).select(
      "-images.data"
    );

    if (!room) {
      return res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }

    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// UPDATE ROOM
export const updateRoom = async (req, res) => {
  try {
    let updatedData = {
      ...req.body,
       amenities: req.body.amenities
    ? JSON.parse(req.body.amenities)
    : [],
    };

    // if new images uploaded
    if (req.files && req.files.length > 0) {
      updatedData.images = req.files.map((file) => ({
        data: file.buffer,
        contentType: file.mimetype,
      }));
    }

    const room = await Room.findByIdAndUpdate(
      req.params.id,
      updatedData,
      {
        new: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Room updated successfully",
      room,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// DELETE ROOM
export const deleteRoom = async (req, res) => {
  try {
    await Room.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Room deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// GET ROOM IMAGE
export const getRoomImage = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);

    const image = room.images[req.params.index];

    if (!image) {
      return res.status(404).json({
        success: false,
        message: "Image not found",
      });
    }

    res.set("Content-Type", image.contentType);

    res.send(image.data);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};