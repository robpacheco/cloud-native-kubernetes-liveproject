let determineConfigDir = () => {
    // TODO: Fill in code here to determine the configuration directory.
    // This is likely similar to your solution for milestone 1.
}

let determineConfigFile =() => {

    // TODO: Fill in code here to determine the configuration file.
    // This is likely similar to your solution for milestone 1.
}

module.exports = function() {
        
    const configFile = determineConfigFile()
    return require(configFile)
}