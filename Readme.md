<!-- filePath = path.join(__dirname , 'users_data.json') -->

utf-8 in reading and writing file ensurthe standard text format - 8-bit -> encoding all symbols, characters, all languages correctly. 
JSON files are plain text files. Using utf-8 ensures they are read and written correctly as text rather than binary data.
utf-8 returns a string.

JSON.stringify(data, null, 2)
Converts a JavaScript object -> JSON string.
null: Specifies no custom transformation (you could use a replacer function here).
2: Controls indentation 


Operation	Purpose                  	Function	     Input Type	          Output Type
Write	 | JS object-> JSON string	 | JSON.stringify	| JSobject/array	| JSON string
Read	 |   JSON string->JS object	 | JSON.parse	    | JSON string	    | JS object/array  