var timeEntries = "time_entries";
var url = document.URL;
url = url.substring(0, 36);

if (document.URL[document.URL.length - 1] != '/')
	timeEntries = "/time_entries";

var context = document.getElementById("watcher").parentNode
var time_entries_anchor = "<a href='" + document.URL + timeEntries + "'>Time Entries</a>";
if (document.URL.indexOf("time_entries") == -1)
	context.innerHTML = time_entries_anchor + context.innerHTML;
