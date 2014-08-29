---
title: Proclaim 1.24 Release Notes
---

# Proclaim Version 1.24

### 1.24.0.0507 (Mac only) Wednesday, August 27, 2014
* Updated Mac installer release notes link.

### 1.24.0.0506 Wednesday, August 27, 2014
* Fixed memory leak related to switching between service items in edit view.
* Updated Mac installer release notes link.

### 1.24.0.0503 Wednesday, August 27, 2014
* Reducing memory pressure.

### 1.24.0.0502 Tuesday, August 26, 2014
* Fixed code signing issue (Mac only)

### 1.24.0.0501 Tuesday, August 26, 2014
* On-Screen Bible reference parsing issue http://community.logos.com/forums/t/88251.aspx
* Fix for video uploads requiring transcoding
* Fix for non en-us cultures and the Chromium Embedded Framework

### 1.24.0.0499 Monday, August 25, 2014
* Switched from Awesomium to CEF. This will improve the performance of items and parts of the app that use embedded web browsers (Faithlife panel, webpage items, On-Screen Bible items, etc.)
* Added changeable Confidence Monitor settings. Under the ‘settings’ menu, there is now a ‘Confidence Monitor Settings’. This will allow the user to choose what shows up on the confidence monitor (Clock, item title, countdown, etc).
* UI and functionality changes to the Media Browser.
	* The ‘Featured’ Tab. This tab will advertise featured media series in an easy to see view as well as sponsored ministry channels (groups of media)
	* The Search Facets Column. We moved all Search facets (filters) to a column on the left of the media browser window. All of the Service Item and Media Type filters are located in this column.
	* Added two new Search facet types: Collections search facets and Ministry Channels Search facets. The Collections search facets allow the user to narrow down a search by a broad collection (such as all Pro Media or all Graceway content). Ministry Channel search facets narrow down the search to all media in the certain Ministry Channel chosen.
	* Added a ‘Clear Filters’ Button. Clears all applied search facets with one click.
	* Added a link to switch tabs when a search does not return any options.
* Fixing bug related to uploading media and that media not loading correctly offline. All backgrounds used will load correctly offline now.
* (Windows Only) Added a warning message to songs when lines are long enough to force text scaling. Notifies the user when text size is being affected by the length of a line an a verse.
* Fixed bug where copying and pasting certain text into a Song lyrics text box caused Proclaim to hang. Copying and pasting text into a Song item will work correctly now.
