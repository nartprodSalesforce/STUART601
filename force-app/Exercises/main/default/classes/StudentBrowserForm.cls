public with sharing class StudentBrowserForm {

    @AuraEnabled
    public static List<User> getInstructors() {
        return [
            select Id, Name
            from User
            where Is_Instructor__c = true
            order by Name
        ];
    }

    @AuraEnabled
    public static List<Course_Delivery__c> getDeliveriesByInstructor(Id instructorId) {
		List<Course_Delivery__c> records = [
            SELECT id, Start_Date__c, Location__c, Attendee_Count__c
            FROM Course_Delivery__c
            WHERE Instructor__c = :instructorId AND Status__c IN('Enrolled','Completed','Delivered','Scheduled')
            ORDER BY Start_Date__c DESC
        ];
		return records;
    }

}