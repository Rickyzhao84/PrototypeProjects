# App & Service Protocols

[Go back](./README.MD)

## 1. User
1. New user
    ```
    POST /user/create
    Body: { displayName: 'string', loginId: '123@qq.com', loginIdType: 'email'|'phone', password: 'password' }
    ```
    ```
    201 - Created
    { accessToken: 'string' }
    ```
1. Login
    ```
    POST /user/login
    Body: { loginId: '123@qq.com', password: 'password or resetToken' }
    ```
    ```
    200 - Ok
    { accessToken: 'string', displayName: '一粒麦子', reset?: 'boolean', isChurchAdmin?: 'boolean', churchName?: 'string'  }
    ```
    ```
    400 - Bad Request
    { error: 'message' }
    ```
1. Refresh access token
    ```
    POST /user/refreshAccessToken
    Body: { }
    ```
    ```
    201 - Ok
    { accessToken: 'string' }
    ```
    ```
    400 - Bad Request
    { error: 'message' }
    ```
    ```
    401 - Unauthorized (access token expired, user is logged out on server side)
    { }
    ```
1. Get profile (DisplayName)
    ```
    GET /user/profile
    Body: { displayName: '一粒麦子' }
    ```
    ```
    200 - Ok
    { }
    ```
    ```
    400 - Bad Request
    { error: 'message' }
    ```
    ```
    401 - Unauthorized (access token expired, user is logged out on server side)
    { }
    ```
1. Update profile (DisplayName, Password - they can be updated either or both)
    ```
    PUT /user/updateProfile
    Body: { displayName?: '一粒麦子', password?: 'test2' }
    ```
    ```
    200 - Ok
    { }
    ```
    ```
    400 - Bad Request
    { error: 'message' }
    ```
    ```
    401 - Unauthorized (access token expired, user is logged out on server side)
    { }
    ```
1. Reset password
    ```
    PUT /user/resetPassword
    Body: { loginId: '123@qq.com' }
    ```
    ```
    200 - Ok
    { }
    ```
    ```
    400 - Bad Request
    { error: 'message' }
    ```
    ```
    401 - Unauthorized (access token expired, user is logged out on server side)
    { }
    ```
1. Get user data - e.g. answers, notes
    ```
    GET /user/data/*
    ```
    ```
    200 - Ok
    { name: value, ... }
    ```
    ```
    400 - Bad Request
    { error: 'message' }
    ```
    ```
    401 - Unauthorized (access token expired, user is logged out on server side)
    { }
    ```
1. Set user data - e.g. answers, notes
    ```
    POST /user/data/*
    ```
    ```
    200 - Ok
    { }
    ```
    ```
    400 - Bad Request
    { error: 'message' }
    ```
    ```
    401 - Unauthorized (access token expired, user is logged out on server side)
    { }
    ```
    ```
    404 - Not found (no content)
    { }
    ```
1. Delete user data - e.g. answers, notes
    ```
    DELETE /user/data/*
    ```
    ```
    200 - Ok
    { }
    ```
    ```
    400 - Bad Request
    { error: 'message' }
    ```
    ```
    401 - Unauthorized (access token expired, user is logged out on server side)
    { }
    ```
    ```
    404 - Not found (no content)
    { }
    ```
## 2. Home Page
1. Get home - read from database for lessons that user has permission
    ```
    GET /home
    ```
    ```
    200 - Ok
    {
        books: [
            {
                url: 'image1_url',
                name: '<string>'
            },
            ...
        ]
    }
    ```
    ```
    400 - Bad Request
    { error: 'message' }
    ```
    ```
    401 - Unauthorized (access token expired, user is logged out on server side)
    { }
    ```
## 3. Lesson
1. Get lesson summary - verify from database that user has permission, then read the leader/member/free json file from lessonId folder based on user role, language is read from header
    ```
    GET /lesson/:lessonId
    ```
    ```
    200 - Ok
    leader/member json content
    ```
    ```
    400 - Bad Request
    { error: 'message' }
    ```
    ```
    401 - Unauthorized (access token expired, user is logged out on server side)
    { }
    ```
