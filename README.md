# FAQ (Frequently Asked Questions)

## Question 1
Jadi perintah 
```
build: .
```
di docker compose akan mengeksekusi dockerfile untuk perintah detail buildnya?

```
Ya, Anda benar! Ketika Anda menggunakan perintah build: . di dalam docker-compose.yml, itu berarti Docker Compose akan mencoba membangun image untuk layanan tersebut menggunakan Dockerfile yang ada di direktori yang ditunjukkan oleh . (titik) tersebut.
```

# Most used nest command
- nest g module <module-name>
- nest g controller <controller-name>
- nest g service <service-name> example : nest g service users
- nest g class <entity-name> --no-spec  example : nest g class user.entity --no-spec
- nest g resource <name>
- nest g dto posts/dto/create-post

# Other command
- docker-compose up -d
- docker-compose up --build


# ???
```
curl -X GET http://localhost:3000/users
curl -X GET http://localhost:3000/users/1
curl -X DELETE http://localhost:3000/users/1

curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "johndoe@example.com"
  }'


```

```
curl -X GET http://localhost:3000/posts
curl -X GET http://localhost:3000/posts/1

curl -X POST http://localhost:3000/posts \
-H "Content-Type: application/json" \
-d '{
  "title": "My First Post",
  "content": "This is the content of my first post.",
  "userId": 1
}'

curl -X DELETE http://localhost:3000/posts/1
```


```
"migration:generate": "npx ts-node -P ./tsconfig.json -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:generate -d ./src/config/typeorm.config.ts ./src/database/migrations/migration",
    "migration:create": "npx ts-node -P ./tsconfig.json -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:create -d ./src/config/typeorm.config.ts ./src/database/migrations/migration",
    "migration:run": "npx ts-node -P ./tsconfig.json -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:run -d ./src/config/typeorm.config.ts",
    "migration:revert": "npx ts-node -P ./tsconfig.json -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:revert -d ./src/config/typeorm.config.ts"
    
    CMD ["npx", "ts-node", "-r", "tsconfig-paths/register", "src/main.ts"]
```