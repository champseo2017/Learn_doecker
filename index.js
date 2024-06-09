/* 

คำสั่ง `docker inspect` เป็นคำสั่งที่ดีมากในการดูข้อมูลรายละเอียดของ image ส่วนอีกคำสั่งที่ใช้ดูข้อมูล layers ของ image ได้คือ `docker history` 

แต่ต้องระวังว่า `docker history` จะแสดงประวัติการ build ของ image ซึ่งอาจจะไม่ใช่รายการ layers ที่แน่นอนในตัว image สุดท้าย 

ยกตัวอย่างเช่น บาง Dockerfile instructions เช่น ENV, EXPOSE, CMD และ ENTRYPOINT จะเพิ่มแค่ metadata เข้าไปใน image เท่านั้น โดยไม่ได้สร้าง layer ใหม่

ดังนั้นเวลาใช้ `docker history` ต้องระวังตรงนี้ด้วย ว่ามันอาจจะแสดงข้อมูลที่ไม่ใช่ layers ของ image จริงๆ ก็ได้ แต่โดยรวมแล้วมันก็ยังมีประโยชน์ในการดูประวัติการสร้าง image อยู่ดี

```bash
# ตัวอย่างการใช้คำสั่ง docker history
$ docker history node:latest
IMAGE          CREATED        CREATED BY                                      SIZE      COMMENT
bd3d4369ae87   6 days ago     /bin/sh -c #(nop)  CMD ["node"]                 0B
<missing>      6 days ago     /bin/sh -c #(nop)  ENTRYPOINT ["docker-entry…   0B
<missing>      6 days ago     /bin/sh -c #(nop) COPY file:2387388516437885…   388B
<missing>      6 days ago     /bin/sh -c apk add --no-cache --virtual .bui…   7.84MB
<missing>      6 days ago     /bin/sh -c #(nop)  ENV YARN_VERSION=1.22.19     0B
<missing>      3 weeks ago    /bin/sh -c addgroup -g 1000 node     && addu…   104MB
<missing>      3 weeks ago    /bin/sh -c #(nop)  ENV NODE_VERSION=20.1.0      0B
<missing>      3 weeks ago    /bin/sh -c #(nop)  CMD ["/bin/sh"]              0B
<missing>      3 weeks ago    /bin/sh -c #(nop) ADD file:9a4f77c1528c6c105…   7.34MB
```

จากตัวอย่างจะเห็นว่ามีบาง step ที่ไม่ได้สร้าง layer ใหม่ เช่น step ที่รันคำสั่ง ENV และ CMD เป็นต้น โดยจะสังเกตได้จากขนาด (SIZE) ที่เป็น 0B นั่นเอง

*/