1. Get lesson json and related data (answers + chat + userChat) - use index for weekly lessons since leader & member have different json files
    ```
    GET /lesson/:lessonId/:groupId/*[?index=<index>]
    ```
    ```
    200 - Ok
    {
        "lesson": <lesson JSON>,
        "answers": {
            "<questonId1>": "<answer1>",
            "<questonId2>": "<answer2>",
            ...
        },
        "chat": {
            "<questonId1>": <last message timestamp>,
            "<questonId2>": <last message timestamp>,
            ...
        },
        "userChat": {
            "<questonId1>": <last message timestamp>,
            "<questonId2>": <last message timestamp>,
            ...
        }
    }
    ```
    ```
    400 - Bad Request
    { error: 'message' }
    ```
    ```
    401 - Unauthorized (access token expired, user is logged out on server side)
    { }
    ```
1. Get lesson content (lesson/devotion/material) - verify from database that user has permission, then read the lesson json file from lessonId folder, language is read from header
    ```
    GET /lesson/:lessonId/content/*
    ```
    ```
    200 - Ok
    file content
    ```
    ```
    400 - Bad Request
    { error: 'message' }
    ```
    ```
    401 - Unauthorized (access token expired, user is logged out on server side)
    { }
    ```
1. Get lesson content (image/video) - verify from database user has permission then read the binary content file from lessonId folder, language is read from header
    ```
    GET /lesson/:lessonId/content/*
    ```
    ```
    200 - Ok
    <binary file content>
    ```
    ```
    400 - Bad Request
    { error: 'message' }
    ```
    ```
    401 - Unauthorized (access token expired, user is logged out on server side)
    { }
    ```
1. Get lesson cover image
    ```
    GET /lesson/:lessonId/cover
    ```
    ```
    200 - Ok
    <image binary file content>
    ```
    ```
    400 - Bad Request
    { error: 'message' }
    ```
## 4. Discussion
1. Get chat content summary (outside of chat window)
    ```
    GET /chat/summary/:lessonId/:groupId or /chat/summary/:lessonId/:groupId/:questionId
    ```
    ```
    200 - Ok
    {
        lastMessageTime // 0 if no chat
    }
    ```
    ```
    400 - Bad Request
    { error: 'message' }
    ```
    ```
    401 - Unauthorized (access token expired, user is logged out on server side)
    { }
    ```
1. Connect to chat server via socket.io
    ```
    Connect to "http://app.7-stages.org/api"
    ```
1. Enter chat room via socket.io (chatId is 'groupId' )
    ```
    Send to 'enterRoom' channel with { chatId: '<string>', accessToken: '<string>'}
    ```
1. Exit chat room via socket.io
    ```
    Send to 'exitRoom' channel with { }
    ```
1. Get chat messages via socket.io
    ```
    Send to 'getMessages' channel with { startFrom?: <datetime> }
    ```
    ```
    Receive from 'newMessages' channel with [{ time: '<datetime>', user: { id: '<number>', displayName: '<string>', loginId: '<string>' }, messageId: '<number>', message: '<string>' }]
    ```
1. Send chat content via socket.io
    ```
    Send to 'sendMessage' channel with { message: '<string>' }
    ```
    ```
    Receive from 'newMessages' channel with [{ time: '<datetime>', user: { id: '<number>', displayName: '<string>', loginId: '<string>' }, messageId: '<number>', message: '<string>' }]
    ```
1. Delete chat content via socket.io
     ```
    Send to 'deleteMessage' channel with { messageId: '<number>' }
    ```
    ```
    Receive from 'deleteMessage' channel with [{ messageId: '<number>' }]
    ```
## 5. User Group
1. Get my groups when open a lesson
    ```
    GET /groups/:lessonId
    ```
    ```
    200 - Ok
    [
        {
            groupId: <number>,
            name: <string>,
            isGroupLeader: <boolean>
        },
        ...
    ]
    ```
    ```
    400 - Bad Request
    { error: 'message' }
    ```
    ```
    401 - Unauthorized (access token expired, user is logged out on server side)
    { }
    ```
