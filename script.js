var timeEntries = "time_entries";
var url = document.URL;
url = url.substring(0, 36);

if (document.URL[document.URL.length - 1] != '/')
	timeEntries = "/time_entries";

if (url == 'http://support.utiliflex.com/issues/')
	if (document.URL.indexOf("time_entries") == -1)
		if (document.getElementById("content").children[0].className.contains("contextual") == -1)
			document.getElementById("content").children[0].innerHTML = "<a href='" + document.URL + timeEntries + "'>Time Entries</a>" + document.getElementById("content").children[1].innerHTML;
		else
			document.getElementById("content").children[0].innerHTML = "<a href='" + document.URL + timeEntries + "'>Time Entries</a>" + document.getElementById("content").children[0].innerHTML;
