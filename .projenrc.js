const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'kgumbs',
  authorAddress: 'kwesigumbs@hotmail.com',
  cdkVersion: '2.31.0',
  defaultReleaseBranch: 'main',
  name: 'projen-repo',
  repositoryUrl: 'https://github.com/kwesigumbs/projen-repo.git',
});
project.synth();