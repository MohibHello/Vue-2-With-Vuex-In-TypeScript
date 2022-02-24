
async function foo(): Promise<number> {
    return 1
}

console.log(foo()); //1

foo().then(val =>{
    console.log(val); //1
});

// promise handle with try and catch

const notAPromise = 456;

const promiseWillResolve = new Promise(res =>res(123));

const promiseWillReject = new Promise((res, rej) => rej(new Error('Hello')));

async function fooBar() {

    const res1 = await notAPromise;
    console.log(res1);

    const res2 = await promiseWillResolve;
    console.log(res2);

    // rejection handle in try catch
    try {
        const res3 = await promiseWillReject;
        console.log(res3);
    } catch (error) {
        console.log(error.message);
        
    }
}
