DevTinder APIs

authRouter
- POST /signup
- POST /login
- POST /logout
- POST /forgot-password
- PATCH /reset-password
- GET /user/:userId

ProfileRouter
- GET /profile/view
- PATCH /profile/edit
- PATCH /profile/assword
- POST /profile/upload-picture 
- GET /profile/view/:userId
- POST /profile/skills

connectionRequestRouter
- POST /request/send/interested/:userId
- POST /request/send/ignored/:userId
- POST /request/review/accepted/:requestId
- POST /request/review/rejected/:requestId

userRouter
- GET /user/connections
- GET /user/requests/recieved
- GET /user/feed - Gets you the profile of other users on platform