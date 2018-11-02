({
	onStudentClick: function (component, event, helper) {
		//alert(component.get('v.student').Name);
		//debugger;
		var student = component.get('v.student');
		console.log('Name', student.Name);
		console.log('Photo', student.PhotoUrl);
	}
})