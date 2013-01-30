require ('CGI')

module Jekyll
  module URLEncode
    def url_encode(text)      
      CGI.escape(text)
    end
  end
end

Liquid::Template.register_filter(Jekyll::URLEncode)