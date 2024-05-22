/* 
docker ps
คำสั่งนี้ใช้สำหรับแสดงรายการ Container ที่กำลังรันอยู่ในปัจจุบัน เพื่อยืนยันว่า Container ที่เราสร้างไว้ก่อนหน้านี้ชื่อ "test" ยังคงรันอยู่

docker stop test
คำสั่งนี้ใช้สำหรับหยุดการทำงานของ Container ชื่อ "test"

docker rm test
คำสั่งนี้ใช้สำหรับลบ Container ชื่อ "test" ออกจากระบบ

docker ps -a
คำสั่งนี้ใช้สำหรับแสดงรายการ Container ทั้งหมด รวมถึง Container ที่อยู่ในสถานะ Stopped ด้วย เพื่อยืนยันว่า Container "test" ถูกลบออกไปจากระบบแล้ว
*/