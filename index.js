/* 
เมื่อคุณใช้คำสั่ง Docker CLI เพื่อสร้างคอนเทนเนอร์ใหม่ เช่น `docker run -d --name ctr1 nginx` สิ่งที่เกิดขึ้นเบื้องหลังคือ:

1. Docker client แปลงคำสั่งเป็น API request และส่งไปยัง Docker daemon
2. Docker daemon รับ request และส่งต่อไปยัง containerd เพื่อสร้างคอนเทนเนอร์
3. containerd แปลง Docker image ที่ต้องการเป็น OCI bundle และบอก runc ให้สร้างคอนเทนเนอร์ใหม่
4. runc เชื่อมต่อกับ OS kernel เพื่อรวบรวมส่วนประกอบที่จำเป็นในการสร้างคอนเทนเนอร์ (namespaces, cgroups เป็นต้น)
5. คอนเทนเนอร์เริ่มต้นในฐานะ child process ของ runc และ runc จะออกไปเมื่อคอนเทนเนอร์เริ่มทำงาน
*/