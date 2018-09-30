Vagrant.configure("2") do |config|

    # Change made - May 13th. Using a box that is available on 
    # hyperv (Windows 10 Pro)  and   VirtualBox (Windows 10 Home)
    # Ubuntu 64 bit
    # config.vm.box = "ubuntu/trusty64"
    
    config.vm.box = "bento/ubuntu-16.04"

    config.vm.synced_folder "./", "/home/vagrant/workspace"
    config.vm.synced_folder "./scripts", "/home/vagrant/scripts"

    # Ports foward
    # For playground
    config.vm.network "forwarded_port", guest: 8080, host: 8080
    # For REST Server
    config.vm.network "forwarded_port", guest: 3000, host: 3000
    # For Docker Deamon
    config.vm.network "forwarded_port", guest: 2375, host: 2375
    # For Orderer Container
    config.vm.network "forwarded_port", guest: 7050, host: 7050
    # For Peer Container
    config.vm.network "forwarded_port", guest: 7051, host: 7051
    # For Peer Container
    config.vm.network "forwarded_port", guest: 7052, host: 7052
    # For Peer Container
    config.vm.network "forwarded_port", guest: 7053, host: 7053
    # For CA Container
    config.vm.network "forwarded_port", guest: 7054, host: 7054
    # For CouchDB Container
    config.vm.network "forwarded_port", guest: 5984, host: 5984

    # FIXED IP Address => Change this if you have a conflict
    # config.vm.network "private_network", ip: "192.168.50.4"

    # This gets executed for both vm1 & vm2
    config.vm.provision "shell", inline:  "echo 'All good'"
  
    # To use a diffrent Hypervisor create a section config.vm.provider
    # And comment out the following section
    # Configuration for Virtual Box
    # Note for windows 10 Pro users : change the provider to hyperv
    config.vm.provider :virtualbox do |vb|
      # Change the memory here if needed - 2 Gb memory on Virtual Box VM
      vb.customize ["modifyvm", :id, "--memory", "2048", "--cpus", "1"]
      # Change this only if you need destop for Ubuntu - you will need more memory
      vb.gui = false
      # In case you have DNS issues
      # vb.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
    end
  end