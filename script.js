const display= document.getElementById("textarea");
const buttons=document.querySelectorAll(".row");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        if(value==="AC")
            {
                display.value="0";
            }
            else if (value === "DEL")
                 {
                    display.value = display.value.slice(0, -1) || "0";
                 }
                 else if (value === "=")
                    {
                        try 
                        {
                            display.value = eval(display.value);
                        } 
                        catch 
                        {
                            display.value = "Error";
                        }
                    }
                    else 
                        {
                            if (display.value === "0") 
                                {
                                    display.value = value;
                                } 
                            else 
                                {
                                    display.value += value;
                                }
                        }



    });
});