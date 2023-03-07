# Kinsta starter splash screen

This repository is a base for splash screens for Kinsta Starters. This splash screen should be implemented in most of starters before they are deployed.

The aim of this splash screen was to keep everything in one file. That's why:
- all the CSS files are inlined in the `index.html` 
- favicon is converted to base64
- fonts are served from fonts.bunny.net

## Steps to implement
1. Copy the index to the starter you are using and convert it to make it work.
2. Replace all the `{FRAMEWORK}` with the name of framework / script you are using
3. Replace all the `href="#"` with correct links to framework, documentation and starter github url.
