
4. myself introduce
     <title>Document</title>
</head>

<body>

  <img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/45da878b70d4448b9f3ca522e42bc1c5~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=640\&h=640\&s=146203\&e=png\&a=1\&b=ffcb22" alt=""
  >

  <!-- <img src="https://mv01.jiaoliuqu.com/1665845995458dNYNT3YSJD" alt="" srcset=""> -->

  <div id="contain">
    lorem 
  </div>   

1. performance

   加载 -》 打包前 优化 首屏 白屏幕时间 tree-shaking 分包, 懒加载,预加载prefetch 
   lighthouse 查看一系列指标 ,针对优化
   
   响应 

2. project hard

3. RBAC power


4.  fiber 链表的数据结构 增量渲染：能够将渲染工作分成块，并将其分散到多个帧上
      MessageChannel 异步任务 无延迟 setTimeout 延迟4ms
      一帧中让出主线程 
      某个任务的执行时间超过了当前帧的剩余时间，它就会暂停执行，并在下一帧继续执行。这就是React Fiber如何实现渲染过程的暂停和恢复的。