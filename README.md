"# js.DOM.p-cube" 
<img width="1496" height="858" alt="image" src="https://github.com/user-attachments/assets/a90a684c-9a59-4258-8c14-97b0c09938ce" />
 **מה נלמד בפרויקט ה־JavaScript**  – פרויקט של קוביות תלת־ממד שמסתובבות בלחיצה או אוטומטית.

---

## 📘 מדריך לימוד JavaScript לפי פרויקט הקוביות

### 🎯 מה בונים בפרויקט?

מערכת אינטראקטיבית עם קוביות תלת־ממד שמגיבות:

* ללחיצות על חיצים (ימינה/שמאלה)
* לריחוף עכבר (mouseover / mouseout)
* לכפתור Play/Pause שמתחיל/עוצר סיבוב אוטומטי

---

### 🔢 מה נלמד בפועל?

---

## 1. 🧠 משתנים (`let`, `const`)

```js
let x = 0, bool = false, interval;
```

* `x` שומר את זווית הסיבוב
* `bool` שומר האם הסיבוב האוטומטי פעיל
* `interval` שומר את מזהה הטיימר של `setInterval`

---

## 2. 📦 בחירת אלמנטים מה־DOM

```js
document.querySelector('.play-pause');
document.querySelectorAll('.cube');
```

* שימוש ב־`querySelector` / `querySelectorAll` כדי לבחור אלמנטים מה־HTML

---

## 3. 🔁 לולאות על מערך DOM

```js
Array.from(cubes).forEach(cube => cube.style.transform = `rotateY(${x}deg)`);
```

* שימוש ב־`Array.from(...).forEach(...)` כדי לעבור על כל הקוביות ולעדכן סיבוב

---

## 4. 🎭 שינוי מחלקות של אלמנטים

```js
i.classList.remove('fa-play');
i.classList.add('fa-pause');
```

* דינמיקה עם אייקון של Play ↔ Pause
* החלפת מחלקות (class) תוך כדי לחיצה

---

## 5. ⏱️ טיימרים – `setInterval`, `clearInterval`

```js
interval = setInterval(() => {
    x -= 90;
    rotate();
}, 1000);
clearInterval(interval);
```

* הפעלת סיבוב אוטומטי של הקוביות כל שנייה
* עצירת הסיבוב עם `clearInterval`

---

## 6. 🖱️ אירועים - `click`, `mouseover`, `mouseout`

```js
document.querySelector('.left-arrow').addEventListener('click', () => {
    x += 90;
    rotate();
});
```

* הפעלת פעולה בלחיצה, בריחוף, ביציאה מהכפתור
* מבינים הבדל בין אינטראקציה מיידית לאירוע מתמשך

---

## 7. 🎯 עדכון סגנון (Style) באמצעות JavaScript

```js
cube.style.transform = `rotateY(${x}deg)`;
```

* שינוי ישיר של סגנון ב־DOM דרך JS
* שימוש ב־Template Literals (`${}`) להכנסת ערכים לתוך CSS

---

## 8. ✅ תנאים לוגיים - `if`, `else`

```js
if (cls === 'fa-play') {
  // ...
} else {
  // ...
}
```

* בדיקה של תנאים בלחיצה, כדי להבין מצב (נגיד האם הסרטון מנוגן או לא)

---

## 9. 🔂 פונקציות

```js
const rotate = () => { ... }
const changePlayPause = () => { ... }
```

* כתיבת פונקציות מודולריות – כל פונקציה עושה פעולה אחת
* קריאה לפונקציות מתוך אירועים

---

## 🧩 סיכום

בפרויקט הזה התלמיד לומד:

| נושא       | יישום                  |
| ---------- | ---------------------- |
| משתנים     | שמירה על מצב סיבוב     |
| DOM        | בחירת כפתורים וקוביות  |
| אירועים    | לחיצה, ריחוף, mouseout |
| פונקציות   | בנייה וקריאה לפעולות   |
| תנאים      | Play/Pause לפי מצב     |
| לולאות     | על כל הקוביות          |
| טיימרים    | סיבוב אוטומטי          |
| CSS דרך JS | שינוי `transform`      |

---

## 💡 מתאים ללימוד

* כיתה ז'–י'
* תחילת מסלול בפיתוח אתרים
* שיעור בקורס אינטראקטיבי על אנימציה ו־DOM

---

