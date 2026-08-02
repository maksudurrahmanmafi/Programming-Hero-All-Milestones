async function delay() {
    return new Promise(resolve => {
        setTimeout(resolve, 2000);
    });
}

async function main() {
    console.log("Start");

    await delay();

    console.log("End");
}

main();