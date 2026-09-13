
const getData = async () => {

    const result = await Promise.resolve("Data received");

    console.log(result);
};

getData();