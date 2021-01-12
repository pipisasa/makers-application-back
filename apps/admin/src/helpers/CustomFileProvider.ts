import { UploadedFile } from 'admin-bro';
import {BaseProvider} from '@admin-bro/upload';
import * as fs from 'fs';
import * as path from 'path';

class CustomFileProvider extends BaseProvider{
  constructor(){
    super('uploads');
  }

  public async upload(file:UploadedFile, key: string){
    const filePath = path.join(__dirname, '..', '..', '..', '..', '..', '..','..','public','uploads', key);
    await fs.promises.mkdir(path.dirname(filePath), { recursive: true })
    await fs.promises.rename(file.path, filePath)
    return true;
  }

  public async delete(key: string){
    try {
      await fs.promises.unlink(path.join(__dirname, '..', '..', '..', '..', '..', '..','..','public','uploads', key))
    } catch (e) {
      console.log(e)
    }
    return true;
  }

  public path(key:string){
    return `/uploads/${key}`;
  }

}

export default CustomFileProvider;