/* 

ตัวอย่างต่อไปนี้แสดงวิธีการ pull official image แบบต่างๆ

```bash
$ docker pull mongo:7.0.5 //Pull image ที่มี tag เป็น '7.0.5' จาก official 'mongo' repository

$ docker pull busybox:glibc //Pull image ที่มี tag เป็น 'glibc' จาก official 'busybox' repository

$ docker pull alpine //Pull image ที่มี tag เป็น 'latest' จาก official 'alpine' repository
```

มีสองสามสิ่งที่ควรทราบ ดังที่กล่าวไปก่อนหน้านี้ ถ้าคุณไม่ระบุ image tag หลังชื่อ repository Docker จะสมมติว่าคุณต้องการ image ที่มี tag เป็น latest คำสั่งจะล้มเหลวหาก repository ไม่มี image ที่มี tag เป็น latest image ที่มี tag เป็น latest ไม่ได้รับประกันว่าจะเป็นเวอร์ชันล่าสุดใน repository

การ pull image จาก unofficial repository จะเหมือนกับการ pull จาก official repository เกือบทุกประการ คุณเพียงแค่ต้องเพิ่มชื่อผู้ใช้ Docker Hub หรือชื่อองค์กรไว้ข้างหน้าชื่อ repository ตัวอย่างต่อไปนี้แสดงวิธีการ pull image v2 จาก tu-demo repository ที่เป็นของคนที่ไม่น่าไว้ใจ ซึ่งมี Docker Hub ID เป็น nigelpoulton

*/