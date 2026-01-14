document.addEventListener('DOMContentLoaded', function() {
    // 1）所有外部链接在新标签页打开
    document.querySelectorAll('a[href^="http"]').forEach(function(link) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });

    // 2）给首页 body 加 class，用于设置专属背景
    var path = location.pathname;
    if (
        path === '/' ||                         // 本地 root
        /\/index\/?$/.test(path) ||             // 以 /index 或 /index/ 结尾
        /\/index\.html?$/.test(path)            // 以 /index.html 结尾
    ) {
        document.body.classList.add('home-background');
    }
});
