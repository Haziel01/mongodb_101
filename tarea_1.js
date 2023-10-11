// BRANDON HAZIEL CEBALLOS BUENROSTRO - 338866
// 1) Baja el archivo grades.json y en la terminal ejecuta el siguiente comando:
// ┏[ hazie from ﲾ DESKTOP-NT0H4OA][ 0.029s][ RAM: 4/8GB][ Tuesday at 2:48:04 PM][main ≢  ?91 -18][]
// ┖[~\OneDrive\Escritorio\UNIVERSIDAD\8vo SEMESTRE\WEB PLATFORMS\segundo parcial]
// └─Δ mongoimport -d students -c grades --file grades.json
// 2023-10-10T14:48:51.598-0700    connected to: mongodb://localhost/
// 2023-10-10T14:48:51.906-0700    800 document(s) imported successfully. 0 document(s) failed to import.

// 2) El conjunto de datos contiene 4 calificaciones de n estudiantes. Confirma que se importo correctamente la colección con los siguientes comandos en la terminal de mongo: 
// >use students; 
// >db.grades.count();
// ¿Cuántos registros arrojo el comando count?
mongosh
// Current Mongosh Log ID: 6525c7f10571fb38ed93f20a
// Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.1
// Using MongoDB:          7.0.2
// Using Mongosh:          2.0.1
// test> use students;
// switched to db students;
db.grades.count();
// 800;

// 3) Encuentra todas las calificaciones del estudiante con el id numero 4.
db.grades.find({student_id:4});
// [
//   {
//     _id: ObjectId("50906d7fa3c412bb040eb588"),
//     student_id: 4,
//     type: "quiz",
//     score: 27.29006335059361,
//   },
//   {
//     _id: ObjectId("50906d7fa3c412bb040eb587"),
//     student_id: 4,
//     type: "exam",
//     score: 87.89071881934647,
//   },
//   {
//     _id: ObjectId("50906d7fa3c412bb040eb589"),
//     student_id: 4,
//     type: "homework",
//     score: 5.244452510818443,
//   },
//   {
//     _id: ObjectId("50906d7fa3c412bb040eb58a"),
//     student_id: 4,
//     type: "homework",
//     score: 28.656451042441,
//   },
// ];

// 4) ¿Cuántos registros hay de tipo exam?
db.grades.count({type:"exam"});
// 200;

// 5) ¿Cuántos registros hay de tipo homework?
db.grades.count({type:"homework"});
// 400;

// 6) ¿Cuántos registros hay de tipo quiz?
db.grades.count({type:"quiz"});
// 200;

// 7) Elimina todas las calificaciones del estudiante con el id numero 3
db.grades.deleteMany({student_id:3});
// { acknowledged: true, deletedCount: 4 }

// 8) ¿Qué estudiantes obtuvieron 75.29561445722392 en una tarea ?
db.grades.find({score:75.29561445722392});
// [
//   {
//     _id: ObjectId("50906d7fa3c412bb040eb59e"),
//     student_id: 9,
//     type: "homework",
//     score: 75.29561445722392,
//   },
// ];

// 9) Actualiza las calificaciones del registro con el uuid 50906d7fa3c412bb040eb591 por 100
db.grades.updateOne({_id:ObjectId("50906d7fa3c412bb040eb591")}, {$set:{score:100}});
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0
// }

// 10) A qué estudiante pertenece esta calificación.
db.grades.findOne({_id: ObjectId("50906d7fa3c412bb040eb591")});
// {
//   _id: ObjectId("50906d7fa3c412bb040eb591"),
//   student_id: 6,
//   type: 'homework',
//   score: 100
// }