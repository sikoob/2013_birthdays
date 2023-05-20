//get necessary time elements
const diodaysElement =document.getElementById('dio_days');
const diohoursElement =document.getElementById('dio_hours');
const diominutesElement =document.getElementById('dio_minutes');
const diosecondsElement =document.getElementById('dio_seconds');
let dionewDate = `8 Aug ${new Date().getFullYear()}`


const oridaysElement =document.getElementById('ori_days');
const orihoursElement =document.getElementById('ori_hours');
const oriminutesElement =document.getElementById('ori_minutes');
const orisecondsElement =document.getElementById('ori_seconds');
let orinewDate = `29 May ${new Date().getFullYear()}`

const kikidaysElement =document.getElementById('kiki_days');
const kikihoursElement =document.getElementById('kiki_hours');
const kikiminutesElement =document.getElementById('kiki_minutes');
const kikisecondsElement =document.getElementById('kiki_seconds');
let kikinewDate = `11 Aug ${new Date().getFullYear()}`

const helgadaysElement =document.getElementById('helga_days');
const helgahoursElement =document.getElementById('helga_hours');
const helgaminutesElement =document.getElementById('helga_minutes');
const helgasecondsElement =document.getElementById('helga_seconds');
let helganewDate = `9 Oct ${new Date().getFullYear()}`

const katjadaysElement =document.getElementById('katja_days');
const katjahoursElement =document.getElementById('katja_hours');
const katjaminutesElement =document.getElementById('katja_minutes');
const katjasecondsElement =document.getElementById('katja_seconds');
let katjanewDate = `30 Nov ${new Date().getFullYear()}`

const tessadaysElement =document.getElementById('tessa_days');
const tessahoursElement =document.getElementById('tessa_hours');
const tessaminutesElement =document.getElementById('tessa_minutes');
const tessasecondsElement =document.getElementById('tessa_seconds');
let tessanewDate = `25 May ${new Date().getFullYear()}`

const anjadaysElement =document.getElementById('anja_days');
const anjahoursElement =document.getElementById('anja_hours');
const anjaminutesElement =document.getElementById('anja_minutes');
const anjasecondsElement =document.getElementById('anja_seconds');
let anjanewDate = `10 Sep ${new Date().getFullYear()}`

const alexdaysElement =document.getElementById('alex_days');
const alexhoursElement =document.getElementById('alex_hours');
const alexminutesElement =document.getElementById('alex_minutes');
const alexsecondsElement =document.getElementById('alex_seconds');
let alexnewDate = `27 Feb ${new Date().getFullYear()}`

const simondaysElement =document.getElementById('simon_days');
const simonhoursElement =document.getElementById('simon_hours');
const simonminutesElement =document.getElementById('simon_minutes');
const simonsecondsElement =document.getElementById('simon_seconds');
let simonnewDate = `9 Aug ${new Date().getFullYear()}`


function countdown_dio () {
    const currentDate =new Date();
    const dionewDate2 = new Date(dionewDate);

    const diototalSeconds =(dionewDate2 - currentDate)/ 1000;

    if (diototalSeconds >= 0) {

    const days = Math.floor(diototalSeconds / 3600 / 24); /* Math.floor sets full number */
    const hours = Math.floor(((diototalSeconds/3600) % 24)); /* Module for hours here, how much is left until 24 is full */
    const minutes = Math.floor(diototalSeconds/60) % 60; /* Module for minutess here, how much is left until 60 is full*/
    const seconds = Math.floor(diototalSeconds) % 60;                 /* How much until 60 left */

    diodaysElement.innerHTML = days;
    diohoursElement.innerHTML = formatTime(hours);
    diominutesElement.innerHTML = formatTime(minutes);
    diosecondsElement.innerHTML = formatTime(seconds);

    } else {
    diodaysElement.innerHTML = 0;
    diohoursElement.innerHTML = 0;
    diominutesElement.innerHTML = 0;
    diosecondsElement.innerHTML = 0;
    };

    if (diototalSeconds > 0) {
        dioyear = new Date().getFullYear();
    } else {
        dioyear = new Date().getFullYear() +1;
    }
    dionewDate = `8 Aug ${dioyear}`;
}

function countdown_ori () {
    const currentDate =new Date();
    const orinewDate2 = new Date(orinewDate);

    const oritotalSeconds =(orinewDate2 - currentDate)/ 1000;

    if (oritotalSeconds >= 0) {

    const days = Math.floor(oritotalSeconds / 3600 / 24); /* Math.floor sets full number */
    const hours = Math.floor(((oritotalSeconds/3600) % 24)); /* Module for hours here, how much is left until 24 is full */
    const minutes = Math.floor(oritotalSeconds/60) % 60; /* Module for minutess here, how much is left until 60 is full*/
    const seconds = Math.floor(oritotalSeconds) % 60;                 /* How much until 60 left */

    oridaysElement.innerHTML = days;
    orihoursElement.innerHTML = formatTime(hours);
    oriminutesElement.innerHTML = formatTime(minutes);
    orisecondsElement.innerHTML = formatTime(seconds);

    } else {
    oridaysElement.innerHTML = 0;
    orihoursElement.innerHTML = 0;
    oriminutesElement.innerHTML = 0;
    orisecondsElement.innerHTML = 0;
    };

    if (oritotalSeconds > 0) {
        oriyear = new Date().getFullYear();
    } else {
        oriyear = new Date().getFullYear() +1;
    }
    orinewDate = `29 May ${oriyear}`;
}

