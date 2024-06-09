/* 

แสดงถึงการใช้คำสั่ง `docker inspect` เพื่อดูรายละเอียดของ image โดยเฉพาะในส่วนของ layers

เมื่อเรา inspect image node:latest จะได้ผลลัพธ์ประมาณนี้

```json
$ docker inspect node:latest
[
    {
        "Id": "sha256:bd3d4369ae.......fa2645f5699037d7d8c6b415a10",
        "RepoTags": [
            "node:latest"
        ],
        ...
        "RootFS": {
            "Type": "layers",
            "Layers": [
                "sha256:c8a75145fc...894129005e461a43875a094b93412",
                "sha256:c6f2b330b6...7214ed6aac305dd03f70b95cdc610",
                "sha256:055757a193...3a9565d78962c7f368d5ac5984998",
                "sha256:4837348061...12695f548406ea77feb5074e195e3",
                "sha256:0cad5e07ba...4bae4cfc66b376265e16c32a0aae9"
            ]
        }
    }
]
```

จะเห็นว่าในส่วนของ `RootFS` จะมี field ที่ชื่อ `Layers` ซึ่งเก็บ SHA256 hashes ของแต่ละ layer ใน image นี้

ในตัวอย่างนี้จะเห็นว่ามี 5 layers เหมือนกับตอนที่เรา pull image นี้มา แต่ SHA256 hashes ที่แสดงจะไม่ตรงกับ ID แบบสั้นๆ ตอนเรา pull

สรุปง่ายๆ คือ `docker inspect` เป็นอีกวิธีนึงในการดูข้อมูลของ layers ใน image โดยมันจะแสดง SHA256 hash ของแต่ละ layer ให้เราเห็น ซึ่งเราสามารถเอาข้อมูลพวกนี้ไปใช้ในการวิเคราะห์ หรืออ้างอิงถึง layers แต่ละอันได้

*/