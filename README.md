# Project Overview

In this project is about a web-based application that reads RSS feeds. The application loads feeds from four different content providers with the frontend showing these feeds in separate pages (one for each feed). The user can select from a side hidden menu which feed is showing in the screen.
The project has 7 tests using the Jasmine framework.


# What is tested in this project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". In this project there are 7 specs divided in 4 testing suites. It tests that

The RSS Feeds
    are defined
    have a URL defined and the URL is not empty
    have a Name defined and the name is not empty

The Menu
    is hidden by default on load
    should be visible when clicked and hidden when clicked again

The Initial Entries
    that the loading feed has at least one entry on load

The New Feed Selection
    ensures that content actually changes on new feed load


# How to run the application?

You can download or clone the application through [GitHub](https://github.com/Elmarrow/FEND-Feedreader-Testing).
To successfully run the application you need to open index.html in your browser and navigate through side navigation menu.