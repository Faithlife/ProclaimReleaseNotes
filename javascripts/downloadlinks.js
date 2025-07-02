document.addEventListener("DOMContentLoaded", function(event) {
    var versions = document.querySelectorAll('[data-version]');
    for (i = 0; i < versions.length; i++) {
        var headerElement = versions[i];

        var version = headerElement.dataset.version;
        var platforms = 'platform' in headerElement.dataset ? [ headerElement.dataset.platform ] : [ 'Windows', 'macOS' ];

        var div = document.createElement('div');
        div.setAttribute('class', 'download-links');
        for (var j = 0; j < platforms.length; j++)
        {
            if (j !== 0)
                div.appendChild(document.createTextNode(' | '));

            var platform = platforms[j];

            var link = document.createElement('a');
            switch (platform)
            {
                case 'macOS':
                    link.text = 'macOS (M-Series)';
                    link.setAttribute('href', `https://downloads.logoscdn.com/Proclaim/Installer/${version}/Proclaim-arm.dmg`);
                    div.appendChild(link);
                    div.appendChild(document.createTextNode(' | '));

                    link = document.createElement('a');
                    link.text = 'macOS (Intel)';
                    link.setAttribute('href', `https://downloads.logoscdn.com/Proclaim/Installer/${version}/Proclaim.dmg`);
                    div.appendChild(link);
                    break;
                case 'Windows':
                    link.text = platform;
                    link.setAttribute('href', `https://downloads.logoscdn.com/Proclaim/Installer/${version}/ProclaimSetup.exe`);
                    div.appendChild(link);
                    break;
            }
        }

        headerElement.appendChild(div);
    }
});
