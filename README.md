# NovaFile — Official Website

The official website for **NovaFile**, a file manager for Windows
written from scratch in C.

Plain static HTML/CSS/JS — no build step, no frameworks, no
dependencies.

## Contents

| Path | Purpose |
|---|---|
| `index.html` | Home — hero, feature overview, download callout |
| `features.html` | Full feature list of the current release |
| `download.html` | Download page — installer, requirements, install steps |
| `guide.html` | Documentation — first steps + keyboard shortcuts |
| `about.html` | About NovaFile + tech stack |
| `changelog.html` | Release history |
| `assets/` | Stylesheet, scripts, logo/icon/screenshot |
| `downloads/` | The release installer served by the Download page |
| `robots.txt` | Crawler rules |

## Run locally

Serve the folder with any static web server, e.g.:

```
python -m http.server 8099
```

then open `http://localhost:8099`.

## Configure a release

Everything version-specific lives in one place —
`assets/js/config.js`:

```js
window.NOVA_CONFIG = {
  version: "1.0.0",
  downloadUrl: "downloads/NovaFile-Setup-1.0.0.exe",  // "" = show placeholder
  installerSize: "~2.6 MB"
};
```

Every page reads these values (version labels, download buttons).
The hero screenshot swaps in automatically once
`assets/img/app-screenshot.png` exists.

## Copyright

Copyright (c) 2026 NovaFile. **All rights reserved.**

This repository is published for viewing only. No license is granted
to use, copy, modify, merge, publish, distribute, sublicense, or sell
the code, assets, or installer.
