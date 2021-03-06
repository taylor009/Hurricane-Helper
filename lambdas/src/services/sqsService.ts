import { SQS } from 'aws-sdk';
import { SendMessageResult } from 'aws-sdk/clients/sqs';

/**
 * Utility for accessing S3 objects
 * Changes style from callbacks to promises for clarity
 * Add more functions as needed, try to follow this style
 */
class SqsService {

    public static createQueueUrl(region: string, accountId: string, queueName: string) {
        return `https://sqs.${region}.amazonaws.com/${accountId}/${queueName}`;
    }

    private sqs: AWS.SQS;

    constructor(private queueUrl: string) {
        this.sqs = new SQS();
    }

    public async getMessages(max: number): Promise<AWS.SQS.ReceiveMessageResult> {
        const params = {
            MaxNumberOfMessages: max,
            QueueUrl: this.queueUrl,
        };

        return this.sqs.receiveMessage(params).promise();
    }

    public async deleteMessage(receiptHandle: string): Promise<any> {
        const params = {
            QueueUrl: this.queueUrl,
            ReceiptHandle: receiptHandle,
        };
        return this.sqs.deleteMessage(params).promise();
    }

    public async sendMessage(message: string): Promise<SendMessageResult> {
        const params = {
            MessageBody: message,
            QueueUrl: this.queueUrl,
            MessageGroupId: this.id(),
        };

        return this.sqs.sendMessage(params).promise();
    }

    // Generate unique IDs for use as pseudo-private/protected names.
    // Similar in concept to
    // <http://wiki.ecmascript.org/doku.php?id=strawman:names>.
    //
    // The goals of this function are twofold:
    //
    // * Provide a way to generate a string guaranteed to be unique when compared
    //   to other strings generated by this function.
    // * Make the string complex enough that it is highly unlikely to be
    //   accidentally duplicated by hand (this is key if you're using `ID`
    //   as a private/protected name on an object).
    //
    // Source: https://gist.github.com/gordonbrander/2230317
    //
    // Use:
    //
    //     var privateName = ID();
    //     var o = { 'public': 'foo' };
    //     o[privateName] = 'bar';
    private id() {
        // Math.random should be unique because of its seeding algorithm.
        // Convert it to base 36 (numbers + letters), and grab the first 9 characters
        // after the decimal.
        return '_' + Math.random().toString(36).substr(2, 9);
    }
}

export { SqsService };
