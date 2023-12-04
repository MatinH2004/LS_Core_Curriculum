# cms.rb - helper method
def duplicate_name(filename)
  files = get_data_files

  name, ext = filename.split(".")[0], filename.split(".")[-1]
  count = files.count { |f| f.start_with?(name) }

  "#{name}.#{count.succ}.#{ext}"
end

# index.erb - main list element

=begin 

<form class="inline" method="post" action="/create">
  <input name="filename" id="filename" value="<%= duplicate_name(file) %>" type="hidden" />
  <button type="submit">Duplicate</button>
</form> 

=end

