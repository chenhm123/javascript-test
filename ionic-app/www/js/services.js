var service = angular.module('starter.services', [])

service.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: '1Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
service.factory('User',function(){
  var user = [
    {
      id:1,
      userName:'chm',
      password:123
    },
    {
      id:2,
      userName:'chm1',
      password:123
    },
    {
      id:3,
      userName:'chm2',
      password:123
    }
  ];
  return {
    checkUser:function(userName,password){
      for(var i = 0;i<user.length;i++){
        if(user[i].userName == userName){
          return user[i].password == password;
        }
      }
    }
  };
});
service.factory('HotelList',function(){
  var hotelList = [
    {
      id:1,
      name:"大酒店1"
    },
    {
      id:2,
      name:"大酒店2"
    },
    {
      id:3,
      name:"大酒店3"
    },
    {
      id:4,
      name:"大酒店4"
    }
  ];
  return {
    getAllHotel:function(){
      return hotelList;
    }
  }
});
service.factory('tableList',function(){
  var list = [
    {
      id:1,
      info1:"info",
      info2:"info",
      info3:"info",
      info4:"info",
      info5:"info",
    },{
      id:2,
      info1:"info",
      info2:"info",
      info3:"info",
      info4:"info",
      info5:"info",
    },{
      id:3,
      info1:"info",
      info2:"info",
      info3:"info",
      info4:"info",
      info5:"info",
    },{
      id:4,
      info1:"info",
      info2:"info",
      info3:"info",
      info4:"info",
      info5:"info",
    },{
      id:5,
      info1:"info",
      info2:"info",
      info3:"info",
      info4:"info",
      info5:"info",
    },{
      id:5,
      info1:"info",
      info2:"info",
      info3:"info",
      info4:"info",
      info5:"info",
    },{
      id:5,
      info1:"info",
      info2:"info",
      info3:"info",
      info4:"info",
      info5:"info",
    },{
      id:5,
      info1:"info",
      info2:"info",
      info3:"info",
      info4:"info",
      info5:"info",
    },{
      id:5,
      info1:"info",
      info2:"info",
      info3:"info",
      info4:"info",
      info5:"info",
    },{
      id:5,
      info1:"info",
      info2:"info",
      info3:"info",
      info4:"info",
      info5:"info",
    },{
      id:5,
      info1:"info",
      info2:"info",
      info3:"info",
      info4:"info",
      info5:"info",
    },{
      id:5,
      info1:"info",
      info2:"info",
      info3:"info",
      info4:"info",
      info5:"info",
    },{
      id:5,
      info1:"info",
      info2:"info",
      info3:"info",
      info4:"info",
      info5:"info",
    },{
      id:5,
      info1:"info",
      info2:"info",
      info3:"info",
      info4:"info",
      info5:"info",
    }
  ]
  return {
    getList:function(){
      return list;
    }
  }
})
