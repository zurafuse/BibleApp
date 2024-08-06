# Path to the XML file
$xmlFilePath = ".\TempHebDictionary.xml"

# Load the XML file
[xml]$xml = Get-Content -Path $xmlFilePath

# Iterate through each entry node and create a custom object
$verses = foreach ($entry in $xml.entries.entry) {
		[PSCustomObject]@{
			Usage    = $entry.usage
			Meaning = $entry.meaning.InnerText
		}				
}

# Output the employee objects
$verses

$xml.entries.entry[620].meaning."#text".ToString().Replace(", ", "")

