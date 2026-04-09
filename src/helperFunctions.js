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
    return element;
}
