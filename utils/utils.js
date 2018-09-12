

//封装了请求数据的方法
function fetchData(url) {
    console.log(url);
    let promise = new Promise((resolve, reject) => {
        wx.request({
            url: url,
            data: {},
            method: 'GET',
            dataType: "json",
            header: {
                // 'content-type': 'json' // 默认值
                'content-type': 'application/x-www-form-urlencoded',
            }, // 设置请求的 header
            success: resolve,
            fail: reject,
        })
    });
    return promise;
}

function starToArray(score) {
    let star = score.slice(0, 1);
    let arr = [];
    for (let i = 0; i < star; i++) {
        arr.push(1);
    }
    for (let i = 0; i < 5 - star; i++) {
        arr.push(0);
    }
    return arr;

}
export {
    fetchData,
    starToArray
}
