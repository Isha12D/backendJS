//asyncHandler --> higher order function - 1.Take one or more functions as arguments.
                                           //2.Return a function as a result.
//nice example by chatgpt
// function repeat(operation, num) {
//     for (let i = 0; i < num; i++) {
//         operation();
//     }
// }

// function sayHello() {
//     console.log('Hello!');
// }

// // Here, `repeat` is a higher-order function because it takes another function as an argument
// repeat(sayHello, 3);
// // Output:
// // Hello!
// // Hello!
// // Hello!

//PROMISE METHOD
const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).
        catch((err) => next(err))
    }
}

export {asyncHandler}



//TRY CATCH METHOD
//const asyncHandler = () => {}
//const asyncHandler = (func) => () => {}
//const asyncHandler = (func) => async () => {}
// const asyncHandler = (fn) => async (req,res,next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         //json response
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }