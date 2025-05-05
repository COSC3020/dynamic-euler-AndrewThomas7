
function FactorialDynamic(n){
    var FacStack=[1]
    for(x=1;x<=n;x++){
        FacStack.push(FacStack[x-1]*x)
    }
    return FacStack
}
function DynamicE(n){
    var EStack=[1]
    for(x=1;x<=n;x++){
        EStack.push(EStack[x-1]+1.0/ FactorialDynamic(x))
    }
    return EStack[EStack.length-1]
}
