Package.describe({
  name: 'flowingconcept:cfs-transcoded-s3',
  version: '0.0.4',
  // Brief, one-line summary of the package.
  summary: 'Storage adapter for CollectionFS that uses AWS Elastic Transcoder to transcode and store files in S3',
  // URL to the Git repository containing the source code for this package.
  git: 'git@github.com:sebastianconcept/Meteor-cfs-transcoded-s3.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'aws-sdk': '2.2.32',
  's3-write-stream': '0.0.1'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use(['cfs:base-package@0.0.27', 'cfs:storage-adapter@0.2.0']);
  api.addFiles('transcodeds3.client.js', 'client');
  api.addFiles('transcodeds3.server.js', 'server');

});

Package.onTest(function (api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('flowingconcept:cfs-transcoded-s3');
  api.addFiles('cfs-transcoded-s3-tests.js');
});
