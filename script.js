console.log();

function Container(id, className, childrenItems){
  this.id = id;
  this.className = className;
  this.children = childrenItems;
  this.htmlCode = "<div id='%id%' class='%class%'>%children%<div>Добавить отзыв:<input id='text' type='text' /><div><input type='button' value='Добавить' onclick='comment.addToComment()'></div></div></div>";
}
Container.prototype.render = function(){
  var childrenHtml = "";
  for (var i in this.children)
    childrenHtml += this.children[i].render();
  
  return this.htmlCode
    .replace('%id%', this.id)
    .replace('%class%', this.className)
    .replace('%children%', childrenHtml);
};
// Container.prototype.remove = function(){
//   document.getElementById(this.id).remove();
// };

// =============================================== Отображение отзыва ========================================

function Comment(id, items){
  Container.call(this, id, 'comment', items);
  $.post('review.list.json',
       (function(data){
          //var response = JSON.parse(data);
          var response = data;
          this.children = [];
          if(response.result === 1){
            for(var item of response.comment){
              var item = new CommentItem(item['id_comment'], item['text']);
              this.children.push(item);
            }
            document.querySelector('.wrap').innerHTML = this.render();
          }
          else{
            alert('Ошибка');
          }
        }).bind(this));
}
Comment.prototype = Object.create(Container.prototype);
// ================================================== Добавление отзыва =========================================
Comment.prototype.addToComment = function(addId, addClass) {
  var text = document.getElementById('text').value;
  $.post('review.add.json',{id_user: "123", text: text},(function(data){
    var response = data;
    if(response.result === 1){
      alert(response.userMessage);
      document.querySelector('.wrap').innerHTML = this.render();
    }
    else{
      alert('Ошибка');
    }
  }).bind(this));
};
// ================================================== Удаление отзыва ===========================================
Comment.prototype.removeFromComment = function(commentId){
  $.post('review.delete.json', 
    (function(data){
      var response = data;
      if(response.result === 1){
        var indexToRemove = this.children.findIndex(function(item){
          return item.commentId === commentId;
        });
        this.children.splice(indexToRemove, 1);
        document.querySelector('.wrap').innerHTML = this.render();
      }
      else{
        alert('Ошибка');
      }
    }).bind(this));
};
// =================================================== Одобрить отзыв ==============================================
Comment.prototype.approveFromComment = function(commentId){
  $.post('review.submit.json',{id_comment: commentId},(function(data){
    var response = data;
    if(response.result === 1){
      alert("Одобрен отзыв: "+ commentId);
      document.querySelector('.wrap').innerHTML = this.render();
    }
    else{
      alert('Ошибка');
    }
  }).bind(this));
}


function CommentItem(id, text){
  Container.call(this, 'comment_item' + id, 'comment_item', []);
  this.commentId = id;
  this.commentText = text;
  this.htmlCode = "<div id='%id%' class='%class%'>Отзыв "+this.commentId+"<div>Текст: "+this.commentText+"<div><input type='button' onclick='comment.removeFromComment("+this.commentId+")' value='Удалить' /> <input type='button' onclick='comment.approveFromComment("+this.commentId+")' value='Одобрить' /> </div></div></div>"
}
CommentItem.prototype = Object.create(Container.prototype);

var comment = new Comment('main_comment');