export DOCKER_VERSION=18.03

install_docker() {
    apt-get update
    apt-get install -y apt-transport-https ca-certificates curl software-properties-common
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
    apt-key fingerprint 0EBFCD88
    add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
    apt-get update
    apt-get install -y "docker-ce=${DOCKER_VERSION}.*"
    # apt-get install -y "docker-ce"
    docker info
    # usermod -aG docker vagrant
    echo "======= Adding $SUDO_USER to the docker group ======="
    usermod -aG docker $SUDO_USER
}


# Install docker
install_docker

# Copy the config files
 cp ./scripts/docker  /etc/default
 cp ./scripts/docker.service /lib/systemd/system/
service docker restart
 systemctl daemon-reload
 systemctl restart docker

echo "======= Done. PLEASE LOG OUT & LOG Back In ===="
echo "Then validate by executing    'docker ps'"
# Restart is needed after this

# https://medium.com/@sudarakayasindu/enabling-and-accessing-docker-engine-api-on-a-remote-docker-host-on-ubuntu-16-04-2c15f55f5d39