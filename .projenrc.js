const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'kgumbs',
  authorAddress: 'kwesigumbs@hotmail.com',
  cdkVersion: '2.31.0',
  defaultReleaseBranch: 'main',
  name: '@kgumbs/projen-repo',
  packageName: '@kgumbs/projen-repo',
  repositoryUrl: 'https://github.com/kgumbs/projen-repo.git',
  npmRegistryUrl: 'https://npm.pkg.github.com',
  releaseToNpm: true
});
project.synth();