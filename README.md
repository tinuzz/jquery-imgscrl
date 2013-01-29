jquery-imgscrl
==============

A jQuery plugin for horizontally scrolling a large image in a small box

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
