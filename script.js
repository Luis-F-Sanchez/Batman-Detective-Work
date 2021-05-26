//$(".title").hide();
$(".s1").hide();
$(".end1").hide();
$(".s2").hide();
$(".items").hide();
$(".f2cont").hide();
$(".end3").hide();
$(".end3c").hide();
$(".jccont").hide();
$(".end4").hide();
$(".end4c").hide();
$(".rtcont").hide();
$(".buttons").hide();
$(".rhint").hide();
$(".s3").hide();
$(".end2").hide();



$(".start").click(function() {
    $(".title").fadeOut();
    $(".s1").fadeIn(3001);
});

$(".yes1").click(function() {
    $(".s1").fadeOut();
    $(".s2").fadeIn(3001);
    $(".items").hide().delay(5000).show(0);
});
$(".no1").click(function() {
    $(".s1").hide();
    $(".end1").show();
});

$(".restart").click(function() {
    $(".end1").hide();
    $(".end2").hide();
    $(".end3c").hide();
    $(".end4c").hide();
    $(".title").fadeIn();
});

$(".f2coin").click(function() {
    $(".s2").hide();
    $(".items").hide();
    $(".f2cont").show();
    $(".buttons").show();
    $(".back").show();
    $(".f2follow").show();
});
$(".f2coin").mouseenter(function() {
    $(".f2coin").css("width", "250px");
    $(".f2coin").css("height", "200px");
});
$(".f2coin").mouseleave(function() {
    $(".f2coin").css("width", "200px");
    $(".f2coin").css("height", "150px");
});
$(".f2follow").click(function() {
    $(".f2follow").hide();
    $(".f2cont").hide();
    $(".buttons").hide();
    $(".end3").show();
});
$(".f2end").dblclick(function() {
    $(".end3").hide();
    $(".end3c").show();
});
$(".jc").click(function() {
    $(".s2").hide();
    $(".items").hide();
    $(".jccont").show();
    $(".back").show();
});
$(".jc").mouseenter(function() {
    $(".jc").css("width", "250px");
    $(".jc").css("height", "200px");
});
$(".jc").mouseleave(function() {
    $(".jc").css("width", "200px");
    $(".jc").css("height", "150px");
});
$(".jcend").click(function() {
    $(".back").hide();
    $(".jccont").hide();
    $(".end4").show();
});
$(".jokerend").click(function() {
    $(".end4").hide();
    $(".end4c").show();
});
$(".back").click(function() {
    $(".rtcont").hide();
    $(".back").hide();
    $(".buttons").hide();
    $(".f2follow").hide();
    $(".f2cont").hide();
    $(".jccont").hide();
    $(".items").show();
    $(".s2").show();

});
$(".rt").click(function() {
    $(".s2").hide();
    $(".items").hide();
    $(".rtcont").show();
    $(".back").show();
});
$(".rt").mouseenter(function() {
    $(".rt").css("width", "250px");
    $(".rt").css("height", "200px");
});
$(".rt").mouseleave(function() {
    $(".rt").css("width", "200px");
    $(".rt").css("height", "150px");
});

$(".rtcontbtn").dblclick(function() {
    $(".rtcont").fadeOut();
    $(".s3").fadeIn(3001);
});
$(".hint").click(function() {
    $(".rhint").show();
});
$(".key").hover(function() {
    $(".key").css("width", "100px");
    $(".key").css("height", "100px");
});
$(".key").click(function() {
    $(".s3").fadeOut();
    $(".end2").fadeIn(3001);
});