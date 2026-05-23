import Gallery from "../models/Gallery.js";


// ADD GALLERY IMAGE
export const addGalleryImage = async (req, res) => {
  try {
    const image = {
      data: req.file.buffer,
      contentType: req.file.mimetype,
    };

    const gallery = await Gallery.create({
      title: req.body.title,
      image,
    });

    res.status(201).json({
      success: true,
      message: "Gallery image added",
      gallery,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// GET GALLERY
export const getGallery = async (req, res) => {
  try {
    const gallery = await Gallery.find().select("-image.data");

    res.status(200).json({
      success: true,
      gallery,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// GET SINGLE GALLERY IMAGE
export const getGalleryImage = async (req, res) => {
  try {
    const gallery = await Gallery.findById(req.params.id);

    if (!gallery) {
      return res.status(404).json({
        success: false,
        message: "Image not found",
      });
    }

    res.set("Content-Type", gallery.image.contentType);

    res.send(gallery.image.data);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// DELETE GALLERY IMAGE
export const deleteGalleryImage = async (req, res) => {
  try {
    await Gallery.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Gallery image deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};