let cond = 0;

const testFunc = () => {
    console.log("bbb");
    if (cond === 3) {
        return true;
    }
    cond +=1;
}


const waitUntil = (condition: any) => {
    return new Promise((res, rej) => {
        const intervalTest = setInterval(() => {
            const result = condition();
            if (result) {
                clearInterval(intervalTest);
                res('foo');
            }
        }, 1000);
    })
}

const bbb = async () => {
    try {
        const res = await waitUntil(testFunc);
        console.log(res);
        console.log("끝~!");
    } catch(err) {
        console.error(err);
    }
}

bbb();