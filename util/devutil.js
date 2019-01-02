var fs = require('fs');
const os = require('os');
var chalk       = require('chalk');
var figlet      = require('figlet');
var inquirer   = require('inquirer');
var path   = require('path');
var ncp    = require('ncp');
const fsextra = require('fs-extra');

console.log(
    chalk.yellow(figlet.textSync('ACloudFan.com', { 'horizontalLayout': 'full' })));

inquireAction()

function    inquireAction(){
    var  INSTALL_PEER_ADMIN_CARD = 'Install Peer Admin Card';
    var  DELETE_ALL_CARDS = 'Delete all cards';
    var  LIST_CARDS = 'List cards on disk';
    var  HELP_CLEANUP = 'Help Cleanup';

    var EXIT = "EXIT";


    //UI
    var UIPACKAGE = 'Generate UI Tars';

    var question = [
        {
            name: "action",
            message: "What would you like to do?",
            type: 'list',
            choices: [INSTALL_PEER_ADMIN_CARD,
            new inquirer.Separator(),
            DELETE_ALL_CARDS,
            LIST_CARDS,
            new inquirer.Separator(),
            HELP_CLEANUP,
            new inquirer.Separator(),
            EXIT]
        }
    ];

    // Let's prompt
    inquirer.prompt(question).then(function(result){
        switch(result.action){
            case INSTALL_PEER_ADMIN_CARD: installPeerAdminCard(); break;
            case DELETE_ALL_CARDS: deleteAllCards(); break;
            case LIST_CARDS: listCards(); break;
            case HELP_CLEANUP: helpCleanup(); break;
            case EXIT: process.exit(0);
        }
    });
}
  

function installPeerAdminCard(){

    var index = 1;
    var composerDir = os.homedir()+"/.composer";
    if (fs.existsSync(composerDir)) {
        try {
            fs.readdirSync(composerDir+'/cards').forEach(file => {
                console.log(chalk.green("Existing card ("+index+") "+file)); index++;
            });
        } catch (err) {
            console.log("No existing cards directory within " + composerDir);
        }
    } else {
        console.log(chalk.red("No cards found!!"));
        if(!fs.existsSync(os.homedir()+"./composer")){
            fs.mkdirSync(os.homedir()+"/.composer");
            fs.mkdirSync(os.homedir()+"/.composer"+"/cards");
        }
    }

    var srcPath = path.dirname("./dat/PeerAdminCard/cards/*"); //current folder
    var destPath = os.homedir()+"/.composer/cards"; //Any destination folder

    console.log(chalk.white('Copying files...'));

    ncp(srcPath, destPath, function (err) {
        if (err) {
            return console.error(err);
        }
        srcPath = path.dirname("./dat/PeerAdminCard/client-data/*");
        destPath = os.homedir()+"/.composer/client-data";
        ncp(srcPath, destPath, function (err) {
            if (err) {
                return console.error(chalk.red(err));
            }
            console.log(chalk.green('Created the Peer Admin Card!!'));
        });
    });
}

function listCards(){

    var index = 1;
    var composerDir = os.homedir()+"/.composer/cards"
    if (fs.existsSync(composerDir)) {
        fs.readdirSync(composerDir).forEach(file => {
            console.log(chalk.green("Existing card ("+index+") "+file)); index++;
        })
    } else {
        console.log(chalk.red("No cards found!!"));
    }
}

function deleteAllCards(){
    // Simply remove the .composer folder if it exists
    var composerPath = os.homedir()+"/.composer";
    if(fs.existsSync(composerPath)){
        fsextra.remove(composerPath, err =>{
            if(err){
              return  console.log(chalk.red("Error removing the cards!!!"));
            }
            console.log(chalk.green('Removed all cards!!'));
        })
    }
}

function helpCleanup(){
    console.log(chalk.blue('To Cleanup VM'));
    console.log(chalk.green('+ Change Directory to root of this project'));
    console.log(chalk.green('> vagrant destroy'));
    
    console.log(chalk.blue('To Clear Vagrant Box (Linux images'));
    console.log(chalk.green('+ Change Directory to root of this project'));
    console.log(chalk.green('> vagrant box remove ubuntu/trusty64'));

}