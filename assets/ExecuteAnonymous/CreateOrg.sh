sfdx force:org:create -f config/project-scratch-def.json --setdefaultusername --setalias soDEX601
sfdx force:org:open
sfdx force:source:push
sfdx force:apex:execute -f assets/ExecuteAnonymous/CreateOrg.txt
sfdx force:user:permset:assign --permsetname Certification