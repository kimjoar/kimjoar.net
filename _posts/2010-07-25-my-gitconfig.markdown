---
title: My gitconfig
layout: default
---

{{ page.title }}
----------------

{% highlight ini %}
[user]
  name = Kim Joar Bekkelund
  email = kjbekkelund@gmail.com
[github]
  user = kjbekkelund
  ; Find your token at https://github.com/account
  token = ***
[help]
  format = web
[color]
  ui = auto
[advice]
  statusHints = false
[log]
  date = relative
[core]
  editor = mate -w
  autocrlf = input
  excludesfile = ~/.gitignore
  whitespace = tab-in-indent,blank-at-eof
[alias]
  unstage = reset HEAD --
  st = status -s
  ci = commit
  co = checkout
  pu = push origin master
  up = pull --rebase
  reb = rebase
  lg = log --graph --pretty=oneline --abbrev-commit
  rank = shortlog -sn --no-merges
  undo = reset --soft HEAD^
  praise = blame
  w = whatchanged --oneline
[merge]
  tool = opendiff
[filter "tabspace"]
  clean = expand -t2
[branch]
  autosetuprebase = always
[branch "master"]
  remote = origin
  merge = refs/heads/master
{% endhighlight %}

Just put that in your `~/.gitconfig` and you are ready to roll. Based on some great ideas from [Stack Overflow answers](http://stackoverflow.com/questions/267761/what-does-your-gitconfig-contain) and the great [Git manual](http://www.kernel.org/pub/software/scm/git/docs/git-config.html).