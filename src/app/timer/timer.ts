export default class TimerInterval {
    private intervalId: NodeJS.Timer;
    private intervalFunc: {(): void};
    
    constructor (interval: number, intervalFunc: { (): void}) {
        this.intervalFunc = intervalFunc;
        this.intervalId = setInterval(
            intervalFunc, 
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