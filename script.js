const highlightBox = document.querySelector("#highlights");
const highlights = ["Connect with Proffesional Software Developers In the Industry", "Hone your Software Development Skills Through Projects with your Peers", "Learn Extracurricular Development Skills Through Workshops", "\n\n"];
const highlightImages = ["", "", "", "images/sdc-logo-transparent.png"];
// Note that one of the highlights is intentionally blank
// hightlights needs to have same length as highlightImages
// Can add pictures to other slides as well, but currently do not have any
highlightBox.innerText = highlights[0];
highlightBox.style.backgroundImage = 'url("' + highlightImages[0] + '")';
let h = 0;
let prev;
let alpha = 1;
let toTransparent = true;
function paintHighlight(time) {
    if (prev === undefined)
        prev = time;
    const delta = time - prev;
    const v = delta / 4000;
    const a = Number(highlightBox.style.opacity);
    if (a <= 0) {
        toTransparent = false;
        h = (h + 1) % highlights.length;
        highlightBox.innerText = highlights[h];
        highlightBox.style.backgroundImage = `url("${highlightImages[h]}")`;
    } else if (a >= 1) {
        toTransparent = true;
    }
    if (toTransparent) {
        highlightBox.style.opacity = Math.max(0, a - v);
    } else {
        highlightBox.style.opacity = Math.min(1, a + v);
    }
    prev = time;
    window.requestAnimationFrame(paintHighlight);
}
window.requestAnimationFrame(paintHighlight);