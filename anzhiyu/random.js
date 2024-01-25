var posts=["2023/05/28/嵌入式/Makefile/【嵌入式】Makefile/","2023/06/03/嵌入式/NFS/【嵌入式】开发板挂载Ubuntu的NFS目录/","2023/08/13/嵌入式/文件IO/【嵌入式】文件IO/","2023/05/22/嵌入式/环境搭建/【嵌入式】虚拟机Ubuntu环境配置/","2023/10/15/嵌入式/第一个驱动/【嵌入式】第一个驱动/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };