CREATE DATABASE IF NOT EXISTS integrador_cac;

USE integrador_cac;

create table if not exists oradores (
	id_orador int not null auto_increment primary key, 
	nombre varchar(40) not null, 
	apellido varchar(40) not null,
	mail varchar(40) not null,
	tema varchar(40) not null,
	fecha_alta date not null
) character set latin1 collate latin1_swedish_ci;

insert into oradores (nombre, apellido, mail, tema, fecha_alta) values 
	('Juan', 'Gonzalez', 'juan_gonzalez@gmail.com','Seguridad en internet', '2023-09-01'),
	('Jose', 'Garcia', 'jose_garcia@yahoo.com', 'Programacion en Java', '2023-10-03'),
	('Ana', 'Martinez', 'ana_martinez@gmail.com', 'Programacion en Python', '2023-10-08'),
	('Celeste', 'López', 'celeste_lopez@yahoo.com', 'Redes Neuronales', '2023-10-09'),
	('Pedro', 'Alonso', 'pedro_alonso@hotmail.com', 'Inteligencia Artificial', '2023-10-10'),
	('Marcelo', 'Dominguez', 'marcelo_dominguez@gmail.com','Deep Learning', '2023-10-11'),
	('Maricel', 'Cabrera', 'marcab@hotmail.com','Excel para todos', '2023-10-12'),
	('Diego', 'Torres', 'diego_torres@gmail.com', 'Git y Github', '2023-10-13'),
	('Sergio', 'Toscano', 'sertos@hotmail.com', 'Ciberseguridad', '2023-10-14'),
	('Monica', 'Casares', 'monica_casares@yahoo.com', 'Ethical Hacking', '2023-10-15');