1. Get group info
    ```
    GET /group/:groupId
    ```
    ```
    200 - Ok
    {
        name: <string>,
        notice: <string>,
        capacity: <number>,
        users: [
            {
                userId: <number>,
                name: <string>,
                accepted: <boolean>,
                isGroupLeader: <boolean>
            },
            ...
        ]
    }
    ```
    ```
    400 - Bad Request
    { error: 'message' }
    ```
    ```
    401 - Unauthorized (access token expired, user is logged out on server side)
    { }
    ```
1. Get group attendance info for a given group on a given date
    ```
    GET /group/:groupId/attendance/:theDate
    ```
    ```
    200 - Ok
    {
        attended: [userId1, userId2,..],
        past10WeekCount:[
            {
                userId: <number>,
                count: <number>
            },
            ...
        ]
    }
    ```
    ```
    400 - Bad Request
    { error: 'message' }
    ```
    ```
    401 - Unauthorized (access token expired, user is logged out on server side)
    { }
    ```

1. Add member
    ```
    POST /group/:groupId/addUser/:userLoginId
    ```
    ```
    201 - Created
    { }
    ```
    ```
    400 - Bad Request
    { error: 'message' }
    ```
    ```
    401 - Unauthorized (access token expired, user is logged out on server side)
    { }
    ```
1. Remove member
    ```
    POST /group/:groupId/removeUser/:userId
    ```
    ```
    200 - Ok
    { }
    ```
    ```
    400 - Bad Request
    { error: 'message' }
    ```
    ```
    401 - Unauthorized (access token expired, user is logged out on server side)
    { }
    ```
1. Update group info
    ```
    POST /group/:groupId/update
    Body: { name: <string>, notice: <string> }
    ```
    ```
    200 - Ok
    { }
    ```
    ```
    400 - Bad Request
    { error: 'message' }
    ```
    ```
    401 - Unauthorized (access token expired, user is logged out on server side)
    { }
    ```
1. Member accepts invitation
    ```
    POST /group/:groupId/accept
    ```
    ```
    200 - Ok
    { }
    ```
    ```
    400 - Bad Request
    { error: 'message' }
    ```
    ```
    401 - Unauthorized (access token expired, user is logged out on server side)
    { }
    ```
1. Member rejects invitation
    ```
    POST /group/:groupId/reject
    ```
    ```
    200 - Ok
    { }
    ```
    ```
    400 - Bad Request
    { error: 'message' }
    ```
    ```
    401 - Unauthorized (access token expired, user is logged out on server side)
    { }
    ```
1. A existing group take on a new class
    ```
    POST /group/:classId/groupTakeNewClass/:groupId
    ```
    ```
    200 - ok
    ```
    400 - Bad request
    ```
    { error: 'message' }
    401 - Unauthorized (access token expired, user is logged out on server side)
    { }
    ```
1. Get all my groups -- this is an existing API in 2.0, but now documented in 2.5. The only difference between 2.0 and 2.5 is that in 2.0, each groupId is paired with exactly one classId, but in 2.5, one groupId can have multiple classId. So in the array returned below, you might get {groupId=1, classId=1} and {groupId=1, classId=2}.  The groupId=1 appears twice.  In 2.0 client, all be displayed with groupName+Classname.  In 2.5, the client needs to get unique groupId and not showing className in the group list page.
    ```
    Get /allgroups
    ```
    ```
    200 - ok
    [
      {
        groupId,
        orgId,
        name,
        isGroupLeader,
        classId,
        classNameChs,
        classNameCht,
        classNameEng,
        newChatMessage
      }
    ]
    ...
    400 - Bad request
    { error: 'message' }
    ```
    ```
    401 - Unauthorized (access token expired, user is logged out on server side)
    { }
    ```
