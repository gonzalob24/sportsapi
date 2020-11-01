// import {PythonShell} from 'python-shell';
// const PythonShell = require('python-shell')
// const myPythonScriptPath = 'test.py';
// const pyshell = new PythonShell(myPythonScriptPath);

// pyshell.on('message', function (message) {
//     // received a message sent from the Python script (a simple "print" statement)
//     console.log(message);
// });

// pyshell.end(function (err) {
//     if (err){
//         throw err;
//     };

//     console.log('finished');
// }); 


// PythonShell.run('test.py', null, function (err) {
//     if (err) throw err;
//     console.log('finished');
//   });


//   PythonShell.runString('x=1+1;print(x)', null, function (err) {
//     if (err) throw err;
//     console.log('finished');
//   });

// PythonShell.run('test.py', function (err, result){ 
//     if (err) throw err; 
//     // result is an array consisting of messages collected  
//     //during execution of script. 
//     console.log('result: ', result.toString()); 
//     res.send(result.toString()) 
// }); 


console.log('test')
let {PythonShell} = require('python-shell')

// python not installed here so i cant demo actual useage
// but as you can see run is a function and if python was installed it could be used
console.log(PythonShell.run)
console.log(PythonShell.run == null)
console.log(PythonShell.run == undefined)
console.log(typeof(PythonShell.run))

var options = {
    mode: 'text',
    pythonPath: '/usr/bin/python3.8',
    pythonOptions: ['-u'],
    scriptPath: '',
};

PythonShell.run('test.py', options, function (err, results) {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    console.log('results: %j', results);
});