## 🎯ZIP SOLVER LINKEDIN🤐
- This is a *daily game* in linkedin I recently got playing.
- This chrome extension solves the `ZIP game`.
- So what does this repo do?
  - I have created `2` **extensions**,
    - The one you can use while you are not signed in `ZIP_EXTENSION`🏁
    - Then the next one where you have can use when u have logged in ***linkedin***,thne use `ZIP_EXTENSION_V2`🔑
- works with any size
- Follows the below rules


## 📜Game rules
- let's understand the `board` first,
    - There are 2 things we can we can see on the `board`
    - The *first* is the **numbers** labelled from `1` to `n`
    - The *second* is the **walls** which can seperate any `2` adjacent `cells`.*(Ocassionally)*
- **RULE-1**: Connect `all` the ***numbers in order***
- **RULE-2**: While following *rule1* ,you should also cover all the `cells` in the `board`

## 🎥DEMO



https://github.com/user-attachments/assets/7691eb93-988c-4590-92c0-384a7aa3f502



## HOW TO USE MY EXTENSION?🧠
- Download `ZIP_EXTENSION` or `ZIP_EXTENSION_V2` on your need.
- Go to `chrome://extensions/`
- Then on *top-right* enable ***developer mode***.
- Then on *top-left* click ***Load unpacked*** browse the path where have downloaded my folder.
- Click it.
- Now use it as per demo.
  

## 💡WHY THIS REPO?
- I love shortcuts and smart work.🕺
- I wanted code *backtracking*,I am crazy on DSA.😁
- To learn how ***extension works!!*** 🏗️
- How to scrape and search in a web.🔍
- How to work in `cmd`

> **SPECIAL THANKS**:To my dear friend ***Venkata Ramana Rao*** who helped me debug a important bug 🐛
>  and guided me in right direction.👉🏻 #[VenkataRamanaRao5](https://github.com/VenkataRamanaRao5)🫂
> 
> **PS**:Forever my partner in crime.😉😌

## REPO STRCUTURE

```
ZIP
├── PROTOTYPE
│   ├── LOG
│   │   ├── bordered.html
│   │   └── bordered1.txt
│   ├── TC
│   │   ├── TC1 SOL.png
│   │   ├── TC1.png
│   │   ├── TC2 SOL.png
│   │   ├── TC2.png
│   │   ├── TC3 SOL.png
│   │   ├── TC3.png
│   │   ├── TC4W SOL.png
│   │   └── TC4W.png
│   ├── output.txt
│   ├── zip.js
│   └── zipWall.js
├── ZIP_EXTENSION
│   ├── manifest.json
│   ├── pop.html
│   └── zip.js
├── ZIP_EXTENSION_V2
│   ├── manifest.json
│   ├── pop.html
│   └── zip.js
├── output.txt
├── paste.js
└── the_making.md
```
- `PROTOTYPE/zipWall.js` has the backtracking algo,u can run this using ***`node ZIP.js`***👨🏻‍🏫
- `PROTOTYPE/TC` contain the test-cases which I got for validation.✅
- `paste.js` is used to make my working easier.
- `output.txt` is used to handle the large ***buffer size which can't be handles in terminal***
- `the_making.md` contains the *work flow* how to proceed while developing.✈️
- `PROTOTYPE/LOG/bordered.html` contaisn the *log* of particular day's board elements which had `walls`.This is useful while developing *game logic* on ***NON-WALL DAY***😅💪🏻

