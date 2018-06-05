(function(){
	const navToggle = document.getElementsByClassName('navToggle');
	const nav = document.getElementById('mainNav');

	for( let btn of navToggle ){
		btn.addEventListener('click', () =>{
			nav.classList.toggle('open');
		});
	}
})();