var Book = function(isbn,title,author){
	this.setIsbn(isbn);
	this.setTitle(title);
	this.setAuthor(author);
}
Book.prototype = {
	checkIsbn:function(isbn){

	},
	getIsbn:function(){
		return this.isbn;
	},
	setIsbn:function(isbn){
		if(!this.checkIsbn(isbn)) throw new Error('Book : Invalid ISBN');
		this.isbn = isbn;
	},
	getTitle:function(){
		return this.title;
	},
	setTitle:function(title){
		this.title = title||'No title specified';
	},
	getAuthor:function(){
		return this.author;
	},
	setAuthor:function(author){
		this.author = author || 'No author specified';
	},
	display:function(){

	}

};