function countdown_kiki () {
    const currentDate =new Date();
    const kikinewDate2 = new Date(kikinewDate);

    const kikitotalSeconds =(kikinewDate2 - currentDate)/ 1000;

    if (kikitotalSeconds >= 0) {

    const days = Math.floor(kikitotalSeconds / 3600 / 24); /* Math.floor sets full number */
    const hours = Math.floor(((kikitotalSeconds/3600) % 24)); /* Module for hours here, how much is left until 24 is full */
    const minutes = Math.floor(kikitotalSeconds/60) % 60; /* Module for minutess here, how much is left until 60 is full*/
    const seconds = Math.floor(kikitotalSeconds) % 60;                 /* How much until 60 left */

    kikidaysElement.innerHTML = days;
    kikihoursElement.innerHTML = formatTime(hours);
    kikiminutesElement.innerHTML = formatTime(minutes);
    kikisecondsElement.innerHTML = formatTime(seconds);

    } else {
    kikidaysElement.innerHTML = 0;
    kikihoursElement.innerHTML = 0;
    kikiminutesElement.innerHTML = 0;
    kikisecondsElement.innerHTML = 0;
    };

    if (kikitotalSeconds > 0) {
        kikiyear = new Date().getFullYear();
    } else {
        kikiyear = new Date().getFullYear() +1;
    }
    kikinewDate = `11 Aug ${kikiyear}`;
}

function countdown_helga () {
    const currentDate =new Date();
    const helganewDate2 = new Date(helganewDate);

    const helgatotalSeconds =(helganewDate2 - currentDate)/ 1000;

    if (helgatotalSeconds >= 0) {

    const days = Math.floor(helgatotalSeconds / 3600 / 24); /* Math.floor sets full number */
    const hours = Math.floor(((helgatotalSeconds/3600) % 24)); /* Module for hours here, how much is left until 24 is full */
    const minutes = Math.floor(helgatotalSeconds/60) % 60; /* Module for minutess here, how much is left until 60 is full*/
    const seconds = Math.floor(helgatotalSeconds) % 60;                 /* How much until 60 left */

    helgadaysElement.innerHTML = days;
    helgahoursElement.innerHTML = formatTime(hours);
    helgaminutesElement.innerHTML = formatTime(minutes);
    helgasecondsElement.innerHTML = formatTime(seconds);

    } else {
    helgadaysElement.innerHTML = 0;
    helgahoursElement.innerHTML = 0;
    helgaminutesElement.innerHTML = 0;
    helgasecondsElement.innerHTML = 0;
    };

    if (helgatotalSeconds > 0) {
        helgayear = new Date().getFullYear();
    } else {
        helgayear = new Date().getFullYear() +1;
    }
    helganewDate = `9 Oct ${helgayear}`;
}

function countdown_katja () {
    const currentDate =new Date();
    const katjanewDate2 = new Date(katjanewDate);

    const katjatotalSeconds =(katjanewDate2 - currentDate)/ 1000;

    if (katjatotalSeconds >= 0) {

    const days = Math.floor(katjatotalSeconds / 3600 / 24); /* Math.floor sets full number */
    const hours = Math.floor(((katjatotalSeconds/3600) % 24)); /* Module for hours here, how much is left until 24 is full */
    const minutes = Math.floor(katjatotalSeconds/60) % 60; /* Module for minutess here, how much is left until 60 is full*/
    const seconds = Math.floor(katjatotalSeconds) % 60;                 /* How much until 60 left */

    katjadaysElement.innerHTML = days;
    katjahoursElement.innerHTML = formatTime(hours);
    katjaminutesElement.innerHTML = formatTime(minutes);
    katjasecondsElement.innerHTML = formatTime(seconds);

    } else {
    katjadaysElement.innerHTML = 0;
    katjahoursElement.innerHTML = 0;
    katjaminutesElement.innerHTML = 0;
    katjasecondsElement.innerHTML = 0;
    };

    if (katjatotalSeconds > 0) {
        katjayear = new Date().getFullYear();
    } else {
        katjayear = new Date().getFullYear() +1;
    }
    katjanewDate = `30 Nov ${katjayear}`;
}

