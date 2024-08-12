$Bible = Get-Content -Path "./WEB.xml"
$Book = 1
$Chapter = 1
$Verse = 0
$Text = ""
$VerseList = @()
$fileName = "Bible.sql"
$filePath = "."
$contentPath = $filePath + "\" + $fileName

foreach($line in $Bible){
	$thisLine = $line.toString().ToCharArray()
	foreach($letter in $thisLine){
        $Text += $letter
		#Write-Output ("Character is $letter")
        if ($letter -eq '>'){
            # At the close of a verse, truncate the vers end tag and add Verse to database
            if ($Text.Contains("</VERS>")){
                $Text = $Text.Replace("</VERS>", "")
                $VerseList += [pscustomobject]@{Book=$Book; Chapter=$Chapter; Verse=$Verse; Text=$Text}				
				$Text = ""
			}
			# Clear the text when a chapter or book has closed.
            elseif (($Text.Contains("</CHAPTER>")) -or ($Text.Contains("</BIBLEBOOK>"))){
				$Text = ""
			}
            #One Digit verse number
            elseif ($Text -match '<VERS vnumber="\d">'){
                $Verse = $Text[21].ToString()
                $Text = ""
            }
            #Two Digit verse number
            elseif ($Text -match '<VERS vnumber="\d\d">'){
                $Verse = $Text[21].ToString()
                $Verse += $Text[22].ToString()
                $Text = ""            
            }
            #Three Digit verse number
            elseif ($Text -match '<VERS vnumber="\d\d\d">'){
                $Verse = $Text[21].ToString()
                $Verse += $Text[22].ToString()
                $Verse += $Text[23].ToString()
                $Text = ""            
            }
            #One Digit chapter number
            elseif ($Text -match '<CHAPTER cnumber="\d">'){
                $Chapter = $Text[22].ToString()
                $Text = ""
            }
            #Two Digit chapter number
            elseif ($Text -match '<CHAPTER cnumber="\d\d">'){
                $Chapter = $Text[22].ToString()
                $Chapter += $Text[23].ToString()
                $Text = ""            
            }
            #Three Digit chapter number
            elseif ($Text -match '<CHAPTER cnumber="\d\d\d">'){
                $Chapter = $Text[22].ToString()
                $Chapter += $Text[23].ToString()
                $Chapter += $Text[24].ToString()
                $Text = ""            
            }
            #One Digit Book number
            elseif ($Text -match '<BIBLEBOOK bnumber="\d"'){
                $Book = $Text[22].ToString()
                $Text = ""
            }
            #Two Digit Book number
            elseif ($Text -match '<BIBLEBOOK bnumber="\d\d"'){
                $Book = $Text[22].ToString()
                $Book += $Text[23].ToString()
                $Text = ""            
            }			
        }
    }
}

New-Item -Path $filePath -Name $fileName -ItemType "file" -Value "-- Creating INSERT statements for each verse.`r`n"
Clear-Content $contentPath

Add-Content -Path $contentPath -Value "-- Creating INSERT statements for each verse."
Add-Content -Path $contentPath -Value "SET QUOTED_IDENTIFIER OFF"

foreach ($Scripture in $VerseList){
	$thisText = $Scripture.Text.Replace("'", "''")
	$thisBook = $Scripture.Book
	$thisChapter = $Scripture.Chapter
	$thisVerse = $Scripture.Verse
	Add-Content -Path $contentPath -Value "INSERT INTO dbo.WEB VALUES ('$thisText', $thisVerse, $thisChapter, $thisBook);"
}

Add-Content -Path $contentPath -Value "SET QUOTED_IDENTIFIER ON"