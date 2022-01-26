import CustomInterval from "./CustomInterval";
import CustomTimeout from "./CustomTimeout";
import TimerConfig from "./TimerConfig";

class TimerApp {
    private TimerConfig;
    private CustomInterval: CustomInterval;
    private CustomTimeout: CustomTimeout;

    constructor (intervalExecFunc: any, term: number) {
        this.TimerConfig = new TimerConfig();
        this.CustomInterval = this.TimerConfig.createInterval(intervalExecFunc);
        this.CustomTimeout = this.TimerConfig.createFixtureTimeout(this.CustomInterval.set(term));
    }

    async start () {
        await this.CustomTimeout.set();
    }
}

let x = 0 
const testFunc = () => {
    if (x > 4) {
        return true;
    } 
    x += 1;
}

