import Floor from "../models/Floor.js";

// CREATE FLOOR
export const createFloor = async (req, res) => {
  try {
    const images = req.files.map((file) => ({
      data: file.buffer,
      contentType: file.mimetype,
    }));

    const floor = await Floor.create({
      ...req.body,

      amenities: JSON.parse(req.body.amenities),

      rooms: JSON.parse(req.body.rooms || "[]"),

      images,
    });

    res.status(201).json({
      success: true,
      message: "Floor created successfully",
      floor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET ALL FLOORS
// GET ALL FLOORS
export const getFloors = async (req, res) => {
  try {
    const floors = await Floor.find()
      .populate("rooms")
      .select("-images.data");

    const updatedFloors = floors.map((floor) => ({
      ...floor._doc,

      image:
        floor.images && floor.images.length > 0
          ? `${req.protocol}://${req.get(
              "host"
            )}/api/v1/floor/floor-image/${floor._id}/0`
          : null,
    }));

    res.status(200).json({
      success: true,
      floors: updatedFloors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// GET SINGLE FLOOR
export const getSingleFloor = async (req, res) => {
  try {
    const floor = await Floor.findById(req.params.id)
      .populate("rooms")
      .select("-images.data");

    if (!floor) {
      return res.status(404).json({
        success: false,
        message: "Floor not found",
      });
    }

    res.status(200).json({
      success: true,
      floor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE FLOOR
export const updateFloor = async (req, res) => {
  try {
    let updatedData = {
      ...req.body,

      amenities: req.body.amenities
        ? JSON.parse(req.body.amenities)
        : [],

      rooms: req.body.rooms
        ? JSON.parse(req.body.rooms)
        : [],
    };

    // if new images uploaded
    if (req.files && req.files.length > 0) {
      updatedData.images = req.files.map((file) => ({
        data: file.buffer,
        contentType: file.mimetype,
      }));
    }

    const floor = await Floor.findByIdAndUpdate(
      req.params.id,
      updatedData,
      {
        new: true,
      }
    ).populate("rooms");

    res.status(200).json({
      success: true,
      message: "Floor updated successfully",
      floor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE FLOOR
export const deleteFloor = async (req, res) => {
  try {
    await Floor.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Floor deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET FLOOR IMAGE
export const getFloorImage = async (req, res) => {
  try {
    const floor = await Floor.findById(req.params.id);

    const image = floor.images[req.params.index];

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