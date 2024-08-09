# Path to the XML file
$xmlFilePath = ".\TempGrkDictionary.xml"
$fileName = "GrkDictionary.sql"
$filePath = "."
$contentPath = $filePath + "\" + $fileName

# Load the XML file
[xml]$xml = Get-Content -Path $xmlFilePath

# Iterate through each entry node and create a custom object
$words = foreach ($entry in $xml.entries.entry) {
		[PSCustomObject]@{
			id = $entry.strongs
			beta = $entry.greek.BETA
			pron = $entry.pronunciation.strongs
			Xlit = $entry.greek.translit
			word = $entry.greek.unicode
			strongsdef = $entry.strongs_def
			kjvdef = $entry.kjv_def
		}				
}

New-Item -Path $filePath -Name $fileName -ItemType "file" -Value "-- Creating INSERT statements for each word.`r`n"
Clear-Content $contentPath

foreach ($entry in $words){
			
			$thisStrongs = $entry.strongsdef.InnerText
			if ($thisStrongs -eq $null -OR $thisStrongs -eq ""){
				$thisStrongs = $entry.strongsdef
				if ($thisStrongs -eq $null){
					$thisStrongs = ""
				}
			}
			
			$thisKJV = $entry.kjvdef.InnerText
			if ($thisKJV -eq $null -OR $thisKJV -eq ""){
				$thisKJV = $entry.kjvdef
				if ($thisKJV -eq $null){
					$thisKJV = ""
				}
			}			
	
			$thisID = $entry.id[1]
			$thisBeta = $entry.beta.Replace("'", "''")
			$thisPron = $entry.pron.Replace("'", "''")
			$thisXLit = $entry.xlit.Replace("'", "''")
			$thisWord = $entry.word
			$thisStrongs = $thisStrongs.Replace("'", "''").Replace("`n", "")
			$thisKJV = $thisKJV.Replace("'", "''").Replace("`n", "")
	Add-Content -Path $contentPath -Value "INSERT INTO dbo.GrkStrongs VALUES ('$thisID', N'$thisBeta', N'$thisPron', N'$thisXLit', N'$thisWord', N'$thisStrongs', N'$thisKJV');"
}