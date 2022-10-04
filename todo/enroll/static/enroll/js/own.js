function editUser(id) {
    if (id) {
      tr_id = "#user-" + id;
      name = $(tr_id).find(".userName").text();
      address = $(tr_id).find(".useremail").text();
      age = $(tr_id).find(".usernumber").text();
      $('#form-id').val(id);
      $('#form-First_name').val(name);
      $('#form-Last_name').val(name);
      $('#form-Email').val(email);
      $('#form-Mobile').val(number);
      $('#form-City').val(name);
    }
  }
  function updateToUserTabel(user){
      $("#userTable #user-" + user.id).children(".userData").each(function() {
          var attr = $(this).attr("name");
          if (attr == "First_name") {
            $(this).text(user.name);
          } else if (attr == "Last_name") {
            $(this).text(user.name);
          } else if (attr == "Email") {
            $(this).text(user.name);
          } else if (attr == "Mobile") {
            $(this).text(user.number);
          } else {
            $(this).text(user.City);
          }
        });
  }

  // Delete Django Ajax Call
function deleteUser(id) {
    var action = confirm("Are you sure you want to delete this user?");
    if (action != false) {
      $.ajax({
          url: '{% url "ajax/crud/delete" %}',
          data: {
              'id': id,
          },
          dataType: 'json',
          success: function (data) {
              if (data.deleted) {
                $("#userTable #user-" + id).remove();
              }
          }
      });
    }
  }