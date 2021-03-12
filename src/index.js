module.exports = function check(str, bracketsConfig) {
    const open = [];
    const close = [];
    bracketsConfig.forEach((el) => {
        open.push(el[0]);
        close.push(el[1]);
    });

    const arr = str.split("");
    acc = [];

    for (let el of arr) {
        if (acc[acc.length - 1] === el) {
            acc.pop();
        } else if (open.includes(el)) {
            const index = open.indexOf(el);
            acc.push(close[index]);
        } else if (acc.length === 0) {
            return false;
        }
    };

    return acc.length === 0;
};
