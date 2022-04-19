DROP DATABASE IF EXISTS projetTransverseS6;
CREATE DATABASE projetTransverseS6;
    USE projetTransverseS6;

DROP TABLE IF EXISTS adresse;
CREATE TABLE adresse(
   Id_adresse INT NOT NULL AUTO_INCREMENT,
   rue VARCHAR(30) NOT NULL,
   ville VARCHAR(50) NOT NULL,
   code_p INT,
   PRIMARY KEY(Id_adresse)
) engine=InnoDB;

DROP TABLE IF EXISTS user;
CREATE TABLE users(
   id_user INT NOT NULL AUTO_INCREMENT,
   nom_user VARCHAR(63),
   prenom_user VARCHAR(60),
   email VARCHAR(50) NOT NULL UNIQUE,
   password_u VARCHAR(200) NOT NULL,
   credit_user INT,
   Id_adresse INT NOT NULL,
   PRIMARY KEY(id_user),
   UNIQUE(email),
   FOREIGN KEY(Id_adresse) REFERENCES adresse(Id_adresse)
) engine=InnoDB;

DROP TABLE IF EXISTS annonces;
CREATE TABLE annonces(
   id_a INT NOT NULL AUTO_INCREMENT,
   titre_an VARCHAR(50),
   descrip VARCHAR(500),
   date_an DATETIME,
   credit_an INT,
   accep_an BOOLEAN,
   Id_adresse INT NOT NULL,
   id_user INT,
   PRIMARY KEY(id_a),
   UNIQUE(Id_adresse),
   FOREIGN KEY(Id_adresse) REFERENCES adresse(Id_adresse),
   FOREIGN KEY(id_user) REFERENCES users(id_user)
) engine=InnoDB;

DROP TABLE IF EXISTS accepter;
CREATE TABLE accepter(
   id_user INT,
   id_a INT,
   date_accep DATETIME,
   PRIMARY KEY(id_user, id_a),
   FOREIGN KEY(id_user) REFERENCES users(id_user),
   FOREIGN KEY(id_a) REFERENCES annonces(id_a)
) engine=InnoDB;
