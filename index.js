/* 

สรุปเป็นภาษาไทยสำหรับ Dev:

การติดตั้ง Docker แบบสะอาดจะมี local repository ว่างเปล่า local repository เป็นศัพท์เฉพาะที่ใช้เรียกพื้นที่บนเครื่องของคุณที่ Docker เก็บ image ไว้เพื่อให้เข้าถึงได้สะดวกขึ้น เราบางครั้งเรียกมันว่า image cache และบน Linux มันมักจะอยู่ที่ /var/lib/docker/<storage-driver> อย่างไรก็ตาม ถ้าคุณใช้ Docker Desktop มันจะอยู่ใน Docker VM

รันคำสั่งต่อไปนี้เพื่อตรวจสอบเนื้อหาใน local repository ของคุณ ตัวอย่างนี้มี image สามอันที่เกี่ยวข้องกับ Docker Desktop extension สามตัวที่ผมกำลังรันอยู่ ของคุณอาจจะแตกต่างออกไปและอาจจะว่างเปล่า

```bash
$ docker images
REPOSITORY                             TAG       IMAGE ID       CREATED        SIZE
docker/disk-usage-extension            0.2.9     f4c95478a537   26 hours ago   3.64MB
docker/logs-explorer-extension         0.2.6     417dd9a8f96d   26 hours ago   17.9MB
portainer/portainer-docker-extension   2.19.4    908d04d20e86   2 months ago   364MB
```

กระบวนการในการดึง image มาเรียกว่า pulling รันคำสั่งต่อไปนี้เพื่อ pull redis image และตรวจสอบว่ามันมีอยู่ใน local repository ของคุณ


*/