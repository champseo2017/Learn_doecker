/* 

วิธีการดูข้อมูลของ layers ใน Docker image โดยมีวิธีหลักๆ ดังนี้

1. ใช้คำสั่ง docker pull เพื่อ pull image มาใช้ และสังเกตุดูตอน pull ว่ามีการ pull layers อะไรบ้าง

2. ใช้คำสั่ง docker inspect เพื่อดูรายละเอียดของ image 

3. ใช้คำสั่ง docker history เพื่อดู history หรือประวัติของ image ว่ามีการสร้าง layer ไหนบ้าง

ยกตัวอย่างเช่น ถ้าเรา pull image node:latest มา จะเห็นผลลัพธ์ประมาณนี้

```
docker pull node:latest 
latest: Pulling from library/ubuntu 
952132ac251a: Pull complete 
82659f8f1b76: Pull complete 
c19118ca682d: Pull complete 
8296858250fe: Pull complete 
24e0251a0e2c: Pull complete 
Digest: sha256:f4691c96e6bbaa99d...28ae95a60369c506dd6e6f6ab 
Status: Downloaded newer image for node:latest
docker.io/node:latest
```

จากผลลัพธ์จะเห็นว่า image นี้มี 5 layers โดยแต่ละบรรทัดที่ลงท้ายด้วย `Pull complete` คือ layer นึงใน image 

ดังนั้น เราจะเห็น layer IDs ทั้ง 5 ชั้น ของ image node:latest ได้ดังในรูป 6.7 

สรุปคือ เราสามารถใช้คำสั่ง docker pull, docker inspect และ docker history เพื่อตรวจสอบดูรายละเอียดของ layers ในแต่ละ image ได้ ซึ่งมันจะช่วยให้เราเข้าใจโครงสร้างของ image ได้ดีขึ้นนั่นเอง

*/