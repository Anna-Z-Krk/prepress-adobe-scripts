Pre-press Adobe Illustrator Scripts
===================================
Collection of helpful Adobe Illustrator scripts.
Tested only on Adobe Illustrator 2020.

### Resources
General guide:
* [ExtendScript Wiki](https://github.com/ExtendScript/wiki/wiki)
* [JavaScript Tools Guide](https://wwwimages2.adobe.com/content/dam/acom/en/devnet/scripting/pdfs/javascript_tools_guide.pdf)
* [Official Illustrator Scripting](https://www.adobe.com/devnet/illustrator/scripting.html)
* [Unofficial Illustrator Scripting](https://illustrator-scripting-guide.readthedocs.io/)

JavaScript Reference:
* [ScriptUI Reference](http://jongware.mit.edu/scriptuihtml/Sui/index_1.html)
* [Illustrator Reference](http://jongware.mit.edu/iljscs6html/iljscs6/inxx.html)

Usage
-----
These scripts are **not standalone**, all of them requires `.lib` directory to be in pre-determined paths. This is why it is recommended to put them in Adobe Illustrator installation paths. Download source, then there are 2 ways to install:
1. Run `scripts-patcher.bat` as admin (Windows) or `scripts-patcher.sh` with sudo (Mac).
2. Manually copy & paste all files and folders within `Scripts` directory to `{Ai installation path}/Presets/{your locale}/Scripts`.

The scripts can then be accessible from `Ai Menu Bar > File > Scripts`.