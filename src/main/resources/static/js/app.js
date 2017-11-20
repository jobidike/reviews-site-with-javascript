var title = document.querySelectorAll('h1,h2');
for (var i = 0; i < title.length; i++) {
	title[i].addEventListener('mouseover', function() {
		this.style.fontSize = '250%';
	})
	title[i].addEventListener('mouseout', function() {
		this.style.fontSize = '175%';
	});
}

var footer = document.querySelector('h4');
footer.addEventListener('click', function() {
	document.querySelector('h4').innerText = 'Created by Jaimie Obidike';
});

var commentNum = 0;
var addCommentBtn = document.getElementById('addCommentBtn');

document.getElementById('newComment').onclick = function() {
	commentNum = commentNum + 1;
	var node = document.createElement('h5');
	node.className = 'commentNum' + commentNum;
	var text = document.getElementById('commentArea').value;
	var textnode = document.createTextNode(text);
	node.appendChild(textnode);

	var delBtn = document.createElement('button');
	delBtn.className = 'commentNum' + commentNum;
	delBtn.id = commentNum;

	delBtn.addEventListener('click', function() {
		var confirmDel = prompt('Type Ok to Confirm');
		if (confirmDel == 'Ok' || confirmDel == 'ok') {
			var idName = this.id;
			var idNameToDelete = 'commentDiv' + idName;
			var elementToDelete = document.getElementById(idNameToDelete);
			elementToDelete.parentNode.removeChild(elementToDelete);

		} else {
			alert('Canceled');
		}
	});

	var node2 = document.createTextNode('delete');
	delBtn.appendChild(node2);
	var div = document.createElement('div');
	var specClass = 'commentNum' + commentNum;
	div.classList.add(specClass, 'aComment');
	div.id = 'commentDiv' + commentNum;

	var element = document.getElementById('comments');
	element.appendChild(div);
	div.appendChild(delBtn);
	div.appendChild(node)
};
