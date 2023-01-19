var a= b= c=d=0
var myint
var state= false

function start(){
    state= false
    a=b=c=d=0
    myint=setInterval(myTimer,10)
}

function myTimer(){
    a=a+1
    if (a===100){
        a=0
        b=b+1
        if (b===60){
            a=0
            b=0
            c=c+1
            
            if(c===60){
                a=0
                b=0
                c=0
                d=d+1
            }
        }

    }
    document.getElementById('result').innerHTML=`<h1>`+String(d).padStart(2,0)+`:`+String(c).padStart(2,0)+`:`+String(b).padStart(2,0)+`:`+String(a).padStart(2,0)+`</h1>`

}

function pause(){
    state= !state
    if (state===true){
        clearInterval(myint)
    }
    else{
        myint=setInterval(myTimer,10)
    }

}

function reset(){
    state= false
    clearInterval(myint)
    a=b=c=d=0
    document.getElementById('result').innerHTML=`<h1>`+String(d).padStart(2,0)+`:`+String(c).padStart(2,0)+`:`+String(b).padStart(2,0)+`:`+String(a).padStart(2,0)+`</h1>`

}