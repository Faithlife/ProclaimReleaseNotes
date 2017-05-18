document.addEventListener("DOMContentLoaded", function(event) {
    var versions = document.querySelectorAll('[data-version]');
    for (i = 0; i < versions.length; i++) {
        var headerElement = versions[i];

        var version = headerElement.dataset.version;
        var tokens = version.split('.');
        var macVersion = `${tokens[0]}.${tokens[1]}.${tokens[2]}.${parseInt(tokens[3], 10)}`;
        console.log(macVersion);

        var div = document.createElement('div');
        div.setAttribute('class', 'download-links');

        var windowsLink = document.createElement('a');
        windowsLink.text = 'Windows';
        windowsLink.setAttribute('href', `https://downloads.logoscdn.com/Proclaim/Installer/${version}/ProclaimSetup.exe`);

        var macLink = document.createElement('a');
        macLink.text = 'Mac';
        macLink.setAttribute('href', `http://downloads.proclaimonline.com/mac/dmg/Proclaim ${macVersion}.dmg`);

        div.appendChild(windowsLink);
        div.appendChild(document.createTextNode(' | '));
        div.appendChild(macLink);

        headerElement.appendChild(div);
    }
});