import multer from "multer";

const storage = multer.diskStorage({
     destination: (req, file, callBack) => {
          callBack(null, "./public/images/");
     },
     filename: (req, file, callBack) => {
          const fileName = decodeURIComponent(escape(file.originalname));
          callBack(null, file.fieldname + "-" + Date.now() + "-" + fileName);
     },
});

export const upload = multer({
     storage: storage,
});
