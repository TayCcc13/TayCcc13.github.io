var posts=["2024/03/08/LeetCode/【LeetCode】删除有序数组中的重复项Day3/","2024/03/08/LeetCode/【LeetCode】删除有序数组中的重复项ⅡDay4/","2024/03/07/LeetCode/【LeetCode】移除元素Day2/","2023/05/28/嵌入式/Makefile/【嵌入式】Makefile/","2023/06/03/嵌入式/NFS/【嵌入式】开发板挂载Ubuntu的NFS目录/","2023/05/22/嵌入式/环境搭建/【嵌入式】虚拟机Ubuntu环境配置/","2023/10/15/嵌入式/第一个驱动/【嵌入式】第一个驱动/","2023/08/13/嵌入式/文件IO/【嵌入式】文件IO/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };