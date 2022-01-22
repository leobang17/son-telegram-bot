export default abstract class CustomTimeout {
    // N분 전에 시작하는지
    protected abstract StartsBefore: number;
    // setTimeout의 2번째 parameter
    protected abstract StartsAfter: number;
    protected timerId!: NodeJS.Timeout;
    protected abstract executionFunc(): void;
    
    // 시작 시간 계산하는 method
    protected abstract deriveStartTime(): Promise<number>;

    // StartsAfter 계산하는 method
    protected async deriveStartsAfter() {
        const startTime: number = await this.deriveStartTime();
        this.StartsAfter = startTime - Date.now() - this.StartsBefore;
    }

    // timeeout set 하는 function
    async set() {
        this.deriveStartsAfter();
        try {
            this.timerId = await setTimeout(async () => {
                await this.executionFunc()
                await this.set();
            }, this.StartsBefore);
        } catch (err) {
            console.error(err);
        }
    }

    getTimerId(): NodeJS.Timeout {
        return this.timerId;
    }
    
};