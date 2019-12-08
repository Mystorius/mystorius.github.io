// // Define a model for linear regression.
// const model = tf.sequential();
// model.add(tf.layers.dense({units: 1, inputShape: [1]}));
//
// model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
//
// // Generate some synthetic data for training.
// const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
// const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);
//
// // Train the model using the data.
// model.fit(xs, ys, {epochs: 10}).then(() => {
//     // Use the model to do inference on a data point the model hasn't seen before:
//     model.predict(tf.tensor2d([5], [1, 1])).print();
//     // Open the browser devtools to see the output
// });

// JavaScript

// import * as tf from '@tensorflow/tfjs';
// const model = tf.loadLayersModel('https://foo.bar/tfjs_artifacts/model.json');
// const img = document.getElementById('img');
//
// model.detect(img).then(predictions => {
//     console.log('Predictions: ', predictions);
// });

// const example = tf.fromPixels(img);  // for example
// const prediction = model.predict(example);
// const img = document.getElementById('img');

// Load the model.
let img =  document.getElementById("ganIMAGE");
let c = document.getElementById("ganCANVAS");
let ctx = c.getContext("2d");
ctx.drawImage(img, 0, 0);


cocoSsd.load().then(model => {
    // detect objects in the image.
    model.detect(img).then(predictions => {
        // console.log('Predictions: ', predictions);
        // console.log(predictions[0]['bbox']);
        let bbox = predictions[0]['bbox'];
        // console.log(bbox);
        ctx.beginPath();
        ctx.rect(Math.round(bbox[0]), Math.round(bbox[1]), Math.round(bbox[2]), Math.round(bbox[3]));
        ctx.stroke();
    });
});