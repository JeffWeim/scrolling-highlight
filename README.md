Welcome to Scrolling Highlight.

* This is not meant to be a lightweight solution, but rather a possible solution if AngularJS is already available to use and more of a POC
=============

## Getting Started
Note: Before using this library make sure you have included both [AngularJS](https://angularjs.org/) and [jQuery](https://jquery.com/) in your project.

Example of how to use:

```
<nav>
	<ul>
		<li ng-class="{'active': currentSection == 'section1'}">
			<a href="#section1">Section 1</a>
		</li>
		<li ng-class="{'active': currentSection == 'section2'}">
			<a href="#section2">Section 1</a>
		</li>
		<li ng-class="{'active': currentSection == 'section3'}">
			<a href="#section3">Section 1</a>
		</li>
	</ul>
</nav>
<section class="wrapper" scrolling-highlight="sections" scrolling-highlight-callback="setCurrentSection">
	<div id="section1"></div>
	<div id="section2"></div>
	<div id="section3"></div>
</section>
```

To make this work, ensure you have:
1. Added the `ng-class` directive to the elements you want highlight
2. Added `scrolling-highlight="sections"` and `scrolling-highlight-callback="setCurrentSection"` on the element wrapping your sections
3. Added the individual section id's to the markup
