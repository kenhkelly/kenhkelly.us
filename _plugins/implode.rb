module Jekyll
    module Implode
        def implode(text)
            text.join("|")
        end
    end
end

Liquid::Template.register_filter(Jekyll::Implode)