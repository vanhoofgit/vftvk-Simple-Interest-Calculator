

function compute()
{
    /* This function calculates the interest to receive 
    input : the number of years, the rate and the ptinciple
    output: the interest to receive */
    var years = document.getElementById('years').value
    var year = new Date().getFullYear() + parseInt(years) 
    var rate = document.getElementById("rate").value;
    var principal = document.getElementById("principal").value;
    if (principal > 0){
    var interest = principal * years * rate / 100;
    document.getElementById("result").innerHTML='If you deposit '+principal+',\
    <br\>at an interest rate of '+rate+'%' + '\
    <br\>You will receive an interest amount of '+ interest + '\
    in the year '+year+'\<br\>';

    } else
    {
    document.getElementById("result").innerHTML='The amount must be given in and be greater than zero';


    }
    document.getElementById("principal").focus();

}
function updateRate() 
{
    /* This function adjust the interest % , according to the movement
    of the slidebar */
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+ ' %';
}







        