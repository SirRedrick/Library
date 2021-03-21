const library = [];

export default function Book(author, title, pages, isRead = false) {
	this.author = author;
	this.title = title;
	this.pages = pages;
	this.isRead = isRead;
}
