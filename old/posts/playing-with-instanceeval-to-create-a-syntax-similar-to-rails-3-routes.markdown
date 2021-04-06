Playing with `instance_eval` to create a syntax similar to routes in Rails 3
============================================================================

Routes in Rails 3 looks amazing compared to Rails 2. One of the great aspects in the revamped routes is the removed `map`. An example from Rails 2:

```ruby
map.resources :assemblies do |assemblies|
  assemblies.resources :parts
end
```

In Rails 3 we would write this as:

```ruby
resources :assemblies do
  resources :parts
end
```

So how can we get this syntax going for ourselves? Playing around in my new [Ruby wrapper for the Instapaper API](http://github.com/kjbekkelund/instapush) I wanted to go from:

```ruby
InstaPush.connect "kjbekkelund@gmail.com" do |conn|
  conn.add "http://kimjoar.net"
  conn.add "http://bjorkoy.com"
end
```

to:

```ruby
InstaPush.connect "kjbekkelund@gmail.com" do
  add "http://kimjoar.net"
  add "http://bjorkoy.com"
end
```

To solve this problem we can use some Ruby metaprogramming goodness, namely `instance_eval`. By changing from yielding to the block, to using instance eval on the block — to get the correct scope — we don't longer need the `conn`. Here's how my code ended up:

```ruby
def self.connect(username, password = nil, &block)
  conn = new username, password
  
  if block_given?
    conn.instance_eval(&block)
  else
    conn
  end
end
```

Now all the methods defined in the conn instance will be available in the block. Such a simple trick, but very powerful. Yet another great day to be a Rubyist.

**Edit (August 3. 2010):**

[Judofyr commented on this technique on Hacker News](http://news.ycombinator.com/item?id=1571649) with a slight modification. Let's change the code to:

```ruby
def self.connect(username, password = nil, &block)
  conn = new username, password
  
  if block_given?
    if block.arity == 1
      block.call(conn)
    else
      conn.instance_eval(&block)
    end
  else
    conn
  end
end
```

Now we are able to do both 

```ruby
InstaPush.connect "mail@kimjoar.net" { authenticate } 
```

and 

```ruby
InstaPush.connect "mail@kimjoar.net" { |conn| conn.authenticate }
```
