export default abstract class CustomTimeout {
    protected abstract StartsBefore: number;
    protected timerId!: NodeJS.Timeout;
    
    // 시간 계산하는 method
    protected abstract deriveStartTime(): number;


    // timeeout set 하는 function
    async set() {
        this.timerId = await setTimeout(async () => {
            console.log("aaa");
            await this.set();
        }, this.StartsBefore);
    }

    // 특정 조건 계산하는 method
    setCondition (): boolean | void {
        if (true) {
            return true
        }
    }

    // 특정 조건 (끝나면 재귀하는 method)

    
};