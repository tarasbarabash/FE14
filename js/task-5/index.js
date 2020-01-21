(async () => {
    const posts = await (await fetch("https://jsonplaceholder.typicode.com/posts")).json();
    const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
    const container = document.querySelector("#posts");
    for (let { userId, id, title, body } of posts.slice(0, 10)) {
        const div = document.createElement("div");
        const h1 = createTextElement("h1", `${id}. ${title}`);
        const [{ name, username }] = users.filter(i => i.id === userId);
        const span = createTextElement("span", `Author: ${name} (@${username})`);
        const p = createTextElement("p", body);
        const comments = await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)).json();
        div.append(h1, span, p);
        comments.forEach(({ name, body }) => div.append(createTextElement("h4", `User: ${name} commented: `), createTextElement("p", body)))
        container.append(document.createElement("hr"), div);
    }
})();

const createTextElement = (el, text) => {
    const e = document.createElement(el)
    e.appendChild(document.createTextNode(text));
    return e;
};