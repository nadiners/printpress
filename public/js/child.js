var childNumber = 3;

function addChild() {
  var parent = document.getElementById('i-want-more-children');
  var newChild = '<p>Child ' + childNumber + '</p>';
  parent.insertAdjacentHTML('beforeend', newChild);
  childNumber++;
}