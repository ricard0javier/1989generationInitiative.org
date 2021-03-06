const util = require('gulp-util');
const AWS = require('aws-sdk');
const gulp = require('gulp');

AWS.config.update({
  signatureVersion: 'v4'
});

const s3 = new AWS.S3();

gulp.task('cleanS3Bucket', done => {
  cleanBucket(util.env.bucketName);
  done();
});

gulp.task('cloneS3BucketContent', done => {
  const fromBucketName = util.env.fromBucketName;
  const toBucketName = util.env.toBucketName;

  cleanBucket(toBucketName).
    then(data => getObjects(fromBucketName)).
    then(objects => copyObjects(objects, fromBucketName, toBucketName));

  done();
});

gulp.task('uploadS3BucketContent', done => {

  const jwt = require('jsonwebtoken');
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3JpY2FyZDBqYXZpZXIuZXUuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDU4NzJiMTVjYmY4ZTYzMzI1MDY1OWEwZSIsImF1ZCI6IlIyZ1RBemJKeGh5NnZnVUQxMW51VEhGY3JteGR0VDJOIiwiZXhwIjoxNDg0NTUxODU2LCJpYXQiOjE0ODQ1MTU4NTZ9.-QG6CjCm7OGEqfFdOt9Y-oyJzzwGX9T_o9Py26Ic_fg";
  const secret = "q-A6zRuth_5qIZGWaECO0I0sbkw3P7Yfnbry-hLlyxBWOwVOJpg0mTDl6Oq1xXOe";
  jwt.verify(token, secret, function(err, decoded) {
    console.log("err:");
    console.log(err);
    console.log("decoded");
    console.log(decoded);
  });

});

/**
 * Delete all the S3 Bucket objects contained on the argv[bucketName] bucket
 */
const getObjects = bucketName => {

  console.log(`getting list of objects in the bucket '${bucketName}'`);
  // retrieve all objects

  const flatObjects = data => {
    return new Promise((resolve, reject) => {
      const objects = [];
      data.Contents.map(object => {
        objects.push(object.Key);
      });
      resolve(objects);
    });
  };

  const listPromise = s3.listObjects({Bucket: bucketName}).promise();
  return listPromise.then(data => flatObjects(data));
};

/**
 * Deletes all the S3 Bucket objects contained on the a given bucket
 */
const cleanBucket = bucketName => {

  const mapObjects = data => {
    return new Promise((resolve, reject) => {
      const objects = [];
      data.map(object => {
        objects.push({Key: object});
        console.log(`Object '${object}' marked for deletion`);
      });
      resolve(objects);
    });
  };

  return getObjects(bucketName)
    .then(data => mapObjects(data))
    .then(objects => deleteObjects(bucketName, objects));

};

/**
 * Deletes objects from the bucket
 * @param bucketName
 * @param objects
 */
const deleteObjects = (bucketName, objects) => {
  if (objects.length === 0) {
    console.log("There are not objects to delete");
    return Promise.resolve();
  }
  console.log(`deleting objects from the bucket '${bucketName}'`);
  return s3.deleteObjects({Bucket: bucketName, Delete: {Objects: objects}}).promise();
};

/**
 * Copies all the objects from one bucket to other
 * @param objects
 * @param fromBucketName
 * @param toBucketName
 */
const copyObjects = (objects, fromBucketName, toBucketName) => {
  objects.map(key => {
    const copySource = `${fromBucketName}/${key}`;
    const copyPromise = s3.copyObject({Bucket: toBucketName, Key: key, CopySource: copySource}).promise();
    copyPromise.then(() => console.log(`Object '${copySource}' copied to bucket '${toBucketName}'`));
  });
  console.log(`${objects.length} elements copied`)
};
