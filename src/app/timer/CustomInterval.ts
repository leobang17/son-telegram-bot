export default class CustomInterval {
    private timerId: NodeJS.Timer | null;
    private executionFunc: { (): boolean | void };
    private term?: number;

    constructor (executionFunc: { (): boolean | void}) {
        this.executionFunc = executionFunc;
        this.timerId = null;
    }

    private async killOnCondition (res: any) {
        const result = await this.executionFunc();
        if (result) {
            this.kill();
            res();
        }
    }

    set(term: number): Promise<void> {
        this.term = term
        const promiseFunc = (res: any) => {
            this.timerId = setInterval(
                () => this.killOnCondition(res),
                this.term)
        }
        console.log(`interval started... \tper ${this.term} millisec`);
        return new Promise(promiseFunc);
    }

    kill() {
        if (!this.timerId) {
            return;
        }
        clearInterval(this.timerId);
        console.log(`interval killed.`);
    }

    getTimerId() {
        return this.timerId;
    }

    getTerm() {
        return this.term;
    }
}

let x = 0;

const test = () => {
    x += 1
    console.log(x);
    if (x === 3) {
        return true;
    }
}

const t1 = new CustomInterval(test);


const a = async () => {
    await t1.set(1000);
    console.log("끝이다!")
}

a();