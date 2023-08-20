const nightmare = require('nightmare')()



checkPrice();


async function checkPrice() {
    try{
    const priceString = await nightmare
        .goto("https://www.amazon.com/Gigabyte-Graphics-WINDFORCE-GV-N4090GAMING-OC-24GD/dp/B0BGP8FGNZ")
        .wait(".a-offscreen")
        .evaluate (() => document.querySelector(".a-offscreen").innerText)
        .end();
    
    const priceNumber = parseFloat(priceString.replace('$','').replace(',',''));
    if (priceNumber<200){
        console.log("cheap");
    } else{
        console.log("expensive");
    }
} catch(error){
    console.error("An error occured:", error);
}
}