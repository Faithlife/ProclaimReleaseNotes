---
title: Proclaim 1.21 Release Notes
---

# Proclaim Version 1.21

### 1.21.0.0397 Tuesday, April 15, 2014
#### Bug Fixes
* Fixed bug where the translation used on an On-Screen Bible Item was not being preserved. The translation used is now preserved correctly.
* Fixed bug where pressing F8 on Windows (when the ‘no text’ quickscreen is absent) caused Proclaim to crash.

#### Changes
* New groups now receive a 30 day Proclaim Pro Media trial.

### 1.21.0.0386 Monday, March 17, 2014
#### Bug Fixes
* Fixed bug where non-latin text was not getting rendered correctly.
* Improved importing powerpoint presentations on Mac.
* Increased delay before regenerating slides. This should help performance when changing text on slides.

### 1.21.0.0382 Tuesday, March 11, 2014
#### Bug Fixes
* Improvements to how purchasable products are displayed
* Fix for bug preventing pre-service loop from looping when all items in pre-service loop
* Fixes for Timeline and Order of Service related focus issues
* Fix for Windows full screen issue causing white line to show at bottom of screen

### 1.21.0.0380 Monday, March 3, 2014
#### Bug Fixes
* Fixed text rendering bug related to negative font spacing.
* Fixed presentation control focus issue after clicking quick screen button.
* Properly handling authenticated access to Bibles on Mac
* Fixed issue preventing previously linked Graceway accounts from showing up in link accounts UI.

### 1.21.0.0372 Wednesday, February 26, 2014
#### Bug Fixes
* Fixed bug related to slide rendering which sometimes caused incorrect slides to be rendered (would not update the slides correctly).
* Fixed memory leak on Mac which caused crashes when dealing with large presentations.
* Fixed timeline bug on Windows where the hot key overlay was not showing. Hot keys now show on slides in the timeline that are applicable.

### 1.21.0.0370 Tuesday, February 25, 2014
#### Bug Fixes
* Fixed infrequently occurring crash related to open presentation menu
* Fixed crash related to .NET framework upgrade and lack of internet connectivity

#### Enhancements
* Decision to skip specific update on Windows remembered for seven days

### 1.21.0.0368 Tuesday, February 25, 2014
#### Bug Fixes
* Fixed bug where ‘continue free trial’ button was not showing up during start up. The button shows correctly now.
* Fixed Timeline bug on Windows where the timeline would not scroll the current item into view.
* Fixed crash related to uninstalling Proclaim OLD VERSION

### 1.21.0.0361 Monday, February 24, 2014
#### Changes
* Rewrote the slide rendering code to make it cross platform (Mac and Windows), ensuring identical layout and rendering on each platform.
* Moved away from the antiquated and unreliable ClickOnce installer technology to a more traditional Windows installer. This change should eliminate the corrupt installation problem that has been plaguing Proclaim users on Windows.
* Moved from .NET 3.5 to .NET 4.5, which is performed automatically by the installer. This should provide performance increases as well as allow us to take advantage of new features in the framework.
* Moved to FlatUI. This gives the UI a bit of a makeover, moving towards a more modern and flat look. The timeline has been moved beneath the order of service to provide more horizontal space.
* All Bible reference parsing and rendering is now Bible language aware. For example, if you’re using the Spanish RVR Bible then you can now enter “Juan 1.1”. Not only will the reference be parsed correctly but it will also be displayed as “Juan 1.1”.
* Added a new quick screen which renders a Bible reference entered on the fly using the OSB service item.
* Added setting to On Screen Bible service items to optionally show the Bible version, similar to Bible service items.
* Change to preserve service item customization when changing backgrounds.
* Added right click context menu to song entry helper, allowing users to remove songs from their My Songs section.
* Changed navigation logic to advance past the pre-service loop when user manually navigates. Automatic playback will continue to loop until the appropriate time (dependent on the service start time).
* Added context menu option to remove group uploaded audio files.
* Added ability to specify auto-advance time for PPT driven items.
* Updated ‘getting started’ video to match the FlatUI changes.

#### Bug Fixes
* Fixed some issues related to improperly constructed reference display text.
* Fixed bug causing dismissed toast message from reappearing.
* Fixed bug where video uploads would get to 99% and then fail.
* Fixed bugs with the first run wizard on Windows.
* Fixed bug on Mac where preset font styles did not work.
