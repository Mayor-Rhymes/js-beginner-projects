{



    let board = document.getElementById("cont");
    let changer = document.getElementById("change");
    let selector = document.getElementById("selector");
    let converter = document.getElementById("conv");

    //selector.value = "Kg";

    changer.onclick = function()
    {



        if(selector.selectedIndex == 0)
        {


            selector.selectedIndex = 1;

        }
        else if(selector.selectedIndex == 1)
        {


            selector.selectedIndex = 2
        }
        
       else{
        selector.selectedIndex = 0;

       }


    
    }



    converter.onclick = function()
    {


        if(selector.selectedIndex == 1)
        {


            

            let confide = board.value*1000;
            board.value = confide;

        }

        else if(selector.selectedIndex == 2)
        {

            let confide = board.value*2.20462;
            board.value = confide;
            
        }
    }
   




}