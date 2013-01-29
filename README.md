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
