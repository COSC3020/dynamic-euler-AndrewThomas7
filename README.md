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

# Answer

To determine the time complexity for my algorthm we will walk through each step to figure out what it is doing.

First we delcare a stack initalzied with the base case number 1;
Then we run a for loop from 1-n, where n is the series deapth we go into in order to approximate e. This has a complexity of $O(n)$, however we also have a nested loop inside of this hidden in the form of the function FactorialDynamic(x), which calculates the factorial number dynamically using Tabulation. This also has a time complexity of $O(n)$ as it too creates a stack and pushes factorial numbers to it. This list created here is the length of the factorial(x). So if we calculate the factorial 5 we get a list of length 5. The last number in this list is returned to calculate the e-approximation. With that being said we have something like $n\cdot n=n^2\in \Theta(n^2)$.

```Javascript
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

```
