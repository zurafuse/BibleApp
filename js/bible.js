var pageparam = window.location.search.substring(1).replace("%20", " ");
console.log(pageparam);

//Populate Bible menu with books, depending on what input parameter was passed to the page.
if (pageparam == "all" || pageparam == null || pageparam == undefined || pageparam == "")
{
	for (i = 0; i < Torah.BOOKS.length; i++)
	{
		$(".book-list").append("<li class='books-class'>" + Torah.BOOKS[i].bname + "</li>");
	}
	
	for (i = 0; i < Prophets.BOOKS.length; i++)
	{
		$(".book-list").append("<li class='books-class'>" + Prophets.BOOKS[i].bname + "</li>");
	}
	
	$(".book-list").append("<li>Psalms</li>");
	
	for (i = 0; i < Ketuvim.BOOKS.length; i++)
	{
		$(".book-list").append("<li class='books-class'>" + Ketuvim.BOOKS[i].bname + "</li>");
	}
	
	for (i = 0; i < Gospel.BOOKS.length; i++)
	{
		$(".book-list").append("<li class='books-class'>" + Gospel.BOOKS[i].bname + "</li>");
	}
	
	for (i = 0; i < NewTestament.BOOKS.length; i++)
	{
		$(".book-list").append("<li class='books-class'>" + NewTestament.BOOKS[i].bname + "</li>");
	}	
}

else if (pageparam == "torah")
{
	for (i = 0; i < Torah.BOOKS.length; i++)
	{
		$(".book-list").append("<li class='books-class'>" + Torah.BOOKS[i].bname + "</li>");
	}	
}

else if (pageparam == "prophets")
{
	for (i = 0; i < Prophets.BOOKS.length; i++)
	{
		$(".book-list").append("<li class='books-class'>" + Prophets.BOOKS[i].bname + "</li>");
	}	
}

else if (pageparam == "psalms" || pageparam == "Pslams")
{
	bookChapter = Psalms.BOOKS;
	displayChapters(Psalms.BOOKS);	
}

else if (pageparam == "ketuvim")
{
	for (i = 0; i < Ketuvim.BOOKS.length; i++)
	{
		$(".book-list").append("<li class='books-class'>" + Ketuvim.BOOKS[i].bname + "</li>");
	}	
}

else if (pageparam == "gospels")
{
	for (i = 0; i < Gospel.BOOKS.length; i++)
	{
		$(".book-list").append("<li class='books-class'>" + Gospel.BOOKS[i].bname + "</li>");
	}	
}

else if (pageparam == "nt")
{
	for (i = 0; i < NewTestament.BOOKS.length; i++)
	{
		$(".book-list").append("<li class='books-class'>" + NewTestament.BOOKS[i].bname + "</li>");
	}		
}

else if (pageparam == "Psalms" || pageparam == "psalms")
{
	bookChapter = Psalms.BOOKS;
	displayChapters(Psalms.BOOKS);
}

else if (pageparam == "Jude" || pageparam == "Obadiah" || 
	pageparam == "2 John" || pageparam == "3 John" || pageparam == "Philemon")
	{
		book = pageparam;
		if (pageparam != "Obadiah")
		{
			for (i = 0; i < NewTestament.BOOKS.length; i++)
			{	
				if (NewTestament.BOOKS[i].bname == pageparam)
				{
					displayVerses(NewTestament.BOOKS[i].CHAPTER);
				}
			}
		}
		if (pageparam == "Obadiah")
		{
			for (i = 0; i < Prophets.BOOKS.length; i++)
			{	
				if (Prophets.BOOKS[i].bname == pageparam)
				{
					displayVerses(Prophets.BOOKS[i].CHAPTER);
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
		for (i = 0; i < Torah.BOOKS.length; i++)
		{
			if (Torah.BOOKS[i].bname == book)
			{
				bookChapter = Torah.BOOKS[i];
				displayChapters(Torah.BOOKS[i]);
				trigger = true;
			}
		}	
	}
	
	if (trigger == false)
	{
		for (i = 0; i < Prophets.BOOKS.length; i++)
		{
			if (Prophets.BOOKS[i].bname == book)
			{
				bookChapter = Prophets.BOOKS[i];
				displayChapters(Prophets.BOOKS[i]);
				trigger = true;
			}
		}	
	}
	
	if (trigger == false)
	{
		for (i = 0; i < Ketuvim.BOOKS.length; i++)
		{
			if (Ketuvim.BOOKS[i].bname == book)
			{
				bookChapter = Ketuvim.BOOKS[i];
				displayChapters(Ketuvim.BOOKS[i]);
				trigger = true;
			}
		}	
	}
	
	if (trigger == false)
	{
		for (i = 0; i < Gospel.BOOKS.length; i++)
		{
			if (Gospel.BOOKS[i].bname == book)
			{
				bookChapter = Gospel.BOOKS[i];
				displayChapters(Gospel.BOOKS[i]);
				trigger = true;
			}
		}	
	}
	
	if (trigger == false)
	{
		for (i = 0; i < NewTestament.BOOKS.length; i++)
		{
			if (NewTestament.BOOKS[i].bname == book)
			{
				bookChapter = NewTestament.BOOKS[i];
				displayChapters(NewTestament.BOOKS[i]);
				trigger = true;
			}
		}	
	}
	
}
