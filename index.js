/* 

Docker Image และ Layers

- Image ประกอบด้วย read-only layers หลายชั้น วางซ้อนกันเป็นสแต็ค
- ไฟล์จะกระจายอยู่ตาม layers ต่างๆ 
- Layer ล่างสุดเรียกว่า base layer
- ถ้ามีไฟล์ซ้ำกันใน layer ต่างๆ ไฟล์ใน layer บนสุดจะมีผลเหนือกว่า (obscure)
- ภาพรวมของ image (unified view) จะแสดงแค่ไฟล์ล่าสุดสุดในแต่ละตำแหน่ง  
- สร้าง image ใหม่ได้โดยเพิ่ม layer ที่มีไฟล์ที่เปลี่ยนแปลงครอบ layer เดิม
- Container จะสร้าง writable layer ของตัวเองไว้บนสุด เหนือ image layers เพื่อเก็บข้อมูลที่เปลี่ยนไประหว่างรัน
*/