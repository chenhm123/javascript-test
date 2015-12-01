var Book = (function(){
	var numOfBooks = 0;
	function checkIsbn(isbn){}
	return function(newIsbn,newTitle,newAuthor){
		var isbn,title,author;
		this.getIsbn = function(){
			return isbn;
		};
		this.setIsbn = function(newIsbn){
			/*if(!checkIsbn(newIsbn)) throw new Error('Book:Invalid ISBN');*/
			isbn = newIsbn;
		};
		this.getTitle = function(){
			return title;
		};
		this.setTitle = function(newTitle){
			title = newTitle || 'No title sepcified';
		};
		this.getAuthor = function(){
			return author;
		};
		this.setAuthor = function(newAuthor){
			author = newAuthor ||'No author specified';
		};

		//Constructor code.
		numOfBooks++;
		if(numOfBooks>50) throw new Error();

		this.setIsbn(newTitle);
		this.setTitle(newTitle);
		this.setAuthor(newAuthor);
	}
})();
Book.convertToTitleCase = function(inputString){

};
Book.prototype = {
	display:function(){
		
	}
}