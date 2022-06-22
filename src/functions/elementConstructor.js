class TextEl {
    constructor(content, type) {
        this.content = content;
        this.type = type;
    }

    renderElement() {
        const textElement = document.createElement(this.type.match(/^h[123456]|[^0-9]+/));
        textElement.textContent = this.content;

        return textElement;
    }
}

export default TextEl;