# Dynamic Programming Euler's Number

The mathematical constant $e$ (Euler's number) is defined as follows:

$$ e = \sum^{\infty}_{i=0} \frac{1}{i!} = \frac{1}{1} + \frac{1}{1} +
\frac{1}{1\cdot 2} + \frac{1}{1\cdot 2\cdot 3} + \frac{1}{1\cdot 2\cdot 3\cdot
4} + \ldots$$

I've provided an implementation of a function to approximate $e$ up to a number
of $n$ terms in `code.js` for you. However, it does repeated work -- identify
where the repeated work occurs and avoid it through bottom-up dynamic
programming (not memoization). Change the implementation accordingly.

Test your new functions; I've provided some basic testing code in `code.test.js`
but you need to go beyond that.

“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”-Andrew Thomas

Sources
#1-https://www.youtube.com/watch?v=piAlsJySUGE-Used this video to figure out how to implement a bottom up algorithm. Learned I should use a stack here

#2- Chat GPT Querey- "function FactorialDynamic(n){
    var FacStack=[1]
    var num;
    for(x=1;x<=n;x++){
        FacStack.push(FacStack[x-1]*x)
    }
    num=FacStack[FacStack.length-1]
    return num;
}
// console.log(FactorialDynamic(4))
// console.log(1/FactorialDynamic(3))

function e(n) {
    if(n === 0) return 1;
    else return 1.0 / factiorialTail(n) + e(n - 1);
}

// console.log(e(10))

function DynamicE(n){
    var EStack=[1]
    for(x=1;x<=n;x++){
       console.log((EStack[x-1])+(1/FactorialDynamic(x)))
        EStack.push((EStack[x-1])+(1/FactorialDynamic(x)))
    }
    // return EStack
}Don't give me code, why is this returning NAN values?, Don't give me code"

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?
