$(document).ready(function () {
	newSidebarNav();
	// $('#systemHealthLink').click(function () {
	// 	var navId = $(this).attr('data-navdata');
	// 	// alert(navId);
	// 	$('#' + navId).slideToggle();
	// 	if($(this).parent('li').hasClass('active')){
	// 		$(this).find('.fa-chevron-right').removeClass('fa-chevron-right').addClass('fa-chevron-down');
	// 	}
	// 	else{
	// 		$(this).find('.fa-chevron-down').removeClass('fa-chevron-down').addClass('fa-chevron-right');
	// 	}




	// })


	// $('.navItem').click(function(){
	// 	if($('#systemHealth').is(':visible')){
	// 		$('#systemHealthLink').parent().addClass('active');
	// 		$('#systemHealthLink').find('.fa-chevron-right').removeClass('fa-chevron-right').addClass('fa-chevron-down');
	// 	}

	// 	$('.navItem').each(function(){
	// 		if($(this).parent('li').hasClass('active')){
	// 		// alert(0)
	// 		// console.log($(this));
	// 			$(this).find('.fa-chevron-right').removeClass('fa-chevron-right').addClass('fa-chevron-down');
	// 		}
	// 		else{
	// 			$(this).find('.fa-chevron-down').removeClass('fa-chevron-down').addClass('fa-chevron-right');
	// 		}
	// 	})

	// })

	// $('.navItemSingle').click(function(){


	// 	// $('.navItemSingle').bind('click');
	// 	if($('#systemHealth').is(':visible')){
	// 		$('#systemHealth').slideUp();
	// 		$('#systemHealthLink').parent().removeClass('active');
	// 		$('#systemHealthLink').find('.fa-chevron-down').removeClass('fa-chevron-down').addClass('fa-chevron-right');
	// 	}
	// })

	// $('.child_menu li a').click(function () {
	// 	$(this).parent().siblings().removeClass('active');
	// 	$(this).parent('li').addClass('active');
	// });

	// // unbind externel link in menu
	// $( ".noactive a" ).unbind("click");

	// layoutDone();
})



// function arrowChange(){
// 	$()
// }

