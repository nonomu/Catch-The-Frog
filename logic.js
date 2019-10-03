const CatchTheFrog = function () {
    let GameNum = {
        numoffrogs: 1,
        levelnum: 1,
        time:1000
    }
    const Levelup = function () {
        numoffrogs += 1
        levelnum += 1
        time+=1000
    }
    const getGamenum = () => GameNum

    return {
        GameNum: GameNum,
        Levelup:Levelup,
        getGamenum:getGamenum

    }
}
