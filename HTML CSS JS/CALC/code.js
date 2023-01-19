function add(){
    var x=document.getElementById('num1').value
    var y=document.getElementById('num2').value
    x=Number(x)
    y=Number(y)
    var z=x+y
    z=z.toFixed(2)
    console.log(z)
    document.getElementById('result').innerHTML=`<h3>Result: `+z+`</h3>`

}

function sub(){
    var x=document.getElementById('num1').value
    var y=document.getElementById('num2').value
    x=Number(x)
    y=Number(y)
    var z=x-y
    z=z.toFixed(2)
    console.log(z)
    document.getElementById('result').innerHTML=`<h3>Result: `+z+`</h3>`


}

function mult(){
    var x=document.getElementById('num1').value
    var y=document.getElementById('num2').value
    x=Number(x)
    y=Number(y)
    var z=x*y
    z=z.toFixed(2)
    console.log(z)
    document.getElementById('result').innerHTML=`<h3>Result: `+z+`</h3>`


}

function div(){
    var x=document.getElementById('num1').value
    var y=document.getElementById('num2').value
    x=Number(x)
    y=Number(y)
    if (y===0){
        document.getElementById('result').innerHTML=`<h3>Result: `+0+`</h3>`
    }
    
    else{
        var z=x/y
        z=z.toFixed(2)
        console.log(z)
        document.getElementById('result').innerHTML=`<h3>Result: `+z+`</h3>`

    }
}