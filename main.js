// Based on this tutorial
// https://www.freecodecamp.org/news/write-your-own-browser-extensions/

const nicRollProbability = 0.1;
const nicRollUrls = [
    'https://en.wikipedia.org/wiki/Nicolas_Cage',
    'https://www.imdb.com/name/nm0000115/',
    'https://www.britannica.com/biography/Nicolas-Cage',
    'https://www.thecagecage.com/',
    'https://www.facebook.com/TheNicolasCageAdmirationPage/',
    'https://www.instagram.com/nicolascagefans/',
    'https://www.nickcage.movie/',
]

const pickRandom = (itemsToChooseFrom) => itemsToChooseFrom[Math.floor(Math.random() * itemsToChooseFrom.length)];

const linksInPage = document.getElementsByTagName('a');

for (link of linksInPage){
    if (Math.random() < nicRollProbability){
        link.href = pickRandom(nicRollUrls);
    }
}
