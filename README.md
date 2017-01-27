# infoscan
Color coding of text to make looking for important (but unknown words) easier, i.e. Personally Indentifiable Information (PII) in freeform text.

## project status
Definitely not in a working state at the moment.  Web dev is not my strong point so I'm using this project to learn a bit about it.

## project concept
Humans are great at pattern recognition, computers not as much.  So, leverage human pattern recognition to find words in text that shouldn't be there.  Over time build up a list of known good and known bad strings.  This can, at some future point, be used as a training set for machine learning.

The current use case is finding PII (names, SS#'s, phone #'s, addresses, etc) in freeform text.  As a developer syntax highlighting is a huge help when I'm reading or writing code.  There's no reason why we can't provide a syntax highlight for known good or bad words.

- Import a csv of words.
  -  It's a specific format currently, making it dynamic will be a future enhancement.
- Import a list of words that are known good.
  - These words will be greyed out so the eye skips over them easier.
  - In my particular use case, this can be provided via a text of the 1k most common english language words.
- Import a list of words that are known bad.
  - These words will be red so they eye picks them up easier.
  - This color should be configurable in the future for different applications/color blindness/cultural color differences.
- All other words will be "standard" black.
- Each word is clickable to cycle all instances of that word through the 3 states.
- Each row of text is clickable so it can be exported for processing in another application.
  - In essence this is to mark a row as containing highlighted red words.

## TODO

### 1.0
- Use css classes for color coding
- Database Access
- Export of Text to Summarize
- Integration with Ticketing System
