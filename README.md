jquery-imgscrl
==============

A jQuery plugin for horizontally scrolling a large image in a smaller box.

This plugin confines a possibly very wide image into a smaller box. When
hovering the mouse pointer over the image, it scrolls horizontally. By
moving all the way from left to right, you will see the entire image.

The main use-case is the display of a panorama photo in a normally sized
image container.

It was inspired by http://www.gayadesign.com/scripts/jqueryphotonav/.

A demo, which is also included with the code, can be found here:
https://www.grendelman.net/wp/jquery-imgscrl-plugin-demo/

## Installation

Include script after the jQuery library:

    <script src="/path/to/jquery.imgscrl.js"></script>

## Usage

Put an image on your webpage:

    <img src="/really/wide/image.jpg" id="wideimage" style="display: none;">

Confine it to a box with the width of your choice:

    $('#wideimage').imgscrl(640);

The 'style' attribute on the image is not absolutely necessary, but it makes
sure that your page is not cluttered with a giant image before the Javascript
is executed. The plugin will display the image when called.
