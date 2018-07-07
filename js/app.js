
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
