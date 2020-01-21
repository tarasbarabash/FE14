(async () => {
    const json = await (await fetch("./htmlTree.json")).json();
    const body = document.querySelector("body");
    render(json, body);
})();

const notAttribute = ["htmlTag", "children", "innerHtml", "text"];

const render = (el, parent) => {
    if (!Array.isArray(el) && !el.children) {
        if (el.text) return parent.append(createText(el.text));
        else {
            let elem = document.createElement(el.htmlTag);
            setAttributes(el, elem);
            elem.append(createText(el.innerHtml));
            return parent.appendChild(elem);
        }

    } else {
        for (let e of el) {
            if (e.children) {
                let elem = document.createElement(e.htmlTag);
                setAttributes(e, elem);
                parent.appendChild(elem);
                render(e.children, elem);
            } else render(e, parent);
        }
    }
}
const createText = text => document.createTextNode(text);
const setAttributes = (attributes, e) => Object.entries(attributes).forEach(([k, v]) => !notAttribute.includes(k) && e.setAttribute(k, v));