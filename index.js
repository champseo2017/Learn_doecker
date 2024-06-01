/* 

ส่วนใหญ่แล้ว คุณจะทำงานกับ image โดยอ้างอิงจากชื่อของมัน และคุณสามารถเรียนรู้ได้มากเกี่ยวกับ image จากชื่อของมัน รูป 6.5 แสดงชื่อ image แบบเต็มรูปแบบ (fully qualified image name) ซึ่งประกอบด้วยชื่อ registry, ชื่อ user/organization, ชื่อ repository และ tag Docker จะใส่ค่าของ registry และ tag ให้โดยอัตโนมัติถ้าคุณไม่ได้ระบุ

การอ้างถึง image จาก official repository นั้นทำได้ง่าย คุณเพียงแค่ใส่ชื่อ repository และชื่อ image คั่นด้วยเครื่องหมายทวิภาค บางครั้งเราเรียกชื่อ image ว่า tag รูปแบบของคำสั่ง docker pull ที่ดึง image จาก official repository คือ:

```bash
$ docker pull <repository>:<tag>
```

ตัวอย่างก่อนหน้านี้ได้ pull Redis image ด้วยคำสั่งต่อไปนี้ มันได้ pull image ที่มี tag เป็น latest จาก redis repository ที่อยู่ระดับบนสุด

```bash
docker pull redis:latest
```
*/