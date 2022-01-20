export default class CustomInterval {
    private intervalId: NodeJS.Timer;
    
    constructor (interval: number, executionFunc: { (): void}) {
        this.intervalId = setInterval(
            executionFunc, 
            interval
        );
    }

    kill() {
        clearInterval(this.intervalId);
    }

    getIntervalId() {
        return this.intervalId;
    }
}