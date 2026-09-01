import os from 'os';

function getPlatform(){
    return os.platform();
}

function getArchitecture(){
    return os.arch();
}

export { getPlatform, getArchitecture };