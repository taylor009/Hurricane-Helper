/**
 * Represents known parameters of a CTR to avoid errors.
 * Please add knew fields as you need them.
 */
export interface IConnectCtr<TParams> {
    Details: {
        ContactData: {
            ContactId: string,
            Attributes: {
                [name: string]: string,
            },
            CustomerEndpoint: {
                Address: string,
                Type: string,
            },
        },
        Parameters: TParams,
    };
}
