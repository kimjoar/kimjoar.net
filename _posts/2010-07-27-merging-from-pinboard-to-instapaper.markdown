---
title: Merging from Pinboard to Instapaper
layout: default
---

{{ page.title }}
----------------

Before I bought my iPad I used [Pinboard](pinboard.in/) all the time. The only problem was that I was better at adding articles to read than actually getting them read. After the iPad that has changed — because of the amazing [Instapaper](http://www.instapaper.com/) app. So I had to move the articles I want to read from Pinboard to Instapaper. Using [Pinboard's export](http://pinboard.in/howto/#export), [Nokogiri](http://nokogiri.org/), and the [Instapaper API](http://www.instapaper.com/api) it was no problem merging over. The Ruby script I created:

{% highlight ruby %}
require 'nokogiri'
require 'highline/import'
require 'instapush'

pinboard_username = ask("Enter your Pinboard username: ") { |q| q.echo = true }
pinboard_password = ask("Enter your Pinboard password: ") { |q| q.echo = "*" }

bookmarks = `wget http://#{pinboard_username}:#{pinboard_password}@pinboard.in/export/`

instapaper_username = ask("Enter your Instapaper username: ") { |q| q.echo = true }
instapaper_password = ask("Enter your Instapaper password (if you have one): ") { |q| q.echo = "*" }

doc = Nokogiri::XML bookmarks
instapaper = InstaPush.connect instapaper_username, instapaper_password

say "\nAdding links from Pinboard to Instapaper\n\n"

doc.css('A').each do |element|
  if element['TAGS'].split(',').include?('toread')
    title = element.children.first.content
    url   = element['HREF']

    add = ask("Add '#{title}': (y/n) ") { |q| q.default = "y" }

    next unless add == "y"
    
    # Add to Instapaper
    if instapaper.add url, :title => title
      say "Added '#{title}' (#{url})"
    else
      say "** Failed to add '#{title}' (#{url})"
    end
  end
end
{% endhighlight %}

Since I didn't need the description entered into Pinboard, the script doesn't move it. Just fork the [gist](http://gist.github.com/492818) at Github and add it if you need it.