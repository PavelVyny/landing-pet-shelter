"use strict";function slickSlider(){$(".pets-slider").slick({infinite:!0,slidesToShow:3,autoplay:!1,responsive:[{breakpoint:1251,settings:{slidesToShow:2}},{breakpoint:1025,settings:{slidesToShow:1}}]})}function copyToClipboard(){var e=$("<input>"),i=$(".bank-details__card");i.click(function(){$("body").append(e),e.val(i.text()).select(),document.execCommand("copy"),e.remove()})}function toggleSandwich(){var e=$(".sandwich"),i=$(".menu-list");e.click(function(){e.hasClass("sandwich_open")?(i.slideUp(),e.removeClass("sandwich_open")):(console.log("opening"),i.slideDown({start:function(){$(this).css({display:"flex"})}}),e.addClass("sandwich_open"))})}function smoothNavigate(){$('a[href^="#"]').on("click",function(e){e.preventDefault();var i=$(this).attr("href"),o=$(i).offset().top;$("html, body").animate({scrollTop:o},1e3)})}$(document).ready(function(){slickSlider(),copyToClipboard(),toggleSandwich(),smoothNavigate(),$(window).resize(function(){1024<$(window).width()&&$(".menu-list").removeAttr("style")})});