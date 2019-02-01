# chat-room
Node.js chat room using the net module
---------------------------------------------------------------------------------------------------------------------------------
academia-node
Node.js chat room using the net module

you will be making a chatroom using the net module.

on a file named server.js
create server that listens on port 8080 and allows multiple socket connections As the admin, you should manage the connections of your users. Keep track who is in the chat and who has disconnected. When a client emits data, that data should be broadcasted to all users (sockets) inside the chat.

on a file named client.js
create a client using the net.connect() method. Make sure that you pass in the correct address as the arguments to that method. once connected, pipe your terminal's standard input stream to write to your connected socket. Whenever your client socket receives data, pipe it to your standard output stream.

extra features:

Allow username registration.
Do not allow for any user to set their userneme to ADMIN.
Whenever the admin (server.js) sends a message, make it's "username" be ADMIN. (ADMIN says: ...)
Make your chatroom be PG. As the Admin, determine a list of banned words. If a user uses any of those banned words, kick them out of the chat.
