Official Composer Documentation still shows use of HLF1.2. 

You may use v1.3 with composer by following the steps in this document
Please treat it as a experimental setup.

Here is how you can setup a  v1.3 dev environment

1. Follow the original instructions to setup the fabric-tools
2. Copy the v1.3/hlfv13 to fabric-tools/fabric-scripts
3. Edit the ~/.profile ... add the following lines at the end Logout & Log back in
    export FABRIC_VERSION=hlfv13
    export HLF_FABRIC_VERSION=hlfv13

Use the usual commands
4. ./downloadFabric.sh
5. ./startFabric.sh
6. ./stopFabric.sh