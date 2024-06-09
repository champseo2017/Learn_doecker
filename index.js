/* 

ทุก Docker image จะเริ่มต้นด้วย base layer เสมอ และทุกครั้งที่เราเพิ่ม content ใหม่เข้าไป Docker ก็จะเพิ่ม layer ใหม่ขึ้นมา

ลองดูตัวอย่างง่ายๆ ของการสร้างแอป Python อันนึง สมมติว่า policy ของบริษัทเรากำหนดให้ทุกแอปต้องสร้างจาก official Ubuntu 24.04 image 

นั่นหมายความว่า official Ubuntu 24.04 image จะเป็น base layer ของแอปเรา ส่วนการติดตั้ง Python จะเพิ่ม layer ที่ 2 และ source code ของแอปเราจะเพิ่ม layer ที่ 3 

ดังนั้น image สุดท้ายจะมี 3 layers ดังในรูป 6.8 (จำไว้ว่านี่เป็นตัวอย่างง่ายๆ เพื่อให้เข้าใจเท่านั้น)

```dockerfile
# Layer 1 (base): Official Ubuntu 24.04 image
FROM ubuntu:24.04

# Layer 2: Install Python
RUN apt-get update && apt-get install -y python3

# Layer 3: Add application code
COPY app.py /app/
WORKDIR /app
CMD ["python3", "app.py"]
```

จาก Dockerfile ข้างบน จะแบ่งเป็น layer ได้ดังนี้

- Layer 1 (base layer): กำหนดให้ใช้ Ubuntu 24.04 เป็น base image ด้วยคำสั่ง FROM
- Layer 2: ติดตั้ง Python ด้วยคำสั่ง RUN
- Layer 3: เพิ่ม source code ของแอปด้วย COPY, กำหนด working directory ด้วย WORKDIR และกำหนดคำสั่งเริ่มต้นด้วย CMD

เมื่อ build image นี้ เราจะได้ image ที่มี 3 layers ซึ่งเวลารันจะเริ่มต้นจาก base layer คือ Ubuntu ก่อน แล้วค่อยรันคำสั่งในแต่ละ layer ถัดไปจนถึง layer สุดท้าย
*/