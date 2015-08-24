module Jekyll
    class TitleBg < Liquid::Tag

        def initialize(tag_name, text, tokens)
            super
            @text = text
        end

        def render(context)
            if @text.nil?
                "style='background: #87c844'"
            else
                "style='background: linear-gradient(to bottom, rgba(0,0,0,.5) 0%, rgba(0,0,0,.5) 100%), url(#{@text}) 50% center'"
            end
        end

    end
end

Liquid::Template.register_tag('title_bg', Jekyll::TitleBg)