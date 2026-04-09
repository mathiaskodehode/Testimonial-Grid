import { CreateElement } from "./helperFunctions.js";
import { main } from "./helperFunctions.js";
import { testimonials } from "./testimonial.js";

export function Init() {
    const container = CreateElement("div", {
        parent: main,
        class: "testimonials",
    });
    testimonials.forEach(t => {
        const testimonial = CreateElement("div", {
            parent: container,
        });
        const profileContainer = CreateElement("div", { parent: testimonial, class: "profile" });
        // profile picture
        CreateElement("img", {
            parent: profileContainer,
            src: t.imageSrc,
            alt: "portrait of reivewer",
        });
        const nameAndTitleContainer = CreateElement("div", { parent: profileContainer });
        // name
        CreateElement("h2", {
            parent: nameAndTitleContainer,
            innerText: t.userName,
        });
        // title
        CreateElement("p", {
            parent: nameAndTitleContainer,
            innerText: t.userTitle,
        });
        // content title
        CreateElement("h1", {
            parent: testimonial,
            innerText: t.contentTitle,
        });
        // content body
        CreateElement("p", {
            parent: testimonial,
            innerText: `" ${t.contentBody} "`,
        });
    });
}
