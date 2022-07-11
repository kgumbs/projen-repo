const { awscdk } = require('projen');
const { NpmAccess } = require('projen/lib/javascript');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'kgumbs',
  authorAddress: 'kwesigumbs@hotmail.com',
  cdkVersion: '2.31.0',
  defaultReleaseBranch: 'master',
  majorVersion: 1,
  name: '@kgumbs/projen-repo',
  packageName: '@kgumbs/projen-repo',
  repositoryUrl: 'https://github.com/kgumbs/projen-repo.git',
  npmAccess: NpmAccess.PUBLIC,
  npmRegistryUrl: 'https://npm.pkg.github.com',
  releaseToNpm: true,
});
project.synth();