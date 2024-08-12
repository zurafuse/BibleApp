# Path to the XML file
$xmlFilePath = ".\GreekBible.xml"
$fileName = "Greek.sql"
$filePath = "."
$contentPath = $filePath + "\" + $fileName
$PSDefaultParameterValues['Out-File:Encoding'] = 'utf8'
$PSDefaultParameterValues['*:Encoding'] = 'utf8'

$currentBook = 0
$currentChapter = 0

# Load the XML file
[xml]$xml = Get-Content -Path $xmlFilePath

$VerseList = @()
# Iterate through each entry node and create a custom object
foreach ($book in $xml.entries.BIBLEBOOK) {
	$currentBook = $book.bnumber
	foreach ($chapter in $book.CHAPTER){
		$currentChapter = $chapter.cnumber
		foreach ($verse in $chapter.VERS){
				$thisText = $verse.InnerText
				if ($thisText -eq $null -OR $thisText -eq ""){
					$thisText = $verse
					if ($thisText -eq $null){
						$thisText = ""
					}
				}
							
				$newObject = [PSCustomObject]@{
					text = $thisText
					chapter = $currentChapter
					book = $currentBook
					verse = $verse.vnumber
				}
				$VerseList += $newObject										
		}		
	}			
}

New-Item -Path $filePath -Name $fileName -ItemType "file" -Value "-- Creating INSERT statements for each verse.`r`n"
Clear-Content $contentPath

foreach ($item in $VerseList){			
			$thisText = $item.text.Replace("'", "''")
			$thisBook = $item.book
			$thisChapter = $item.chapter
			$thisVerse = $item.verse

	Add-Content -Path $contentPath -Value "INSERT INTO dbo.GRK VALUES (N'$thisText', $thisVerse, $thisChapter, $thisBook);"
}