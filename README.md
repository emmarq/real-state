# Real State

## Capabilities

- Seed a mongo database automatically with random data.
- Serve an REST API for CRUD of real states powered by .NET
- Provide the open api documentation through swagger.
- Present a frontend with a master detail pattern using NextJS
- Allows filtering, sorting and paging

## Requirements

- Docker for quick testing
- For development a nix shell is provided to ease the collaboration.
- Or have installed all the necessary dependencies the way you prefer, like dotnet, npm, an editor like visual studio or vscode.

### Docker

1. Install docker engine
2. Navigate to the project directory
3. Run docker compose

```
docker compose up -d
```

4. You can navigate to `localhost:8080/swagger/index.html` to inspect the api with swagger and validate the server is running.

5. You can navigate to `localhost:3000` and see the list of real states served with NextJS.

### Nix shell

1. Install nix
2. Inside the project directory open a nix-shell

```
nix-shell
```

This will download all the package for the development, open a tmux session with lazyvim, and two terminals. 3. On first run, manually create the database. It can be done with the script

```
etc/create_docker_mongo.sh
```

4. Everytime the server starts, previously there mongo database must be initiated with

```
sudo docker start some-mongo
```

5. Whith a running mongo database, start the backend server. Navigate to the RealStateApi subproject and run

```
dotnet run
```

You can navigate to `localhost:8080/swagger/index.html` to inspect the api with swagger and validate the server is running.

6. To start the frontend server, navigate to the real-state-web subproject install the node modules and start the dev server.

```
npm i
npm run dev
```

You can navigate to `localhost:3000` and see the list of real states served with NextJS.

## Know issues

- An empty database will throw an error. It must be properly seeded. The docker compose take care of that, or running the create_docker_mongo script from the project root.
- Lack of tests for the meantime.
- Lack of custom error handling for the meantime.

## Nice to have

- Project the mongo queries to reduce the payload size.
