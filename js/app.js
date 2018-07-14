var book = "";
var bookChapter;
var currentChapter = 0;

//Populate Bible menu with books.
for (i = 0; i < Torah.BOOKS.length; i++)
{
	$(".bible-menu").append("<option>" + Torah.BOOKS[i].bname + "</option>");
}

for (i = 0; i < Prophets.BOOKS.length; i++)
{
	$(".bible-menu").append("<option>" + Prophets.BOOKS[i].bname + "</option>");
}

$(".bible-menu").append("<option>Psalms</option>");

for (i = 0; i < Ketuvim.BOOKS.length; i++)
{
	$(".bible-menu").append("<option>" + Ketuvim.BOOKS[i].bname + "</option>");
}

for (i = 0; i < Gospel.BOOKS.length; i++)
{
	$(".bible-menu").append("<option>" + Gospel.BOOKS[i].bname + "</option>");
}

for (i = 0; i < NewTestament.BOOKS.length; i++)
{
	$(".bible-menu").append("<option>" + NewTestament.BOOKS[i].bname + "</option>");
}

//pass book to bible page when selected.
$(".bible-menu").change(function() {
    var query = $(this).val();
	if (query != "SELECT A BOOK")
	{
		window.location.href = "bible.html?" + query;
	}
});

function displayChapters(biblebook){
	if (biblebook.bname == "Psalm")
	{
		$(".book-list").append("<h2>Psalms</h2>");
	}
	else
	{
		$(".book-list").append("<h2>" + biblebook.bname + "</h2>");
	}
	for (j = 0; j < biblebook.CHAPTER.length; j++)
	{
		$(".book-list").append("<li class='chapters'>CHAPTER " + biblebook.CHAPTER[j].cnumber + "</li>");
	}
}

