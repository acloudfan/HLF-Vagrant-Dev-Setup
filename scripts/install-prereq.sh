# Install

#sudo apt-get update

echo "========================================"
echo "Starting installation - Pre requisites"
echo "========================================"
curl -O https://hyperledger.github.io/composer/latest/prereqs-ubuntu.sh

chmod u+x prereqs-ubuntu.sh

chmod u+x prereqs-ubuntu.sh

./prereqs-ubuntu.sh

echo "========================================"
echo "Update Docker Configuration"
echo "========================================"

# sudo service docker stop
#sudo cp /home/vagrant/scripts/docker /etc/default/docker
sudo cp /home/vagrant/scripts/docker.service  /lib/systemd/system
sudo systemctl daemon-reload

sudo service docker restart

