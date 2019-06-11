process.stdin.on('readable', () => {
    var chunk = process.stdin.read();
    eval(chunk.toString());
});