function countdown_tessa () {
    const currentDate =new Date();
    const tessanewDate2 = new Date(tessanewDate);

    const tessatotalSeconds =(tessanewDate2 - currentDate)/ 1000;

    if (tessatotalSeconds >= 0) {

    const days = Math.floor(tessatotalSeconds / 3600 / 24); /* Math.floor sets full number */
    const hours = Math.floor(((tessatotalSeconds/3600) % 24)); /* Module for hours here, how much is left until 24 is full */
    const minutes = Math.floor(tessatotalSeconds/60) % 60; /* Module for minutess here, how much is left until 60 is full*/
    const seconds = Math.floor(tessatotalSeconds) % 60;                 /* How much until 60 left */

    tessadaysElement.innerHTML = days;
    tessahoursElement.innerHTML = formatTime(hours);
    tessaminutesElement.innerHTML = formatTime(minutes);
    tessasecondsElement.innerHTML = formatTime(seconds);

    } else {
    tessadaysElement.innerHTML = 0;
    tessahoursElement.innerHTML = 0;
    tessaminutesElement.innerHTML = 0;
    tessasecondsElement.innerHTML = 0;
    };

    if (tessatotalSeconds > 0) {
        tessayear = new Date().getFullYear();
    } else {
        tessayear = new Date().getFullYear() +1;
    }
    tessanewDate = `25 May ${tessayear}`;
}

function countdown_anja () {
    const currentDate =new Date();
    const anjanewDate2 = new Date(anjanewDate);

    const anjatotalSeconds =(anjanewDate2 - currentDate)/ 1000;

    if (anjatotalSeconds >= 0) {

    const days = Math.floor(anjatotalSeconds / 3600 / 24); /* Math.floor sets full number */
    const hours = Math.floor(((anjatotalSeconds/3600) % 24)); /* Module for hours here, how much is left until 24 is full */
    const minutes = Math.floor(anjatotalSeconds/60) % 60; /* Module for minutess here, how much is left until 60 is full*/
    const seconds = Math.floor(anjatotalSeconds) % 60;                 /* How much until 60 left */

    anjadaysElement.innerHTML = days;
    anjahoursElement.innerHTML = formatTime(hours);
    anjaminutesElement.innerHTML = formatTime(minutes);
    anjasecondsElement.innerHTML = formatTime(seconds);

    } else {
    anjadaysElement.innerHTML = 0;
    anjahoursElement.innerHTML = 0;
    anjaminutesElement.innerHTML = 0;
    anjasecondsElement.innerHTML = 0;
    };

    if (anjatotalSeconds > 0) {
        anjayear = new Date().getFullYear();
    } else {
        anjayear = new Date().getFullYear() +1;
    }
    anjanewDate = `10 Sep ${anjayear}`;
}

function countdown_alex () {
    const currentDate =new Date();
    const alexnewDate2 = new Date(alexnewDate);

    const alextotalSeconds =(alexnewDate2 - currentDate)/ 1000;

    if (alextotalSeconds >= 0) {

    const days = Math.floor(alextotalSeconds / 3600 / 24); /* Math.floor sets full number */
    const hours = Math.floor(((alextotalSeconds/3600) % 24)); /* Module for hours here, how much is left until 24 is full */
    const minutes = Math.floor(alextotalSeconds/60) % 60; /* Module for minutess here, how much is left until 60 is full*/
    const seconds = Math.floor(alextotalSeconds) % 60;                 /* How much until 60 left */

    alexdaysElement.innerHTML = days;
    alexhoursElement.innerHTML = formatTime(hours);
    alexminutesElement.innerHTML = formatTime(minutes);
    alexsecondsElement.innerHTML = formatTime(seconds);

    } else {
    alexdaysElement.innerHTML = 0;
    alexhoursElement.innerHTML = 0;
    alexminutesElement.innerHTML = 0;
    alexsecondsElement.innerHTML = 0;
    };

    if (alextotalSeconds > 0) {
        alexyear = new Date().getFullYear();
    } else {
        alexyear = new Date().getFullYear() +1;
    }
    alexnewDate = `10 Sep ${alexyear}`;
}

function countdown_simon () {
    const currentDate =new Date();
    const simonnewDate2 = new Date(simonnewDate);

    const simontotalSeconds =(simonnewDate2 - currentDate)/ 1000;

    if (simontotalSeconds >= 0) {

    const days = Math.floor(simontotalSeconds / 3600 / 24); /* Math.floor sets full number */
    const hours = Math.floor(((simontotalSeconds/3600) % 24)); /* Module for hours here, how much is left until 24 is full */
    const minutes = Math.floor(simontotalSeconds/60) % 60; /* Module for minutess here, how much is left until 60 is full*/
    const seconds = Math.floor(simontotalSeconds) % 60;                 /* How much until 60 left */

    simondaysElement.innerHTML = days;
    simonhoursElement.innerHTML = formatTime(hours);
    simonminutesElement.innerHTML = formatTime(minutes);
    simonsecondsElement.innerHTML = formatTime(seconds);

    } else {
    simondaysElement.innerHTML = 0;
    simonhoursElement.innerHTML = 0;
    simonminutesElement.innerHTML = 0;
    simonsecondsElement.innerHTML = 0;
    };

    if (simontotalSeconds > 0) {
        simonyear = new Date().getFullYear();
    } else {
        simonyear = new Date().getFullYear() +1;
    }
    simonnewDate = `10 Sep ${simonyear}`;
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;         /* if less than 10 time period remaining, show 0 infront */
}

//Initial call to get Miliseconds until New Years
countdown_dio();

//get Seconds until New Years
setInterval(countdown_dio, 1000);





