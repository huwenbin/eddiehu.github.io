﻿$(function () {    // wow初始化    new WOW().init();    ys.phNavInit(2);    // navFixed();        // $('body').on('contextmenu',function(){    //     return false    // })        // $('body').on('selectstart',function(){    //     return false    // })        // $('body').on('dragstart',function(){    //     return false    // })        // $('body').on('beforecopy',function(){    //     return false    // })        // $('body').on('contextmenu',function(){    //     return false    // })        //  onselectstart="return false"ondragstart="return false" onbeforecopy="return false"});// 导航不在顶部时加类名isfixedfunction navFixed(){    ys.isFixed(".ys_hd_pc");}// headerheaders()function headers(){    noact('.mod_hd_lang_item')    noact('.mhci_list3_item')    noact('.mod_hd_center_item')    noact('.mhci_list1_item')    function noact(item){        $item = $(item)        $item.hover(function(){            $(this).siblings().addClass('noact')        },function(){            $item.removeClass('noact')        })    }    $('.mod_hd_center_item').hover(function(){        $(this).siblings().addClass('noact')    },function(){        $('.mod_hd_center_item').removeClass('noact')    })    // 检索    $('.mod_hd_lang').click(function(e){        e.stopPropagation();        $(this).toggleClass("on");        $('.mod_hd_lang_list').stop().slideToggle();        $('.ys_search2_win').stop().slideUp()       })    $(".ys_search2_box").click(function(e){        e.stopPropagation();    })    $('body').click(function(e){        $('.mod_hd_lang_list').stop().slideUp()        e.stopPropagation();             $(".mod_hd_lang").removeClass("on");    })    $('.mod_hd_center_item').hover(function(){        $(this).find('.mhci_pull').stop().slideDown()        $(this).find('.mhci_pull').css('z-index',10)    },function(){        $('.mhci_pull').stop().slideUp()        $(this).find('.mhci_pull').css('z-index',1)    })}$('.mod_hd_lang_img').click(function(){    $(this).toggleClass('on')})$(".mod_hd_search").click(function(e){    e.stopPropagation()    $(".ys_search2_win").stop().slideToggle();    $('.mod_hd_lang_list').stop().slideUp()       $(".mod_hd_lang").removeClass("on");})$("body").click(function(){    $(".ys_search2_win").stop().slideUp();})// header-end// footer$('.mod_footer_friend_hd').click(function(e){    e.stopPropagation()    $('.mod_footer_friend_bd').slideToggle()    $(this).toggleClass('act');})$('body').click(function(){    $('.mod_footer_friend_bd').slideUp();    $(".mod_footer_friend_hd").removeClass('act');})ys.mCustomScrollbarInit(".mod_footer_friend_bd ul",false,"y");if($(window).width()< 1200){    $(".mod_footer_link_wx").click(function(e){        e.stopPropagation();        $(this).find(".mflw_qr").stop().fadeToggle();    })    $("body").click(function(){        $(".mflw_qr").stop().fadeOut()    })}// footer-endqui()function qui(){    var qiu = $('.mod_banner_round')    var quiLeft = []    var basedata = [0.08,0.06,0.03,0.07,0.08,0.05,0.03,0.05]    qiu.each(function(index){        quiLeft[index] = $(this).position().left    })    var mouseInit = null    var mousefinally = null    $('.mod_banner').on('mouseenter',function(e){        mouseInit = e.clientX        qiu.each(function(index){            quiLeft[index] = $(this).position().left        })        $('.mod_banner_round').css(' transition','0.5s')    })    $('.mod_banner').on('mousemove',function(e){        var mouseMove = e.clientX        mousefinally = mouseInit - mouseMove        var mouseabs = mousefinally        if(Math.abs(mouseabs) > 40){            $('.mod_banner_round').css('transition','none')        }        for(index in quiLeft){            qiu.eq(index).css('transform','translateX('+ mouseabs*basedata[index] +'px)')        }    })    $('.mod_banner').on('mouseout',function(e){        console.log(132);        $('.mod_banner_round').css('transition','0.5s')        $('.mod_banner_round').css('transition','0.5s')    })    }$(".ys_hd_pc").hover(    function(){        $(this).addClass("act")    },    function(){        $(this).removeClass("act")    },)