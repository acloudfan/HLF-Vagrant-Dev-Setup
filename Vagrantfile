Vagrant.configure("2") do |config|

    # config.vm.box = "hashicorp/precise64"
    config.vm.box = "ubuntu/trusty64"

    config.vm.synced_folder "../", "/home/vagrant/workspace"
    config.vm.synced_folder "./scripts", "/home/vagrant/scripts"

    # Ports foward
    # For playground
    config.vm.network "forwarded_port", guest: 8080, host: 8080
    # For REST Server
    config.vm.network "forwarded_port", guest: 3000, host: 3000
    # For Docker Deamon
    config.vm.network "forwarded_port", guest: 2376, host: 2376

    # FIXED IP Address => Change this if you have a conflict
    # config.vm.network "private_network", ip: "192.168.50.4"

    # This gets executed for both vm1 & vm2
    config.vm.provision "shell", inline:  "echo 'All good'"
  
    config.vm.provider :virtualbox do |vb|
      # Change the memory here if needed
      vb.customize ["modifyvm", :id, "--memory", "2048", "--cpus", "1"]
      # Change this only if you need destop for Ubuntu - you will need more memory
      vb.gui = false
    end
  end