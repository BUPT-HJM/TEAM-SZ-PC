$(function(){
  var userData = [
    {
      "name":"Molunerfinn",
      "nick":"Mo",
      "link":"molunerfinn.com"
    },
    {
      "name":"KiMing",
      "nick":"Jm",
      "link":"BUPT-HJM.github.io"
    },
    {
      "name":"Roust Ghoti",
      "nick":"Rg",
      "link":"golden0o0snitch@gmail.com"
    },
    {
      "name":"BlueBird",
      "nick":"Gx",
      "link":"www.guoxunique.com"
    },
    {
      "name":"Flipped",
      "nick":"Fp",
      "link":"ffflipped.cn"
    },
    {
      "name":"InvokerDean",
      "nick":"In",
      "link":"317346823@qq.com"
    },
    {
      "name":"Siren",
      "nick":"As",
      "link":"xxxxb@qq.com"
    },
    {
      "name":"Sunichi",
      "nick":"Su",
      "link":"sunyiqixm@gmail.com"
    },
    {
      "name":"Mestulefire",
      "nick":"Mf",
      "link":"499066490@qq.com"
    },
    {
      "name":"Liushengfan",
      "nick":"Lo",
      "link":"ooolsfan@gmail.com"
    }
  ];

  var objLength = userData.length;
  for (i = 0; i < objLength; i++){
    var $item = $('<div class="contact-item">'+
                  '<div class="contact-circle">' + userData[i].nick + '</div>' +
                  '<div class="contact-name">' + userData[i].name + '</div>' +
                  '<div class="contact-link">' + userData[i].link + '</div>' +
                  '</div>');
    $('.contact').append($item);
  }
})