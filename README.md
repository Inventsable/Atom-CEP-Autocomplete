# Adobe Autocomplete for Atom

Custom fork of [atom-autocomplete-boilerplate](https://github.com/lonekorean/atom-autocomplete-boilerplate) for Illustrator's scripting DOM. See the [codersblock tutorial here](http://codersblock.com/blog/creating-an-autocomplete-plug-in-for-atom/) and [autocomplete-plus](https://github.com/atom/autocomplete-plus) provider API for full documentation.

## Installation

``` bash
# travel to target path
cd <targetpath>

# clone this repo
git clone https://github.com/Inventsable/CEP-Atom-Autocomplete.git

# use Atom Package Manager (installed by default with Atom)
apm link

# Refresh Atom
```

This is now installed and available in *Settings* > *Packages* > *Community Packages*

![packages tab](https://i.imgur.com/U1a5H2i.png)

## Working demo

Currently only has AutoCAD options as proof of concept:

![auto](https://thumbs.gfycat.com/LikableOrdinaryAmurratsnake-size_restricted.gif)

Supports hyperlinks for `More...`, currently points to [this wonderful guide from aenhancers](http://ai.aenhancers.com/):

![](https://thumbs.gfycat.com/PositiveShabbyHairstreakbutterfly-size_restricted.gif)

I've kept the other example files as a reference but have them commented within `./lib/main.js`, the entire extension only uses

* `./data/ILST.json` - The array for definitions of suggestions, very easy to contribute to
* `./lib/ILST-provider.js` - The [Provider API functions](https://github.com/atom/autocomplete-plus/wiki/Provider-API) for attributes and behavior
* `./lib/main.js` - Adding as many providers as needed/wanted here. This can include core Javascript `$` and other Adobe apps as well.

## ILST.json

A simple, large collection like this:

``` json
{
  "text": "AutoCADExportFileFormat",
  "description": "DXF | DWG",
  "descriptionMoreURL": "http://ai.aenhancers.com/jsobjref/scripting-constants/#autocadexportfileformat"
},
{
  "text": "AutoCADExportOption",
  "description": "PreserveAppearance | MaximizeEditability",
  "descriptionMoreURL": "http://ai.aenhancers.com/jsobjref/scripting-constants/#autocadexportoption"
},
```

Any modifications can be made inside Atom in real-time, then `View > Developer > Refresh Window` (Control + Shift + F5) to see update:

![](https://thumbs.gfycat.com/GaseousUnawareCrossbill-size_restricted.gif)
