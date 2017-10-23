document.addEventListener("DOMContentLoaded", function(event) {
    var versions = document.querySelectorAll('[data-version]');
    for (i = 0; i < versions.length; i++) {
        var headerElement = versions[i];

        var version = headerElement.dataset.version;

        var div = document.createElement('div');
        div.setAttribute('class', 'download-links');

        var windowsLink = document.createElement('a');
        windowsLink.text = 'Windows';
        windowsLink.setAttribute('href', `https://downloads.logoscdn.com/Proclaim/Installer/${version}/ProclaimSetup.exe`);

        var macLink = document.createElement('a');
        macLink.text = 'Mac';
        macLink.setAttribute('href', `http://downloads.logoscdn.com/Proclaim/Installer/${version}/Proclaim.dmg`);

        div.appendChild(windowsLink);
        div.appendChild(document.createTextNode(' | '));
        div.appendChild(macLink);

        headerElement.appendChild(div);
    }
});
