Connecting to an Oracle database using Ruby on OS X
===================================================

The other day I had to connect to an Oracle database using Ruby on OS X. The [Ruby OCI8 gem](http://ruby-oci8.rubyforge.org/) worked out great, but were poorly documented, especially when things didn't work as planned. So let's look at what failed for me, and how I fixed it. (This was my first time touching an Oracle database, so be nice to me if I have misunderstood a basic concept.)

### The Oracle Instant Client

First of all, you need to install the [Oracle Instant Client](http://www.oracle.com/technology/software/tech/oci/instantclient/htdocs/intel_macsoft.html). Since I'm on Snow Leopard I chose the 64 bit version. You need to download both the basic version and the SDK. Put the files in `/usr/local/oracle` or somewhere similar. Go to the directory where you installed the instant client and symlink `libclntsh.dylib`:

```bash
ln -s libclntsh.dylib.10.1 libclntsh.dylib
```

Then you have to add the variables Oracle need to function in your `.bashrc`. Running on OS X this ment setting `DYLD_LIBRARY_PATH` to the same path where you put the Oracle Instant Client. Remember to also set `NLS_LANG`. For me this was:

```bash
export DYLD_LIBRARY_PATH=/usr/local/oracle
export NLS_LANG=NORWEGIAN_NORWAY.UTF8
```

Restart your terminal, and run `sudo gem install ruby-oci8`.

### Could not compile with Oracle instant client

If you get the error message "Could not compile with Oracle instant client. Use Intel Mac instant Client." you have to specify ARCHFLAGS to only compile the C extension for 64-bit systems:

```bash
sudo env DYLD_LIBRARY_PATH=$DYLD_LIBRARY_PATH ARCHFLAGS="-arch x86_64" gem install ruby-oci8
```

### The error messages I got and how I solved them

`ORA-12514` and `ORA-12154`. Both were related to my tnsnames.ora. The problem was that the gem didn't create the correct tnsnames.ora information, and couldn't find one on my computer. I solved it by using the tnsnames information directly as input instead of the database name. For me this ended up as:

```ruby
tnsnames = "(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = #{host})(PORT = #{port})) (CONNECT_DATA = (SID = #{sid})))"
conn     = OCI8.new(username, password, tnsnames)
```

I have later heard the correct place to save the tnsnames.ora file is in DYLD_LIBRARY_PATH/network/admin/tnsnames.ora, e.g. `/usr/local/oracle/network/admin/tnsnames.ora`.

`ORA-00922`. This was just my SQL inserts being incorrect. Take an extra look at your SQL. Also remember that the OCI8 gem don't like semicolons in your SQL. Only _one_ SQL statement per `exec`.

### Enjoy

As soon as these steps where properly executed, the gem worked perfectly for me.
