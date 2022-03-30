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
