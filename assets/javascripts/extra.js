function initPage() {
    // 1）所有外部链接在新标签页打开
    document.querySelectorAll('a[href^="http"]').forEach(function(link) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });

    // 2）给首页 body 加 class，用于设置专属背景
    var path = window.location.pathname || "";

    document.body.classList.remove('home-background');

    if (
        path === '/' ||
        path === '/index.html' ||
        path === '/index/' ||
        path === '/POSTER/' ||
        path === '/POSTER/index.html' ||
        path === '/en/' ||
        path === '/en/index.html'
    ) {
        document.body.classList.add('home-background');
    }

    // 3）创建语言切换按钮
    createLangSwitch();
}

function createLangSwitch() {
    // 如果已经存在就更新链接
    if (document.getElementById('custom-lang-switch')) {
        updateLangLinks();
        updateLangSwitch();
        return;
    }

    var header = document.querySelector('.md-header__inner');
    if (!header) return;

    var langSwitch = document.createElement('div');
    langSwitch.id = 'custom-lang-switch';
    langSwitch.innerHTML = '<a href="#" id="lang-zh">中</a><span> | </span><a href="#" id="lang-en">EN</a>';

    header.appendChild(langSwitch);
    updateLangLinks();
    updateLangSwitch();
}

//function updateLangLinks() {
//    var path = window.location.pathname || "";
//    var zhLink = document.getElementById('lang-zh');
//    var enLink = document.getElementById('lang-en');
//
//    if (!zhLink || !enLink) return;
//
//    var zhPath, enPath;
//
//    // 判断当前是中文还是英文页面
//    if (path.indexOf('/en/') > -1) {
//        // 当前是英文页面，去掉 /en/ 得到中文路径
//        zhPath = path.replace('/en/', '/');
//        enPath = path;
//    } else {
//        // 当前是中文页面，加上 /en/ 得到英文路径
//        zhPath = path;
//        enPath = '/en/' + path.substring(1);
//    }
//
//    zhLink.href = zhPath;
//    enLink.href = enPath;
//}

function updateLangLinks() {
    var path = window.location.pathname || "";
    var zhLink = document.getElementById('lang-zh');
    var enLink = document.getElementById('lang-en');

    if (!zhLink || !enLink) return;

    var zhPath, enPath;

    // 判断当前是中文还是英文页面
    if (path.indexOf('/en/') > -1) {
        // 当前是英文页面，去掉 /en/ 得到中文路径
        zhPath = path.replace('/en/', '/');
        enPath = path;
    } else {
        // 当前是中文页面，在 /POSTER/ 后插入 en/
        zhPath = path;
        enPath = path.replace('/POSTER/', '/POSTER/en/');
    }

    zhLink.href = zhPath;
    enLink.href = enPath;
}
// 首次加载
document.addEventListener('DOMContentLoaded', initPage);

// MkDocs Material 即时加载后的页面切换
document.addEventListener('DOMContentSwap', initPage);

// 备用
if (typeof document$ !== 'undefined') {
    document$.subscribe(initPage);
}
