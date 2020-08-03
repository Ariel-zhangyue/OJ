function cutRope(number) {
    // write code here
    // 长度为 n 的绳子的最大乘积
    // maxM(n) = Math.max(maxM(1)*maxM(n-1), maxM(2)*maxM(n-2), ...maxM(n-1/2)*maxM(n+1)/2)
    const maxM = [];
    // 已知的值
    
    maxM[0] = 0;
    maxM[1] = 1;
    maxM[2] = 2;
    maxM[3] = 3;
    maxM[4] = 4;
    let i = 5;
    while(i<=number) {
        var tmp = i;
        for(var j = 1; j <= i/2; j += 1) {
            tmp = Math.max(tmp, maxM[j] * maxM[i-j]);
        }
        maxM[i] = tmp;
        i+=1;
    }
    return maxM[number];
}


console.log(cutRope(15))
