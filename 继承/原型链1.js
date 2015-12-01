function Author(name,book){
	Person.call(this,name);
	this.book = book;
}
Author.prototype = new Person();
Author.prototype.contructor = Author;
Author.prototype.getBooks = function(){
	return this.books;
}