const CatchTheFrog = function () {
    let numoffrogs= 1
    let levelnum= 1
    let time=1000
    let frogs =[ 
            {
                id: "p1",
                position={
                    top: "20vh",
                    left: "30vh"
                }
            },
            {
                id: "p2",
                position={
                    top: "10vh",
                    left: "50vh"
                }
            }
        ]
    const Levelup = function () {
        numoffrogs += 1
        levelnum += 1
        time+=1000
    }
    const deletefrogs= function (removefrogid) {
        for(let i=0;i<frogs.length;i++)
    {
        if(frogs[i].id === removefrogid)
        {
            frogs.splice(i,1)
        }
    }
        
    }
    const getfrogs = function () {
        return frogs
    }
    const addfrog= function () {
        let position1=Math.random()*80+"vh"
        let position2=Math.random()*80+"vh"
        let newfrog={
            id:"p" + ++postidCounter,
            position={top:position1, left:position2}
        }
        frogs.push(newfrog)
    }
    return {
        numoffrogs:numoffrogs,
        levelnum:levelnum,
        time:time,
        frogs:frogs,
        Levelup:Levelup,
        getfrogs:getfrogs,
        addfrog:addfrog
    }
}
