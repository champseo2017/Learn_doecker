/* 

```
$ docker rm web1 -f
```
// คำสั่งนี้ใช้สำหรับลบ Container ชื่อ "web1" ออกจากระบบ
// -f หรือ --force เป็นการบังคับให้ลบ Container แม้ว่ามันจะยังคงรันอยู่

```
web1
```
// ผลลัพธ์แสดงชื่อ Container ที่ถูกลบออกไป

```
$ docker rmi test:latest
```
// คำสั่งนี้ใช้สำหรับลบ Docker Image ชื่อ "test" แท็ก "latest" ออกจากระบบ

```
Untagged: test:latest
Deleted: sha256:0435f27...cac8e2b
```

*/