import {S3} from 'aws-sdk';
import { GetObjectOutput, PutObjectOutput } from 'aws-sdk/clients/s3';

/**
 * Utility for accessing S3 objects
 * Changes style from callbacks to promises for clarity
 * Add more functions as needed, try to follow this style
 */
export class S3Service {
    private s3: AWS.S3;

    constructor(private bucketName: string) {
        this.s3 = new S3();
    }

    public get(key: string): Promise<GetObjectOutput> {
        const params = {
            Bucket: this.bucketName,
            Key: key,
        };
        return this.s3.getObject(params).promise();
    }

    /**
     * Utility for saving JSON data to s3
     */
    public putJSON(key: string, data: any): Promise<PutObjectOutput> {
        const params = {
            Bucket: this.bucketName,
            Key: key,
            Body: JSON.stringify(data), ContentType: 'application/json',
            StorageClass: 'STANDARD',
        };

        return this.s3.putObject(params).promise();
    }

    /**
     * Utility that gets a JSON file from S3 and parses it into an object.
     * Pass in the type parameter if you know the schema, otherwise pass 'any'
     */
    public async getJSON<T>(key: string): Promise<T> {
        const obj = await this.get(key);
        return JSON.parse(obj.Body.toString());
    }

    /**
     * Checks if a key was modified since the given date.
     * Pulls back 0 bytes of the object so its pretty efficient
     */
    public async keyModifiedSince(key: string, date: Date): Promise<boolean> {

        const params = {
            Bucket: this.bucketName,
            Key: key,
            IfModifiedSince: date,
            Range: 'bytes=0',                          // We dont need whole object for this method
        };

        try {
            const result = await this.s3.getObject(params).promise();
            return true;
        } catch (err) {
            if (err.code === 'NotModified') {
                return false;
            }
            if (err.code === 'NoSuchKey') {
                return false;
            } else {
                throw err;
            }
        }
    }
}
