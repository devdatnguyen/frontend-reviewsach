class AddBookRequest {
    title: string;
    author: string;
    description: string;
    copies: number;
    category: string;
    img?: string;

    constructor(title: string, author: string, description: string, copies: number, category: string) {
        this.title = title;
        this.author = author;
        this.category = category;
        this.copies = copies;
        this.description = description;
    }
}

export default AddBookRequest;