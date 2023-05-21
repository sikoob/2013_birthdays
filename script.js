//get necessary time elements
const currentDate =new Date();

const diodaysElement =document.getElementById('dio_days');
let dionewDate = `8 Aug ${new Date().getFullYear()}`

const oridaysElement =document.getElementById('ori_days');
let orinewDate = `29 May ${new Date().getFullYear()}`

const kikidaysElement =document.getElementById('kiki_days');
let kikinewDate = `11 Aug ${new Date().getFullYear()}`

const helgadaysElement =document.getElementById('helga_days');
let helganewDate = `9 Oct ${new Date().getFullYear()}`

const katjadaysElement =document.getElementById('katja_days');
let katjanewDate = `30 Nov ${new Date().getFullYear()}`

const tessadaysElement =document.getElementById('tessa_days');
let tessanewDate = `25 May ${new Date().getFullYear()}`

const anjadaysElement =document.getElementById('anja_days');
let anjanewDate = `10 Sep ${new Date().getFullYear()}`

const alexdaysElement =document.getElementById('alex_days');
let alexnewDate = `27 Feb ${new Date().getFullYear()}`

const simondaysElement =document.getElementById('simon_days');
let simonnewDate = `9 Aug ${new Date().getFullYear()}`


function countdown_dio () {
    if (new Date(dionewDate) - currentDate <0) {
        dionewDate = `8 Aug ${new Date().getFullYear() +1}`
    }
    const dionewDate2 = new Date(dionewDate);

    const diototalSeconds =(dionewDate2 - currentDate)/ 1000;

    if (diototalSeconds >= 0) {

    const days = Math.floor(diototalSeconds / 3600 / 24); /* Math.floor sets full number */

    diodaysElement.innerHTML = days;

    } else {
    diodaysElement.innerHTML = 0;
    };
}

function countdown_ori () {
    if (new Date(orinewDate) - currentDate <0) {
        orinewDate = `29 May ${new Date().getFullYear() +1}`
    }
    const orinewDate2 = new Date(orinewDate);

    const oritotalSeconds =(orinewDate2 - currentDate)/ 1000;

    if (oritotalSeconds >= 0) {

    const days = Math.floor(oritotalSeconds / 3600 / 24); /* Math.floor sets full number */

    oridaysElement.innerHTML = days;

    } else {
    oridaysElement.innerHTML = 0;
    };
}

function countdown_kiki () {
    if (new Date(kikinewDate) - currentDate <0) {
        kikinewDate = `11 Aug ${new Date().getFullYear() +1}`
    }
    const kikinewDate2 = new Date(kikinewDate);

    const kikitotalSeconds =(kikinewDate2 - currentDate)/ 1000;

    if (kikitotalSeconds >= 0) {

    const days = Math.floor(kikitotalSeconds / 3600 / 24); /* Math.floor sets full number */

    kikidaysElement.innerHTML = days;

    } else {
    kikidaysElement.innerHTML = 0;
    };
}

function countdown_helga () {
    if (new Date(helganewDate) - currentDate <0) {
        helganewDate = `9 Oct ${new Date().getFullYear() +1}`
    }
    const helganewDate2 = new Date(helganewDate);

    const helgatotalSeconds =(helganewDate2 - currentDate)/ 1000;

    if (helgatotalSeconds >= 0) {

    const days = Math.floor(helgatotalSeconds / 3600 / 24); /* Math.floor sets full number */

    helgadaysElement.innerHTML = days;

    } else {
    helgadaysElement.innerHTML = 0;
    };
}

function countdown_katja () {
    if (new Date(katjanewDate) - currentDate <0) {
        katjanewDate = `30 Nov ${new Date().getFullYear() +1}`
    }
    const katjanewDate2 = new Date(katjanewDate);

    const katjatotalSeconds =(katjanewDate2 - currentDate)/ 1000;

    if (katjatotalSeconds >= 0) {

    const days = Math.floor(katjatotalSeconds / 3600 / 24); /* Math.floor sets full number */

    katjadaysElement.innerHTML = days;

    } else {
    katjadaysElement.innerHTML = 0;
    };
}

function countdown_tessa () {
    if (new Date(tessanewDate) - currentDate <0) {
        tessanewDate = `25 May ${new Date().getFullYear() +1}`
    }
    const tessanewDate2 = new Date(tessanewDate);

    const tessatotalSeconds =(tessanewDate2 - currentDate)/ 1000;

    if (tessatotalSeconds >= 0) {

    const days = Math.floor(tessatotalSeconds / 3600 / 24); /* Math.floor sets full number */

    tessadaysElement.innerHTML = days;

    } else {
    tessadaysElement.innerHTML = 0;
    };
}

function countdown_anja () {
    if (new Date(anjanewDate) - currentDate <0) {
        anjanewDate = `10 Sep ${new Date().getFullYear() +1}`
    }
    const anjanewDate2 = new Date(anjanewDate);

    const anjatotalSeconds =(anjanewDate2 - currentDate)/ 1000;

    if (anjatotalSeconds >= 0) {

    const days = Math.floor(anjatotalSeconds / 3600 / 24); /* Math.floor sets full number */

    anjadaysElement.innerHTML = days;

    } else {
    anjadaysElement.innerHTML = 0;
    };
}

function countdown_alex () {
    if (new Date(alexnewDate) - currentDate <0) {
        alexnewDate = `27 Feb ${new Date().getFullYear() +1}`
    }

    const alexnewDate2 = new Date(alexnewDate);

    const alextotalSeconds =(alexnewDate2 - currentDate)/ 1000;

    if (alextotalSeconds >= 0) {

    const days = Math.floor(alextotalSeconds / 3600 / 24); /* Math.floor sets full number */

    alexdaysElement.innerHTML = days;

    } else {
    alexdaysElement.innerHTML = 0;
    };
}

function countdown_simon () {
    if (new Date(simonnewDate) - currentDate <0) {
        simonnewDate = `9 Aug ${new Date().getFullYear() +1}`
    }
    const simonnewDate2 = new Date(simonnewDate);

    const simontotalSeconds =(simonnewDate2 - currentDate)/ 1000;

    if (simontotalSeconds >= 0) {

    const days = Math.floor(simontotalSeconds / 3600 / 24); /* Math.floor sets full number */

    simondaysElement.innerHTML = days;

    } else {
    simondaysElement.innerHTML = 0;
    };
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;         /* if less than 10 time period remaining, show 0 infront */
}

//Initial call to get Miliseconds until New Years
countdown_dio();

//get Seconds until New Years
setInterval(countdown_dio, 1000);
setInterval(countdown_ori, 1000);
setInterval(countdown_kiki, 1000);
setInterval(countdown_katja, 1000);
setInterval(countdown_helga, 1000);
setInterval(countdown_tessa, 1000);
setInterval(countdown_anja, 1000);
setInterval(countdown_alex, 1000);
setInterval(countdown_simon, 1000);





