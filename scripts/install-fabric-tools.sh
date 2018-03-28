
echo "============================================="
echo "Starting installation - Fabric Tools Install"
echo "============================================="

mkdir  workspace/fabric-tools
cd workspace/fabric-tools

curl -O https://raw.githubusercontent.com/hyperledger/composer-tools/master/packages/fabric-dev-servers/fabric-dev-servers.tar.gz

tar -xvf fabric-dev-servers.tar.gz

rm fabric-dev-servers.tar.gz

cp /home/vagrant/workspace/util/dat/fabricUtil.sh .

cd /home/vagrant

echo $'\ncd workspace/fabric-tools\n' >> .profile
