import "./_vendor";
import vars from "./_vars";
import "./_functions";
import "./_components";

vars.featuresLinks.forEach((link) => {
	link.addEventListener("click", () => {
		vars.featuresLinks.forEach((l) => {
			l.classList.remove("features__link-active");
		});
		link.classList.add("features__link-active");

		vars.featuresImages.forEach((i) => {
			i.classList.remove("features__image-active");
		});
		document
			.getElementById(link.getAttribute("data-img"))
			.classList.add("features__image-active");
	});
});

vars.btnBackward.addEventListener("click", () => {
	let currNum = document
		.querySelector(".clients__image-active")
		.getAttribute("data-number");
	if (currNum == 1) {
		document
			.getElementById("client1")
			.classList.remove("clients__image-active");
		document
			.getElementById("client4")
			.classList.add("clients__image-active");
	} else {
		document
			.getElementById("client" + currNum)
			.classList.remove("clients__image-active");
		document
			.getElementById("client" + (currNum - 1))
			.classList.add("clients__image-active");
	}
});

vars.btnForward.addEventListener("click", () => {
	let currNum = document
		.querySelector(".clients__image-active")
		.getAttribute("data-number");
	if (currNum == 4) {
		document
			.getElementById("client4")
			.classList.remove("clients__image-active");
		document
			.getElementById("client1")
			.classList.add("clients__image-active");
	} else {
		document
			.getElementById("client" + currNum)
			.classList.remove("clients__image-active");
		currNum++;
		document
			.getElementById("client" + currNum)
			.classList.add("clients__image-active");
	}
});

vars.popupTrigger.addEventListener("click", () => {
	vars.popup.classList.add("howWeWork__popup-visible");
	document.body.style.overflow = "hidden";
});

vars.popupClose.addEventListener("click", () => {
	vars.popup.classList.remove("howWeWork__popup-visible");
	document.body.style.overflow = "unset";
});
