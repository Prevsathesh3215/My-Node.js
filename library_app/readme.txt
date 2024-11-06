I have created a personal mini project that utilizes Node.js and Express to create a online library API. Features of this API include:



- A relational database system set up using MySQL and Sequelize which has three tables which have a one to many relation(Books to Borrowers and Category).



-User logging system that takes in a one-time user registration. Once completed, the password of the registered user will be encrypted using bcrypt and stored. User roles will also be stored and are immutable, except when changed by 'admin' role. 
