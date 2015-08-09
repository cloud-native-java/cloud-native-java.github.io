+++
title = "About Beg"
description = ""
tags = [
    "hugo",
    "beg",
]
date = "2015-01-10"
+++

Beg is a double-column theme for [Hugo](http://gohugo.io/).

Inspired by [kAworu/octostrap3](https://github.com/kAworu/octostrap3).

## Features

* Google Analytics
* Disqus
* SNS Links(Facebook, Twitter, GitHub)
* Share Button
* Tagging
* Related Post

<!--more-->

# Installation

Referred from [hugoThemes#Installing Themes](https://github.com/spf13/hugoThemes#installing-themes).

## Installing with other all themes

If you would like to install all of the available hugo themes, simply clone the entire repository from within your working directory.

``` sh
git clone --recursive https://github.com/spf13/hugoThemes.git themes
```

## Installing a single theme

``` sh
mkdir themes
cd themes
git clone https://github.com/dim0627/hugo_theme_beg beg
```

## Build with Beg

    hugo server -t beg

# Configuration

**config.yaml**

``` yaml
BaseUrl: "http://yet.unresolved.xyz"
LanguageCode: "en-us"
Title: "Beg"

Params:
  Author: "Daisuke Tsuji"
  DateForm: "Mon, Jan 2, 2006"
  GoogleAnalyticsUserID: "UA-55005303-5"
  Facebook: "daisuke.tsuji.735"
  Twitter: "dim0627"
  Github: "dim0627"
  ShowRelatedPost: True
  Disqus: "unresolved"
  SyntaxHighlightTheme: "github.min.css"

Indexes:
  tag: "tags"

permalinks:
  post: /blog/:year/:month/:day/:slug/

MetadataFormat: "yaml"
```

Example : [My config.yaml](https://github.com/dim0627/hugo_theme_beg/blob/source/config.yaml)

**example post**

``` markdown
---
title: "Post title here"
date: 2014-09-17
comments: true
tags: [gitHub, octopress, jekyll]
---

Contents here
```

# Contact us

Please mail to `dim0627@gmail.com` or SNS.

[https://www.facebook.com/daisuke.tsuji.735](https://www.facebook.com/daisuke.tsuji.735)

[https://twitter.com/dim0627](https://twitter.com/dim0627)
