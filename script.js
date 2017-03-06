document.querySelector("#form").addEventListener("submit", subscribe);

function subscribe(e) {
	e.preventDefault();
	var button = document.querySelector("#submitBtn");
	button.disabled = true;
	button.textContent = "Submitting";
	var emailField = document.querySelector('#emailField');
	var scriptEl = document.createElement('script');
	scriptEl.setAttribute("src","https://script.google.com/macros/s/AKfycby3_7LONYCYYund_SUuefsy7upmtsex8wSbFP43MK0m1DP9eqdT/exec?email="+emailField.value);
	document.body.appendChild(scriptEl);

	return false;
}

submissionResponse = function(){
	var content = document.querySelector("#email");
	content.innerHTML = "<small>Thanks for your interest! We'll keep you updated.</small>";
}