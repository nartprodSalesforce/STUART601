({
    onInit: function(component,event,helper) {
        var students = [];
        var studentNames = ['Steve', 'Dave', 'Joe', 'Jyoti', 'Andres'];
        for (var i=0; i<5; i++) {
            students.push(
                {
                    'sobjectType' : 'Contact',
                    'Name' : studentNames[i],
                    'PhotoUrl': '/services/images/photo/003B0000009VnYcIAK',
                    'Id' : i
                }
            );
        }
        component.set('v.studentList',students);
    }
})
