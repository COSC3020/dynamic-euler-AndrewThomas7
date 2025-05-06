function FactorialDynamic(n){
    var FStack=[1]
    var num;
    for(var x=1;x<=n;x++){
        FStack.push(FStack[x-1]*x)
    }
    num=FStack[FStack.length-1]
    return num;
}
function DynamicE(n){
    var EValue=1
    for(var x=1;x<=n;x++){
        EValue=EValue+(1/FactorialDynamic(x))
    }
    return EValue
}
