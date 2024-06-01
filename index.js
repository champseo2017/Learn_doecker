/* 

ในการ pull image จาก registry อื่น คุณเพียงแค่เพิ่มชื่อ DNS ของ registry ไว้ข้างหน้าชื่อ repository ตัวอย่างเช่น คำสั่งต่อไปนี้จะ pull image ล่าสุดจาก Brandon Mitchell's regclient/regsync repo บน GitHub Container Registry (ghcr.io)

```bash
docker pull ghcr.io/regclient/regsync:latest
latest: Pulling from regclient/regsync
6f14f2b64ccf: Download complete
7746d6728537: Download complete
685af2c79c31: Download complete
4c377311167a: Download complete
662e9541e042: Download complete
Digest: sha256:149a95d47d6beed2a1404d7c3b00dddfa583a94836587ba8e3b4fe59853c1ece
Status: Downloaded newer image for ghcr.io/regclient/regsync:latest
ghcr.io/regclient/regsync:latest
```

สังเกตว่าการ pull ดูเหมือนกับที่ทำกับ Docker Hub นั่นเป็นเพราะ GHCR รองรับ OCI registry-spec และใช้ Docker Registry v2 API

*/