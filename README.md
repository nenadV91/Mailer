# Mailer - [Demo](https://nenadv91.github.io/Mailer/#/)
Email application that can send emails using email server based on premade templates. Ability to manage clients, track emails sent to each client, use filters etc...

<i><small>Demo is using fake api and it is missing some functionality of the real api like sending actual emails</small></i> 

### Front-end
  - React
  - Redux
  - Material UI
  
### Back-end
  - Express
  - Mongoose
  - Mongodb
  - Nodemailer

## Get started
*Client*
  - `cd client`
  - run `npm install`
  - start the dev server `npm start` on port 3000
  - or run production build `npm run build`

*Server*
  - `cd server`
  - run `npm install`
  - set env variables in .env file for `DB_HOST` and `DB_NAME`
  - configure `config.js` file with your email server params
  - if you want server to use client **build** files then change `NODE_ENV` to production
  - start the server with `npm run dev` on port 4000

### Preview 1
---
![Preview](https://github.com/nenadV91/Mailer/blob/previews/clients.png?raw=true "Preview 1")

### Preview 2
---
![Preview](https://github.com/nenadV91/Mailer/blob/previews/client.png?raw=true "Preview 2")

### Preview 3
---
![Preview](https://github.com/nenadV91/Mailer/blob/previews/create.png?raw=true "Preview 3")

### Preview 4
---
![Preview](https://github.com/nenadV91/Mailer/blob/previews/add_client.png?raw=true "Preview 3")


## Author
Nenad Vracar

## License
Licensed under MIT
