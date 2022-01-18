

class CreateInterval {
    intervalId: NodeJS.Timer;
    constructor (interval: number) {
        this.intervalId = setInterval(() => {console.log("aaa")}, interval);
    }
};


// setTimeout, setInterval을 set하거나 kill 할 수 있는 class.
// setInterval의 interval을 줘야 함.
// return -> setInterval의 id를 반환해야함 -> 그래야지 kill 할 수 있음

