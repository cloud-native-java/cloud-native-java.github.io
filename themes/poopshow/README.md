The theme formerly know as s\*\*\*show, re-branded to be more family friendly.  
None of the existing hugo themes fit what I wanted so I created my own. I feel this is a very lightweight theme without being super boring.  
This theme uses the [Skeleton CSS framework](http://getskeleton.com/)

# Configuration
This theme will not work (well, it won't work correctly) out of the box, there are a few parameters you'll have to add/set in your main hugo config file.

**config.toml**

``` toml
baseurl = "http://hugo.spf13.com/"
title = "Hugo Themes"
author = "Steve Francia"
copyright = "Copyright (c) 2008 - 2014, Steve Francia; all rights reserved."
canonifyurls = true

[params]
	headerimg = "your header image, this should live in static/img/"
	blogHeader = "HTMLized <b>blog</b> header"
    tagline = "shows up next to your title"
    githubUrl = "your Github URL"
    contactEmail = "email address to use with the contact link"
	aboutLink = "relative path to your about page"
```

# Demo
You can see a live version of this template at http://esheavyindustries.com
