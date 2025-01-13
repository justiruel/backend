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