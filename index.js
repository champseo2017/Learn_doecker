/* 


ใน Linux ระบบ Docker นำองค์ประกอบต่างๆ ที่เราได้กล่าวถึงมาปรากฏในรูปแบบของไบนารีแยกต่างหากดังนี้:

- /usr/bin/dockerd (Docker daemon)
- /usr/bin/containerd
- /usr/bin/containerd-shim-runc-v2
- /usr/bin/runc

คุณสามารถเห็นองค์ประกอบเหล่านี้บนโฮสต์ Docker ที่ใช้ Linux โดยรันคำสั่ง ps บางกระบวนการจะปรากฏเฉพาะเมื่อระบบมี container กำลังทำงานอยู่เท่านั้น และคุณจะไม่เห็นกระบวนการเหล่านี้หากคุณใช้ Docker Desktop บน Mac เนื่องจาก Docker Engine จะทำงานอยู่ภายใน VM

```bash
# รันคำสั่ง ps บน Linux เพื่อดูกระบวนการต่างๆ ของ Docker
ps aux | grep docker

# ผลลัพธ์จะแสดงกระบวนการดังนี้:

# Docker daemon
/usr/bin/dockerd

# containerd
/usr/bin/containerd

# shim process สำหรับแต่ละ container
/usr/bin/containerd-shim-runc-v2 -namespace moby ...

# runc process สำหรับสร้าง/เริ่มต้น container (จะหายไปหลังจากสร้างเสร็จ)  
/usr/bin/runc create ...
/usr/bin/runc start ...
```

จากผลลัพธ์ เราจะเห็นว่า:

- `dockerd` เป็น Docker daemon หลัก
- `containerd` เป็นกระบวนการหลักในการจัดการ container
- `containerd-shim-runc-v2` เป็น shim process สำหรับแต่ละ container
- `runc` เป็นกระบวนการสำหรับสร้างและเริ่มต้น container (จะหายไปหลังจากทำงานเสร็จ)

ดังนั้น เมื่อรัน `docker run` Docker daemon จะสั่งงานผ่าน containerd ซึ่งจะสร้าง shim และ runc process ขึ้นมาเพื่อจัดการ container ตามที่ได้อธิบายไปก่อนหน้านี้
*/