document.addEventListener('DOMContentLoaded', function() {
    // 1）所有外部链接在新标签页打开
    document.querySelectorAll('a[href^="http"]').forEach(function(link) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });

    // 2）给首页 body 加 class，用于设置专属背景
    if (location.pathname === '/' ||
        location.pathname.endsWith('/index/') ||
        location.pathname.endsWith('/index.html')) {
        document.body.classList.add('home-background');
    }
});
