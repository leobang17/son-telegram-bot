import CustomInterval from "./CustomInterval";
import CustomTimeout from "./CustomTimeout";
import FixtureTimer from "./FixtureTimer";

export default class TimerConfig {

    public createInterval(executionFunc: any): CustomInterval {
        return new CustomInterval(executionFunc);
    }

    public createFixtureTimeout(executionFunc: any): CustomTimeout {
        return new FixtureTimer(executionFunc);
    }
}