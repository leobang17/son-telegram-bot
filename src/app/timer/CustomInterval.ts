export default class CustomInterval {
    private timerId: NodeJS.Timer | null;
    private executionFunc: { (): boolean | void };
    private term?: number;

    constructor (executionFunc: { (): boolean | void}) {
        this.executionFunc = executionFunc;
        this.timerId = null;
    }

    private async killOnCondition () {
        const res = await this.executionFunc();
        if (res) {
            this.kill();
        }
    }

    set(term: number) {
        this.kill();
        this.term = term;
        this.timerId = setInterval(() => this.killOnCondition(), this.term);
        console.log(`interval started... \tper ${this.term} millisec`);
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

const testInterval = new CustomInterval(test);


const start = async () => {
    await setTimeout(() => {
        testInterval.set(1000);
    }, 2000);
}
