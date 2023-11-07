# MERN-Stack Infrastructure

Clone this repo to provide the starter code for a comprehensive MERN-Stack project including token-based authentication.

#### Clone the mern-infrastructure repo:

> git clone https://github.com/chrispaladin7/mern-infrastructure.git "name-of-project"

The folder created will be same as "name-of-project" instead of mern-infrastructure

> cd "name-of-project"

Install the Node modules: 
> npm i

Create a .env (touch .env) and add entries for DATABASE_URL and SECRET

Update the "name": "mern-infrastructure" in package.json to the name of your project.

Create a new repo on your personal GH account.

Copy the new GH repo’s URL.

#### Update the remote’s URL:
> git remote set-url origin "paste the copied GH url"
#### Make the initial commit:
> git add -A && git commit -m "Initial commit"

#### Push for the first time:
> git push -u origin main

Remember that the Express server won’t start without error until the build folder used by Express is created by running:

>npm run build

Done!!!