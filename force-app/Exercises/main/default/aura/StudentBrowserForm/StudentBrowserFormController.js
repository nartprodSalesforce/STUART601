({
	doInit: function (component, event, helper) {
		helper.onInit(component, event, helper);
	},
	onInstructorChange: function (component, event, helper) {
		component.set('v.selectedDeliveryId', '');
		if (component.get('v.selectedInstructorId') != '') {
			helper.callServer(
				component,
				"c.getDeliveriesByInstructor",
				function (response) {
					component.set('v.deliveries', response);
				},
				{
					instructorId:
						component.get('v.selectedInstructorId')
				}
			);
		}
	}
})
