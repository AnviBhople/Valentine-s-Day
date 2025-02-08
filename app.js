function showFlowers() {
	document.getElementById("garden").style.bottom = "20rem";
	createHearts();

	setTimeout(() => {
		document.getElementById("valentineBtn").innerHTML =
			"You are my Valentine for life now!! ❤️";
	}, 1500);
}

function createHearts() {
	for (let i = 0; i <= 10; i++) {
		let heart = document.createElement("div");
		heart.innerHTML = "❤️❤️  ❤️❤️";
		heart.classList.add("heart");
		heart.style.left = Math.random() * window.innerWidth + "px";
		heart.style.animationDuration = Math.random() * 2 + 2 + "s";
		document.body.appendChild(heart);
	}
}

setTimeout(showFlowers, 1000);
