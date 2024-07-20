<h2>3. Developing Your First Application</h2>

<h5>3.1 Interactive Mode</h5>

<h6>3.1.1 General use</h6>

You can reach the interactive mode of Node.js, by entering the node command in the command line

```
node
```

Example of using commands in the Node.js REPL

```
$ node
> console.log("Hello")
Hello
undefined
>
```

<h6>3.1.2 Other REPL Commands</h6>

| Commands |                                   Description                                   |
| :------: | :-----------------------------------------------------------------------------: |
|  .break  | Terminates the current input .break is especially useful for multiple commands. |
|  .clear  |                           Serves as aliad for .break                            |
|  .exit   |                           Terminates the Node.js REPL                           |
|  .help   |                      Outputs a list of available commands.                      |
|  .load   |             Loads a saved session from a file into the current REPL             |
|  .save   |            Saves the commands of the current REPL session to a file.            |
| .editor  |       Opens the editor mode where you can define a block of instructions,       |

There are two options available to exit the REPL: using the .exit command `Ctr + D` , while will also terminates the process immediately. Alternatively, you can press `Ctr + C` twice.

<h6>3.1.3 Saving and Loading in the PERL</h6>

If you want to run more extensive tests in PERL or record the results, you can use the `.save` and `.load` commands to save the previously executed commands to a file or load a file with JS instructions into the current REPL.

```js
> console.log('Hello World!');
Hello world!
undefined
> .save myShell.js
Session saved to:myShell.js
> .load myShell.js
> console.log('Hello World!');
Hello world!
undefined
>
```

<h6>3.1.4 Context of the REPL</h6>

<h6>3.1.5 REPL History</h6>

The Node.js REPL has special environment variables. Two of them concern historicizing entries.

- `NODE_REPL_HISTORY` - you can change the location of the history.
- `NODE_REPL_HISTORY_SIZE` - determines how many lines the history file can hold.

<h6>3.1.6 REPL MODE</h6>

You can use the `NODE_REPL_MODE` environment variable to determine in which mode you want to run the Node.js REPL.
The three possibile values are as follows:

- `sloppy` - The REPL is set to nonstrict mode.
- `strict` - The strick value activates the strict mode.
- `magic` - The value is now deprecated ans is used as an allias of sloppy.

<h6>3.1.7 Searching in the REPL</h6>

The Node.js REPL allows you to not only navigate within the history using the arrow keys, but also to search for specific lines.
You can use `Ctrl + R` and `Ctrl + S` to perform backwards and forward search runs in the history.

<h6>3.1.8 Asynchronous Operations in REPL</h6>

<h5>3.2 The First Application</h5>

```js
// Code example
$ node
Welcome to Node.js v16.8.0.
Type ".help" for more information.
> await Promise.resolve('Hello world');
'Hello world'
```
<h6>3.2.1 Web Server in Node.js</h6>

`var`, `let` and `const`
In JS, there are now three wasys to define variables.
If you define your variables by prefixing them withe the `var` keyword, this has the effect that variable is valid in the current function and all subfunctions. 
The `let` keyword enables you to define variables at the block level. For example, if you define a counter variable in a for loop with `let`, this variable is valid only within the loop.
The third way to define a variable is with the `const` keyword. Such variables aren't variables in the true sense, but constants, which means that you can't change the value of the variable after the initial assignemnt.