import { MilliSec } from "./constants";
import CustomTimeout from "./CustomTimeout";


export default class LineupTimer extends CustomTimeout {
    protected StartsBefore: number = MilliSec.MINUTE * 40;
    protected StartsAfter!: number;
    protected executionFunc(): void {
        
    }


    protected async deriveStartTime(): Promise<number> {
        return 1;
    }
}