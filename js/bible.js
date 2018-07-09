var pageparam = window.location.search.substring(1);

var book = "";

//Populate Bible menu with books, depending on what input parameter was passed to the page.
if (pageparam == "all" || pageparam == null || pageparam == undefined)
{
	for (i = 0; i < Torah.BOOKS.length; i++)
	{
		$(".book-list").append("<li>" + Torah.BOOKS[i].bname + "</li>");
	}
	
	for (i = 0; i < Prophets.BOOKS.length; i++)
	{
		$(".book-list").append("<li>" + Prophets.BOOKS[i].bname + "</li>");
	}
	
	$(".book-list").append("<li>Psalms</li>");
	
	for (i = 0; i < Ketuvim.BOOKS.length; i++)
	{
		$(".book-list").append("<li>" + Ketuvim.BOOKS[i].bname + "</li>");
	}
	
	for (i = 0; i < Gospel.BOOKS.length; i++)
	{
		$(".book-list").append("<li>" + Gospel.BOOKS[i].bname + "</li>");
	}
	
	for (i = 0; i < NewTestament.BOOKS.length; i++)
	{
		$(".book-list").append("<li>" + NewTestament.BOOKS[i].bname + "</li>");
	}	
}

else if (pageparam == "torah")
{
	for (i = 0; i < Torah.BOOKS.length; i++)
	{
		$(".book-list").append("<li>" + Torah.BOOKS[i].bname + "</li>");
	}	
}

else if (pageparam == "prophets")
{
	for (i = 0; i < Prophets.BOOKS.length; i++)
	{
		$(".book-list").append("<li>" + Prophets.BOOKS[i].bname + "</li>");
	}	
}

else if (pageparam == "psalms")
{
	$(".book-list").append("<li>Psalms</li>");	
}

else if (pageparam == "ketuvim")
{
	for (i = 0; i < Ketuvim.BOOKS.length; i++)
	{
		$(".book-list").append("<li>" + Ketuvim.BOOKS[i].bname + "</li>");
	}	
}

else if (pageparam == "gospels")
{
	for (i = 0; i < Gospel.BOOKS.length; i++)
	{
		$(".book-list").append("<li>" + Gospel.BOOKS[i].bname + "</li>");
	}	
}

else if (pageparam == "nt")
{
	for (i = 0; i < NewTestament.BOOKS.length; i++)
	{
		$(".book-list").append("<li>" + NewTestament.BOOKS[i].bname + "</li>");
	}		
}

else
{
	var book = pageparam;
	//find defined book
	
	
}

