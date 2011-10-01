# jQuery.wip.js

## Introduction

**jQuery.wip.js** is a simple plugin designed to allow you to quickly
display what site elements are still under development and what is
functional. Tag any elements that exist but are not yet functional with
the css class `wip` (work in progress) and then use `ctrl+w` to cycle between normal,
highlighted and hidden. When hidden, the elements become invisiable but
retain their spacing. This gives a conceptual view of what pieces are
missing.

## Usage

This library must be included on your page after the jquery plugin. You can include both with:

	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.6/jquery.min.js"></script>
	<script src="path_to_library/jquery.wip.js"></script>

Initialize this plugin by calling `.wip()` in `jQuery.ready` (or the `$(function(){})` shorthand method).

## Potentally Included Work (PIW)

Similar to WIPs, PIWs are elements that are under development. The
difference is that PIWs may or may not exist in the end product. To
display this, when PIWs are hidden, they trigger a flow change. This gives a
conceptual view of what the page will look like if the element was never
added.

PIWs are cycled with `ctrl+p`

## Groups

If you have groups of elements that are related and are works in
progress(i.e. social aspects, user accounts, etc...) then you can mark
them as specific wip groups 0-9. 

All elements with the class `wip` will be cycled with `ctrl+w`.
Alternatively, any classes with `wip_0` though `wip_9` will all be cycled with
`ctrl+w` or individual groups will cycle with `crtl+0` though `crtl+9`.

Likewise, all elements with the class of `piw` are cycled with `ctrl+p`.
PIWs can be groupd like WIPs but to cycle individual groups, use
`ctrl+shift+0` though `ctrl+shift+9`
