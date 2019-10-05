export class DateUtil {

    /**
     * Expected format is YYYY-MM-DD
     */
    public static validateLexDate(lexDate: string): void {
        if (!lexDate.match(this.descendingPattern) && !lexDate.match(this.usPattern)) {
            throw new Error('Expected date format is YYYY-MM-DD or MMDDYYYY');
        }
    }

    public static lexDateToApiDate(lexDate: string): string {
        this.validateLexDate(lexDate);
        if (lexDate.match(this.descendingPattern)) {
            return lexDate.substr(5, 2) + lexDate.substr(8, 2) + lexDate.substr(0, 4);
        } else {
            return lexDate;
        }
    }

    private static descendingPattern = /\d\d\d\d\-\d\d\-\d\d/g;     // YYYY-MM-DD
    private static usPattern = /\d\d\d\d\d\d\d\d/g;                 // MMDDYYYY
}
