window.onload = function(){
	
	
	

	  
	  
	
	
	
	
	var demo_input = document.getElementById('code-css');
	
	var type_this = demo_input.value;
	var index = 0;
	
	window.next_letter = function() {
		if (index <= type_this.length) {
			demo_input.value = type_this.substr(0, index++);
			
			// from http://stackoverflow.com/questions/18946546/how-do-you-append-text-in-codemirror
			//editor.replaceRange(type_this.substr(0, index++), CodeMirror.Pos(editor.lastLine()));
			editor.setValue(demo_input.value);
			
			setTimeout("next_letter()", 20);
		}
	}
	
	next_letter();



	 editor = CodeMirror.fromTextArea(document.getElementById("code-css"), {
        mode: "text/html",
        lineNumbers: true,
        lineWrapping:true
      });
	
	
	
	
	var demo_input2 = document.getElementById('code-html');
	
	var type_this2 = demo_input2.value;
	var index2 = 0;
	
	window.next_letter2 = function() {
		if (index2 <= type_this2.length) {
			demo_input2.value = type_this2.substr(0, index2++);
			
			// from http://stackoverflow.com/questions/18946546/how-do-you-append-text-in-codemirror
			//editor.replaceRange(type_this.substr(0, index++), CodeMirror.Pos(editor.lastLine()));
			editor2.setValue(demo_input2.value);
			
			setTimeout("next_letter2()", 20);
		}
	}
	
	next_letter2();


}
window.onload = function() {
		 // Setup JS code editor
var textarea_html = document.getElementById("code-html");
var codemirror_html = CodeMirror.fromTextArea(textarea_html, {
  mode: 'htmlmixed',
  lineNumbers: true
});

// Setup CSS code editor
var textarea_css = document.getElementById("code-css");
var codemirror_css = CodeMirror.fromTextArea(textarea_css, {
  mode: 'css',
  lineNumbers: true
});
}