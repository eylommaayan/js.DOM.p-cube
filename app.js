let x = 0, bool = false, interval; //הגדרת משתנים מצב התחלתי

// העפלת פונצקיית סיבוב
const rotate = () => {
    const cubes = document.querySelectorAll('.cube');

    Array.from(cubes).forEach(cube => cube.style.transform = `rotateY(${x}deg)`);
}

//pause-ל play שינוי כפתור מ
const changePlayPause = () => {
    const i = document.querySelector('.play-pause i');
    const cls = i.classList[1];
    if (cls === 'fa-play') {
        i.classList.remove('fa-play');
        i.classList.add('fa-pause');
    } else {
        i.classList.remove('fa-pause');
        i.classList.add('fa-play');
    }
}
//pause-ו play הגדרת כפתור ה
const playPause = () => {
    if (!bool) {
        interval = setInterval(() => { //הגדרת כמות סיבוב
            x -= 90;
            rotate();
        }, 1000); // כמה זמן אחרי לחיצה על הכפתור הסיבו יתחיל
        changePlayPause(); // שינוי כפתור
        bool = true;
    } else {
        clearInterval(interval);
        changePlayPause();
        bool = false;
    }

}
//הפעלת כפתור חץ שמאל
document.querySelector('.left-arrow').addEventListener('click', () => {
    x += 90; //יסתובב x קביעת כמה הערך 
    rotate();
    if (bool) { // מתי הכדור יעצור
        playPause();
    }
});
//הפעלת סיבוב הכפתור כאשר הנמצאים על הכפתור
document.querySelector('.left-arrow').addEventListener('mouseover', () => {
    x += 25; //יסתובב x קביעת כמה הערך 
    rotate();
});
//הפעלת סיבוב הכפתור כאשר הנמצאים על הכפתור צד שני 
document.querySelector('.left-arrow').addEventListener('mouseout', () => {
    x -= 25; //יסתובב x קביעת כמה הערך 
    rotate();
});
//הפעלת כפתור חץ ימני
document.querySelector('.right-arrow').addEventListener('click', () => {
    x -= 90; //יסתובב x קביעת כמה הערך 
    rotate();
    if (bool) {
        playPause();
    }
});

//הפעלת סיבוב הכפתור כאשר הנמצאים על הכפתור
document.querySelector('.right-arrow').addEventListener('mouseover', () => {
    x -= 25; //יסתובב x קביעת כמה הערך 
    rotate();
});
//הפעלת סיבוב הכפתור כאשר הנמצאים על הכפתור צד שני 
document.querySelector('.right-arrow').addEventListener('mouseout', () => {
    x += 25; //יסתובב x קביעת כמה הערך 
    rotate();
});
//pause הפעלת כפתור ה
document.querySelector('.play-pause').addEventListener('click', () => {
    playPause();
});









































