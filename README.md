# MongoDB $inc Operator Error
This repository demonstrates a common error when using the `$inc` operator in MongoDB updates. The `$inc` operator is intended for incrementing or decrementing numerical fields.  Attempting to use it on a non-numeric field will result in an error. 

The `bug.js` file shows the incorrect usage, while `bugSolution.js` provides the corrected approach.

## How to Reproduce
1. Clone this repository.
2. Ensure you have a MongoDB instance running.
3. Run the `bug.js` script. Observe the error.
4. Run the `bugSolution.js` script. Observe the successful update.
