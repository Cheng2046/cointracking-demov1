## How to run this project locally:

### Prerequisites

- Node.js >= v14
- download or clone the repository from "https://github.com/Cheng2046/cointracking-demov1"
- Run `npm i` in both backend and frontend folder to install dependencies

### backend

- `npm run dev`
- Open `http://localhost:5000`

### Frontend

- `npm run start`
- Open `http://localhost:3000`

## Screencast link

- refer to the video if by any chance the project couldn't be installed locally:

## Others

- to minimize charging fee for api calls from 3rd party (cryptonator), the backend express server can utilize the
  setInterval() function or npm package node cron to call the public api periodically. The backend data will then fetched by the frontend (to avoid multiple calls from frontend directly to the api).

- the above is not implemented as dummy data is used in the project.