var layoutDone = function () {
	// 	$('#systemHealthLink').click(function () {
	// 		var navId = $(this).attr('data-navdata');
	// 		// alert(navId);
	// 		$('#' + navId).slideToggle();
	// 		if($(this).parent('li').hasClass('active')){
	// 			$(this).find('.fa-chevron-right').removeClass('fa-chevron-right').addClass('fa-chevron-down');
	// 		}
	// 		else{
	// 			$(this).find('.fa-chevron-down').removeClass('fa-chevron-down').addClass('fa-chevron-right');
	// 		}






	// 	})

	// //    $('.navSubItem').click(function(){
	// //        $('.navSubItem').removeClass('nsactive');
	// //       $(this).addClass('nsactive');
	// //    });



	// 	$('.navItem').click(function(){
	// 		if($('#systemHealth').is(':visible')){
	// 			$('#systemHealthLink').parent().addClass('active');
	// 			$('#systemHealthLink').find('.fa-chevron-right').removeClass('fa-chevron-right').addClass('fa-chevron-down');
	// 		}

	// 		$('.navItem').each(function(){
	// 			if($(this).parent('li').hasClass('active')){
	// 			// alert(0)
	// 			// console.log($(this));
	// 				$(this).find('.fa-chevron-right').removeClass('fa-chevron-right').addClass('fa-chevron-down');
	// 			}
	// 			else{
	// 				$(this).find('.fa-chevron-down').removeClass('fa-chevron-down').addClass('fa-chevron-right');
	// 			}
	// 		})

	// 	})

	// 	$('.navSubItem').click(function(){
	// 		// $('.navSubItemParent').each(function(){
	// 		// 	if($(this).hasClass('active')){
	// 		// 		$(this).find('.child_menu').slideDown();
	// 		// 	}
	// 		// 	else{
	// 		// 		$(this).find('.child_menu').slideUp();
	// 		// 	}
	// 		// })
	// 		// alert()
	// 		// $('.navSubItemParent .child_menu2').slideUp();

	// 		// setTimeout(function(){
	// 		// 	$(this).next('.child_menu2').slideDown();
	// 		// },500)



	//         // if(!$(this).next('.child_menu').is(':visible')){
	// 		// 	$('.navSubItemParent .child_menu').slideUp();

	//         //     $(this).find('.fa-chevron-right').removeClass().addClass('fa fa-chevron-down');
	//         //     console.log($(this).find('.fa-chevron-right'))
	//         // }
	//         // else{
	//         //     $(this).find('.fa-chevron-down').removeClass().addClass('fa fa-chevron-right');
	//         // }
	// 		//if($('#systemHealth').is(':visible')){
	// 		//	$('#systemHealthLink').parent().addClass('active');
	// 		//	$('#systemHealthLink').find('.fa-chevron-right').removeClass('fa-chevron-right').addClass('fa-chevron-down');
	// 		//}

	// 		// $('.navSubItem').each(function(){
	// 		// 	if($(this).parent('li').hasClass('active')){
	// 		// 	// alert(0)
	// 		// 	// console.log($(this));
	// 		// 		//$(this).find('.fa-chevron-right').removeClass('fa-chevron-right').addClass('fa-chevron-down');
	// 		// 	}
	// 		// 	else{
	// 		// 		//$(this).find('.fa-chevron-down').removeClass('fa-chevron-down').addClass('fa-chevron-right');
	// 		// 	}
	// 		// })

	// 	})


	// 	$('.navItemSingle').click(function(){


	// 		// $('.navItemSingle').bind('click');
	// 		if($('#systemHealth').is(':visible')){
	// 			$('#systemHealth').slideUp();
	// 			$('#systemHealthLink').parent().removeClass('active');
	// 			$('#systemHealthLink').find('.fa-chevron-down').removeClass('fa-chevron-down').addClass('fa-chevron-right');
	// 		}
	// 	})

	// 	$('.child_menu li a').click(function () {
	// 		$(this).parent().siblings().removeClass('active');
	// 		$(this).parent('li').addClass('active');
	//         $('.navSubItemParent .child_menu li').removeClass('sactive');
	//         // navIclass();
	// 	});

	// 	// unbind externel link in menu
	// 	$( ".noactive a" ).unbind("click");




	//     $('.navSubItem').parent().addClass('navSubItemParent');
	//     $('.navSubItem').parent().siblings().click(function(){
	//     //    if($(this).find('.child_menu').is(':visible')){
	// 		//    $('.navSubItem').parent().find('.child_menu').slideUp(100);
	//         //    $(this).find('.child_menu').slidedown(200);
	//     //    }
	//     })



	//     $('.navSubItemParent').find('.child_menu li a').click(function(){
	//       $('.navSubItemParent .child_menu li').removeClass('sactive');
	//       $(this).parent('li').addClass('sactive');
	//         // navIclass();
	//     })


	// 	// new code for module wise report
	// 	$('.activeChildfirst').click(function(){
	// 		// console.log();
	// 		$(this).next('ul').find('a').first().click();
	// 	})

} //ends layout done


// function navIclass(){
//     setTimeout(function(){
//          $('.navSubItemParent').each(function(){
//         console.log($(this).find('.child_menu').is(':visible'));
//     if($(this).find('.child_menu').is(':visible')){

//             $(this).find('.navSubItem > span').removeClass().addClass('arrow-down');
//         }
//         else{
//             $(this).find('.navSubItem > span').removeClass().addClass('arrow-right');
//         }
//     })     
//     }, 400)

// }


function newSidebarNav() {
	// console.log('newSidebarNav');
	// console.log($('.inchkL'));
	$(".inchkL").change(function () {
		if (this.checked) {
			// console.log('heelo', $(this));
			$(".inchkL").prop('checked', false);
			$(this).prop('checked', true);
		}

		$('.inchkL').each(function (i) {
			if (!this.checked) {
				var childChkbox = $(this).parent().find('.group-list input[type="checkbox"]');
				childChkbox.prop('checked', false);
				$(this).parent().removeClass('activeParent');
			} else {

				$(this).parent().addClass('activeParent');
			}
		})

	});

	

	$('#sidebar-menu').find('label, a').click(function () {
		$('#sidebar-menu').find('label, a').removeClass('active');
		$(this).addClass('active');
	});


	$(".inchkL2").change(function () {
		if (this.checked) {
			// console.log('heelo', $(this));
			$(".inchkL2").prop('checked', false);
			$(this).prop('checked', true);
		}
	});

	$(".inchkL3").change(function () {
		if (this.checked) {
			// console.log('heelo', $(this));
			$(".inchkL3").prop('checked', false);
			$(this).prop('checked', true);
		}
	});
}