var posts=["2024/01/15/hello-world/","2023/10/24/我的第一篇/","2023/05/05/Typora体验/","2023/10/24/test/","2023/05/04/我的第一篇博客文章/","2023/05/22/嵌入式/环境搭建/【嵌入式】虚拟机Ubuntu环境配置/","2024/01/15/嵌入式/NFS/【嵌入式】开发板挂载Ubuntu的NFS目录/","2024/01/15/嵌入式/第一个驱动/【嵌入式】第一个驱动/","2024/01/15/嵌入式/文件IO/【嵌入式】文件IO/","2024/01/15/嵌入式/Makefile/【嵌入式】Makefile/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };