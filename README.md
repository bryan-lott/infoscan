# infoscan
Color coding of text to make looking for important (but unknown words) easier.

## project status
Definitely not in a working state at the moment.  Web dev is not my strong point so I'm using this project to learn a bit about it.

## project concept
Humans are great at pattern recognition, computers not as much.  So, leverage human pattern recognition to find words in text that shouldn't be there.

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
