// named export
export let name = 'ali'
export function greet(name) {
    console.log(`hi ${name}`);
}


// object export
let family = "Josefin";
function seyHi (){
    console.log('hi')
}
export {family, seyHi};

// default
// اگر فقط همین یدونه هست که میخوای خروجی بگری حالا چه متغیر چه فانکش این روش توصیه میشه
export default function dude() {
    console.log(`hi dude`);
}
