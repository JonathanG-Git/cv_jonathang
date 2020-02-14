//jquery
$(document).ready(function() {
  //* Modal
  $("img").on("click", function() {
    $("#myModal").css("display", "block");
    $("#img01").attr("src", $(this).attr("src"));
    captionText.innerHTML = this.alt;
    $(".close").css("display", "block");
  });
  $(".close").on("click", function() {
    $("#myModal").css("display", "none");
  });

  //* Progress bar
  $("#p2").on("click", function() {
    $(".progressTest").addClass("progressTestAfter");
  });
  $("#p1,#p3,#p4").on("click", function() {
      $(".progressTest").removeClass("progressTestAfter")
  })

  //* Navbar & Pages
  $("#p1").on("click", function() {
    $("#content").attr("class", "");
    $("#p1").addClass("active");
    $("#p2,#p3,#p4").removeClass("active");
  });
  $("#p2").on("click", function() {
    $("#content").attr("class", "showPage2");
    $("#p2").addClass("active");
    $("#p1,#p3,#p4").removeClass("active");
  });
  $("#p3").on("click", function() {
    $("#content").attr("class", "showPage3");
    $("#p3").addClass("active");
    $("#p1,#p2,#p4").removeClass("active");
  });
  $("#p4").on("click", function() {
    $("#content").attr("class", "showPage4");
    $("#p4").addClass("active");
    $("#p1,#p2,#p3").removeClass("active");
  });
});
