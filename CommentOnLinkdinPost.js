let dataDiv = document.querySelectorAll('[class^="comments-comment-social-bar__reply-action-button hoverable-link-text button reply ember-view"]');
	i = 0;
	[...dataDiv].forEach(elem => {
					console.log("done "+i);
					elem.offsetParent.querySelector('[aria-label^="Reply to "]').click();
					elem.offsetParent.querySelector('[aria-label^="Add a reply"]').textContent = "Testing";
					setTimeout(()=>{elem.offsetParent.querySelector('[class^="comments-comment-box__submit-button mt3 artdeco-button artdeco-button--1 artdeco-button--primary"]').click();
					}, 2000);	
					i++;
				});
