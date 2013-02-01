require 'CGI'
require 'liquid'

module Jekyll
  module URLEncode
    def url_encode(text)      
      if(text != nil) then CGI.escape(text) end
    end
  end
end

Liquid::Template.register_filter(Jekyll::URLEncode)