# Part of the course on Hyperledger Fabric
http://www.ACloudFan.com
https://hyperledger.github.io/composer/installing/installing-prereqs#ubuntu

Vagrant commands
================
> vagrant up
> vagrant ssh
> vagrant halt
> vagrant destroy

Windows | Mac | Linux Docker
============================
+ DO NOT RUN DOCKER DAEMON
+ Install the Docker or Docker toolbox on windows
+ Make sure that following environment variables are REMOVED
  Use Control Panel on windows
  DOCKER_TLS
  DOCKER_TLS_VERIFY
+ Set the Environment variable in Windows 
  DOCKER_HOST=tcp://localhost:2376

Usage
=====
> vagrant up
> vagrant ssh
  $ ./scripts/install-prereqs.sh
// Logout of vagrant
  $ logout
> vagrant ssh
  $ ./scripts/install-composer.sh
  $ ./scripts/install-fabric-tools.sh

Validation
==========
> set DOCKER_TLS_VERIFY=
> set DOCKER_HOST=tcp://localhost:2376
> docker ps     // Should not fail