## 6. WebAdmin
1. Get church groups info (leader + member list)
    ```
    GET /webAdmin/groups
    ```
    ```
    200 - Ok
    [
        {
            groupId: '<number>',
            groupName: '<string>',
            users: [{
                userId: '<number>',
                loginId: '<string>',
                displayName: '<string>',
                isGroupLeader: '0 or 1',
                status: '0' - pending, '1' - accepted
            }, {
                ...
            }]
        },
        {
            ...
        }
    ]
    ```
    ```
    400 - Bad Request
    { error: 'message' }
    ```
    ```
    401 - Unauthorized (access token expired, user is logged out on server side)
    { }
    ```
1. Add church group leader
    ```
    POST /webAdmin/group/:groupId/addLeader/:leaderLoginId
    ```
    ```
    200 - Ok
    { }
    ```
    ```
    400 - Bad Request
    { error: 'message' }
    ```
    ```
    401 - Unauthorized (access token expired, user is logged out on server side)
    { }
    ```
1. Demote church group leader to member
    ```
    POST /webAdmin/group/:groupId/demoteLeader/:leaderLoginId
    ```
    ```
    200 - Ok
    { }
    ```
    ```
    400 - Bad Request
    { error: 'message' }
    ```
    ```
    401 - Unauthorized (access token expired, user is logged out on server side)
    { }
    ```
1. Create a new church checkup
    ```
    POST /webAdmin/checkup/create
    {
        "subject":"<string>",
        "startTime":"2019-06-23 20:17:37",
        "endTime":"2019-07-23 20:17:37",
        "users": [
            "<loginId1>",
            "<loginId2>",
            ...
        ]
    }

    ```
    ```
    201 - Ok
    { }
    ```
    ```
    400 - Bad Request
    { error: 'message' }
    ```
    ```
    401 - Unauthorized (access token expired, user is logged out on server side)
    { }
    ```
1. Get church checkup results
    ```
    GET /webAdmin/checkup
    ```
    ```
    200 - Ok
    [
        {
            "subject":"<string>",
            "startDate": "2019-06-24T04:17:37.000Z",
            "endDate": "2019-07-24T04:17:37.000Z",
            "users": [
                {
                    userId: '<number>',
                    loginId: '<string>',
                    displayName: '<string>',
                    status: '0' - invited, '1' - accepted, '2' - rejected, '3' - completed
                },
                ...
            ]
        },
        ...
    ]
    ```
    ```
    400 - Bad Request
    { error: 'message' }
    ```
    ```
    401 - Unauthorized (access token expired, user is logged out on server side)
    { }
    ```
1. Get church members
    ```
    GET /webAdmin/members
    ```
    ```
    200 - Ok
    [
        {
            userId: '<number>',
            loginId: '<string>',
            displayName: '<string>'
        },
        ...
    ]
    ```
    ```
    400 - Bad Request
    { error: 'message' }
    ```
    ```
    401 - Unauthorized (access token expired, user is logged out on server side)
    { }
    ```
## 7. Get checkup list
1. Get checkup list
    ```
    GET /checkup
    ```
    ```
    200 - Ok
    {
        "tests": [
            {
                "image": "image_url",
                "title": "Ministry Health",
                "url": "checkup_url"
            },
            ...
        ],
        "results": [
            {
                "title": "True Light Christian Church",
                "date": "4/15/2019",
                "state": '0' - invited, '1' - accepted, '2' - rejected, '3' - completed,
                "checkupUserId": "<checkupUserId>",
                "url": "checkup_url"
            },
            ...
        ]
    }
    ```
    ```
    400 - Bad Request
    { error: 'message' }
    ```
    ```
    401 - Unauthorized (access token expired, user is logged out on server side)
    { }
    ```
1. Accept checkup invitation
    ```
    POST /checkup/:checkupId/accept
    ```
    ```
    200 - Ok
    { }
    ```
    ```
    400 - Bad Request
    { error: 'message' }
    ```
    ```
    401 - Unauthorized (access token expired, user is logged out on server side)
    { }
    ```
1. Reject checkup invitation
    ```
    POST /checkup/:checkupId/reject
    ```
    ```
    200 - Ok
    { }
    ```
    ```
    400 - Bad Request
    { error: 'message' }
    ```
    ```
    401 - Unauthorized (access token expired, user is logged out on server side)
    { }
    ```
