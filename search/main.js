function search(info, tab) {
    chrome.tabs.create({
        url: "http://www.baidu.com/s?wd=" + info.selectionText
    });
}

chrome.contextMenus.create({
    title: '使用Baidu搜索 "%s"',
    contexts:["selection"],  // ContextType
    onclick: search // A callback function
});
