'use strict';
{   
    var time = 0;
    var timerLabel = document.getElementById('timerLabel');
    var startBtn = document.getElementById('startBtn');
    var stopBtn = document.getElementById('stopBtn');
    var resetBtn = document.getElementById('resetBtn');
    var id;  // setTimeoutから返される値を入れる変数

    // STARTボタン
    function start() {
        // スタートボタンを押せないようにする（これをしないと何回もスタートボタン押せてしまう）
        startBtn.disabled = true;
        // timeをsetTimeoutで設定したミリ秒ごとに1プラスする
        time++;  

        // 1.2.3.4桁
        var min = Math.floor(time/10/10/10)
        var sec = Math.floor(time/10/10);
        var mSec = Math.floor(time/10);
        var mir = time % 10;
        // 分・秒・ミリ秒が１桁の場合は、先頭に０をつける
        if (min < 10) min = min;
        if (sec >= 60) sec = sec % 10; // 秒が10秒以上になった場合の処理（10になったら0になる）
        if (sec < 10) sec = sec; 
        if (mSec >= 10) mSec = mSec % 10
        if (mSec < 10) mSec = mSec;
        if (mir < 10) mir = mir;

        // timerLabelを更新
        timerLabel.innerHTML = min + ':' + sec + ':' + mSec + ':' + mir;
        // setTimeoutでstart関数をループさせるイメージ？
        id = setTimeout(start, 100);
    }

    // STOPボタン
    function stop() {
        // 停止する
        clearTimeout(id);
        // スタートボタンを押せるようにする
        startBtn.disabled = false;

    }

    // RESETボタン
    function reset() {
        // 停止する
        clearTimeout(id);
        // タイムを0に戻す
        time = 0;
        // タイマーラベルをリセット
        timerLabel.innerHTML = '0:0:0:0';
        // スタートボタンを押せるようにする
        startBtn.disabled= false;
    }

    // クリックした時の処理
    startBtn.addEventListener('click', start, false); // STARTボタン
    stopBtn.addEventListener('click', stop, false); // STOPボタン
    resetBtn.addEventListener('click', reset, false); // RESETボタン
}
