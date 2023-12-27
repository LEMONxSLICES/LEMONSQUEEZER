let Theme = "light" ;

function SwitchTheme()
{
    if(Theme == "light") 
    {
        document.body.style.backgroundColor = "#1d1d1dff" ;
        document.body.style.color = "#ecececff" ;
        Theme = "dark" ;
    }
    else
    {
        document.body.style.backgroundColor = "#ecececff" ;
        document.body.style.color = "#1d1d1dff" ;
        Theme = "light" ;
    }
}