# url-shortener 🔗
Simple long url shortener Api created in Typescript, with database to store a history of links already generated and speed up the effectiveness.

# Installation

```
git clone https://github.com/Nair-VillaGran/url-shortener.git
cd url-shortener
npm install
npm start
```


# Comands

`npm start` for a production environment

`npm run dev` for a development environment

`npm run build` to prepare the project for a production environment


# Requirements

_Npm and NodeJS must be installed._

[NodeJS](https://nodejs.org/)

[npm](https://www.npmjs.com/)

## Note

Modify the environment variables in `.env`, `mongoURI` contains the database in mongoDB, `baseURL` contains the base url to prepare the short url, example `baseURL = http://localhost:5000`, to work locally.


# Routes and requests

List of routes to navigate in the Api and perform GET, POST requests.

* Create a Short Url : `POST /api/url/short`
* Redirects to root link : `GET /:code`

