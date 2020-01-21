const container = document.querySelector("#result");
const mask = document.querySelector("#mask");

const submitHandler = e => {
    e.preventDefault();
    container.innerHTML = "";
    const input = mask.value;
    const orderPairs = input.match(/(\d+[u,d])/g);
    if (!orderPairs) throw new Error("Invalid mask!");
    const digitsNum = orderPairs.length;
    let numbers = [];
    for (let i = 0; i < Math.pow(2, digitsNum); i++) numbers.push({ binary: i.toString(2).padStart(digitsNum, 0), decimal: i });
    numbers = numbers.map(i => {
        const { binary } = i;
        let coef = 0;
        binary.split("").forEach((a, index) => {
            const weight = orderPairs[index].match(/\d+/g)[0];
            const direction = orderPairs[index].indexOf("u") > -1;
            coef += parseInt(weight) * parseInt(a) * (direction ? 1 : -1);
        });
        return { coef, ...i };
    }).sort((a, b) => a.coef - b.coef);
    const table = document.createElement("table");
    const th = document.createElement("tr");
    Object.keys(numbers[0]).forEach(i => {
        const cell = document.createElement("th");
        switch (i) {
            case "coef":
                cell.innerText = "#";
                break;
            default:
                cell.innerHTML = i.substring(0, 1).toUpperCase() + i.substring(1, i.length);
        }
        th.appendChild(cell);
    });
    table.appendChild(th);
    numbers.forEach((element, index) => {
        const tr = document.createElement("tr");
        Object.keys(element).forEach(i => {
            const cell = document.createElement("td");
            cell.innerText = i === "coef" ? (index + 1) : element[i];
            tr.appendChild(cell);
        })
        table.appendChild(tr);
    });
    container.appendChild(table);
};

document.querySelector("#submit").addEventListener("click", submitHandler);