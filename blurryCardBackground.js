/* Created by CJ|500+ TB Stash in Discord channel.
   This script will make each scene/movie/gallery/performer/studio card's background to be blurry.
   To use it, just copy and paste the code into Stash->Settings->Interface->Custome Javascript.
   Then refresh the browser.

   This script is intended to be use as the only script in the custom javascript setting.
*/

// settings
const debug = false;

function log(str){
	if(debug)console.log(str);
}
log("program starts.");
// style
const blurry_style = document.createElement("style");
blurry_style.innerHTML = `
.thumbnail-section::after {
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);

  content: "";
  display: block;
  position: absolute;
  width: 100%; height: 100%;
  top: 0;
}

.thumbnail-section {
    position: relative;
    background-position: center;
}

.scene-card-preview-image {
    position: relative;
    z-index: 1;
}
.movie-card-image {
    position: relative;
    z-index: 1;
}
.gallery-card-image {
    position: relative;
    z-index: 1;
}
.image-card-preview-image {
    position: relative;
    z-index: 1;
}
.performer-card-image {
    position: relative;
    z-index: 1;
}
`;

document.head.appendChild(blurry_style);

// wait for last elm of page
const blurry_config = { subtree: true, childList: true };
const blurry_WaitElm = "span[class^='filter-container']";	

const blurry_waitForElm = (selector) => {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });
        observer.observe(document.body, blurry_config);
    });
};

// initial
blurry_waitForElm(blurry_WaitElm).then(() => {
    addImageSource();
});

// route
let previousUrl = window.location.href;
const observer = new MutationObserver(function (mutations) {
	if (window.location.href !== previousUrl) {
		previousUrl = window.location.href;
		blurry_waitForElm(blurry_WaitElm).then(() => {
			addImageSource();
		});
	}
});

observer.observe(document, blurry_config);

// Main function.
function addImageSource() {
	cat = getCat();

	log( "cat:" + cat );
	if (cat == "others") return;

	log("adding images.")
	// Galleries?
    var cards = document.querySelectorAll("div[class^='" + cat +"-card ']");
	if (cards.length == 0) {
		if ( cat == "gallery" ){
			cat = "image";
			cards = document.querySelectorAll("div[class^='image-card ']");
		}else if(cat == "movie"){
			cat = "scene";
			cards = document.querySelectorAll("div[class^='scene-card ']");
		}
	}
	log("cards:" + cards.length)
    cards.forEach(card => {
        thumbnail_section = card.querySelector('.thumbnail-section');
		if (thumbnail_section === null ){
			log("no thumb section.");
			return;
		}
		switch (cat){
			case "gallery":
			case "movie":
			case "performer":
				preview_image = card.querySelector("img." + cat + "-card-image");
				break;
			default:
				preview_image = card.querySelector("img." + cat + "-card-preview-image");
		}
		if (preview_image === null){
			log( "preview image is null. " );
			return;
		}
        thumbnail_section.style.backgroundImage = "url(" + preview_image.src + ")"
    });
}
log("build013");
function getCat(){
	url = new URL(window.location.href);
	path = String(url.pathname);
	log("path:" + path);
	const catArray = path.match( /\/[a-z]+/ )
	if (catArray == null || catArray[0] == "/tags") return "others";
	if(catArray[0] == "/galleries") {
		return "gallery";
	}else{
		// get rid of the '/' in the beginning and "s" in the end
		cat = catArray[0].slice(1,-1);
		if (["scene", "movie", "image", "performer" ].indexOf(cat) !== -1)
			return cat;
		return "others";
	}
}
