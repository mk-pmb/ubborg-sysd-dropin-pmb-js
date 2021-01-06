
<!--#echo json="package.json" key="name" underline="=" -->
ubborg-sysd-dropin-pmb
======================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Generate ubborg file specs for systemd drop-in files.
<!--/#echo -->



API
---

This module exports one function:

### dropIn(unitName, confBaseName, content)

`unitName` is the systemd unit name for which to drop-in the config file.

`confBaseName` is the name of the drop-in file to create,
without the `.conf` extension.

`content` is either `null` or a dictionary object suitable
for the `static_ini` mimeFx magic.





<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
