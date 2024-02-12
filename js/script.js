const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");

let learning = {};
learning.topic = "JS";
learning.learningGoals = [
  "Build JS Programs",
  "Add Website Functionality",
  "Make Helpful and Useful Apps",
  "Do Cool Things",
];
learning.category = "Front End Development";
learning.topicImportance = "High";

console.log(learning);

learning.topic = "JavaScript";
learning.learningGoals.splice(1, 1);

console.log(learning);

topicElement.innerText = `I'm learning ${learning.topic}.`;
topicElement.classList.remove("hide");

countElement.innerHTML = `I have ${learning.learningGoals.length} learning goals.`;
countElement.classList.remove("hide");
