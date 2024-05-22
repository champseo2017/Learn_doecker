/* 
การรัน Docker Container จาก Docker Image 

โดยใช้คำสั่ง `docker run` พร้อมกับกำหนดชื่อและพอร์ทของ Container จากนั้นจะเปิดเบราว์เซอร์และเข้าถึงแอปพลิเคชันที่รันอยู่บน Container ผ่านพอร์ทที่กำหนดไว้

```
$ docker run -d \
  --name web1 \
  --publish 8080:8080 \
  test:latest
```
// คำสั่งนี้ใช้สำหรับสร้างและรัน Container ใหม่จาก Docker Image ที่ชื่อ "test:latest"
// -d: รัน Container ในโหมด Detached (รันเป็นกระบวนการพื้นหลัง)
// --name web1: กำหนดชื่อของ Container เป็น "web1"
// --publish 8080:8080: เปิดพอร์ท 8080 ของ Container และมอบหมายให้พอร์ท 8080 ของเครื่องโฮสต์ด้วย

```
localhost:8080 หรือ 127.0.0.1:8080
```
// ถ้าคุณใช้ Docker Desktop บน Windows หรือ Mac ให้เปิดเบราว์เซอร์และเข้าถึง localhost:8080 หรือ 127.0.0.1:8080


*/