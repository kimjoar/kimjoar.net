# Create new jekyll post and open in Textmate
# $ ruby _new.rb This is the title

# The arguments form the title
unless ARGV[0]
  raise "Please provide a post title."
end

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
title  = ARGV.join(' ')
slug   = title.slugify
prefix = Time.new.strftime("%Y-%m-%d")
file   = "#{prefix}-#{slug}.markdown"
path   = File.join(File.dirname(__FILE__), "_posts/#{file}")
text   = <<-EOS
---
title: #{title}
layout: default
---

{{ page.title }}
----------------

EOS

# Create a new file and open it in textmate
File.open(path, 'w') { |f| f.write(text) }
system("mate #{path}")