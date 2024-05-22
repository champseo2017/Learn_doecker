/* 
ps -elf
คำสั่งนี้ใช้สำหรับแสดงรายการกระบวนการทั้งหมดที่กำลังรันอยู่ภายใน Container

F S UID PID PPID NI ADDR SZ WCHAN STIME TTY TIME CMD 
4 S root 1 0 0 - 4560 - 13:38 pts/0 00:00:00 /bin/bash
0 R root 9 1 0 - 8606 - 13:38 pts/0 00:00:00 ps -elf
// ผลลัพธ์จะแสดงรายการกระบวนการที่กำลังรันอยู่ โดยที่กระบวนการหลักคือ /bin/bash (PID 1) ซึ่งเป็นกระบวนการ Bash Shell ที่เราสั่งให้ Container รันเมื่อสร้างขึ้นมา
// PID 9 คือกระบวนการ ps -elf ซึ่งจะหายไปหลังจากคำสั่งทำงานเสร็จ

Ctrl-PQ
กดปุ่ม Ctrl-PQ เพื่อออกจาก Container โดยไม่ต้องปิด Container

docker ps
คำสั่ง docker ps จะแสดงรายการ Container ที่กำลังรันอยู่ในปัจจุบัน ซึ่งจะเห็น Container ชื่อ "test" ที่เราสร้างขึ้นมาก่อนหน้านี้
*/