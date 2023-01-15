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
`;

blurry_node = document.head.appendChild(blurry_style);

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
	if (cat == "others"){
		document.head.removeChild(blurry_node);
		return;
	} 

	// Add style here
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
		// patch code 1
		if (cat == "scene"){
			preview_video = card.querySelector("video.scene-card-preview-video");
			if (preview_video !== null){
				preview_video.style.zIndex = "2";
			}
		}

		preview_image.style.position = "relative";
		preview_image.style.zIndex = "1";

		thumbnail_section.style.backgroundImage = "url(" + preview_image.src + ")";

    });
};

function getCat(){
	url = new URL(window.location.href);
	path = String(url.pathname);
	log("path:" + path);
	const catArray = path.match( /\/[a-z]+/ )
	if (catArray == null ) return "others";
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
