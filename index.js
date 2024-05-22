/* 
ขั้นตอนการสร้าง Docker Image

หน้าจอ Code และคำอธิบาย:

```
$ docker build -t test:latest .
```
// คำสั่งนี้ใช้สำหรับสร้าง Docker Image ใหม่จาก Dockerfile ในไดเรกทอรีปัจจุบัน
// -t test:latest: กำหนดชื่อและแท็กของ Image ใหม่เป็น "test:latest"
// . (จุด): ระบุว่าให้ใช้ Dockerfile ในไดเรกทอรีปัจจุบัน

```
[+] Building 36.2s (11/11) FINISHED
...
=> => naming to docker.io/library/test:latest 0.0s
=> => unpacking to docker.io/library/test:latest 0.7s
```
// ส่วนนี้แสดงความคืบหน้าในการสร้าง Image จนเสร็จสมบูรณ์

```
$ docker images
REPO   TAG     IMAGE ID      CREATED        SIZE
test   latest  0435f2738cf6  21 seconds ago 160MB
```
// หลังจากสร้าง Image เสร็จแล้ว คำสั่ง `docker images` จะแสดงรายการ Image ที่ถูกสร้างขึ้นมาใหม่ล่าสุด ซึ่งจะเห็น Image ชื่อ "test" แท็ก "latest"

หลังจากทำตามขั้นตอนนี้เสร็จแล้ว คุณจะได้ Docker Image ของแอปพลิเคชันที่ประกอบด้วยแอปพลิเคชันและแพคเกจพึ่งพาต่างๆ ที่จำเป็นสำหรับการรันแอปพลิเคชันนั้น ซึ่งเรียกว่า "การทำ Containerize แอปพลิเคชัน"
*/