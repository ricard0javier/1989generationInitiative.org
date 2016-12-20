[![Build Status][6]][7]

1989 Generation Initiative ([website link][2])
==========================
We are an open policy network committed to mobilising young Europeans; or '89ers', to lead the long term regeneration of the European Project through the development of innovative policy proposals.

About This Repository
---------------------
This repo is to build and maintain the initiative website and to address the requirements and the project milestones in visible way.

There are two branches: 
- [dev][4]: To show the ongoing changes
- [master][3]: To show the deployed source code

Both branches have an equivalent URL to the deployed website, so it is possible to check how the website is going to look, in the case of dev; or how does it look, in de case of master:
- dev - [http://dev.1989generationinitiative.org][1]
- master - [http://www.1989generationinitiative.org][2]

Find more information about how to work within the Website project on the [Wiki][5]

Development Notes
=================

Requirements:
-------------
* node v6.4.0
* npm 3.10.9
* AWS credentials file in '~/.aws/credentials'
```
[default]
aws_access_key_id=***PROTECTED***
aws_secret_access_key=***PROTECTED***
region=eu-central-1

```

Commands
--------
* Serve locally: `npm run serve`
* Compile: `npm run gulp`
* Deploy: `npm run deploy`


Used links:
-----------
* https://css-tricks.com/snippets/css/a-guide-to-flexbox/
* http://www.rapidtables.com/convert/color/rgb-to-hex.htm
* http://fontawesome.io/icons
* https://www.sejda.com/compress-pdf
* https://developers.google.com/maps/documentation/embed/start
* https://github.com/import-io/s3-deploy
* http://quirktools.com/screenfly
* https://github.com/erikras/ducks-modular-redux


TODO:
-----
* EuroBabble blog is not available, what to put in Updates then?
* Get the events brochures
* Define the different bodies:
    * Define Updates body
* Clean up the scss files

---
[1]: http://dev.1989generationinitiative.org
[2]: http://www.1989generationinitiative.org
[3]: https://github.com/ricard0javier/1989generationInitiative.org
[4]: https://github.com/ricard0javier/1989generationInitiative.org/tree/dev
[5]: https://github.com/ricard0javier/1989generationInitiative.org/wiki
[6]: https://travis-ci.org/ricard0javier/1989generationInitiative.org.svg?branch=master
[7]: https://travis-ci.org/ricard0javier/1989generationInitiative.org
