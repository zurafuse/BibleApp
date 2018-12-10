var book = "";
var bookChapter;
var currentChapter = 0;

//Populate Bible menu with books.
for (i = 0; i < Bible.Torah.BOOKS.length; i++)
{
	$(".bible-menu").append("<option>" + Bible.Torah.BOOKS[i].bname + "</option>");
}

for (i = 0; i < Bible.Prophets.BOOKS.length; i++)
{
	$(".bible-menu").append("<option>" + Bible.Prophets.BOOKS[i].bname + "</option>");
}

$(".bible-menu").append("<option>Psalms</option>");

for (i = 0; i < Bible.Ketuvim.BOOKS.length; i++)
{
	$(".bible-menu").append("<option>" + Bible.Ketuvim.BOOKS[i].bname + "</option>");
}

for (i = 0; i < Bible.Gospel.BOOKS.length; i++)
{
	$(".bible-menu").append("<option>" + Bible.Gospel.BOOKS[i].bname + "</option>");
}

for (i = 0; i < Bible.NewTestament.BOOKS.length; i++)
{
	$(".bible-menu").append("<option>" + Bible.NewTestament.BOOKS[i].bname + "</option>");
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

//get query parameter
var pageparam = window.location.search.substring(1).replace("%20", " ");
console.log(pageparam);

//Populate Bible menu with books, depending on what input parameter was passed to the page.
if (pageparam == "all" || pageparam == null || pageparam == undefined || pageparam == "")
{
	for (i = 0; i < Bible.Torah.BOOKS.length; i++)
	{
		$(".book-list").append("<li class='books-class'>" + Bible.Torah.BOOKS[i].bname + "</li>");
	}
	
	for (i = 0; i < Bible.Prophets.BOOKS.length; i++)
	{
		$(".book-list").append("<li class='books-class'>" + Bible.Prophets.BOOKS[i].bname + "</li>");
	}
	
	$(".book-list").append("<li class='books-class'>Psalms</li>");
	
	for (i = 0; i < Bible.Ketuvim.BOOKS.length; i++)
	{
		$(".book-list").append("<li class='books-class'>" + Bible.Ketuvim.BOOKS[i].bname + "</li>");
	}
	
	for (i = 0; i < Bible.Gospel.BOOKS.length; i++)
	{
		$(".book-list").append("<li class='books-class'>" + Bible.Gospel.BOOKS[i].bname + "</li>");
	}
	
	for (i = 0; i < Bible.NewTestament.BOOKS.length; i++)
	{
		$(".book-list").append("<li class='books-class'>" + Bible.NewTestament.BOOKS[i].bname + "</li>");
	}	
}

else if (pageparam == "torah")
{
	$(".book-list").append("<h3 class='lightGrey'>THE TORAH, THE BOOKS OF MOSES</h3>");
	for (i = 0; i < Bible.Torah.BOOKS.length; i++)
	{
		$(".book-list").append("<li class='books-class'>" + Bible.Torah.BOOKS[i].bname + "</li>");
	}	
}

else if (pageparam == "prophets")
{
	$(".book-list").append("<h3 class='lightGrey'>THE BOOKS OF THE PROPHETS</h3>");
	for (i = 0; i < Bible.Prophets.BOOKS.length; i++)
	{
		$(".book-list").append("<li class='books-class'>" + Bible.Prophets.BOOKS[i].bname + "</li>");
	}	
}

else if (pageparam == "psalms" || pageparam == "Pslams")
{
	bookChapter = Bible.Psalms.BOOKS;
	displayChapters(Bible.Psalms.BOOKS);	
}

else if (pageparam == "ketuvim")
{
	$(".book-list").append("<h3 class='lightGrey'>THE KETUVIM, THE HOLY WRITINGS</h3>");
	for (i = 0; i < Bible.Ketuvim.BOOKS.length; i++)
	{
		$(".book-list").append("<li class='books-class'>" + Bible.Ketuvim.BOOKS[i].bname + "</li>");
	}	
}

else if (pageparam == "gospels")
{
	$(".book-list").append("<h3 class='lightGrey'>THE BOOKS OF THE GOSPEL, THE GLAD TIDINGS OF JESUS THE MESSIAH</h3>");
	for (i = 0; i < Bible.Gospel.BOOKS.length; i++)
	{
		$(".book-list").append("<li class='books-class'>" + Bible.Gospel.BOOKS[i].bname + "</li>");
	}	
}

else if (pageparam == "nt")
{
	$(".book-list").append("<h3 class='lightGrey'>THE NEW TESTAMENT EPISTLES AND THE REVELATION</h3>");
	for (i = 0; i < Bible.NewTestament.BOOKS.length; i++)
	{
		$(".book-list").append("<li class='books-class'>" + Bible.NewTestament.BOOKS[i].bname + "</li>");
	}		
}

else if (pageparam == "Psalms" || pageparam == "psalms")
{
	bookChapter = Bible.Psalms.BOOKS;
	displayChapters(Bible.Psalms.BOOKS);
}

else if (pageparam == "Jude" || pageparam == "Obadiah" || 
	pageparam == "2 John" || pageparam == "3 John" || pageparam == "Philemon")
	{
		book = pageparam;
		if (pageparam != "Obadiah")
		{
			for (i = 0; i < Bible.NewTestament.BOOKS.length; i++)
			{	
				if (Bible.NewTestament.BOOKS[i].bname == pageparam)
				{
					bookChapter = Bible.NewTestament.BOOKS[i];
					displayVerses(Bible.NewTestament.BOOKS[i].CHAPTER);
				}
			}
		}
		if (pageparam == "Obadiah")
		{
			for (i = 0; i < Bible.Prophets.BOOKS.length; i++)
			{	
				if (Bible.Prophets.BOOKS[i].bname == pageparam)
				{
					bookChapter = Bible.Prophets.BOOKS[i];
					displayVerses(Bible.Prophets.BOOKS[i].CHAPTER);
				}
			}
		}	
	}

else
{
	book = pageparam;
	var trigger = false;
	//find defined book
	if (trigger == false)
	{
		for (i = 0; i < Bible.Torah.BOOKS.length; i++)
		{
			if (Bible.Torah.BOOKS[i].bname == book)
			{
				bookChapter = Bible.Torah.BOOKS[i];
				displayChapters(Bible.Torah.BOOKS[i]);
				trigger = true;
			}
		}	
	}
	
	if (trigger == false)
	{
		for (i = 0; i < Bible.Prophets.BOOKS.length; i++)
		{
			if (Bible.Prophets.BOOKS[i].bname == book)
			{
				bookChapter = Bible.Prophets.BOOKS[i];
				displayChapters(Bible.Prophets.BOOKS[i]);
				trigger = true;
			}
		}	
	}
	
	if (trigger == false)
	{
		for (i = 0; i < Bible.Ketuvim.BOOKS.length; i++)
		{
			if (Bible.Ketuvim.BOOKS[i].bname == book)
			{
				bookChapter = Bible.Ketuvim.BOOKS[i];
				displayChapters(Bible.Ketuvim.BOOKS[i]);
				trigger = true;
			}
		}	
	}
	
	if (trigger == false)
	{
		for (i = 0; i < Bible.Gospel.BOOKS.length; i++)
		{
			if (Bible.Gospel.BOOKS[i].bname == book)
			{
				bookChapter = Bible.Gospel.BOOKS[i];
				displayChapters(Bible.Gospel.BOOKS[i]);
				trigger = true;
			}
		}	
	}
	
	if (trigger == false)
	{
		for (i = 0; i < Bible.NewTestament.BOOKS.length; i++)
		{
			if (Bible.NewTestament.BOOKS[i].bname == book)
			{
				bookChapter = Bible.NewTestament.BOOKS[i];
				displayChapters(Bible.NewTestament.BOOKS[i]);
				trigger = true;
			}
		}	
	}
	
}
