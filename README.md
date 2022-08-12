Crear el contenedor para el froent
docker build -t ${USER_NAME}/mandeFront .

Instalar las dependencias con npm
docker run -it -p 3001:3000 ${USER_NAME}/mandeFront
   exit

Probar la aplicación
Visite las direcciones

localhost:3001/login

https://youtu.be/3t8F1QqDz6g
