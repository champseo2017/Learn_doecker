/* 
```
$ cat Dockerfile
```
// คำสั่งนี้ใช้สำหรับแสดงเนื้อหาของไฟล์ Dockerfile

```
FROM alpine
LABEL maintainer="nigelpoulton@hotmail.com"
RUN apk add --update nodejs npm curl
COPY . /src
WORKDIR /src
RUN npm install
EXPOSE 8080
ENTRYPOINT ["node", "./app.js"]
```
// เนื้อหาของ Dockerfile ประกอบด้วยคำสั่งต่างๆ ดังนี้:
// FROM alpine: กำหนดให้ใช้ Base Image เป็น Alpine Linux
// LABEL maintainer="...": กำหนดข้อมูลผู้ดูแลรักษา Image
// RUN apk add --update nodejs npm curl: ติดตั้ง Node.js, npm และ curl
// COPY . /src: คัดลอกไฟล์ทั้งหมดจากไดเรกทอรีปัจจุบันไปยัง /src ภายใน Image
// WORKDIR /src: กำหนดไดเรกทอรีปัจจุบันเป็น /src
// RUN npm install: ติดตั้งแพคเกจพึ่งพาของ Node.js
// EXPOSE 8080: เปิดพอร์ท 8080 ของ Container
// ENTRYPOINT ["node", "./app.js"]: กำหนดให้รัน app.js ด้วย Node.js เมื่อ Container ถูกสร้างขึ้น
*/