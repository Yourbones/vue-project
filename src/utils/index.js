
/* 手机机型和环境判断 start */
export function isWechat() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.match(/MicroMessenger/i) === 'micromessenger';
}
export function isAlipay() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.match(/AlipayClient/i) === 'alipayclient';
}
export function isAndroid() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('android') > -1;
}
export function isiOS() {
    const ua = window.navigator.userAgent;
    return !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}
/* 手机机型和环境判断 end */
/* 获取url上的参数 start */
export function GetUrlParam() {
    var name, value;
    var str = location.href; // 取得整个地址栏
    var num = str.indexOf('?');
    str = str.substr(num + 1); // 取得所有参数   stringvar.substr(start [, length ]

    var arr = str.split('&'); // 各个参数放到数组里
    for (var i = 0; i < arr.length; i++) {
        num = arr[i].indexOf('=');
        if (num > 0) {
            name = arr[i].substring(0, num);
            value = arr[i].substr(num + 1);
            this[name] = value;
        }
    }
}
/* 获取url上的参数 end */

/**
 * 格式化时间
 * @param {any} time
 * 时间对象或字符串
 * @param {string} cFormat
 * 自定义日期格式y|m|d|h|i|s|a对应年月日时分秒星期
 * 例如'{m}/{d} {h}/{i}' 默认 '{y}-{m}-{d} {h}:{i}:{s}'
 * @return {string}
 * 格式化后的时间
 */
export function parseTime(time, cFormat) {
    if (arguments.length === 0) {
        return null;
    }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
    let date;
    // 时间对象 直接赋值
    if (typeof time === 'object') {
        date = time;
    } else {
    // 10位时间戳也就是单位为s的时间戳 转13位 ms
        if (('' + time).length === 10) time = parseInt(time) * 1000;
        // 转时间对象
        date = new Date(time);
    }
    // 获取年月日时分秒星期
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    };
    const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    // 遍历格式 替换成具体的时间
        let value = formatObj[key];
        // Note: getDay() returns 0 on Sunday
        if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value]; }
        // 补零
        if (result.length > 0 && value < 10) {
            value = '0' + value;
        }
        return value || 0;
    });
    return timeStr;
}
/* 获取指定url上的参数 start */
export function GetAssignUrlParam(url) {
    var name, value;
    var str = url; // 取得整个地址栏
    var num = str.indexOf('?');
    str = str.substr(num + 1); // 取得所有参数   stringvar.substr(start [, length ]

    var arr = str.split('&'); // 各个参数放到数组里
    for (var i = 0; i < arr.length; i++) {
        num = arr[i].indexOf('=');
        if (num > 0) {
            name = arr[i].substring(0, num);
            value = arr[i].substr(num + 1);
            this[name] = value;
        }
    }
}

export function priceFormat(price) {
    let value = Math.round(parseInt(price)) / 100;
    const s = value.toString().split('.');

    if (s.length === 1) {
        value = value.toString() + '.00';
        return value;
    }
    if (s.length > 1) {
        if (s[1].length < 2) {
            value = value.toString() + '0';
        }
        return value;
    }
}
