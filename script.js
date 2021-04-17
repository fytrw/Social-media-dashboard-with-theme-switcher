const root = document.documentElement;
const checkbox = document.querySelector('.checkbox');

const changeColor = () => {
    if(!checkbox.checked) {
        //white styles
        root.style.setProperty('--text', "hsl(230, 17%, 14%)");//text
        root.style.setProperty('--bg', "hsl(0, 0%, 100%)");//bg
        root.style.setProperty('--topbg', "#F7F9FF");//topbg
        root.style.setProperty('--cardbg', "hsl(227, 47%, 96%)");//cardbg
        root.style.setProperty('--lighttext', "hsl(228, 12%, 44%)");//lighttext
        root.style.setProperty('--hoverbg', "#E1E4F0");//hoverbg

    } else {
        //black styles
        root.style.setProperty('--text', "hsl(0, 0%, 100%)");//text
        root.style.setProperty('--bg', "hsl(230, 17%, 14%)");//bg
        root.style.setProperty('--topbg', "hsl(232, 19%, 15%)");//topbg
        root.style.setProperty('--cardbg', "hsl(228, 28%, 20%)");//cardbg
        root.style.setProperty('--lighttext', "hsl(228, 34%, 66%)");//lighttext
        root.style.setProperty('--hoverbg', "#333A55");//hoverbg
    }
}