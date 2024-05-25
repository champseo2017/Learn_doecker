/* 

ในปัจจุบัน Docker ได้ถอดฟังก์ชันส่วนใหญ่ออกจาก daemon โดยให้ daemon มุ่งเน้นไปที่การให้บริการ API เท่านั้น

บทสรุป:
Docker Engine เป็นแพลตฟอร์มที่ทำให้ง่ายต่อการสร้าง ส่ง และรันคอนเทนเนอร์ มันนำมาตรฐาน OCI มาใช้และเป็นแอปพลิเคชันโมดูลาร์ที่ประกอบด้วยองค์ประกอบย่อยๆ มากมาย

Docker daemon ใช้ในการให้บริการ Docker API แต่ได้ถอดฟังก์ชันอื่นๆ ออกไปและนำมาใช้เป็นเครื่องมือสำหรับประกอบกันได้แยกต่างหาก เช่น containerd และ runc

containerd ทำหน้าที่จัดการแบ่งปันและตรวจสอบวงจรชีวิตของคอนเทนเนอร์ เช่น เริ่มต้น หยุด และลบคอนเทนเนอร์ containerd ถูกพัฒนาโดย Docker, Inc. และนำไปมอบให้กับ CNCF มันจัดอยู่ในรันไทม์ระดับสูงและถูกนำไปใช้ในโปรเจกต์อื่นๆ เช่น Kubernetes, Firecracker และ Fargate

containerd พึ่งพารันไทม์ระดับต่ำที่ชื่อ runc ในการเชื่อมต่อกับเคอร์เนลของโฮสต์และสร้างคอนเทนเนอร์ runc เป็นการนำมาตรฐาน OCI runtime-spec มาใช้งาน และคาดว่าจะเริ่มต้นคอนเทนเนอร์จากบันเดิลที่สอดคล้องกับ OCI

containerd สื่อสารกับ runc และทำให้แน่ใจว่าอิมเมจ Docker ถูกนำเสนอให้ runc เป็นบันเดิลที่สอดคล้องกับ OCI runc สร้างมาจากโค้ด libcontainer คุณสามารถรันมันเป็น CLI tool แบบสแตนด์อะโลนเพื่อสร้างคอนเทนเนอร์ได้ และมันถูกนำไปใช้ทุกที่ที่มีการใช้งาน containerd

Shim ทำให้สามารถใช้ containerd กับรันไทม์ระดับต่ำอื่นๆ ได้

```go
// Docker daemon จะให้บริการ API 
// แต่มอบหน้าที่อื่นๆ ให้กับ containerd และ runc

// containerd รับหน้าที่จัดการอิมเมจและคอนเทนเนอร์
containerd.ManageImages()
containerd.ContainerLifecycle() {
    // สร้าง shim process
    shimProcess = containerd.CreateShimProcess(containerID)
    
    // สร้าง runc process เพื่อสร้างคอนเทนเนอร์
    runcProcess = containerd.CreateRuncProcess(containerID, bundle)
    runcProcess.Create(bundle)
    
    // shim process เป็นกระบวนการหลักของคอนเทนเนอร์
    shimProcess.MonitorContainerStatus()
}

// runc เป็นรันไทม์ระดับต่ำสำหรับสร้างและจัดการคอนเทนเนอร์
runc.Create(bundle) {
    // สร้างและกำหนดค่าคอนเทนเนอร์จากบันเดิล OCI
    createContainerFromOCIBundle(bundle)
}
```

ดังนั้น Docker daemon ทำหน้าที่เพียงให้บริการ API ขณะที่ containerd และ runc รับหน้าที่อื่นๆ เช่น จัดการอิมเมจ จัดการวงจรชีวิตคอนเทนเนอร์ และสร้างคอนเทนเนอร์จากบันเดิล OCI ทำให้ระบบมีความยืดหยุ่นและมีประสิทธิภาพมากขึ้น
*/