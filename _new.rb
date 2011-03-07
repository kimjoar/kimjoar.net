# Create new blog post and open in MacVim
# $ ruby _new.rb

require 'highline/import'

# Create a URL slug from the title
class String
  def slugify
    str = self.dup
    str.gsub!(/[^a-zA-Z0-9 ]/,"")
    str.gsub!(/[ ]+/," ")
    str.gsub!(/ /,"-")
    str.downcase!
    str
  end
end

# Create parameters
title   = ask("Title: ")
publish = ask("Publish: ") { |q| q.default = "y" }
publish = publish == 'y'
slug   = title.slugify
prefix = Time.new.strftime("%Y-%m-%d")
file   = "#{prefix}-#{slug}.markdown"
path   = File.join(File.dirname(__FILE__), "_posts/#{file}")
text   = <<-EOS
---
title: #{title}
layout: post
published: #{publish.to_s}
---

{{ page.title }}
----------------


EOS

# Create a new file and open it in textmate
File.open(path, 'w') { |f| f.write(text) }
system("mvim #{path}")
