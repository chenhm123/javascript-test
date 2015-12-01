var Book = function(isbin,title,author){
	if(isbn == undefined) throw new Errow('Book constructor requires an isbn.');
	this.isbn = isbn;
	this.title = title || 'no title specified';
	this.author = author || 'no author specified';
}

Book.prototype.display = function(){
	...
};