## 8. BookAdmin
1. GetOwnerLessonList.  There is already such a list function but it's for the iDigest APP. and this one is for the author of a lesson who has permission to change the content.  It can return an empty array when the user has none, and can create one. When it's empty array, it return [] with nothing in it.
    ```
    GET /bookAdmin/lessons
    ```
    ```
    200 - Ok
    [
        {
            "titleEng" : "book name in English",
            "titleCht" : "book name in Chinese traditional",
            "titleChs" : "book name in Chinese simplified",
            "image": "image_url",
            "lessonId": "folder-name==lessonId"
        },
        ...
    ]
    ```
    ```
    400 - Bad Request
    { error: 'message' }
    ```
    ```
    401 - Unauthorized (access token expired, user is logged out on server side)
    { }
    ```
1. CreateLesson.  An owner creates a new book. When a book is first created, the status field in the Class table == 0. In this state, only the owner can see it in the App --- <todo> --- the App's Home API need to be updated to include this scenario.
    ```
    Post /bookAdmin/lesson/create
    Body:
        {
            "titleEng" : "book name in English",
            "titleCht" : "book name in Chinese traditional",
            "titleChs" : "book name in Chinese simplified",
            "image": "image url"
        }
    ```
    ```
    200 - Ok
    {
        "titleEng" : "book name in English",
        "titleCht" : "book name in Chinese traditional",
        "titleChs" : "book name in Chinese simplified",
        "image": "image_url",
        "lessonId": "folder-name==lessonId"
    }
    ```
    ```
    400 - Bad Request --- book name taken, etc
    { error: 'message' }
    ```
    ```
    ```
1. PublishLesson.  An owner publishes a book, which will turn the status==0 to Status == 1
    ```
    Post /bookAdmin/lesson/:lessonId/publish
    ```
    ```
    200 - Ok
    ```
    ```
    400 - Bad Request ---     { error: 'message' }
    ```
    ```
    ```
1. GetOwnerLesson --- This API is not implemented, and it's purpose can be served by GetLessonConent (the next API), by passing the file name of "free.json", or "member.json", or "leader.json".  and for v1 tool, we'll only support free.json. The original intent of this API was: There is such a funciton for the APP, for end users. This one is for the owner of the lesson content who has permission to change the content.  After verifying the ownership, it returns the leader/member/free json file from lessonId folder based (all 3), language is read from header
    ```
    GET /bookAdmin/lesson/:lessonId
    ```
    ```
    200 - Ok
    {
        "leader.json": "leader.json content",
        "member.json": "member.json content",
        "free.json": "free.json content"
    }
    ```
    ```
    400 - Bad Request
    { error: 'message' }
    ```
    ```
    401 - Unauthorized (access token expired, user is logged out on server side)
    { }
    ```
    404 - the file doesn't exist yet
    { }
    ```
1. Get lesson content (lesson/devotion/material) - verify from database that user has ownership, then read the lesson json file from lessonId folder, language is read from header. By passing in * as free.json or member.json or leader.json, this API should get those content also.  // this API is identical with the version for the APP, with the exception of ownershp check
    ```
    GET /bookAdmin/lesson/:lessonId/content/*
    ```
    ```
    200 - Ok
    file content that matches the name * in the input parameter
    ```
    ```
    400 - Bad Request
    { error: 'message' }
    ```
    ```
    401 - Unauthorized (access token expired, user is logged out on server side)
    { }
    ```
1. SaveLessonContent (lesson/devotion/material) - verify from database that user has ownership on the lesson/book, then save the content to the json file under lessonId folder, language is read from header. By passing in * as free.json or member.json or leader.json, this API should save those content also.
    ```
    POST /bookAdmin/lesson/:lessonId/save/*
    Body: {the entire post-body content will be written to the file with name * under the lessonID folder as is, but it should always formatted with beginning and closing curly brackets}
    ```
    ```
    200 - Ok
    ```
    ```
    400 - Bad Request
    { error: 'message' }
    ```
    ```
    401 - Unauthorized (access token expired, user is logged out on server side)
    { }
    ```
