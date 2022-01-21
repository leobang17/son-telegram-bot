export default class CustomInterval {
    private intervalId: NodeJS.Timer | null;
    private executionFunc: { (): number | void };
    private interval: number;

    constructor (executionFunc: { (): void}, interval: number) {
        this.executionFunc = executionFunc;
        this.interval = interval
        this.intervalId = null;
    }

    private async setCondition () {
        const res = await this.executionFunc();
        if (!res) {
            this.kill();
        }
    }

    public set() {
        this.intervalId = setInterval(() => this.setCondition(), this.interval);
        console.log(`interval started... \tper ${this.interval} millisec`);
    }

    public kill() {
        if (!this.intervalId) {
            console.log(`You should first use set() method before you use kill() method`);
            return;
        }
        clearInterval(this.intervalId);
        console.log(`interval killed.`);
    }

    public getIntervalId() {
        return this.intervalId;
    }
}