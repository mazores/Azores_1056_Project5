(() => {
	console.log('fired!');


	let mobileNav = document.querySelector('.nav'),
		navPanel = document.querySelector('#burgerCon'),

		//select all of the nav panel anchor tags (the a element)
		navLinks = navPanel.querySelectorAll('a');

	function toggleNav(event) {
		// e is the event object by default, anchor tags try to navigate somewhere (this is built-in functionality)
		// we dont want that to happen
		// // so prevent that default behaviour and write your wown
		event.preventDefault();


		// testing purposes remove when u have things working
		console.log('should show nav dropdown');
		
		// should only fire when u click on an anchor tag
		// and it has default nodename (look in inspector panel to find it()
		if (this.nodeName == "A") { 
			debugger;
			//we clicked on an achor tag so do some navigation
			//window.scrollTo({
				//we can ask the window to scroll to an element on the page => smoothscroll effect
			//	top: this.offsetTop,
			//	behavior: 'smooth'
			//})
		}

		// make mobile nav wshow up when u click on nav link at top right
		// and make it go away again on a second click (so - toogle)
		navPanel.classList.toggle('show-mobile-nav');
	}

	mobileNav.addEventListener('click', toggleNav);
	navLinks.forEach(link => link.addEventListener('click', toggleNav));
	//navPanel.addEventListener('click', toggleNav);

})();