
[WARNING]: # (                   AUTO-GENERATED CODE                    )
[WARNING]: # ( CHANGES MADE HERE WILL BE OVERWRITTEN BY generate-readme )
[WARNING]: # (                EDIT README.tmpl.md INSTEAD               )

hugoThemes
==========

All Themes Hugo

See a complete listing of all of these themes along with screenshots and demos at http://themes.gohugo.io/ (coming soon).

Every theme in this list will automatically be added to the theme site.

# Installing Themes

## Installing all themes

If you would like to install all of the available Hugo themes, simply clone the entire repository from within your working directory with this command:

    git clone --recursive https://github.com/spf13/hugoThemes.git themes

## Installing a single theme

<pre><code>mkdir themes
cd themes
git clone <em>URL_TO_THEME</em>
</code></pre>

# Adding a theme to the list

* Create your theme using <code>hugo new theme <em>THEMENAME</em></code>;
* Test your theme against https://github.com/spf13/HugoBasicExample;
* Add a `theme.toml` file to the root of the theme;
* Add a `README.md` to the root of the theme;
* Add `/images/screenshot.png` and `/images/tn.png`;
* Open up a new Issue with a link to the theme's repository on GitHub.

If your theme doesn't fit into the `Hugo Basic Example` site, we encourage theme authors to supply a self-contained Hugo site in `/exampleSite`. **NOTE:** The folder name here is important, as this folder will be picked up and used by the script that generates the Hugo Theme Site. See [Artist theme's exampleSite](https://github.com/digitalcraftsman/hugo-artists-theme/tree/master/exampleSite) for a good example. And please make the site's content as neutral as possible.

Each theme needs:

1. to be added to the hugoThemes repo;
2. the right fields in `theme.toml`;
3. the right images;
4. a good README.

## theme.toml

The following fields are required:

```toml
name = "Hyde"
license = "MIT"
licenselink = "https://github.com/spf13/hyde/blob/master/LICENSE.md"
description = "An elegant open source and mobile first theme"
homepage = "http://siteforthistheme.com/"
tags = ["blog", "company"]
features = ["blog", ]
min_version = 0.13

[author]
    name = "spf13"
    homepage = "http://spf13.com/"

# If porting an existing theme
[original]
    author = "mdo"
    homepage = "http://hyde.getpoole.com/"
    repo = "https://www.github.com/mdo/hyde"
```

> **Notes:**
>
> 1. This is different from the file created by `hugo new theme` in the old v0.12.
>    The current Hugo v0.13 does create the same template with the new fields
>    except `min_version` that was created in 0.14-DEV.
>
> 2. Only `theme.toml` is accepted, not `theme.yaml`, not `theme.json`.


## Media

* Thumbnail should be 900×600 in pixels
* Screenshot should be 1500×1000 in pixels
* Media must be located in:
    * <code><em>[ThemeDir]</em>/images/screenshot.png</code>
    * <code><em>[ThemeDir]</em>/images/tn.png</code>

Additional media may be provided in that same directory.

## README

The README file serves double purposes. It is used on GitHub as the content for the main page. It also will become the content on the detailed theme view page for (the future) themes.gohugo.io. It should be in Markdown format and called `README.md`.
# Theme List
## [hugo-agency-theme](https://github.com/digitalcraftsman/hugo-agency-theme)
![digitalcraftsman/hugo-agency-theme](https://raw.githubusercontent.com/digitalcraftsman/hugo-agency-theme/95a231fee993d42090fd4e8d65a7dce52ae12c21/images/tn.png)

---

## [hugo_theme_aglaus](https://github.com/dim0627/hugo_theme_aglaus)
![dim0627/hugo_theme_aglaus](https://raw.githubusercontent.com/dim0627/hugo_theme_aglaus/86ee37faa87873627ddcb6d063ee869d4185adb0/images/tn.png)

---

## [hugo-theme-air](https://github.com/syui/hugo-theme-air)
![syui/hugo-theme-air](https://raw.githubusercontent.com/syui/hugo-theme-air/0e632113ba9db2f9c600ff6b205b157110a17239/images/tn.png)

---

## [angels-ladder](https://github.com/tanksuzuki/angels-ladder)
![tanksuzuki/angels-ladder](https://raw.githubusercontent.com/tanksuzuki/angels-ladder/fe086ecf531fbc67306f57127cc44e7ad423d1a5/images/tn.png)

---

## [hugo-artists-theme](https://github.com/digitalcraftsman/hugo-artists-theme)
![digitalcraftsman/hugo-artists-theme](https://raw.githubusercontent.com/digitalcraftsman/hugo-artists-theme/5cb1668dc2aab9b65a28c71403237c0992a60115/images/tn.png)

---

## [hugo_theme_beg](https://github.com/dim0627/hugo_theme_beg)
![dim0627/hugo_theme_beg](https://raw.githubusercontent.com/dim0627/hugo_theme_beg/379b57138aff25c2aa25017f8c9ae5b9099aa892/images/tn.png)

---

## [hugo-theme-bootie-docs](https://github.com/key-amb/hugo-theme-bootie-docs)
![key-amb/hugo-theme-bootie-docs](https://raw.githubusercontent.com/key-amb/hugo-theme-bootie-docs/81e1459dac71f81285cb4f4b3fe2aae7878136cb/images/tn.png)

---

## [hugo-cactus-theme](https://github.com/digitalcraftsman/hugo-cactus-theme)
![digitalcraftsman/hugo-cactus-theme](https://raw.githubusercontent.com/digitalcraftsman/hugo-cactus-theme/5ca36081483d9de186072856281e4905d525810d/images/tn.png)

---

## [hugo-theme-casper](https://github.com/vjeantet/hugo-theme-casper)
![vjeantet/hugo-theme-casper](https://raw.githubusercontent.com/vjeantet/hugo-theme-casper/9c20b5961c76979f428c48c8aba70faf43e83c0a/images/tn.png)

---

## [hugo-creative-theme](https://github.com/digitalcraftsman/hugo-creative-theme)
![digitalcraftsman/hugo-creative-theme](https://raw.githubusercontent.com/digitalcraftsman/hugo-creative-theme/b44758a3b81ad59fa6c6b6994977d41fef3afebf/images/tn.png)

---

## [hugo-theme-crisp](https://github.com/Zenithar/hugo-theme-crisp)
![Zenithar/hugo-theme-crisp](https://raw.githubusercontent.com/Zenithar/hugo-theme-crisp/f178ba762cc3b1fd7324fbfbb80a0ccbc95da55f/images/tn.png)

---

## [hugo-freelancer-theme](https://github.com/digitalcraftsman/hugo-freelancer-theme)
![digitalcraftsman/hugo-freelancer-theme](https://raw.githubusercontent.com/digitalcraftsman/hugo-freelancer-theme/fd1b6850e7044efd50c2a6eb1f06dca63ac38c65/images/tn.png)

---

## [greyshade](https://github.com/cxfksword/greyshade)
![cxfksword/greyshade](https://raw.githubusercontent.com/cxfksword/greyshade/28fb061bb674a2add89724dfbbf167f88f381d40/images/tn.png)

---

## [heather-hugo](https://github.com/hbpasti/heather-hugo)
![hbpasti/heather-hugo](https://raw.githubusercontent.com/hbpasti/heather-hugo/e2d185d424e21ab357d10d2afc1e19ecb5c669f0/images/tn.png)

---

## [herring-cove](https://github.com/spf13/herring-cove)
*image not available* :hankey:

---

## [hugo-hikari-theme](https://github.com/digitalcraftsman/hugo-hikari-theme)
![digitalcraftsman/hugo-hikari-theme](https://raw.githubusercontent.com/digitalcraftsman/hugo-hikari-theme/87f2a45164bc0eaffbdc44d52b88006e0761c9dc/images/tn.png)

---

## [hugo-theme-html5](https://github.com/simonmika/hugo-theme-html5)
*image not available* :hankey:

---

## [hugo-base-theme](https://github.com/crakjie/hugo-base-theme)
![crakjie/hugo-base-theme](https://raw.githubusercontent.com/crakjie/hugo-base-theme/d67df9b5788c4c42a5549b0f9c9471d9cd4714cb/images/tn.png)

---

## [hugo-bootswatch](https://github.com/nilproductions/hugo-bootswatch)
![nilproductions/hugo-bootswatch](https://raw.githubusercontent.com/nilproductions/hugo-bootswatch/6681963f24d6c1e6b9efd148b1344434f090b5cd/images/tn.png)

---

## [hugo-h5bp-simple](https://github.com/garvincasimir/hugo-h5bp-simple)
![garvincasimir/hugo-h5bp-simple](https://raw.githubusercontent.com/garvincasimir/hugo-h5bp-simple/7741bbce77c9fd66843ca102ae4ed118b42dd06e/images/tn.png)

---

## [hugo-incorporated](https://github.com/nilproductions/hugo-incorporated)
![nilproductions/hugo-incorporated](https://raw.githubusercontent.com/nilproductions/hugo-incorporated/cb92ac8ad754090a77a925cdd9da3b2e79f823f6/images/tn.png)

---

## [hugo-uno](https://github.com/SenjinDarashiva/hugo-uno)
![SenjinDarashiva/hugo-uno](https://raw.githubusercontent.com/SenjinDarashiva/hugo-uno/8aed1451d3cb2d99e2be3065dd1a9ea2971f6344/images/tn.png)

---

## [hugoscroll](https://github.com/SenjinDarashiva/hugoscroll)
![SenjinDarashiva/hugoscroll](https://raw.githubusercontent.com/SenjinDarashiva/hugoscroll/3aabdde6737039ede492c7df1b1924a9f74d8416/images/tn.png)

---

## [hurock](https://github.com/TiTi/hurock)
![TiTi/hurock](https://raw.githubusercontent.com/TiTi/hurock/11e63f6c8f8d978f3321490aaac3e4279657ed8a/images/tn.png)

---

## [hyde-x](https://github.com/zyro/hyde-x)
![zyro/hyde-x](https://raw.githubusercontent.com/zyro/hyde-x/cdeacff20b0798034629243c1bb02eb640157423/images/tn.png)

---

## [hyde](https://github.com/spf13/hyde)
![spf13/hyde](https://raw.githubusercontent.com/spf13/hyde/52c5552a437b2eda38a9f28656a8a28cc0e4815b/images/tn.png)

---

## [hugo-journal](https://github.com/mpas/hugo-journal)
![mpas/hugo-journal](https://raw.githubusercontent.com/mpas/hugo-journal/ecf49cbb14a4fa746ed86fa5f1e7959076aca5b1/images/tn.png)

---

## [landing-page-hugo](https://github.com/crakjie/landing-page-hugo)
![crakjie/landing-page-hugo](https://raw.githubusercontent.com/crakjie/landing-page-hugo/8afa35bf9029f791ed56567aeb14eafa7afe737a/images/tn.png)

---

## [lanyon-hugo](https://github.com/tummychow/lanyon-hugo)
![tummychow/lanyon-hugo](https://raw.githubusercontent.com/tummychow/lanyon-hugo/15f399bfabfdbe033895ba0c6005d794aa1f788f/images/tn.png)

---

## [liquorice](https://github.com/eliasson/liquorice)
![eliasson/liquorice](https://raw.githubusercontent.com/eliasson/liquorice/c5d9efa7301e3cedf1c0d9a3f433cd1cd09e97b0/images/tn.png)

---

## [material-design](https://github.com/pdevty/material-design)
![pdevty/material-design](https://raw.githubusercontent.com/pdevty/material-design/0d88058fead04a70d14f34552e07a1fd81911ca6/images/tn.png)

---

## [hugo-material-lite](https://github.com/SamuelDebruyn/hugo-material-lite)
![SamuelDebruyn/hugo-material-lite](https://raw.githubusercontent.com/SamuelDebruyn/hugo-material-lite/5c942647500b3202cd92a179c93150c7cb3d8d90/images/tn.png)

---

## [hugo-theme-next](https://github.com/leopku/hugo-theme-next)
![leopku/hugo-theme-next](https://raw.githubusercontent.com/leopku/hugo-theme-next/0c9ab9db8faaebc1200b59e0b40adbe81947f926/images/tn.png)

---

## [nofancy](https://github.com/gizak/nofancy)
![gizak/nofancy](https://raw.githubusercontent.com/gizak/nofancy/de9c124bcbe45246454ff6d34fb109c8c90bd76e/images/tn.png)

---

## [hugo-theme-persona](https://github.com/pcdummy/hugo-theme-persona)
![pcdummy/hugo-theme-persona](https://raw.githubusercontent.com/pcdummy/hugo-theme-persona/afb2d458f97b6fe1c295afbcd336b3c6e71028d0/images/tn.png)

---

## [hugo-theme-pixyll](https://github.com/azmelanar/hugo-theme-pixyll)
![azmelanar/hugo-theme-pixyll](https://raw.githubusercontent.com/azmelanar/hugo-theme-pixyll/9a2516774a1587c7b335b256b3f0490254780b9f/images/tn.png)

---

## [polymer](https://github.com/pdevty/polymer)
![pdevty/polymer](https://raw.githubusercontent.com/pdevty/polymer/d8be0028b80dcf7026489598f4f8905ecc291611/images/tn.png)

---

## [poopshow](https://github.com/esell/poopshow)
![esell/poopshow](https://raw.githubusercontent.com/esell/poopshow/459da0109a6a22d77b3275c6c92d9d390ddc09c3/images/tn.png)

---

## [hugo-theme-projecthub](https://github.com/vjeantet/hugo-theme-projecthub)
![vjeantet/hugo-theme-projecthub](https://raw.githubusercontent.com/vjeantet/hugo-theme-projecthub/d0fb856de1d22a396659a9c3deeeddeb4eeb256e/images/tn.png)

---

## [purehugo](https://github.com/dplesca/purehugo)
![dplesca/purehugo](https://raw.githubusercontent.com/dplesca/purehugo/8c71c646af24fd7290d1da652b2e351482e7aaad/images/tn.png)

---

## [hugo-redlounge](https://github.com/tmaiaroto/hugo-redlounge)
![tmaiaroto/hugo-redlounge](https://raw.githubusercontent.com/tmaiaroto/hugo-redlounge/f6f223881d945c1bcb31d3630ebb8b76a977531c/images/tn.png)

---

## [hugo_theme_robust](https://github.com/dim0627/hugo_theme_robust)
![dim0627/hugo_theme_robust](https://raw.githubusercontent.com/dim0627/hugo_theme_robust/5cf572a9694dbb1fc4d5abc8fff8fa7820705be1/images/tn.png)

---

## [hugo-theme-shiori](https://github.com/chibicode/hugo-theme-shiori)
![chibicode/hugo-theme-shiori](https://raw.githubusercontent.com/chibicode/hugo-theme-shiori/86d134adbb7371abfecf671ff02613b40092e74a/images/tn.png)

---

## [simple-a](https://github.com/AlexFinn/simple-a)
![AlexFinn/simple-a](https://raw.githubusercontent.com/AlexFinn/simple-a/7b590cb38942481f4c73e6a65530977ca4af8a74/images/tn.png)

---

## [simple-hugo](https://github.com/druzza/simple-hugo)
![druzza/simple-hugo](https://raw.githubusercontent.com/druzza/simple-hugo/20d9086e64e8493b931a419e52866e007e8699e7/images/tn.png)

---

## [hugo-theme-slim](https://github.com/zhe/hugo-theme-slim)
![zhe/hugo-theme-slim](https://raw.githubusercontent.com/zhe/hugo-theme-slim/ccdd0de582c4f36a51a05e2cb11c0a5f190cbe49/images/tn.png)

---

## [startbootstrap-clean-blog](https://github.com/humboldtux/startbootstrap-clean-blog)
![humboldtux/startbootstrap-clean-blog](https://raw.githubusercontent.com/humboldtux/startbootstrap-clean-blog/6e5ab43bb88c0de319d31684682c82e7c9df60ba/images/tn.png)

---

## [tachyons](https://github.com/marloncabrera/tachyons)
![marloncabrera/tachyons](https://raw.githubusercontent.com/marloncabrera/tachyons/a98c649c0afc175d2332c9ba9a6e0cc92aa7346b/images/tn.png)

---

## [tinyce-hugo-theme](https://github.com/roperzh/tinyce-hugo-theme)
![roperzh/tinyce-hugo-theme](https://raw.githubusercontent.com/roperzh/tinyce-hugo-theme/ec650dfeeda9ae94152e51f0b8b01d61dbbf9e0c/images/tn.png)

---

## [twentyfourteen](https://github.com/jaden/twentyfourteen)
![jaden/twentyfourteen](https://raw.githubusercontent.com/jaden/twentyfourteen/ad1be327ace6bbc8b4e8af1026f9c04244c3c9ae/images/tn.png)

---

## [vienna](https://github.com/keichi/vienna)
![keichi/vienna](https://raw.githubusercontent.com/keichi/vienna/890e97c5a052984d04294862ac60c7e0bfc6a934/images/tn.png)

---

