import multer from "multer";

const storage = multer.memoryStorage();

const upload = multer({
  storage,

  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB per file
    fieldSize: 25 * 1024 * 1024, // increase text field size
  },
});

export default upload;