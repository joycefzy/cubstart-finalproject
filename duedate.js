window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const inputName = document.querySelector("#new-task-name");
    const inputDate = document.querySelector("#new-task-date");
	const inputType = document.querySelector("#task-types");
	const inputTime = document.querySelector("#new-task-duration");
	const list_el = document.querySelector("#tasks");

	let taskList = new Array();

	if (sessionStorage.getItem('taskList')) {
		taskList = JSON.parse(sessionStorage.getItem('taskList'));
	} else {
		
	}

	

	form.addEventListener('submit', (e) => {
		e.preventDefault();

        const taskName = inputName.value;
        const taskDate = inputDate.value;
		const taskType = inputType.value;
		const taskTime = inputTime.value;
		const task = taskType + " Due: " + taskDate + ", " + taskName ;
		const taskL = [taskName, taskDate, taskType, taskTime]

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
		taskList.push(taskL)
		taskShort(taskList);

		// sessionStorage.setItem('taskList', taskList);

		inputName.value = '';
        inputDate.value = '';
		inputTime.value = '';

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
				index = taskList.indexOf(taskL);
				taskList[index] = [inputName.value, inputDate.value, inputType.value, inputTime.value]
				// sessionStorage.setItem('taskList', taskList);
			}

			// sessionStorage.setItem('taskList', taskList);
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
			index = taskList.indexOf(taskL);
			taskList.splice(index, 1);
			// sessionStorage.setItem('taskList', taskList);
		});

		
	});

	sessionStorage.setItem('taskList', JSON.stringify(taskList));
});


//updates home page with closest due date

	function taskShort(list_el) {
	if (typeof list_el === 'undefined' || (list_el == null) || (list_el.length == 0)){
		document.getElementById('duedays').innerHTML = "No Assignments upcoming!";
		//document.getElementById('duedate').innerHTML = "";
	} else {
		const today = new Date();
		var currDateDiff = 999999
		var currTaskName = "default"
		for (let i = 0; i < list_el.length; i++) {
			console.log(list_el[i][1])
			var currDate = new Date(list_el[i][1])
			console.log(currDate)
			var dateDifference;
			if (today < currDate) {
				dateDifference = today - currDate;
			} else{
				dateDifference = currDate - today;
			}
			if (dateDifference < currDateDiff) {
				currDateDiff = Math.ceil(Math.abs(dateDifference / (1000 * 3600 * 24)))+ 1;
				currTaskName = list_el[i][2]
				currTime = list_el[i][3]
			}

		}
		toWork = currTime / currDateDiff
		document.getElementById("head").innerHTML = "The Next Assignment To Turn In:" 
		document.getElementById('duedays').innerHTML = "In " + currDateDiff + " days";
		document.getElementById('duedate').innerHTML = currTaskName + " Due"
		document.getElementById('toWork').innerHTML = "Work " + toWork.toFixed(2) + " hours each day";
	}
	toWork = currTime / currDateDiff
// <<<<<<< HEAD
// 	console.log(toWork)
// 	//CAN'T SET PROPERTIES TO A NULL ERROR
// 	//document.getElementById('duedays').innerHTML = "In " + currDateDiff + " days";
// 	//document.getElementById('duedate').innerHTML = currTaskName + " Due"
// 	//document.getElementById('howLong').innerHTML = "Work " + toWork;
// 	var currDateDiff = 999999
// 	var currTaskName = "default"
// 	var currTime = 0
// =======
	document.getElementById("head").innerHTML = "The Next Assignment To Turn In:" 
	document.getElementById('duedays').innerHTML = "In " + currDateDiff + " days";
	document.getElementById('duedate').innerHTML = currTaskName + " Due"
	document.getElementById('toWork').innerHTML = "Work " + toWork.toFixed(2) + " hours";
}

}

