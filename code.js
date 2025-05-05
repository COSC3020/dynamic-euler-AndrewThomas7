function FactorialDynamic(n){
    var FStack=[1]
    var num;
    for(var x=1;x<=n;x++){
        FStack.push(Ftack[x-1]*x)
    }
    num=FStack[FStack.length-1]
    return num;
}
function DynamicE(n){
    var EStack=[1]
    for(var x=1;x<=n;x++){
       console.log((EStack[x-1])+(1/FactorialDynamic(x)))
        EStack.push((EStack[x-1])+(1/FactorialDynamic(x)))
    }
    return EStack[EStack.length-1]
}
