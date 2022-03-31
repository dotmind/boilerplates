<h1 align="center">
  with-mongoose-openapi-mailjet-apikey
</h1>

## 🚀 Getting Started
### Requirement

- Install `redis` and launch it
- Install `mongodb` and launch it
- Install `nodejs`


### Launch project

First, to launch the project locally create `.env` file:

```bash
cp .env.example .env # to clone .env.example on .env

# edit .env file with your environment var
```

Finaly run the development server:

```bash
npm run dev
# or
yarn dev
```

## 🪄 Create a new service CRUD

To generate a new service you can execute : `npm run bash:generate-service`

## 🛠 Example

An example of service exists in project :
- `src/services/notifications`:
  - controllers -> send response to client (no logic in the controller function)
  - doc -> create open documentation
  - middlewares -> process client request
  - models -> create mongoose models
  - routes -> create routes for services and call middlewares + controllers
  - types -> only type in services scope
  - validators -> validators of request

## 🚚 Documentation

To create route documentation, you need :
- Create schema (`src/services/YOUR_SERVICE/doc/schemas/index.ts`)
  - export schemas to show in documentation (ex: `src/services/notifications/doc/schemas/index.ts`)
- Create Endpoints (`src/services/YOUR_SERVICE/doc/endpoints/index.ts`)
  - export endpoints (ex: `src/services/notifications/doc/endpoints/index.ts`)
- Import Schema and Endpoints on `src/services/open-api/index.ts`
  - On this file you are comment with `@TODO` to add documentation schema + endpoint + some instructions

## 🎉 Use boilerplate
```shell
npx @dotmind/create-dotmind-app MY_PROJECT_NAME --example with-mongoose-openapi-mailjet-apikey
```

## 🔑 Api key
- generate public / private api key : `npm run bash:generate-keys`
- generate new api key : `npm run cli:apikey`
- to disable api key, you can add on `.env`:

```bash
API_KEY=0
```
