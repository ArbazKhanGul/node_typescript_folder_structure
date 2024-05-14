import { Request } from 'express';
import { diskStorage } from 'multer';
import  Multer  from 'multer';

const storage = diskStorage({
  destination(req: Request, file: Express.Multer.File, cb) {
    cb(null, 'src/images');
  },
  filename(req, file, cb) {
    const ext = file.originalname.substr(file.originalname.lastIndexOf('.'));
    console.log(file.fieldname);
    cb(null, `${file.fieldname}-${Date.now()}-${Math.round(Math.random() * 1E9)}${ext}`);
  },
});

const upload = Multer({ storage });

export default upload;