module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
    // 禁止使用console（warn：在打开的规则作为警告，off：规则关闭）
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        // 禁止使用debugger
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        // 语句强制分号结尾
        semi: [2, 'always'],
        // 函数定义时括号前面要不要有空格
        'space-before-function-paren': [0, 'always'],
        // 缩进风格
        indent: [2, 4]
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                jest: true
            }
        }
    ]
};
