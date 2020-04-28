export function checkPrice(rule, value, callback) {
    if (!value) {
        return callback(new Error('数值不能为空'));
    }
    const _value = parseFloat(value);
    setTimeout(() => {
        if (_value <= 0) {
            callback(new Error('必须大于0'));
        } else {
            callback();
        }
    }, 500);
}
// 校验正整数
export function checkPositiveInteger(rule, value, callback) {
    if (value === '') { // 输入的值为空时
        return callback(new Error('数值不能为空'));
    }
    const _value = parseFloat(value);
    setTimeout(() => {
        if (_value < 0) {
            callback(new Error('必须大于0'));
        } else {
            callback();
        }
    }, 500);
}
// 数字值必须是在1-1000之间
export function checkInterval(rule, value, callback) {
    if (!value) {
        return callback(new Error('数值不能为空'));
    }
    const _value = parseFloat(value);
    setTimeout(() => {
        if (_value <= 1 || _value > 1000) {
            callback(new Error('必须大于1小于1000'));
        } else {
            callback();
        }
    }, 500);
}

// 数字值必须是在0-100之间，销售奖金比例
export function checkInterval2(rule, value, callback) {
    console.log(value);
    // if (!value) {
    //   return callback(new Error('数值不能为空'));
    // }
    if (value === undefined || value === '') { // 输入的值为空时
        return callback(new Error('数值不能为空'));
    }
    const _value = parseFloat(value);
    setTimeout(() => {
        if (_value < 0 || _value > 100) {
            callback(new Error('必须是0~100的整数'));
        } else {
            callback();
        }
    }, 500);
}

export function checkInteger(rule, value, callback) {
    if (!value) {
        return callback(new Error('数字不能为空'));
    }
    const _value = parseFloat(value);
    setTimeout(() => {
        if (!Number.isInteger(_value)) {
            callback(new Error('请输入数字值'));
        } else {
            callback();
        }
    }, 500);
}

// 限制结束时间必大于开始时间
export function checkDate(rule, value, callback) {
    console.log('value', value);
    if (!value || !value.length) {
        return callback(new Error('请选择日期'));
    }
    if (value.length && value[0] >= value[1]) {
        return callback(new Error('结束时间须大于开始时间'));
    }
    callback();
}
