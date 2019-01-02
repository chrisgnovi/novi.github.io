---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Work experience
======
### Zepto Life Technology, March, 2018 - present

Zepto Life Technologies is a University of Minnesota startup developing fast, accurate early cancer and disease detection. I have the pleasure of being part of the Zepto team as a Software Developer!

* Software Developer, August, 2018 - present
  * Qt C++ GUI development for an embedded medical device
  * Automation of the pneumatic system and Giant Magnetic Resistance (GMR) sensors.
  * Redis database implementation for medical records
  * Build infrastructure. Built our own Yocto Linux image for an embedded system. This was achieved through Bash scripting, cross-compiling and constructing our own layers to the build. The images were built on Google Cloud Virtual Machine Instances.

* Software Engineer Intern, March, 2018 - July, 2018
  * Developed software tool chains to assist lab personal with the automation and analysis of data. Python was used with numpy, pandas, matplotlib, and pyinstall for ease of use.
  * Designed a C# GUI in Visual Studio to communicate with the firmware in an embedded system written in C. This was implemented with google protocol buffers and a CoAP client.
  * Designed a pneumatic automation GUI in C# using a CoAP client for a magnetic nanoparticles biosensors medical device.
  * Debugged firmware written in C.
  * GIT and JIRA for version control.

### University of Wyoming
  * Research Assistant, August 2015 - July 2017
    * Developed creative technical hypotheses/data analysis methodologies to solve hydrological water issues throughout the western US using geophysical methodologies.
    * Wrote 1000’s of lines of code in Python, C and MatLAB
    * Developed a new geophysical method for geotechnical engineering analysis
    * Published findings in the Geophysical Research Letter

Education
======
* A.S in Computer Science, Normandale Community College
* B.S. in Geophysics, University of Minnesota-Twin Cities
* M.S. in Geophysics, University of Wyoming

Skills
======
* Python
  * Numpy, Pandas, Pyinstaller, Matplotlib
* C++
  * Qt Framework, Qt Creator
* C#
  * .net framework, windows forms, Visual Studio
* C
  * firmware
* MatLAB
* Java
* Bash
* Linux
  * Ubuntu, Yocto
* Version Control - Git

Publications
======
  <ul>{% for post in site.publications %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Talks
======
  <ul>{% for post in site.talks %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}</ul>
