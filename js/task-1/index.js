function* fibonacci() {
    let [cur, next, forward] = [0, 1, true];
    while (true) {
        forward = yield cur;
        if (forward) [cur, next] = [next, cur + next]
        else[cur, next] = [next, cur - next]
    }
}

let fg = fibonacci();

document.querySelector("#generate").addEventListener("click", () => {
    const result = document.querySelector("#result");
    const direction = document.querySelector("#direction");
    result.value += `${fg.next(!direction.checked).value}\n`;
    result.scrollTop = result.scrollHeight;
})

document.querySelector("#direction").addEventListener("change", function () {
    fg.next(!this.checked);
    fg = fibonacci();
    document.querySelector("#result").value = "";
})