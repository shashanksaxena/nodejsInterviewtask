var http = require('http');
var fs = require('fs');
const { EventEmitter } = require('events');
const em = new EventEmitter();


http.createServer(function (req, res) {
    console.log("readStream2");
    //var filename = "https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3";
    var filename = 'sample.txt';

    // This line opens the file as a readable stream
    var readStream = fs.createReadStream(filename);
    // This will wait until we know the readable stream is actually valid before piping
    readStream.on('open', function () {
        console.log("done")
        readStream.pipe(res);
        //emit a mp3 event with data of read stream
        // em.emit("mp3", res);
    });

    var dataLength = 0;
    var data = '';
    // using a readStream that we created already
    readStream
        .on('data', function (chunk) {
            dataLength += chunk.length;
            data += chunk;
        })
        .on('end', function () {  // done
            console.log('The length was:', dataLength);
            em.emit("mp3", data);
        });



    // This catches any errors that happen while creating the readable stream (usually invalid names)
    readStream.on('error', function (err) {
        res.end(err);
    });

    // catching the event emitted by read stream
    em.on('mp3', function (data) {
        console.log('mp3 event emitted:' + data);

        // Saving emitted data to local folder using a write stream
        var writerStream = fs.createWriteStream('output.mp3');
        writerStream.write(data, 'base64');

        writerStream.end();

        writerStream.on('finish', function () {
            console.log("Write completed.");
        });

        // Handling the writeStream error
        writerStream.on('error', function (err) {
            console.log(err.stack);
        });

    });



}).listen(9000, '127.0.0.1');

