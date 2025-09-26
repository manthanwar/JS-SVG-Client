# Example Use Cases

## Run the server

```sh
npm run dev    # run node server in development environment in project root
npm start      # run node server in production environment using pm2
```

## Create ngrok

[Ngrok](https://ngrok.com/) is the flexible API gateway for instant, secure connectivity anywhere—public or private. It a cross-platform application that creates secure tunnels (paths) to localhost machine. It enables developers to expose a local development server to the Internet with minimal effort. The software makes locally-hosted web server appear to be hosted on a subdomain of ngrok.com, meaning that no public IP or domain name on the local machine is needed.

[Download the ngrok.exe](https://ngrok.com/download/windows) put it in the system's path environment for easy discovery and run the following shell command

```sh
ngrok http 3000
```
