/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */

    describe("RSS Feeds", function() {
        /* This first test, it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */
        it("are defined", function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This is a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it("have a URL defined and the URL is not empty", function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        /* This is a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it("have a Name defined and the name is not empty", function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    /* This is a test suite named "The menu" */
    describe("The Menu", function() {
        /* It is a test that ensures the menu element is
         * hidden by default.
         */
        
        it("is hidden by default on load", function() {
            expect($("body").hasClass("menu-hidden")).toBe(true);
         });
         /* This test ensures that the menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it("should be visible when clicked and hidden when clicked again", function() {
            const menu = document.querySelector(".menu-icon-link");
            menu.click();
            expect(document.body.className).not.toContain("menu-hidden");

            menu.click();
            expect(document.body.className).toContain("menu-hidden");
        });
    });
    /* This is a new test suite named "Initial Entries" */
    describe("Initial Entries", function() {

        /* This test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done) {
			loadFeed(0, done);
        });
        
        it("Loading feed has at least one entry on load", function(){
            expect($(".feed .entry").length).toBeGreaterThan(0);
        });
    });
    /* This is a new test suite named "New Feed Selection" */
    describe("New Feed Selection", function(){
    
        /* This is a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        let originalfeed, updatedfeed;
		beforeEach(function(done) {
			loadFeed(0, function() {
				originalfeed = ($(".feed").html());
				loadFeed(1, function() {
					updatedfeed = ($(".feed").html());
					done();	
				});
			});
        });
        
        it("ensures that content actually changes on new feed load", function(){
            expect(originalfeed).not.toBe(updatedfeed);
        });
    });
}());
