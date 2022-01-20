export default class CustomTimeout {
    private timeoutId: NodeJS.Timeout;

    constructor(executionTime: number, executionFunc: { (): void }) {
        const currentTime: number = Date.now();
        const timeLeft: number = executionTime - currentTime;
        if (timeLeft < 0) {
            throw new Error("Execution time should be set at least after Date.now()");
        }        

        this.timeoutId = setTimeout(executionFunc, timeLeft);
    }

    kill() {
        clearTimeout(this.timeoutId);
    }

    getTimeoutId() {
        return this.timeoutId;
    }
}

