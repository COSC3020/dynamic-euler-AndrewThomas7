function FactorialDynamic(n){
    var FValue=1
    var num;
    for(var x=1;x<=n;x++){
        FValue*=1*x
    }
    return FValue;
}
function DynamicE(n){
    var EValue=1
    for(var x=1;x<=n;x++){
        EValue=EValue+(1/FactorialDynamic(x))
    }
    return EValue
}
