api calls per service:
- s3
  - POST /s3/upload - need to send FormData object with two properties:
    image - file (from input type file)
    fileData - object that looks like this: {id:string,fileType:string}
  - GET /s3/single - needs query param s3Id (string)
  - GET /s3/multi - needs query param s3Id (JSON.stringify(array))
- people-course
  - POST /api/people - gets an info about one person/many, see schema for details. 
  - GET /api/people/:id - gets an id of a person (example: /api/people/123456789)
  - GET /api/people/many - gets JSON.stringify() array of ids
  - POST /api/course/new - gets {people:(array of people, see schema for details),
    name:string,startDate:Date,deadline:Date}
  - GET /api/course/all - ()
  - GET /api/course/:id - gets an id of a course (_id property from mongodb)
- gmail
  - POST /gmail/sendMail - gets {mailTo:string,id:string (candidate id)}