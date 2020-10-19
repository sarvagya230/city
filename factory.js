class Factory
{
    constructor(x,y)
    {
      this.body= createSprite(x,y,50,50)
    }

    icount()
    {
    if(cityStorage<maxStorage)
    {
    console.log(cityStorage)
    ironCount++
    cityStorage++
    if(textSprite!=undefined)
    {
        textSprite=undefined
    }
    gamestate=0
    text("iron redy",150,1500)

    }
    else if(maxStorage===cityStorage)
    {
        alert("not enough space")
        if(textSprite!=undefined)
    {
        textSprite=undefined
    }
    gamestate=0
    }
}
 woodcount()
 {
     if(cityStorage<maxStorage)
     {
         woodCount++
         cityStorage++
         if(textSprite2!=undefined)
         {
             textSprite2=undefined
         }

     }
     else if(maxStorage===cityStorage)
    {
        alert("not enough space")
        if(textSprite!=undefined)
    {
        textSprite=undefined
    }
    gamestate=0
    }




 }
}