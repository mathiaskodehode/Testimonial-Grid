import { CreateElement } from "./helperFunctions.js";
import { main } from "./helperFunctions.js";
import { testimonials } from "./testimonial.js";

export function Init() {
    const container = CreateElement("div", {
        parent: main,
    });
    testimonials.forEach(t => {
        const testimonialContainer = CreateElement("div", {
            parent: container,
            class: "testimonialContainer",
        });
        // profile picture
        CreateElement("img", {
            parent: testimonialContainer,
            src: t.imageSrc,
            alt: "portrait of reivewer",
        });
        // name
        CreateElement("h2", {
            parent: testimonialContainer,
            innerText: t.userName,
        });
        // title
        CreateElement("h3", {
            parent: testimonialContainer,
            innerText: t.userTitle,
        });
        // content title
        CreateElement("h1", {
            parent: testimonialContainer,
            innerText: t.contentTitle,
        });
        // content body
        CreateElement("p", {
            parent: testimonialContainer,
            innerText: t.contentBody,
        });
    });
}
