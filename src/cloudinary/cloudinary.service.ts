/* eslint-disable @typescript-eslint/no-require-imports */
import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import {
  CloudinaryResponse,
  CloudinarySecureResponse,
} from './interfaces/cloudinary-response.interface';
const streamifier = require('streamifier');

@Injectable()
export class CloudinaryService {
  private uploadFile(
    file: Express.Multer.File,
  ): Promise<CloudinarySecureResponse> {
    return new Promise<CloudinarySecureResponse>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        (error, result: CloudinaryResponse) => {
          if (error) return reject(error);
          if (result && 'secure_url' in result) {
            return resolve({ secure_url: result.secure_url });
          }
          reject(new Error('No se encontró secure_url en la respuesta'));
        },
      );

      streamifier.createReadStream(file.buffer).pipe(uploadStream);
    });
  }

  async uploadImages(files: Express.Multer.File[]): Promise<string[]> {
    let images: string[] = [];
    if (files && files.length > 0) {
      const uploadedImages = await Promise.all(
        files.map((file) => this.uploadFile(file)),
      );
      const urls: string[] = uploadedImages.map((img) => img.secure_url);
      images = urls;
    }
    return images;
  }

  async uploadImage(file: Express.Multer.File): Promise<string> {
    const uploadedImage = await this.uploadFile(file);
    return uploadedImage.secure_url;
  }
}
