
export class Document {
    public title: string;
    private content: string;
    public author: string;

    constructor(title: string, content: string, author: string) {
        this.title = title;
        this.content = content;
        this.author = 'Anónimo';
    }

    clone(): Document {
        //No importa si es protect, private o public, siempre se podrá acceder a los atributos de la clase
        return new Document(this.title, this.content, this.author)
    }

    displayInfo(): void {
        console.log(`
            Title: ${this.title}
            Content: ${this.content}
            Author: ${this.author}
        `);
    }
}