export const main = document.querySelector("main") ?? CreateElement("main");

export function CreateElement(tag, options = {}) {
    const element = document.createElement(tag);
    if (options.parent instanceof HTMLElement) {
        options.parent.appendChild(element);
    } else {
        document.body.appendChild(element);
    }
    if (typeof options.class === "string") {
        element.classList.add(options.class);
    }
    if (typeof options.id === "string") {
        element.id = options.id;
    }
    if (typeof options.innerText === "string") {
        element.innerText = options.innerText;
    }
    if (typeof options.innerHTML === "string") {
        element.innerHTML = options.innerHTML;
    }
    if (typeof options.src === "string") {
        element.src = options.src;
    }
    if (typeof options.alt === "string") {
        element.alt = options.alt;
    }
    if (typeof options.href === "string") {
        element.href = options.href;
    }
    if (typeof options.for === "string") {
        element.htmlFor = options.for;
    }
    if (typeof options.type === "string") {
        element.type = options.type;
    }
    if (typeof options.name === "string") {
        element.name = options.name;
    }
    if (typeof options.placeholder === "string") {
        element.placeholder = options.placeholder;
    }
    if (typeof options.onclick === "function") {
        element.onclick = options.onclick;
    }
    if (typeof options.required === "boolean") {
        element.required = options.required;
    }
    return element;
}
