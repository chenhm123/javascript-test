var Book = function(newIsbn,newTitle,newAuthor){
	//private attributes
	var isbn,title,author;
	//private method
	function checkIsbn(isbn){}
	//privileged methods
	this.getIsbn = function(){
		return isbn;
	};
	this.setIsbn = function(newIsbn){
		if(!checkIsbn(newIsbn)) throw new Error('Book:Invalid ISBN.');
		isbn = newIsbn;
	};
	this.getTitle = function(){
		return title;
	};
	this.setTitle = function(newTitle){
		title = newTitle || 'No title specified';
	};
	this.getAuthor = function(){
		return author;
	};
	this.setAuthor = function(newAuthor){
		author = newAuthor|| 'No author specified';
	};
	this.setIsbn(newIsbn);
	this.setAuthor(newAuthor);
	this.setTitle(newTitle);
}
Book.prototype = {
	display:function(){}
}