//DISPLAY VERSES FUNCTION
function displayVerses(chapter){
	$(".verses").remove();
	$(".chapter-selection").remove();
	window.scrollTo(0, 0);
	currentChapter = parseInt(chapter.cnumber) - 1;
	
	//display "previous" and "next" buttons at bottom of page.
	//only display "previous chapter" if it is not the first chapter.
	if (currentChapter > 0 && bookChapter.CHAPTER.length > currentChapter + 1)
	{
		$(".book-list").append("<div class='row chapter-selection'><div class='col-sm-5'><li class='previous'>PREVIOUS CHAPTER</li></div><div class='col-sm-5'><li class='next'>NEXT CHAPTER</li></div></div>");
	}
	//only display "next chapter" if next chapter exists.
	else if (currentChapter == 0 && bookChapter.CHAPTER.length > currentChapter + 1)
	{
		$(".book-list").append("<div class='row chapter-selection'><div class='col-sm-5'><li></li></div><div class='col-sm-5'><li class='next'>NEXT CHAPTER</li></div></div>");
	}	
	//last chapter.
	else if (currentChapter > 0 && bookChapter.CHAPTER.length <= currentChapter + 1)
	{
		$(".book-list").append("<div class='row chapter-selection'><div class='col-sm-5'><li class='previous'>PREVIOUS CHAPTER</li></div><div class='col-sm-5'><li></li></div></div>");
	}
	//end of previous and next buttons	
	
	//Display Chapter number if there is more than one chapter. Otherwise, display book.
	if (bookChapter.bname == "Obadiah" || bookChapter.bname == "3 John" ||
		bookChapter.bname == "Philemon" || bookChapter.bname == "2 John" || 
		bookChapter.bname == "Jude")
	{
		$(".book-list").append("<h2 class='chapter-selection'>" + bookChapter.bname + "</h2>");
	}
	else
	{
		$(".book-list").append("<h2 class='chapter-selection'>CHAPTER " + chapter.cnumber + "</h2>");
	}
	
	//display chapter reference if it exists.
	if (chapter.CAPTION != undefined)
	{
		$(".book-list").append("<li class='verses'>" + chapter.CAPTION.text + "</li>");
	}
	//display all verses for the chapter.
	for (k = 0; k < chapter.VERS.length; k++)
	{
		if (chapter.VERS[k].trans == "true")
		{
			$(".book-list").append("<li class='verses translated' >" + chapter.VERS[k].vnumber + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + chapter.VERS[k].text + "</li>");
		}
		else
		{
			$(".book-list").append("<li class='verses untranslated' >" + chapter.VERS[k].vnumber + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + chapter.VERS[k].text + "</li>");
		}
	}
	
	//display "previous" and "next" buttons at bottom of page.
	//only display "previous chapter" if it is not the first chapter.
	if (currentChapter > 0 && bookChapter.CHAPTER.length > currentChapter + 1)
	{
		$(".book-list").append("<div class='row chapter-selection'><div class='col-sm-5'><li class='previous'>PREVIOUS CHAPTER</li></div><div class='col-sm-5'><li class='next'>NEXT CHAPTER</li></div></div>");
	}
	//only display "next chapter" if next chapter exists.
	else if (currentChapter == 0 && bookChapter.CHAPTER.length > currentChapter + 1)
	{
		$(".book-list").append("<div class='row chapter-selection'><div class='col-sm-5'><li></li></div><div class='col-sm-5'><li class='next'>NEXT CHAPTER</li></div></div>");
	}	
	//last chapter.
	else if (currentChapter > 0 && bookChapter.CHAPTER.length <= currentChapter + 1)
	{
		$(".book-list").append("<div class='row chapter-selection'><div class='col-sm-5'><li class='previous'>PREVIOUS CHAPTER</li></div><div class='col-sm-5'><li></li></div></div>");
	}
	//end of previous and next buttons
	
	$(".chapters").remove();

	//listen for someone to click the Previous chapter.
	$( ".previous" ).on("click", function() {
	displayVerses(bookChapter.CHAPTER[currentChapter - 1]);
	});
	
	setTimeout(function(){
		$(".previous").off("click");
		$( ".previous" ).on("click", function() {
		displayVerses(bookChapter.CHAPTER[currentChapter - 1]);
		});
	}, 500);
	
	setTimeout(function(){
		$(".previous").off("click");
		$( ".previous" ).on("click", function() {
		displayVerses(bookChapter.CHAPTER[currentChapter - 1]);
		});
	}, 1300);
	
	//listen for someone to click the Next chapter.	
	$( ".next" ).on("click", function() {
	displayVerses(bookChapter.CHAPTER[currentChapter + 1]);
	});
	
	setTimeout(function(){
		$(".next").off("click");
		$( ".next" ).on("click", function() {
		displayVerses(bookChapter.CHAPTER[currentChapter + 1]);
		});
	}, 500);
	
	setTimeout(function(){
		$(".next").off("click");
		$( ".next" ).on("click", function() {
		displayVerses(bookChapter.CHAPTER[currentChapter + 1]);
		});
	}, 1300);	
}


//listen for someone to click on a book of the Bible.
$( ".books-class" ).on("click", function() {
	window.location.href = "bible.html?" + $(this).text();
});

setTimeout(function(){
	$(".books-class").off("click");
	$( ".books-class" ).on("click", function() {
		window.location.href = "bible.html?" + $(this).text();
	});
});

setTimeout(function(){
	$(".books-class").off("click");
	$( ".books-class" ).on("click", function() {
		window.location.href = "bible.html?" + $(this).text();
	});
});

//listen for someone to click on a chapter.
$( ".chapters" ).on("click", function() {
  var chaptVal = parseInt($(this).text().replace("CHAPTER ", "")) - 1;
  displayVerses(bookChapter.CHAPTER[chaptVal]);
});

setTimeout(function(){
	$(".chapters").off("click");
	$( ".chapters" ).on("click", function() {
	var chaptVal = parseInt($(this).text().replace("CHAPTER ", "")) - 1;
	displayVerses(bookChapter.CHAPTER[chaptVal]);
	});
}, 500);

setTimeout(function(){
	$(".chapters").off("click");
	$( ".chapters" ).on("click", function() {
	var chaptVal = parseInt($(this).text().replace("CHAPTER ", "")) - 1;
  	displayVerses(bookChapter.CHAPTER[chaptVal]);
	});
}, 1300);
