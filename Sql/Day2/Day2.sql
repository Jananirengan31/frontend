create database productdb;
use productdb;

drop database productdb;

create database governmentofficedb;
use governmentofficedb;

create table GovernmentOfficeDatas(
  staff_id int primary key auto_increment,
  staff_name varchar(50),
  memberinfo varchar(50),
  department varchar(20),
  createdby varchar(20) default"Admin",
  createdat date ,
  updatedby varchar(20) default "Admin",
  updatedat date

);

insert into GovernmentOfficeDatas(staff_name,memberinfo,department,createdat,updatedat)
values("Jan","Revenue Officer","Revenue",curdate(),current_timestamp());

insert into GovernmentOfficeDatas(staff_name,memberinfo,department,createdat,updatedat)
values("Priya","Education Officer","Education",curdate(),current_timestamp());

insert into GovernmentOfficeDatas(staff_name,memberinfo,department,createdat,updatedat)
values("Ashvi","Health Inspector","Health",curdate(),current_timestamp());

insert into GovernmentOfficeDatas(staff_name,memberinfo,department,createdat,updatedat)
values("Tabu","Police Inspector","Police",curdate(),current_timestamp());

insert into GovernmentOfficeDatas(staff_name,memberinfo,department,createdat,updatedat)
values("Jaya","Agriculture Officer","Agriculture",curdate(),current_timestamp());

insert into GovernmentOfficeDatas(staff_name,memberinfo,department,createdat,updatedat)
values("Madhu","Assistent Engineer","Assistent Engineer",curdate(),current_timestamp());

insert into GovernmentOfficeDatas(staff_name,memberinfo,department,createdat,updatedat)
values("Meera","Accounts officer ","Accounts",curdate(),current_timestamp());

insert into GovernmentOfficeDatas(staff_name,memberinfo,department,createdat,updatedat)
values("Rahul","Welfare officer ","Welfare Association",curdate(),current_timestamp());

insert into GovernmentOfficeDatas(staff_name,memberinfo,department,createdat,updatedat)
values("vijay","Development officer ","Welfare Association",curdate(),current_timestamp());

insert into GovernmentOfficeDatas(staff_name,memberinfo,department,createdat,updatedat)
values("Raja","Revenue officer ","Revenue",curdate(),current_timestamp());

select * from GovernmentOfficeDatas;

