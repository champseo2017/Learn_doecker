/* 

แสดงตัวอย่างการสร้าง image ของ application ภาษา Python โดยมีโครงสร้าง ดังนี้

- Layer 1 (base layer): ใช้ Ubuntu 24.04 เป็น base image
- Layer 2: ติดตั้ง Python 
- Layer 3: เพิ่ม application code

ส่วนสำคัญคือต้องเข้าใจว่า image คือการรวมกันของทุก layer ที่วางซ้อนกันตามลำดับที่สร้างขึ้น 

รูป 6.9 แสดง image ที่มี 2 layers โดยแต่ละ layer มี 3 ไฟล์ ดังนั้น image นี้จะมีทั้งหมด 6 ไฟล์

```
Image
  |-- Layer 2
  |    |-- File 4
  |    |-- File 5  
  |    +-- File 6
  +-- Layer 1
       |-- File 1
       |-- File 2
       +-- File 3
```

จะเห็นว่า layers ถูกเก็บแยกเป็น object อิสระ และตัว image เป็นแค่ metadata ที่ระบุว่าต้องใช้ layers ไหนบ้าง และวางซ้อนกันยังไง

เวลาเรารัน container จาก image Docker จะสร้าง container layer ขึ้นมาอีกชั้นนึงข้างบนสุด ซึ่งจะอ่าน/เขียนข้อมูลจาก image layers ได้ แต่การเปลี่ยนแปลงจะถูกบันทึกใน container layer เท่านั้น ไม่กระทบกับ image ต้นฉบับ

สรุปคือ image ประกอบด้วย read-only layers หลายๆ ชั้น ส่วน container จะสร้าง read-write layer ของตัวเองไว้ข้างบนสุด เพื่อแยกข้อมูลที่ถูกแก้ไขระหว่างรันออกจาก image ต้นฉบับนั่นเอง
*/