/* 
วิธีการสร้างและรัน Docker Container จาก Docker Image ที่ได้ดาวน์โหลดมาก่อนหน้านี้ โดยใช้คำสั่ง `docker run` เพื่อสร้าง Container ใหม่ชื่อ "test" จาก Ubuntu Image ล่าสุด (`ubuntu:latest`)

หน้าจอ Code และคำอธิบาย:

```
$ docker run --name test -it ubuntu:latest bash
```
// คำสั่งนี้ใช้สำหรับสร้าง Container ใหม่ชื่อ "test" จาก Ubuntu Image ล่าสุด
// --name test: กำหนดชื่อ Container เป็น "test"
// -it: รันในโหมด Interactive ซึ่งจะเปิดเทอร์มินัลให้สามารถป้อนคำสั่งได้
// ubuntu:latest: ระบุ Image ที่จะใช้สร้าง Container
// bash: คำสั่งที่จะรันหลังจากสร้าง Container เสร็จ (ในกรณีนี้คือเปิด bash shell)

```
root@bbd2e5ad1817:/#
```
// หลังจากรัน `docker run` คำสั่งเสร็จ คุณจะเห็นว่า Prompt ของ Shell เปลี่ยนไป ซึ่งแสดงว่า Shell ของคุณกำลังทำงานอยู่ภายใน Container ที่เพิ่งสร้างขึ้นมา

การรัน `docker run` จะสร้าง Container ใหม่จาก Docker Image ที่ระบุ คุณสามารถกำหนดชื่อและตั้งค่าต่างๆ ของ Container ได้ด้วยการใช้ flag ที่เหมาะสม เช่น `--name` สำหรับกำหนดชื่อ `-it` สำหรับรันในโหมด Interactive เป็นต้น หลังจากสร้าง Container เสร็จแล้ว คุณจะสามารถรันคำสั่งต่างๆ ภายใน Container ได้
*/