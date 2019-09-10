function timerGame(callback) {
    console.log('timerGame Ready....go!');
    setTimeout(() => {
        console.log("Time's up -- stop1!");
        callback && callback();
        setTimeout(() => {
            console.log("Time's up -- stop2!");
            callback && callback();
        }, 3000);
    }, 1000);
}

function infiniteTimerGame(callback) {
    console.log('infiniteTimerGame Ready....go!');

    setTimeout(() => {
        console.log("Time's up! 10 seconds before the next game starts...");
        callback && callback();

        // Schedule the next game in 10 seconds
        setTimeout(() => {
            infiniteTimerGame(callback);
        }, 10000);
    }, 1000);
}

function timerGame2(callback) {
    setTimeout(() => {
        console.log("advanceTimersByTime 快进执行1!");
        callback && callback();
        setTimeout(() => {
            console.log("advanceTimersByTime 快进执行2!");
            callback && callback();
        }, 3000);
    }, 3000);
}

export {
    timerGame,
    infiniteTimerGame,
    timerGame2
};