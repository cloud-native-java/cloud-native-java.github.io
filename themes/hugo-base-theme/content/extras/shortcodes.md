---
aliases:
- /doc/shortcodes/
date: 2013-07-01
menu:
  main:
    parent: extras
next: /extras/highlighting
prev: /extras/permalinks
title: Shortcodes
weight: 40
---

Hugo uses Markdown for its simple content format. However, there’s a lot
of things that Markdown doesn’t support well.

We are unwilling to accept being constrained by our simple format. Also
unacceptable is writing raw HTML in our Markdown every time we want to include
unsupported content such as a video. To do so is in complete opposition to the
intent of using a bare bones format for our content and utilizing templates to
apply styling for display.

To avoid both of these limitations, Hugo created shortcodes.

A shortcode is a simple snippet inside a content file that Hugo will render
using a predefined template. Note that shortcodes will not work in template
files---if you need a functionality like that in a template, you most likely
want a [partial template](/templates/partial) instead.

## Using a shortcode

In your content files, a shortcode can be called by using '`{{% name parameters
%}}`' respectively. Shortcodes are space delimited (parameters with spaces
can be quoted).

The first word is always the name of the shortcode. Parameters follow the name.
The format for named parameters models that of HTML with the format
`name="value"`. The current implementation only supports this exact format. Extra
spaces or different quotation marks will not parse properly.

Some shortcodes use or require closing shortcodes. Like HTML, the opening and closing
shortcodes match (name only), the closing being prepended with a slash.

Example of a paired shortcode:

    {{ % highlight go %}} A bunch of code here {{ % /highlight %}}


## Hugo Shortcodes

Hugo ships with a set of predefined shortcodes.

### highlight

This shortcode will convert the source code provided into syntax highlighted
HTML. Read more on [highlighting](/extras/highlighting).

#### Usage
`highlight` takes exactly one required parameter of _language_ and requires a
closing shortcode.

#### Example
The example has an extra space between the “`{{`” and “`%`” characters to prevent rendering here.

    {{ % highlight html %}}
    <section id="main">
      <div>
       <h1 id="title">{{ .Title }}</h1>
        {{ range .Data.Pages }}
            {{ .Render "summary"}}
        {{ end }}
      </div>
    </section>
    {{ % /highlight %}}


#### Example Output

    <span style="color: #f92672">&lt;section</span> <span style="color: #a6e22e">id=</span><span style="color: #e6db74">&quot;main&quot;</span><span style="color: #f92672">&gt;</span>
      <span style="color: #f92672">&lt;div&gt;</span>
       <span style="color: #f92672">&lt;h1</span> <span style="color: #a6e22e">id=</span><span style="color: #e6db74">&quot;title&quot;</span><span style="color: #f92672">&gt;</span>{{ .Title }}<span style="color: #f92672">&lt;/h1&gt;</span>
        {{ range .Data.Pages }}
            {{ .Render &quot;summary&quot;}}
        {{ end }}
      <span style="color: #f92672">&lt;/div&gt;</span>
    <span style="color: #f92672">&lt;/section&gt;</span>

### figure
`figure` is simply an extension of the image capabilities present with Markdown.
`figure` provides the ability to add captions, CSS classes, alt text, links etc.

#### Usage

`figure` can use the following parameters:

 * src
 * link
 * title
 * caption
 * attr (attribution)
 * attrlink
 * alt

#### Example
*Example has an extra space so Hugo doesn’t actually render it*.

    {{ % figure src="/media/spf13.jpg" title="Steve Francia" %}}

#### Example output

    <figure>
        <img src="/media/spf13.jpg"  />
        <figcaption>
            <h4>Steve Francia</h4>
        </figcaption>
    </figure>

## Creating your own shortcodes

To create a shortcode, place a template in the layouts/shortcodes directory. The
template name will be the name of the shortcode.

In creating a shortcode, you can choose if the shortcode will use _positional
parameters_ or _named parameters_ (but not both). A good rule of thumb is that if a
shortcode has a single required value in the case of the `youtube` example below,
then positional works very well. For more complex layouts with optional
parameters, named parameters work best.

**Inside the template**

To access a parameter by position, the `.Get` method can be used:

    {{ .Get 0 }}

To access a parameter by name, the `.Get` method should be utilized:

    {{ .Get "class" }}

`with` is great when the output depends on a parameter being set:

    {{ with .Get "class"}} class="{{.}}"{{ end }}

`.Get` can also be used to check if a parameter has been provided. This is
most helpful when the condition depends on either one value or another...
or both:

    {{ or .Get "title" | .Get "alt" | if }} alt="{{ with .Get "alt"}}{{.}}{{else}}{{.Get "title"}}{{end}}"{{ end }}

If a closing shortcode is used, the variable `.Inner` will be populated with all
of the content between the opening and closing shortcodes. If a closing
shortcode is required, you can check the length of `.Inner` and provide a warning
to the user.

The variable `.Params` contains the list of parameters in case you need to do more complicated things than `.Get`.

You can also use the variable `.Page` to access all the normal [Page Variables](/templates/variables/). 

## Single Positional Example: youtube

    {{% youtube 09jf3ow9jfw %}}

Would load the template /layouts/shortcodes/youtube.html

    <div class="embed video-player">
    <iframe class="youtube-player" type="text/html" width="640" height="385" src="http://www.youtube.com/embed/{{ index .Params 0 }}" allowfullscreen frameborder="0">
    </iframe>
    </div>

This would be rendered as:

    <div class="embed video-player">
    <iframe class="youtube-player" type="text/html"
        width="640" height="385"
        src="http://www.youtube.com/embed/09jf3ow9jfw"
        allowfullscreen frameborder="0">
    </iframe>
    </div>

## Single Named Example: image with caption
*Example has an extra space so Hugo doesn’t actually render it*

    {{ % img src="/media/spf13.jpg" title="Steve Francia" %}}

Would load the template /layouts/shortcodes/img.html

    <!-- image -->
    <figure {{ with .Get "class" }}class="{{.}}"{{ end }}>
        {{ with .Get "link"}}<a href="{{.}}">{{ end }}
            <img src="{{ .Get "src" }}" {{ if or (.Get "alt") (.Get "caption") }}alt="{{ with .Get "alt"}}{{.}}{{else}}{{ .Get "caption" }}{{ end }}"{{ end }} />
        {{ if .Get "link"}}</a>{{ end }}
        {{ if or (or (.Get "title") (.Get "caption")) (.Get "attr")}}
        <figcaption>{{ if isset .Params "title" }}
            <h4>{{ .Get "title" }}</h4>{{ end }}
            {{ if or (.Get "caption") (.Get "attr")}}<p>
            {{ .Get "caption" }}
            {{ with .Get "attrlink"}}<a href="{{.}}"> {{ end }}
                {{ .Get "attr" }}
            {{ if .Get "attrlink"}}</a> {{ end }}
            </p> {{ end }}
        </figcaption>
        {{ end }}
    </figure>
    <!-- image -->

Would be rendered as:

    <figure >
        <img src="/media/spf13.jpg"  />
        <figcaption>
            <h4>Steve Francia</h4>
        </figcaption>
    </figure>

## Paired Example: Highlight
*Hugo already ships with the `highlight` shortcode*

*Example has an extra space so Hugo doesn’t actually render it*.

    <html>
        <body> This HTML </body>
    </html>

The template for this utilizes the following code (already include in Hugo)

    {{ .Get 0 | highlight .Inner  }}

And will be rendered as:

    <div class="highlight" style="background: #272822"><pre style="line-height: 125%"><span style="color: #f92672">&lt;html&gt;</span>
        <span style="color: #f92672">&lt;body&gt;</span> This HTML <span style="color: #f92672">&lt;/body&gt;</span>
    <span style="color: #f92672">&lt;/html&gt;</span>
    </pre></div>

Please notice that this template makes use of a Hugo-specific template function
called `highlight` which uses Pygments to add the highlighting code.

More shortcode examples can be found at [spf13.com](https://github.com/spf13/spf13.com/tree/master/layouts/shortcodes).
