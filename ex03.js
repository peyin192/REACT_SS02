const typeConsole = (type = "log") => {
    console[type](`Đây là type: ${type}`);
};
console.log(typeConsole("warn"));
console.log(typeConsole());