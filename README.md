# Configuration

## .env

Here are the values that need to be set in the .env file

```
RCON_IP="0.0.0.0"
RCON_PASSWORD="password123"
```

# Running

Install modules with `npm install`

To run, use `npm start`, which will build TSC files and then run server.js

You can also build the files seperately using `npm run build`

# Features

## RCONService

This calls contains functions that allow for connection to a minecraft server using RCON, as well as reconnect and disconnect handlers.

Extend this class with your own methods like `async getPlayers()`
