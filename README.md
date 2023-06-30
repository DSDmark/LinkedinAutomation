<div align="center">

# LinkedinAutomation 💤

![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/DSDmark/LinkedinAutomation)
![GitHub](https://img.shields.io/github/license/DSDmark/LinkedinAutomation)
![GitHub language count](https://img.shields.io/github/languages/count/DSDmark/LinkedinAutomation)
![GitHub last commit](https://img.shields.io/github/last-commit/DSDmark/LinkedinAutomation)
[![Run Node.js Script](https://github.com/DSDmark/AutoScriptJS/actions/workflows/cornJob.yml/badge.svg?branch=master)](https://github.com/DSDmark/AutoScriptJS/actions/workflows/cornJob.yml)

##  Automate your post using LinkedIn APIs with random memes API from Reddit.

<div align="left">

## Purpose 😑

> Linkedin APIs were used to automate your post, which was then combined with a JSON API for a random meme pulled from Reddit, which is maintained by @D3vd and set up using GitHub action.

📓 you can also write that script in **bash** or **python** which is well suited for that type of work.

</div>

<div align="left">

### How to install 😒

You can utilise that script by Using **Nodejs**. 

#### here is by using **Nodejs**.

1. Click on the green **Clone** button or choose Download ZIP.
2. Find the downloaded zipped file on your pc and **extract it**.
3. Install `nodejs` and `NPM` in your local system.
4. Open the Root Directory, navigate to LinkedinAutomation using the command `cd LinkedinAutomation` and use either `npm install` or `pnpm install` to install all dependencies.
5. After that, configure these values in the `.env` file:
```
BASE_URL=https://api.linkedin.com/v2
MEMES_URL=https://meme-api.com/gimme
CLIENT_ID=
CLIENT_SECRET=
REDIRECT_URI=
ACCESS_TOKEN=
```
6. Then run `npm start` or `pnpm start`. Now you can see this output:
```sh
LinkedIn post created successfully: { id: 'urn:li:share:7078778985983164433' }
```
which is show your post is created successfully.

#### How to automate using **github-actions**.

You can always set that script in your local system by using **corn job** to upload posts on LinkedIn or you can use **github-action** for this work.

here is to set GitHub action to run that script with a fixed interval of time.

1. Go to your action tab and create action and paste that code:

```yml
name: Run Node.js Script

on:
  push:
   branches: master
  schedule:
    - cron: "0 */24 * * *"      

env:
  ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
  BASE_URL: ${{ secrets.BASE_URL }}
  CLIENT_ID: ${{ secrets.CLIENT_ID }}
  CLIENT_SECRET: ${{ secrets.CLIENT_SECRET }}
  MEMES_URL: ${{ secrets.MEMES_URL }}
  REDIRECT_URI: ${{ secrets.REDIRECT_URI }}

jobs:
  run-script:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "16"

      - name: Install dependencies
        run: npm install

      - name: Run script
        run: node src/main.js
```

2. you can set interval which you want to upload your post on linkedin by seting  `cron: "0 */24 * * *"` in above action.
3. Go to your repo setting and open that section and set these envroments:
```yml
env:
  ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
  BASE_URL: ${{ secrets.BASE_URL }}
  CLIENT_ID: ${{ secrets.CLIENT_ID }}
  CLIENT_SECRET: ${{ secrets.CLIENT_SECRET }}
  MEMES_URL: ${{ secrets.MEMES_URL }}
  REDIRECT_URI: ${{ secrets.REDIRECT_URI }}
```

like this:

![image](https://github.com/DSDmark/LinkedinAutomation/assets/85744816/ce0118ba-54a9-4355-aa23-201bc221d78a)

Now your script is good to go.

Once you are done you can close 🔒 the application in your terminal to quit the application.

</div>

---

<div align="left">

### Here you can quickly start with that repo 👼

</div>

[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://githubbox.com/DSDmark/LinkedinAutomation/tree/master)

<div align="left">

## Try Out LinkedinAutomation Demo 🚀

<a href="https://LinkedinAutomation" alt="LinkedinAutomation">LinkedinAutomation</a>

</div>

### LinkedinAutomation

![LinkedinAutomation perview](./assets/perview.gif "LinkedinAutomation")

> If you have any issues with that Application feel free to let me know 🙃!

> If you are more interested, check out 🥺 the collection of [ **DSDmark**](https://github.com/DSDmark"DSDmark").

---

</div>
