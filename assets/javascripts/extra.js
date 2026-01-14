document.addEventListener('DOMContentLoaded', function() {
    // 1）所有外部链接在新标签页打开
    document.querySelectorAll('a[href^="http"]').forEach(function(link) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });

    // 2）给首页 body 加 class，用于设置专属背景
    var path = window.location.pathname || "";

    // 对于这个仓库：
    //   - GitHub Pages 项目首页： /POSTER/
    //   - 可能还有 /POSTER/index.html
    // 本地开发：一般是 / 或 /index.html 或 /index/
    if (
        path === '/' ||                     // 本地根
        path === '/index.html' ||           // 本地 index.html
        path === '/index/' ||               // 本地 /index/
        path === '/POSTER/' ||              // 线上项目首页
        path === '/POSTER/index.html'       // 线上 /POSTER/index.html
    ) {
        document.body.classList.add('home-background');
    }
});
