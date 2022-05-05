window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const inputName = document.querySelector("#new-task-name");
    const inputDate = document.querySelector("#new-task-date");
	const inputType = document.querySelector("#task-types");
	const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();
        console.log("loaded");

        const taskName = inputName.value;
        const taskDate = inputDate.value;
		const taskType = inputType.value;
		const task = taskType + " Due: " + taskDate + ", " + taskName ;

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);
		taskShort();

		inputName.value = '';
        inputDate.value = '';

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
	});
});

//Index Functions, like asking your name and filling in the box info.
function askName() {
    console.log("ran askName")
    let name = sessionStorage.getItem('name');

    if (name === null) {
        name = prompt("Please enter your name");
    }

    if (name != null) {
        document.getElementById('n').innerHTML = "Welcome " + name + "!";
        sessionStorage.setItem('name', name);
    } else {
        document.getElementById("n").innerHTML = "Welcome, Stranger!";
    }
	taskShort();
}
//list_el is showing undefined, maybe create an outside variable that applies to it?
function taskShort() {
console.log("taskShort loaded")
if (typeof list_el === 'undefined' || (list_el == null) || (list_el.length == 0)){
	console.log("list undef")
	document.getElementById('duedays').innerHTML = "No Assignments upcoming!";
	//document.getElementById('duedate').innerHTML = "";
} else {
	const today = new Date();
	//TODO calculate numDays
	console.log("list good")
	var currDateDiff = 999999
	//for (let i = 0, i < list_el.length; i++ )
		//var currDate = new Date([parse through input])
		//var dateDifference;
		//if (today < currDate) {
		//	dateDifference = today - currDate;
		//}
		//else{
		//	dateDifference = currDate - today;
		//}
		//if (dateDifference < currDateDiff) {
		//	currDateDiff = dateDifference;
		//}
	//}
	document.getElementById('duedays').innerHTML = "In " + numDays + " days";
	document.getElementById('duedate').innerHTML = taskName + "Due"
}
}
