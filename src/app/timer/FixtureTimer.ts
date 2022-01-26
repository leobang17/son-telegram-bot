import CustomTimeout from "./CustomTimeout";

export default class FixtureTimer extends CustomTimeout {
    protected StartsBefore: number = 1000;
    protected StartsAfter!: number;
    protected executionFunc(): void {

    }

    protected async deriveStartTime(): Promise<number> {
        return 1;
    }
}