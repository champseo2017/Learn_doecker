/* 

เราสามารถใช้คำสั่ง curl เพื่อดึงข้อมูล digest ของ image โดยตรงจาก Docker Hub ได้ โดยไม่ต้องโหลด image มาก่อน

 curl "https://hub.docker.com/v2/repositories/nigelpoulton/k8sbook/tags/?name=latest" \
|jq '.results[].digest'

"sha256:13dd59a0c74e9a147800039b1ff4d61201375c008b96a29c5bd17244bce2e14b"

# คำสั่งนี้ทำงานดังนี้:
# 1. ใช้ curl เพื่อส่งคำขอไปยัง Docker Hub API
# 2. ระบุ repository และ tag ที่ต้องการดู (nigelpoulton/k8sbook:latest)
# 3. ใช้ jq เพื่อแยกเอาเฉพาะข้อมูล digest ออกมา
# 4. ผลลัพธ์คือ digest ของ image ที่เราต้องการ
*/
