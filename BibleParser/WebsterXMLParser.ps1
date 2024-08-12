# Path to the XML file
$xmlFilePath = ".\WebsterStrongs.xml"
$fileName = "Concordance.sql"
$filePath = "."
$contentPath = $filePath + "\" + $fileName

$currentBook = 0
$currentChapter = 0

# Load the XML file
[xml]$xml = Get-Content -Path $xmlFilePath

$words = @()
# Iterate through each entry node and create a custom object
foreach ($book in $xml.entries.BIBLEBOOK) {
	$currentBook = $book.bnumber
	foreach ($chapter in $book.CHAPTER){
		$currentChapter = $chapter.cnumber
		foreach ($verse in $chapter.VERS){
			$wordIndex = 1
			foreach ($word in $verse.gr){
				$thisText = $word.InnerText
				if ($thisText -eq $null -OR $thisText -eq ""){
					$thisText = $word
					if ($thisText -eq $null){
						$thisText = ""
					}
				}
				
				$thisGR = $word.str.split(" ")
				foreach ($gr in $thisGR){			
					$newObject = [PSCustomObject]@{
						id = "H" + $gr
						verse = $verse.vnumber
						chapter = $currentChapter
						book = $currentBook
						text = $thisText
						instance = $wordIndex
					}
					$words += $newObject					
				}	
				$wordIndex += 1
			}			
		}		
	}			
}

New-Item -Path $filePath -Name $fileName -ItemType "file" -Value "-- Creating INSERT statements for each word.`r`n"
Clear-Content $contentPath

foreach ($item in $words){			
			$thisID = $item.id
			$thisVerse = $item.verse
			$thisChapter = $item.chapter
			$thisBook = $item.book
			$thisEng = $item.text
			$thisInstance = $item.instance
	Add-Content -Path $contentPath -Value "INSERT INTO dbo.WebsterStrongs VALUES ('$thisID', $thisVerse, $thisChapter, $thisBook, N'$thisEng', $thisInstance);"
}