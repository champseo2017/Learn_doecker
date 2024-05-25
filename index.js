/* 
คำสั่งสำหรับลบ Docker Image มีดังนี้:

```
docker rmi [OPTIONS] IMAGE [IMAGE...]
```

โดยที่:
- `rmi` เป็นคำสั่งย่อของ "remove image"
- `[OPTIONS]` เป็นตัวเลือกเสริมสำหรับคำสั่ง (ถ้ามี) เช่น:
  - `-f, --force` บังคับให้ลบ image แม้ว่ากำลังมีคอนเทนเนอร์ใช้งานอยู่
  - `--no-prune` ป้องกันไม่ให้ลบ images ที่เชื่อมโยงกับ images อื่น ๆ
- `IMAGE` คือชื่อหรือ ID ของ image ที่ต้องการลบ

ตัวอย่างการใช้งาน:

1. ลบ image ชื่อ `myimage`:
```
docker rmi myimage
```

2. ลบ image หลายๆ image พร้อมกัน:
```
docker rmi myimage1 myimage2 myimage3
```

3. ลบ image แบบบังคับ แม้ว่ามีคอนเทนเนอร์กำลังใช้งาน:
```
docker rmi -f myimage
```

4. ลบ image ทั้งหมดที่ไม่ได้ใช้งาน:
```
docker rmi $(docker images -q)
```

หมายเหตุ: คำสั่งลบ image จะไม่สามารถลบ image ที่มีคอนเทนเนอร์กำลังใช้งานอยู่ได้ เว้นแต่จะใช้ `-f` เพื่อบังคับลบ ดังนั้นควรใช้ด้วยความระมัดระวัง
*/