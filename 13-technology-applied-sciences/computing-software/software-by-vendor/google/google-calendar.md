# Google Calendar

tags #calendar #google


* https://www.howtogeek.com/781315/how-to-embed-google-calendar-on-a-website-or-blog/
* https://support.google.com/calendar/answer/41207?hl=en
* https://gist.github.com/tbalne/4112898
* https://developers.google.com/calendar/caldav/v2/guide

## Import

https://support.google.com/calendar/answer/37118?hl=en&co=GENIE.Platform%3DDesktop#zippy=%2Ccreate-or-edit-a-csv-file


## Embedding

## Tips

* Importing is quite easy
* Always add headers
  * "Start Date","Start Time","Location","Subject"
  * "Start date","Subject","All Day Event","Description"
* Cannot import recurring events. Must add each year. This is probably a good thing.
* If only a start time is entered, an end time of one hour later is assumed
* Any order of lines OK
* Can reload the same file multiple times with no duplicates

## Prompt

Extract the data from the PDF file and convert it into a CSV file

* The CSV file is be imported into Google Calendar.
* Use the examples below
* Assume all events end one hour after the start.
* All events occur between 10 a.m. and 5 p.m.
* Ignore: birthdays, Daily Activities, Out & About Schedule, Movies

## CSV

"Subject", "Start Date","Start Time","Location", "Description"
"Jason Myers: Sing-Along","11/15/2023","3:00 PM","Friendship Hall", "Nice sing-along"
"Teddy the Goldendoodle: SPCA visit","11/16/2023","1:30 PM","Friendship Hall"
"Ian Scarfe: Piano Concert","11/16/2023","3:00 PM","Morgan Parlor","excellent performer"
"Men's Group","2023-11-14","3:30 pm","Cottage"
"Stephen Camarota: Thanksgiving Happy Hour & Sing-Along","11/22/2023","3:00","Friendship Hall"
"DeYoung Presentation: Botticelli Drawings","11/30/2023","3:00","Friendship Hall"
"Lucretia Way","2023-11-28","3:00 pm","Morgan Parlor"

## 2025-08-09

* Many issues with the translation
* Try export to word then markdown first




