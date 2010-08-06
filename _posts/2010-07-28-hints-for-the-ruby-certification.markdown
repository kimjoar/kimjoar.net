---
title: Hints for the Ruby certification
layout: default
---

{{ page.title }}
----------------

Today I became a certified Ruby developer through the [Ruby Association](http://www.ruby-assn.org/en/certification.htm). I won't discuss my thoughts about the certification, but just thought about giving some hints and ideas for those wanting to take the certification.

First of all, and most importantly: read the [Ruby docs](http://ruby-doc.org/). You should know how methods such as `array.zip`, `enumerable.drop_while` and `hash.delete` does — I got methods from all over the place on my test. This means knowing their default inputs, what input they accept, what happens when they fail, and all the other small idiosyncrasies in the language. The certification tests your knowledge of the core Ruby libs. This is definitely not about coding Ruby, this is about cramming.

Knowing information such as the different file modes (r, r+, w, w+, a, a+), the input to strftime and basic knowledge about regexps are also highly relevant. So is knowing about blocks, closures and scopes:

{% highlight ruby %}
x = 2
lambda { x = 1 }
puts x # => 2
{% endhighlight %}

{% highlight ruby %}
x = 1
def foo
  x = 2
end
foo
puts x # => 1
{% endhighlight %}

{% highlight ruby %}
def foo
  x = 1
  3.times { x += 1 }
  puts x # => 4
end
{% endhighlight %}

Remember that the certication is 1.8.x, so don't read up on 1.9.x!

Oh, and remember which methods changes the receiver and which returns a new object.

My best tip for passing the certification is firing up irb and just walking to the [Ruby core libs](http://ruby-doc.org/core-1.8.7/index.html), focusing on the main classes such as String, Array, Enumerable, Dir, IO, Hash, Kernel, Object, Range and Time.