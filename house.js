class house
{
    constructor(x,y)
    {
        this.body=createSprite(x,y,50,50)
        this.houseRank=1
        delay(100*60*60*3)
        simcash=simcash+(10*this.houseRank)
    }
    upgradelevel(upgrade)
    {
        
        if (upgrade===true)
        {
            this.houseRank=this.cityRank++


        }
    }
    fire(a)
    {
        if(a.isTouching(this.bodybody))
        {
           break

        }
        else
        {
            delay(1000*60*60)
            this.houseRank=this.houseRank--

        }
        

    }

    

}