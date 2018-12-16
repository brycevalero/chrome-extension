chrome.runtime.onInstalled.addListener(function() {
	console.log("INSTALLED");
});

chrome.bookmarks.onCreated.addListener(function(id, bookmark) {
	console.log("CREATED");
});

chrome.bookmarks.onRemoved.addListener(function(id, removeInfo) {
	console.log("REMOVED");
});

chrome.bookmarks.onChanged.addListener(function(id, changeInfo) {
	console.log("CHANGED");
});

chrome.bookmarks.onMoved.addListener(function(id, movedInfo) {
	console.log("MOVED");
});

chrome.bookmarks.onChildrenReordered.addListener(function(id, reorderInfo) {
	console.log("REORDERED");
});

chrome.bookmarks.onImportBegan.addListener(function() {
	console.log("IMPORT_BEGAN");
});

chrome.bookmarks.onImportEnded.addListener(function() {
	console.log("IMPORT_ENDED");
});
