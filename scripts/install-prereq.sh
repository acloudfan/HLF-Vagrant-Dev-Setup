# Install

#sudo apt-get update

echo "========================================"
echo "Starting installation - Pre requisites"
echo "========================================"

curl -O https://hyperledger.github.io/composer/latest/prereqs-ubuntu.sh

chmod u+x prereqs-ubuntu.sh

./prereqs-ubuntu.sh

echo "========================================"
echo "Update Docker Configuration"
echo "========================================"

# December 2nd 2018
# remove the latest version 18.09.* as it has issues 
sudo apt-get remove -y docker-ce

# install docker-ce 18.03.*
sudo ./scripts/docker.sh



