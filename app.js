'use strict';

const memo = new Map();
memo.set(0,0);
memo.set(1,1);

// 0番目は0
// 1番目は1
// その後はn-1とn-2の値を足したもの

function fib(n) {
    if(memo.has(n)){
        return memo.get(n);
    }
    const value = fib(n - 1) + fib(n - 2);
    memo.set(n, value);
    return value;
}

const length = 40;

for (let i = 0; i <= length; i++) {
    console.log(i + ' ' + fib(i));
}
