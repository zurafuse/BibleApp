# Path to the XML file
$xmlFilePath = ".\TempHebDictionary.xml"
$fileName = "Dictionary.sql"
$filePath = "."
$contentPath = $filePath + "\" + $fileName

# Load the XML file
[xml]$xml = Get-Content -Path $xmlFilePath

# Iterate through each entry node and create a custom object
$words = foreach ($entry in $xml.entries.entry) {
		$thisID = $entry.id
		$thisPos = $entry.w.pos
		if ($thisPos -eq $null){
			$thisPos = ""
		}
				
		$thisNote = $entry.note.InnerText
		if ($thisNote -eq $null -OR $thisNote -eq ""){
			$thisNote = $entry.note
			if ($thisNote -eq $null){
				$thisNote = ""
			}
		}
		
		$thisSource = $entry.source.InnerText
		if ($thisSource -eq $null -OR $thisSource -eq ""){
			$thisSource = $entry.source
			if ($thisSource -eq $null){
				$thisSource = ""
			}
		}

		$thisUsage = $entry.usage.InnerText
		if ($thisUsage -eq $null -OR $thisUsage -eq ""){
			$thisUsage = $entry.usage
			if ($thisUsage -eq $null){
				$thisUsage = ""
			}
		}

		$thisMeaning = $entry.meaning.InnerText
		if ($thisMeaning -eq $null -OR $thisMeaning -eq ""){
			$thisMeaning = $entry.meaning
			if ($thisMeaning -eq $null){
				$thisMeaning = ""
			}
		}			
	
		[PSCustomObject]@{
			ID = $thisID
			Pos = $thisPos
			Pron = $entry.w.pron
			Xlit = $entry.w.xlit
			Langcode = "h"
			Lang = $entry.w.lang
			Word = $entry.w.InnerText
			Note = $thisNote
			Source = $thisSource
			Usage = $thisUsage
			Meaning = $thisMeaning
		}				
}

New-Item -Path $filePath -Name $fileName -ItemType "file" -Value "-- Creating INSERT statements for each word.`r`n"
Clear-Content $contentPath

foreach ($entry in $words){
			$thisID = $entry.ID
			$thisPos = $entry.Pos
			$thisPron = $entry.Pron.Replace("'", "''")
			$thisXLit = $entry.Xlit
			$ThisLangcode = "h"
			$thisLang = $entry.Lang
			$thisWord = $entry.Word
			$thisNote = $entry.Note.Replace("'", "''")
			$thisSource = $entry.Source.Replace("'", "''")
			$thisUsage = $entry.Usage.Replace("'", "''")
			$thisMeaning = $entry.Meaning.Replace("'", "''")
	Add-Content -Path $contentPath -Value "INSERT INTO dbo.Strongs VALUES ('$thisID', '$thisPos', '$thisPron', '$thisXLit', 'h', '$thisLang', N'$thisWord', '$thisNote', N'$thisSource', '$thisUsage', '$thisMeaning');"
}